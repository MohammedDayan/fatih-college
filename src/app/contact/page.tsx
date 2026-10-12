"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Address",
    details: ["Datoyili Off Tamale-Kumasi", "High Street, Tamale, Ghana"],
    color: "#1E9BD7",
  },
  {
    icon: Phone,
    title: "Phone Number",
    details: ["+233 550 565 797", "+233 302 XXX XXX"],
    color: "#7AB648",
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["info@fatih.edu.gh", "admissions@fatih.edu.gh"],
    color: "#F29120",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon - Fri: 7:30 AM - 4:00 PM", "Sat: 9:00 AM - 12:00 PM"],
    color: "#E65100",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1578A8] via-[#1E9BD7] to-[#7AB648]">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-white/5" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center sm:py-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-white/15 px-5 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Have questions about admissions, programs, or anything else? We are
              here to help. Reach out to us and we will get back to you
              promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative z-10 mx-auto -mt-12 max-w-6xl px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <item.icon className="w-6 h-6" style={{ color: item.color }} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              {item.details.map((detail) => (
                <p key={detail} className="text-sm text-gray-600">
                  {detail}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Send Us a Message
                </h2>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We will get back to you within
                    24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-light transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-1.5"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none hover:border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-1.5"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="your@email.com"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none hover:border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+233 XX XXX XXXX"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none hover:border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-gray-700 mb-1.5"
                      >
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className={`w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none hover:border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none bg-white ${
                          !formData.subject ? "text-gray-400" : "text-gray-900"
                        }`}
                      >
                        <option value="" disabled>
                          Select a subject
                        </option>
                        <option>General Inquiry</option>
                        <option>Admissions</option>
                        <option>Academic Programs</option>
                        <option>Fees & Payments</option>
                        <option>Campus Visit</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="How can we help you?"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none hover:border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-100 rounded-2xl overflow-hidden h-full min-h-[400px] flex items-center justify-center border border-gray-200">
                <div className="text-center px-8">
                  <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Find Us on the Map
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    Datoyili Off Tamale-Kumasi High Street
                  </p>
                  <p className="text-sm text-gray-500">Tamale, Ghana</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-8 text-left">
            {[
              {
                q: "What are the school fees?",
                a: "Please contact our admissions office for the most up-to-date fee schedule. Fees vary by program.",
              },
              {
                q: "Is there boarding accommodation?",
                a: "Yes, Fatih College offers both boarding and day student options with excellent facilities.",
              },
              {
                q: "When does the academic year start?",
                a: "The academic year typically begins in September. Applications open several months in advance.",
              },
              {
                q: "How do I apply for admission?",
                a: "You can apply online through our Admissions page or visit the school office for a physical form.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-white rounded-xl p-5 border border-gray-100"
              >
                <h4 className="font-bold text-gray-900 text-sm mb-2">
                  {faq.q}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
