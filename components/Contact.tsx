"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

// --- ADD YOUR EMAILJS KEYS HERE ---
const EMAILJS_SERVICE_ID = "service_f4hmg6p";
const EMAILJS_TEMPLATE_ID = "template_y1l08sj";
const EMAILJS_PUBLIC_KEY = "3mrPeKr-OHEEA9k-f";
// ----------------------------------

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [contactStatus, setContactStatus] = useState("");

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSending) return;

    const serviceId = EMAILJS_SERVICE_ID;
    const templateId = EMAILJS_TEMPLATE_ID;
    const publicKey = EMAILJS_PUBLIC_KEY;

    // Only check if they are empty
    if (!serviceId || !templateId || !publicKey) {
      setContactStatus("Email service is not configured. Please add your API keys in the code.");
      console.error("Missing EmailJS configuration in Contact.tsx");
      return;
    }

    const form = event.currentTarget;
    setIsSending(true);
    setContactStatus("");

    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      setContactStatus("Your message was sent successfully! Thank you for reaching out.");
      form.reset();
    } catch (error: unknown) {
      console.error("Email sending failed:", error);
      
      // Safely extract the EmailJS specific error text
      if (
        typeof error === "object" &&
        error !== null &&
        "text" in error &&
        typeof (error as { text: unknown }).text === "string"
      ) {
        console.error("EmailJS Error Text:", (error as { text: string }).text);
      }
      
      setContactStatus("Sorry, your message could not be sent. Please try again or email me directly.");
    } finally {
      setIsSending(false);
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("jhelynmedinaa@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:jhelynmedinaa@gmail.com";
    }
  }

  return (
    <section id="contact" className="section section-cream section-anchor">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">09 / CONTACT</span>
          <h2>Have a good idea?<br /><span>Let&apos;s talk.</span></h2>
          <p>Whether you want to discuss a project, share an opportunity, or simply connect, feel free to send me a message.</p>
          <div className="contact-email">
            <span className="contact-email-label">EMAIL ME AT</span>
            <button type="button" onClick={copyEmail} className="email-copy">
              jhelynmedinaa@gmail.com
              <span>{copied ? "Copied!" : "Copy ↗"}</span>
            </button>
          </div>
          <div className="contact-socials">
            <a href="https://github.com/Kyoko-Horii" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleContactSubmit}>
          <div className="form-heading">
            <h3>Send a message</h3>
            <p>Fill in the details below to get in touch.</p>
          </div>
          <label htmlFor="name">Your name</label>
          <input id="name" name="from_name" type="text" placeholder="Enter your name" autoComplete="name" maxLength={100} required disabled={isSending} />
          
          <label htmlFor="email">Your email</label>
          <input id="email" name="reply_to" type="email" placeholder="you@example.com" autoComplete="email" maxLength={254} required disabled={isSending} />
          
          <label htmlFor="subject">Subject</label>
          <input id="subject" name="subject" type="text" placeholder="What would you like to discuss?" maxLength={200} required disabled={isSending} />
          
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} placeholder="Write your message here..." maxLength={5000} required disabled={isSending} />
          
          <button type="submit" className="button button-primary form-submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
            {!isSending && <span> ↗</span>}
          </button>
          
          <p className="form-note" role="status" aria-live="polite">
            {contactStatus || "Your message will be sent directly to my inbox."}
          </p>
        </form>
      </div>
    </section>
  );
}