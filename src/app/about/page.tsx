"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  BookOpen,
  Users,
  GraduationCap,
  Globe,
  Award,
  Shield,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const values = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description:
      "We maintain the highest academic standards, preparing students to excel in national examinations and beyond.",
  },
  {
    icon: Heart,
    title: "Character Development",
    description:
      "We instil strong moral values, discipline, and integrity in every student as the foundation of true success.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "We expose students to diverse cultures and ideas, fostering a global mindset in a local context.",
  },
  {
    icon: Users,
    title: "Community Spirit",
    description:
      "We build a supportive community where students, parents, and teachers work together for shared success.",
  },
  {
    icon: Shield,
    title: "Discipline & Respect",
    description:
      "We cultivate self-discipline and mutual respect as core principles of daily life at the college.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "We embrace modern teaching methods and technology to provide a relevant, forward-looking education.",
  },
];

const milestones = [
  { year: "2012", event: "Fatih College founded in Tamale with 50 students" },
  { year: "2015", event: "First batch of students sat for WASSCE exams" },
  { year: "2017", event: "Expansion of campus with new science laboratories" },
  { year: "2019", event: "Achieved 95%+ pass rate in WASSCE for the first time" },
  { year: "2021", event: "Computer lab and library expansion completed" },
  { year: "2023", event: "Enrolled over 1,000 students for the first time" },
  { year: "2026", event: "Celebrating over a decade of educational excellence" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center">
        <Image
          src="/lab-students.jpg"
          alt="Fatih College students in the science lab"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-primary/85" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center sm:py-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-white/15 px-5 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm mb-6">
              Est. 2012
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About Fatih College
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              A leading educational institution in Tamale, Ghana, dedicated to
              shaping the minds and characters of future leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Goal */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                color: "#1E9BD7",
                text: "To provide quality education that develops the intellectual, moral, and social capabilities of students, preparing them to be responsible citizens and future leaders.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                color: "#7AB648",
                text: "To be a centre of educational excellence in West Africa, producing graduates who are academically brilliant, morally upright, and globally competitive.",
              },
              {
                icon: Award,
                title: "Our Goal",
                color: "#F29120",
                text: "To ensure every student who passes through Fatih College achieves their full potential and is equipped with the skills and values to thrive in the modern world.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-gray-100 p-8 shadow-lg shadow-black/[0.04] hover:shadow-xl transition-shadow"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon
                    className="w-7 h-7"
                    style={{ color: item.color }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-bold uppercase tracking-wider text-primary mb-3">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                A Legacy of{" "}
                <span className="text-primary">Educational Excellence</span>
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Fatih College was established in 2012 in Tamale, the capital of
                  the Northern Region of Ghana, with a vision to provide
                  world-class education to students in the area. Starting with
                  just 50 students and a handful of dedicated teachers, the
                  college has grown into one of the most respected secondary
                  schools in Northern Ghana.
                </p>
                <p>
                  Over the years, Fatih College has consistently produced
                  outstanding results in the West African Senior School
                  Certificate Examination (WASSCE), with pass rates consistently
                  above 95%. Our alumni have gone on to study at top
                  universities both in Ghana and abroad.
                </p>
                <p>
                  Today, with over 1,200 students and 85+ dedicated staff
                  members, Fatih College continues to uphold its founding
                  principles of academic excellence, character development, and
                  community service.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white">
                <GraduationCap className="w-12 h-12 text-secondary mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  Principal&apos;s Message
                </h3>
                <p className="text-white/85 leading-relaxed mb-4">
                  &ldquo;At Fatih College, we believe that every child has the
                  potential to achieve greatness. Our role is to provide the
                  nurturing environment, quality instruction, and moral guidance
                  that unlocks that potential. We are not just building students
                  &mdash; we are building the future of our nation.&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/20">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white font-bold">FC</span>
                  </div>
                  <div>
                    <div className="font-semibold">The Principal</div>
                    <div className="text-sm text-white/70">Fatih College</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-sm font-bold uppercase tracking-wider text-primary mb-3">
              What We Stand For
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-primary/5 transition-colors duration-300"
              >
                <value.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-sm font-bold uppercase tracking-wider text-primary mb-3">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Key Milestones
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20 sm:left-1/2 sm:-translate-x-0.5" />

            {milestones.map((item, i) => (
              <motion.div
                key={item.year}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative flex items-start gap-6 mb-8 sm:mb-10"
              >
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                  {item.year}
                </div>
                <div className="flex-1 bg-white rounded-xl p-5 shadow-sm border border-gray-100 sm:w-[calc(50%-40px)] sm:ml-auto">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
