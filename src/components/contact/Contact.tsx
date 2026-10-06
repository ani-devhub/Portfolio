import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail,
  MapPin,
  Send,
  Copy,
  Check,
  AlertCircle,
  Phone,
  Clock,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/common/Icons';
import { PROFILE } from '@/data/profile';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string; // Anti-spam trap
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam honeypot check
    if (formData.honeypot) {
      setStatus('success');
      return;
    }

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please complete all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_s0wsybe';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_jxr7ict';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '4yT0nAU8p5Z1-7-4N';

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'Portfolio Inquiry',
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setIsSubmitting(false);
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '',
      });
    } catch (err) {
      console.error('Email submission error:', err);
      setIsSubmitting(false);
      setStatus('error');
      setErrorMessage(
        'Unable to send message via automated service. Please email me directly at anirudha.dey.official@gmail.com.'
      );
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Start A Conversation"
          title="Get In"
          highlightText="Touch"
          subtitle="Whether you have an enterprise engineering opportunity, technical inquiry, or want to discuss architecture, my inbox is open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                  Direct Contact Channels
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                  Feel free to reach out directly via email, LinkedIn message, or phone.
                  I typically respond within 24 hours.
                </p>
              </div>

              {/* Email channel with one-click copy */}
              <div className="p-4 rounded-xl bg-slate-100/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Mail size={14} className="text-blue-500 dark:text-blue-400" /> Primary Email
                  </span>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-1 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 focus-visible:outline-none"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={12} className="text-emerald-500 dark:text-emerald-400" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors block break-all font-mono"
                >
                  {PROFILE.email}
                </a>
              </div>

              {/* Location & Phone info */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80">
                  <MapPin size={16} className="text-blue-500 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 text-xs block font-mono">Location</span>
                    <span className="text-slate-900 dark:text-white font-medium">{PROFILE.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80">
                  <Phone size={16} className="text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 text-xs block font-mono">Phone</span>
                    <a
                      href={`tel:${PROFILE.phone}`}
                      className="text-slate-900 dark:text-white font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors font-mono"
                    >
                      {PROFILE.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80">
                  <Clock size={16} className="text-indigo-500 dark:text-indigo-400 flex-shrink-0" />
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 text-xs block font-mono">Timezone & Availability</span>
                    <span className="text-slate-900 dark:text-white font-medium">IST (UTC+5:30) • Full-time Ready</span>
                  </div>
                </div>
              </div>

              {/* Professional Social Links */}
              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-3 font-semibold">
                  Professional Profiles
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/anirudha-dey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-600/10 dark:hover:bg-blue-600/20 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700/80 hover:border-blue-400 dark:hover:border-blue-500/30 transition-all text-xs font-medium"
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/anirudhadey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 transition-all text-xs font-medium"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                Send Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-normal mb-6">
                Fill in the details below. Messages are routed straight to my primary inbox.
              </p>

              {/* Status alerts */}
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                  <Check size={18} className="text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Message delivered successfully!</strong>
                    <span>Thank you for reaching out. I will review your message and reply promptly.</span>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/15 border border-red-500/30 text-red-700 dark:text-red-300 text-xs sm:text-sm flex items-start gap-3">
                  <AlertCircle size={18} className="text-red-500 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Transmission Notice</strong>
                    <span>{errorMessage}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field for spam prevention */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className="w-full rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-700/80 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5"
                    >
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-700/80 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Full-Stack Opportunity / Architecture Inquiry"
                    className="w-full rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-700/80 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Anirudha, I saw your portfolio and would love to discuss..."
                    className="w-full rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-700/80 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    size="lg"
                    icon={<Send size={16} />}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? 'Transmitting Message...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
