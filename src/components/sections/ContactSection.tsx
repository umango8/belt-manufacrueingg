"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { COMPANY } from "@/lib/constants";
import { fadeInLeft, fadeInRight } from "@/lib/animations";
import Button from "@/components/ui/Button";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    alert("Thank you for your inquiry. Our team will contact you within 24 hours.");
    setFormState({ name: "", email: "", phone: "", company: "", product: "", message: "" });
  };

  const inputStyles =
    "w-full px-4 py-3 bg-white border border-border text-sm text-dark placeholder:text-subtitle/60 focus:border-primary focus:outline-none transition-colors duration-200";

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          subtitle="Get In Touch"
          title="Request a Quote"
          description="Tell us about your requirements and our engineering team will provide a customized solution within 24 hours."
          highlightWords={["Quote"]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-lg font-bold text-title mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Contact Information
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-secondary mb-1">Address</p>
                    <p className="text-sm text-subtitle leading-relaxed">{COMPANY.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-secondary mb-1">Phone</p>
                    <a href={`tel:${COMPANY.phone}`} className="text-sm text-subtitle hover:text-primary transition-colors">{COMPANY.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-secondary mb-1">Email</p>
                    <a href={`mailto:${COMPANY.email}`} className="text-sm text-subtitle hover:text-primary transition-colors">{COMPANY.email}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="border-t border-border-light pt-8">
              <h4 className="text-sm font-bold text-title uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Business Hours
              </h4>
              <div className="space-y-2 text-sm text-subtitle">
                <div className="flex justify-between"><span>Monday – Saturday</span><span className="font-medium text-secondary">9:00 AM – 6:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="font-medium text-secondary">Closed</span></div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-2">Full Name *</label>
                  <input type="text" id="contact-name" name="name" value={formState.name} onChange={handleChange} required placeholder="John Doe" className={inputStyles} />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-2">Email Address *</label>
                  <input type="email" id="contact-email" name="email" value={formState.email} onChange={handleChange} required placeholder="john@company.com" className={inputStyles} />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-2">Phone Number</label>
                  <input type="tel" id="contact-phone" name="phone" value={formState.phone} onChange={handleChange} placeholder="+91-XXXXX-XXXXX" className={inputStyles} />
                </div>
                <div>
                  <label htmlFor="contact-company" className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-2">Company Name</label>
                  <input type="text" id="contact-company" name="company" value={formState.company} onChange={handleChange} placeholder="Company Name" className={inputStyles} />
                </div>
              </div>
              <div>
                <label htmlFor="contact-product" className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-2">Product Interest</label>
                <select id="contact-product" name="product" value={formState.product} onChange={handleChange} className={inputStyles}>
                  <option value="">Select a product category</option>
                  <option value="general-duty">General Duty Conveyor Belts</option>
                  <option value="heat-resistant">Heat Resistant Conveyor Belts</option>
                  <option value="chevron">Chevron Conveyor Belts</option>
                  <option value="oil-resistant">Oil Resistant Conveyor Belts</option>
                  <option value="abrasion-resistant">Abrasion Resistant Conveyor Belts</option>
                  <option value="fire-resistant">Fire Resistant Conveyor Belts</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-2">Your Requirements *</label>
                <textarea id="contact-message" name="message" value={formState.message} onChange={handleChange} required rows={5} placeholder="Describe your requirements, belt specifications, quantity, etc." className={`${inputStyles} resize-none`} />
              </div>
              <Button type="submit" id="contact-submit" variant="accent" className="hover:scale-105">
                Submit Inquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
