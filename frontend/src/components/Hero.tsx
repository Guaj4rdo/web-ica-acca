"use client";

import * as React from "react";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import { useLanguage } from "../context/LanguageContext";

export function Hero() {
  const [dots, setDots] = React.useState<Array<{ left: number; top: number; duration: number; delay: number }>>([]);
  const { t } = useLanguage();

  React.useEffect(() => {
    setDots(
      [...Array(15)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden flex items-center">
      {/* Background YouTube video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Blue transparent overlay */}
      <div className="absolute inset-0 bg-blue-900/75"></div>

      {/* Subtle animated dots */}
      <div className="absolute inset-0">
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 px-5 py-2 rounded-full mb-8"
          >
            <span className="text-sm text-blue-200">
              {t.hero.edition}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl sm:text-7xl lg:text-8xl mb-6 tracking-tight"
            style={{
              background:
                "linear-gradient(to right, #60a5fa, #3b82f6, #2563eb)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter:
                "drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))",
            }}
          >
            ICA-ACCA
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <p className="text-xl sm:text-2xl mb-2 text-slate-300">
              {t.hero.subtitle1}
            </p>
            <p className="text-2xl sm:text-3xl text-blue-300">
              {t.hero.subtitle2}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 px-6 py-3 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-400" />
              <span>{t.hero.date}</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 px-6 py-3 rounded-lg">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>{t.hero.location}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#paper-submission"
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2 justify-center"
            >
              <span>{t.hero.callForPapers}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="border-2 border-white hover:border-blue-500 text-white px-8 py-4 rounded-lg hover:bg-slate-800/50 transition-all"
            >
              {t.hero.moreInfo}
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-blue-400 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient transition */}

    </div>
  );
}