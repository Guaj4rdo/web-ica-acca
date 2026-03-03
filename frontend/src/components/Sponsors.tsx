"use client";

import { Mail } from "lucide-react";
import { ImageWithFallback } from "./misc/ImageWithFallback";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function Sponsors() {
  const { t } = useLanguage();

  const sponsorLevels = [
    {
      level: "Oro",
      sponsors: ["Nombre", "Nombre", "Nombre", "Nombre"],
    },
  ];

  return (
    <section id="sponsors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="mb-4 text-3xl">{t.sponsors.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.sponsors.description}
          </p>
        </motion.div>

        <div className="space-y-12 mb-16">
          {sponsorLevels.map((level, levelIndex) => (
            <motion.div
              key={levelIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: levelIndex * 0.2,
              }}
            >


              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {level.sponsors.map((sponsor, sponsorIndex) => (
                  <motion.div
                    key={sponsorIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.4,
                      delay: sponsorIndex * 0.1,
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                    className="border border-gray-300 rounded-lg p-8 flex items-center justify-center hover:shadow-md hover:border-blue-400 transition-all bg-white h-32"
                  >
                    <span className="text-gray-400 text-center">
                      {sponsor}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg shadow-lg p-12 text-center"
        >
          <h3 className="mb-4 text-white">
            {t.sponsors.ctaTitle}
          </h3>
          <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
            {t.sponsors.ctaDesc}
          </p>
          <motion.a
            href="mailto:sponsors@ica-acca.cl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>{t.sponsors.ctaButton}</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}