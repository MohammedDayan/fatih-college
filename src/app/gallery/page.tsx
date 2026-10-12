"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera, ChevronLeft, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" as const },
  }),
};

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  aspect: string;
}

const categories = ["All", "Academics", "Activities", "Staff"];

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/students.jpg",
    title: "JSM Quiz Regional Qualifiers",
    category: "Activities",
    aspect: "aspect-[16/9]",
  },
  {
    id: 2,
    src: "/lab-students.jpg",
    title: "Science Laboratory Session",
    category: "Academics",
    aspect: "aspect-[16/9]",
  },
  {
    id: 3,
    src: "/staff.jpg",
    title: "Staff Training & Development",
    category: "Staff",
    aspect: "aspect-[16/9]",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const navigateGallery = (direction: number) => {
    if (!selectedItem) return;
    const currentIndex = filtered.findIndex(
      (item) => item.id === selectedItem.id
    );
    const nextIndex =
      (currentIndex + direction + filtered.length) % filtered.length;
    setSelectedItem(filtered[nextIndex]);
  };

  return (
    <div className="flex flex-col">
      {/* Hero with background image */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <Image
          src="/students.jpg"
          alt="Fatih College students"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-white/15 px-5 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm mb-6">
              <Camera className="w-4 h-4 inline mr-1.5 -mt-0.5" />
              Photo Gallery
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our Gallery
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              Explore moments captured at Fatih College &mdash; from academic
              achievements to cultural celebrations and sporting events.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-20 z-30 backdrop-blur-md bg-white/95">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.8 }}
                  variants={fadeUp}
                  onClick={() => setSelectedItem(item)}
                  className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white border border-gray-100"
                >
                  <div className={`relative ${item.aspect} overflow-hidden`}>
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-3">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <Camera className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No photos in this category yet.</p>
            </div>
          )}

          <div className="text-center mt-16">
            <p className="text-gray-500 text-sm">
              More photos coming soon. Follow us on social media for the latest updates.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm px-4"
            onClick={() => setSelectedItem(null)}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {filtered.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateGallery(-1);
                }}
                className="absolute left-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl"
            >
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center mt-4">
                <h2 className="text-xl font-bold text-white">
                  {selectedItem.title}
                </h2>
                <span className="mt-2 inline-block text-sm text-white/60">
                  {selectedItem.category}
                </span>
              </div>
            </motion.div>

            {filtered.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateGallery(1);
                }}
                className="absolute right-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
