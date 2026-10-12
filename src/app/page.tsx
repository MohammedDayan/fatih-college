"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  Trophy,
  BookOpen,
  Star,
  ArrowRight,
  CheckCircle2,
  Globe,
  Heart,
  Lightbulb,
  Target,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const stats = [
  { icon: GraduationCap, value: "1,200+", label: "Students Enrolled" },
  { icon: Users, value: "85+", label: "Qualified Teachers" },
  { icon: Trophy, value: "14+", label: "Years of Excellence" },
  { icon: Star, value: "98%", label: "Pass Rate" },
];

const programs = [
  {
    title: "Science Program",
    description:
      "Comprehensive science curriculum with hands-on laboratory experience in physics, chemistry, and biology.",
    icon: Lightbulb,
    color: "#1E9BD7",
  },
  {
    title: "General Arts",
    description:
      "Explore literature, history, government, and social studies with critical thinking and creativity.",
    icon: BookOpen,
    color: "#7AB648",
  },
  {
    title: "Business Studies",
    description:
      "Build a strong foundation in accounting, economics, and business management for future leaders.",
    icon: Target,
    color: "#F29120",
  },
  {
    title: "Home Economics",
    description:
      "Practical skills in food and nutrition, textiles, and management for everyday living.",
    icon: Heart,
    color: "#E65100",
  },
];

const whyChooseUs = [
  "Experienced and dedicated teaching staff",
  "Modern science and computer laboratories",
  "Safe and supportive learning environment",
  "Strong emphasis on character development",
  "Extracurricular activities and sports programs",
  "Consistent top performance in WASSCE exams",
];

const testimonials = [
  {
    name: "Amina Ibrahim",
    role: "Alumni, Class of 2023",
    text: "Fatih College gave me the foundation I needed to excel at university. The teachers truly care about every student's success.",
  },
  {
    name: "Kwame Mensah",
    role: "Parent",
    text: "Choosing Fatih College for my children was the best decision. The school balances academics with moral values perfectly.",
  },
  {
    name: "Rashida Alhassan",
    role: "Alumni, Class of 2022",
    text: "The science labs and library resources at Fatih College are outstanding. I was well-prepared for my medical studies.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#1578A8] via-[#1E9BD7] to-[#7AB648]">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-white/5" />
          <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-white/5" />
          <div className="absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-secondary/10" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block rounded-full bg-white/15 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur-sm mb-6">
                Welcome to Fatih College, Tamale
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Nurturing{" "}
                <span className="text-secondary">Excellence</span> &{" "}
                <span className="text-secondary-light">Character</span>
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl">
                At Fatih College, we provide a world-class education that
                empowers students to achieve academic excellence while building
                strong moral character. Join a community where every student is
                valued and inspired to reach their full potential.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-primary-dark bg-gradient-to-r from-secondary to-secondary-light hover:from-secondary-light hover:to-secondary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl transform rotate-3" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <Image
                    src="/students.jpg"
                    alt="Fatih College students at JSM Quiz Regional Qualifiers"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile Stats */}
      <section className="lg:hidden relative z-10 -mt-12 mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white rounded-2xl p-4 text-center shadow-lg border border-gray-100"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-1" />
              <div className="text-xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl" />
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/staff.jpg"
                    alt="Fatih College staff training session"
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <Globe className="w-10 h-10 mb-3 text-secondary" />
                    <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      To provide quality education that develops the intellectual,
                      moral, and social capabilities of students, preparing them to
                      be responsible citizens and future leaders.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-bold uppercase tracking-wider text-primary mb-3">
                About Fatih College
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                Building Leaders Through{" "}
                <span className="text-primary">Quality Education</span>
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Founded with a vision to transform education in Northern Ghana,
                Fatih College has grown into one of the most respected
                institutions in Tamale. We combine rigorous academic standards
                with a nurturing environment that encourages every student to
                discover and develop their unique talents.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our holistic approach to education ensures that students graduate
                not just with excellent grades, but with the character, skills,
                and values needed to succeed in an ever-changing world.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:gap-3 transition-all"
              >
                Read our full story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs */}
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
              Academic Programs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Programs We Offer
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Choose from our diverse range of academic programs designed to
              prepare students for success in higher education and beyond.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, i) => (
              <motion.div
                key={program.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="group bg-white rounded-2xl p-6 shadow-lg shadow-black/[0.04] border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${program.color}15` }}
                >
                  <program.icon
                    className="w-7 h-7"
                    style={{ color: program.color }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-bold uppercase tracking-wider text-primary mb-3">
                Why Fatih College
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                Why Parents &amp; Students{" "}
                <span className="text-primary">Choose Us</span>
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Fatih College stands out for our commitment to both academic
                rigor and holistic student development. Here is what makes us
                different.
              </p>

              <div className="mt-8 space-y-4">
                {whyChooseUs.map((item, i) => (
                  <motion.div
                    key={item}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/lab-students.jpg"
                  alt="Fatih College students in science laboratory"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 text-white text-center border border-white/10">
                      <div className="text-2xl font-bold">98%</div>
                      <div className="text-xs text-white/80 mt-0.5">WASSCE Pass Rate</div>
                    </div>
                    <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 text-white text-center border border-white/10">
                      <div className="text-2xl font-bold">1:20</div>
                      <div className="text-xs text-white/80 mt-0.5">Teacher-Student Ratio</div>
                    </div>
                    <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 text-white text-center border border-white/10">
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-xs text-white/80 mt-0.5">Awards Won</div>
                    </div>
                    <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 text-white text-center border border-white/10">
                      <div className="text-2xl font-bold">14+</div>
                      <div className="text-xs text-white/80 mt-0.5">Years of Service</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              What Our Community Says
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-8 shadow-lg shadow-black/[0.04] border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-primary text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-6 h-6 text-secondary" />
              <span className="font-semibold">School Hours</span>
              <span className="text-white/70 text-sm">
                Mon - Fri: 7:30 AM - 3:30 PM
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6 text-secondary" />
              <span className="font-semibold">Location</span>
              <span className="text-white/70 text-sm">
                Datoyili, Tamale, Ghana
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-6 h-6 text-secondary" />
              <span className="font-semibold">Contact Us</span>
              <span className="text-white/70 text-sm">+233 550 565 797</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1578A8] via-[#1E9BD7] to-[#7AB648] relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Ready to Join the{" "}
              <span className="text-secondary">Fatih College</span> Family?
            </h2>
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Take the first step toward a brighter future. Applications are
              open for the upcoming academic year. Apply today and become part of
              our community.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm font-bold text-primary-dark bg-gradient-to-r from-secondary to-secondary-light hover:from-secondary-light hover:to-secondary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Start Your Application
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
