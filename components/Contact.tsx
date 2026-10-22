"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_f4hmg6p";
const EMAILJS_TEMPLATE_ID = "template_y1l08sj";
const EMAILJS_PUBLIC_KEY = "3mrPeKr-OHEEA9k-f";

const IconGitHub = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14 0 1.54-.01 2.78-.01 3.16 0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
  </svg>
);

const IconLinkedIn = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const IconMail = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

const IconCopy = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const IconCheck = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ArrowUpRight = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

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
            <button
              type="button"
              onClick={copyEmail}
              className="email-copy"
              aria-label={copied ? "Email copied to clipboard" : "Copy email address"}
            >
              <span className="email-copy-icon"><IconMail size={16} /></span>
              <span className="email-copy-text">jhelynmedinaa@gmail.com</span>
              <span className={`email-copy-action ${copied ? "is-copied" : ""}`}>
                {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
              </span>
            </button>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/Kyoko-Horii" target="_blank" rel="noreferrer" aria-label="GitHub profile" title="GitHub" className="social-icon-link">
              <IconGitHub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/jhelyn-medina-91304742b" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" title="LinkedIn" className="social-icon-link">
              <IconLinkedIn size={20} />
            </a>
            <a href="mailto:jhelynmedinaa@gmail.com" aria-label="Send email" title="Email" className="social-icon-link">
              <IconMail size={20} />
            </a>
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
            {!isSending && <ArrowUpRight size={15} />}
          </button>

          <p className="form-note" role="status" aria-live="polite">
            {contactStatus || "Your message will be sent directly to my inbox."}
          </p>
        </form>
      </div>
    </section>
  );
}