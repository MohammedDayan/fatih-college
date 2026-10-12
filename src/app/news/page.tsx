"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  ArrowRight,
  Newspaper,
  TrendingUp,
  Award,
  Users,
  BookOpen,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const featuredNews = {
  title: "Fatih College Students Achieve Record WASSCE Results",
  date: "October 5, 2026",
  category: "Academic Achievement",
  summary:
    "Fatih College has once again demonstrated its commitment to academic excellence as students in the 2026 WASSCE examinations achieved a record-breaking 98.5% pass rate. Over 85% of students obtained credits in all eight subjects, with several students earning straight As.",
  color: "#1E9BD7",
};

const newsArticles = [
  {
    title: "New Computer Lab Inaugurated",
    date: "September 28, 2026",
    category: "Campus Development",
    summary:
      "The state-of-the-art computer laboratory equipped with 60 modern workstations was officially opened, enhancing ICT education for all students.",
    icon: TrendingUp,
    color: "#7AB648",
  },
  {
    title: "Student Wins National Science Olympiad",
    date: "September 15, 2026",
    category: "Student Achievement",
    summary:
      "Form 3 student Aisha Mohammed represented the Northern Region and emerged as the overall winner of the National Science Olympiad held in Accra.",
    icon: Award,
    color: "#F29120",
  },
  {
    title: "Fatih College Partners with University of Ghana",
    date: "August 30, 2026",
    category: "Partnership",
    summary:
      "A new partnership with the University of Ghana will provide Fatih College students with mentorship programs and early university exposure.",
    icon: Users,
    color: "#1565C0",
  },
  {
    title: "Annual Reading Week Launched",
    date: "August 18, 2026",
    category: "Academic",
    summary:
      "The school library launched its annual reading week program to promote a culture of reading among students with exciting prizes and activities.",
    icon: BookOpen,
    color: "#6A1B9A",
  },
  {
    title: "School Debate Team Reaches Regional Finals",
    date: "July 25, 2026",
    category: "Extracurricular",
    summary:
      "The Fatih College debate team has advanced to the Northern Regional finals after winning three consecutive rounds in the inter-school debate competition.",
    icon: Users,
    color: "#E65100",
  },
  {
    title: "Teachers Complete Professional Development Training",
    date: "July 10, 2026",
    category: "Staff Development",
    summary:
      "Over 70 teachers completed an intensive two-week professional development program focused on modern teaching methodologies and digital literacy.",
    icon: TrendingUp,
    color: "#3AAEE0",
  },
];

export default function NewsPage() {
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
              <Newspaper className="w-4 h-4 inline mr-1.5 -mt-0.5" />
              Latest News
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              News & Updates
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Stay informed about the latest happenings, achievements, and
              developments at Fatih College.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="relative z-10 mx-auto -mt-12 max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xl"
        >
          <div
            className="h-2"
            style={{ backgroundColor: featuredNews.color }}
          />
          <div className="p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                Featured
              </span>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {featuredNews.date}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
              {featuredNews.title}
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {featuredNews.summary}
            </p>
            <span
              className="inline-block mt-4 text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                color: featuredNews.color,
                backgroundColor: `${featuredNews.color}15`,
              }}
            >
              {featuredNews.category}
            </span>
          </div>
        </motion.div>
      </section>

      {/* News Grid */}
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
              Recent Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              More News
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article, i) => (
              <motion.article
                key={article.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg shadow-black/[0.04] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className="h-32 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${article.color}20, ${article.color}10)`,
                  }}
                >
                  <article.icon
                    className="w-12 h-12"
                    style={{ color: article.color }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        color: article.color,
                        backgroundColor: `${article.color}15`,
                      }}
                    >
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Newspaper className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
            Never Miss an Update
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter and be the first to know about school
            news, events, and achievements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-primary to-primary-light shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
