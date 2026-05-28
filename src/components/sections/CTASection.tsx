"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="relative py-20 lg:py-24 bg-primary overflow-hidden">
      <div className="relative container-custom text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Need a <span className="text-accent">Custom Conveyor Belt Solution?</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mb-8 leading-relaxed">
            Our engineering team is ready to design and manufacture conveyor belts
            tailored to your specific operational requirements.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              href="#contact"
              variant="white"
              id="cta-request-quote"
            >
              Request a Quote
            </Button>
            <Button
              href="tel:+91-8200223669"
              variant="outline"
              className="text-white border-white/20 hover:border-white/40"
              id="cta-call-now"
            >
              Call Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
