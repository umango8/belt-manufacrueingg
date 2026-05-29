"use client";

import { useEffect } from "react";

export default function ScrollRevealProvider() {
  useEffect(() => {
    // 1. Recursive helper to split text nodes into individual character spans.
    // This preserves any nested HTML, classes, dynamic highlight spans, SVGs, etc.,
    // only replacing the actual text nodes themselves.
    const splitTextIntoSpans = (element: Element, indexCounter = { count: 0 }) => {
      // Avoid splitting twice
      if (element.classList.contains("text-split-done")) return;

      const childNodes = Array.from(element.childNodes);

      childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent || "";
          if (!text.trim()) return; // skip empty text nodes

          const fragment = document.createDocumentFragment();
          
          // Split by whitespace groups to isolate individual words
          const segments = text.split(/(\s+)/);

          segments.forEach((segment) => {
            if (/^\s+$/.test(segment)) {
              // If it's a whitespace group, append it as standard space spans
              for (let i = 0; i < segment.length; i++) {
                const spaceSpan = document.createElement("span");
                spaceSpan.textContent = "\u00A0";
                spaceSpan.className = "reveal-char-space";
                fragment.appendChild(spaceSpan);
              }
            } else {
              // It's a word segment! Wrap it in an unbreakable word block
              const wordSpan = document.createElement("span");
              wordSpan.className = "reveal-word";
              wordSpan.style.display = "inline-block";
              wordSpan.style.whiteSpace = "nowrap";

              for (let i = 0; i < segment.length; i++) {
                const char = segment[i];
                const charSpan = document.createElement("span");
                charSpan.textContent = char;
                charSpan.className = "reveal-char";
                charSpan.style.setProperty("--char-index", indexCounter.count.toString());
                charSpan.style.display = "inline-block";
                indexCounter.count++;
                wordSpan.appendChild(charSpan);
              }
              fragment.appendChild(wordSpan);
            }
          });

          node.parentNode?.replaceChild(fragment, node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const el = node as Element;
          // Avoid splitting elements that should not have split texts (like SVGs or specific tags)
          if (el.tagName.toLowerCase() !== "svg" && !el.classList.contains("no-split")) {
            splitTextIntoSpans(el, indexCounter);
          }
        }
      });

      element.classList.add("text-split-done");
    };

    // Keep track of active animation frames to avoid overlapping count-ups
    const activeAnimations = new Map<Element, number>();

    // Premium Ease-Out timing function for smooth decimal progression
    const easeOutQuad = (t: number) => t * (2 - t);

    // High-performance requestAnimationFrame count-up loop
    const runCountUp = (el: Element, target: number, suffix: string, prefix: string = "") => {
      // Cancel any ongoing animation for this element first
      if (activeAnimations.has(el)) {
        cancelAnimationFrame(activeAnimations.get(el)!);
      }

      const duration = 1200; // Count-up finishes in 1.2s
      const startTime = performance.now();

      const update = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuad(progress);
        const currentValue = Math.floor(easedProgress * target);

        el.textContent = `${prefix}${currentValue}${suffix}`;

        if (progress < 1) {
          const frameId = requestAnimationFrame(update);
          activeAnimations.set(el, frameId);
        } else {
          el.textContent = `${prefix}${target}${suffix}`;
          activeAnimations.delete(el);
        }
      };

      const frameId = requestAnimationFrame(update);
      activeAnimations.set(el, frameId);
    };

    // 2. Establish Intersection Observer for both fade reveals, char reveals & numeric count-ups
    const observerOptions = {
      root: null,
      rootMargin: "-40px 0px -40px 0px", // triggers animations slightly inside screen bounds
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        const isCountUp = el.classList.contains("count-up");

        if (entry.isIntersecting) {
          // A. Fade and Slide In (Scroll Render)
          el.classList.add("revealed");

          // B. Trigger Numeric Count-Up
          if (isCountUp) {
            const targetVal = parseInt(el.getAttribute("data-target") || "0", 10);
            const suffix = el.getAttribute("data-suffix") || "";
            runCountUp(el, targetVal, suffix);
          }

          // Once revealed, unobserve the element to ensure the effect is permanent and never reverses!
          observer.unobserve(el);
        } else {
          // C. Fade and Slide Out (Scroll Departure) - Keep for initial loading states
          el.classList.remove("revealed");

          // D. Reset Count-up numbers immediately to 0
          if (isCountUp) {
            const suffix = el.getAttribute("data-suffix") || "";
            if (activeAnimations.has(el)) {
              cancelAnimationFrame(activeAnimations.get(el)!);
              activeAnimations.delete(el);
            }
            el.textContent = `0${suffix}`;
          }
        }
      });
    }, observerOptions);

    // 3. Scan and select elements globally
    // We target sections, headings, paragraphs, countups, images, grid items, and cards
    const selectors = [
      "section",
      "h1",
      "h2",
      "h3",
      "h4",
      "p",
      ".grid > div",
      ".count-up",
      "img",
      ".card",
      ".reveal-on-scroll"
    ].join(", ");

    const elementsToReveal = document.querySelectorAll(selectors);

    elementsToReveal.forEach((el) => {
      // Exclude navigation bars, process sections (which have custom interactive layers)
      if (
        el.closest("header") || 
        el.closest("footer") || 
        el.closest("#process")
      ) {
        return; 
      }

      const tagName = el.tagName.toLowerCase();
      
      // If it's a heading (h1, h2, h3), split its characters for letter-by-letter animation
      if (tagName === "h1" || tagName === "h2" || tagName === "h3") {
        splitTextIntoSpans(el);
      }
      
      // If it is a count-up element, ensure it starts at 0
      if (el.classList.contains("count-up")) {
        const suffix = el.getAttribute("data-suffix") || "";
        el.textContent = `0${suffix}`;
      }

      // Assign custom animation classes based on element type
      if (tagName === "img") {
        el.classList.add("scroll-reveal-img");
      } else if (tagName === "p") {
        el.classList.add("scroll-reveal-text");
      } else {
        el.classList.add("scroll-reveal");
      }

      observer.observe(el);
    });

    return () => {
      elementsToReveal.forEach((el) => {
        observer.unobserve(el);
      });
      activeAnimations.forEach((frameId) => cancelAnimationFrame(frameId));
    };
  }, []);

  return null; // Logic-only provider component
}
