"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Users,
  Trophy,
  BookOpen,
  Star,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const upcomingEvents = [
  {
    title: "Open Day & Campus Tour",
    date: "November 15, 2026",
    time: "9:00 AM - 2:00 PM",
    location: "Main Campus",
    description:
      "Explore our campus, meet teachers, and learn about our programs. Open to all prospective students and parents.",
    category: "Admissions",
    color: "#1E9BD7",
    icon: Users,
  },
  {
    title: "Inter-School Science Quiz",
    date: "November 22, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "School Auditorium",
    description:
      "Annual science quiz competition featuring schools from across the Northern Region.",
    category: "Academic",
    color: "#7AB648",
    icon: BookOpen,
  },
  {
    title: "Annual Sports Day",
    date: "December 5, 2026",
    time: "8:00 AM - 5:00 PM",
    location: "School Sports Field",
    description:
      "A day of athletic competitions, team sports, and house rivalry. Come cheer for your house!",
    category: "Sports",
    color: "#F29120",
    icon: Trophy,
  },
  {
    title: "End of Year Awards Ceremony",
    date: "December 18, 2026",
    time: "10:00 AM - 1:00 PM",
    location: "School Auditorium",
    description:
      "Celebrating academic excellence and outstanding achievements of our students this year.",
    category: "Ceremony",
    color: "#E65100",
    icon: Star,
  },
];

const pastEvents = [
  {
    title: "WASSCE Preparation Workshop",
    date: "September 2026",
    description: "Intensive revision sessions and exam strategies for final-year students.",
  },
  {
    title: "Cultural Day Celebration",
    date: "August 2026",
    description: "Students showcased the rich cultural heritage of Ghana through dance, food, and fashion.",
  },
  {
    title: "Career Guidance Seminar",
    date: "July 2026",
    description: "Professionals from various fields shared insights on career paths with students.",
  },
  {
    title: "Independence Day Program",
    date: "March 2026",
    description: "Patriotic celebrations with parades, speeches, and cultural performances.",
  },
];

export default function EventsPage() {
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
              <Calendar className="w-4 h-4 inline mr-1.5 -mt-0.5" />
              School Events
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Events & Activities
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Stay up to date with upcoming events, activities, and important
              dates at Fatih College.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <span className="inline-block text-sm font-bold uppercase tracking-wider text-primary mb-3">
              Coming Up
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Upcoming Events
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={event.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg shadow-black/[0.04] hover:shadow-xl transition-shadow group"
              >
                <div
                  className="h-2"
                  style={{ backgroundColor: event.color }}
                />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <span
                        className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3"
                        style={{
                          color: event.color,
                          backgroundColor: `${event.color}15`,
                        }}
                      >
                        {event.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {event.description}
                      </p>
                    </div>
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${event.color}15` }}
                    >
                      <event.icon
                        className="w-6 h-6"
                        style={{ color: event.color }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <span className="inline-block text-sm font-bold uppercase tracking-wider text-primary mb-3">
              Recent
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Past Events
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event, i) => (
              <motion.div
                key={event.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {event.date}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Don&apos;t Miss Out!
          </h2>
          <p className="text-white/80 mb-6">
            Stay connected with Fatih College events. Follow us on social media
            or subscribe to our newsletter.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-primary-dark bg-gradient-to-r from-secondary to-secondary-light hover:from-secondary-light hover:to-secondary shadow-lg transition-all duration-200"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
