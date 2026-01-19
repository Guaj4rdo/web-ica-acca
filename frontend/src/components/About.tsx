"use client";

import { ImageWithFallback } from "./misc/ImageWithFallback";
import { Cpu, Users, BookOpen, Award } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function About() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Cpu,
      title: t.about.features.tech.title,
      description: t.about.features.tech.desc
    },
    {
      icon: Users,
      title: t.about.features.networking.title,
      description: t.about.features.networking.desc
    },
    {
      icon: BookOpen,
      title: t.about.features.publications.title,
      description: t.about.features.publications.desc
    },
    {
      icon: Award,
      title: t.about.features.recognition.title,
      description: t.about.features.recognition.desc
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="mb-4 text-3xl">{t.about.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.about.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <ImageWithFallback
              src="https://noticias.ubiobio.cl/wp-content/uploads//2025/07/DSC02295.jpg"
              alt={t.about.imageAlt}
              className="rounded-xl shadow-lg w-full h-96 object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-4">{t.about.whatIsTitle}</h3>
            <p className="text-gray-700 mb-4">
              {t.about.p1}
            </p>
            <p className="text-gray-700 mb-4">
              {t.about.p2}
            </p>
            <p className="text-gray-700">
              {t.about.p3}
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-900 rounded-full mb-4"
                >
                  <Icon className="w-8 h-8" />
                </motion.div>
                <h4 className="mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}