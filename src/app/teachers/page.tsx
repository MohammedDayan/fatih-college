"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, BookOpen, Award, Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const departments = [
  { name: "Science", count: 18, color: "#1E9BD7" },
  { name: "Mathematics", count: 12, color: "#7AB648" },
  { name: "English", count: 10, color: "#F29120" },
  { name: "Social Studies", count: 14, color: "#E65100" },
  { name: "ICT", count: 8, color: "#1565C0" },
  { name: "Home Economics", count: 6, color: "#6A1B9A" },
];

export default function TeachersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero with staff background image */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <Image
          src="/staff.jpg"
          alt="Fatih College staff training session"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block rounded-full bg-white/15 px-5 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm mb-6">
                Meet Our Team
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Our Teachers
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
                Dedicated professionals committed to nurturing the next generation
                of leaders through quality education and mentorship.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-12 mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: Users, value: "85+", label: "Teaching Staff" },
            { icon: Award, value: "90%", label: "Hold Advanced Degrees" },
            { icon: BookOpen, value: "6", label: "Departments" },
            { icon: Mail, value: "10+", label: "Avg. Years Experience" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white rounded-2xl p-5 text-center shadow-lg border border-gray-100"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Departments */}
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
              Academic Departments
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Our Departments
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {departments.map((dept, i) => (
              <motion.div
                key={dept.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-gray-50 rounded-2xl p-5 text-center hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: `${dept.color}15` }}
                >
                  <BookOpen
                    className="w-6 h-6"
                    style={{ color: dept.color }}
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-sm">
                  {dept.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {dept.count} Teachers
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Image Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/lab-students.jpg"
          alt="Students working in the science laboratory"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative h-full flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-lg"
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Hands-On Learning
              </h2>
              <p className="mt-4 text-white/85 leading-relaxed">
                Our teachers guide students through practical, real-world
                learning experiences in fully equipped science laboratories,
                computer labs, and workshop spaces.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-sm font-bold uppercase tracking-wider text-primary mb-3">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Teaching Philosophy
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Student-Centered Learning",
                description:
                  "Every lesson is designed with the student at the centre, ensuring engagement and deep understanding.",
                color: "#1E9BD7",
              },
              {
                title: "Practical Application",
                description:
                  "We connect theory to real-world scenarios, making education relevant and impactful.",
                color: "#7AB648",
              },
              {
                title: "Character Building",
                description:
                  "Beyond academics, our teachers mentor students in moral values, leadership, and discipline.",
                color: "#F29120",
              },
              {
                title: "Continuous Development",
                description:
                  "Our staff regularly undergo professional training to stay current with modern teaching methods.",
                color: "#E65100",
              },
              {
                title: "Inclusive Education",
                description:
                  "We recognise different learning styles and adapt our teaching to ensure every student succeeds.",
                color: "#1565C0",
              },
              {
                title: "Community Partnership",
                description:
                  "We work closely with parents and the community to create a supportive learning ecosystem.",
                color: "#6A1B9A",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 shadow-lg shadow-black/[0.04] border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div
                  className="w-2 h-10 rounded-full mb-4"
                  style={{ backgroundColor: item.color }}
                />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Join Our Teaching Team
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-6">
            We are always looking for passionate educators to join our team. If
            you share our commitment to excellence, we would love to hear from
            you.
          </p>
          <a
            href="mailto:careers@fatih.edu.gh"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-primary-dark bg-gradient-to-r from-secondary to-secondary-light hover:from-secondary-light hover:to-secondary shadow-lg transition-all duration-200"
          >
            <Mail className="w-4 h-4" />
            Send Your CV
          </a>
        </div>
      </section>
    </div>
  );
}
