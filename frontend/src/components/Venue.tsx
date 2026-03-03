"use client";

import { ImageWithFallback } from "./misc/ImageWithFallback";
import {
  MapPin,
  Building,
  Users,
  Award,
  Plane,
  Hotel,
  CloudSun,
} from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function Venue() {
  const { t } = useLanguage();

  const ubbStats = [
    { icon: Users, label: t.venue.ubb.stats.students.label, value: t.venue.ubb.stats.students.value },
    { icon: Building, label: t.venue.ubb.stats.careers.label, value: t.venue.ubb.stats.careers.value },
    { icon: Award, label: t.venue.ubb.stats.accreditation.label, value: t.venue.ubb.stats.accreditation.value },
    { icon: MapPin, label: t.venue.ubb.stats.campus.label, value: t.venue.ubb.stats.campus.value },
  ];

  const cityFeatures = t.venue.city.features;

  const practicalInfo = [
    {
      icon: Plane,
      title: t.venue.practical.arrival.title,
      description: t.venue.practical.arrival.desc,
    },
    {
      icon: Hotel,
      title: t.venue.practical.accommodation.title,
      description: t.venue.practical.accommodation.desc,
    },
    {
      icon: CloudSun,
      title: t.venue.practical.weather.title,
      description: t.venue.practical.weather.desc,
    },
  ];

  return (
    <section id="venue" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="mb-4 text-3xl">{t.venue.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.venue.description}
          </p>
        </motion.div>

        {/* Universidad del Bío-Bío */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 border border-gray-200 rounded-xl shadow-lg overflow-hidden mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12">
              <h1 className="mb-6 text-2xl text-blue-900">
                {t.venue.ubb.title}
              </h1>
              <p className="text-gray-700 mb-6">
                {t.venue.ubb.p1}
              </p>
              <p className="text-gray-700 mb-6">
                {t.venue.ubb.p2}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {ubbStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      className="bg-white border border-gray-200 rounded-lg p-4"
                    >
                      <Icon className="w-5 h-5 text-blue-600 mb-2" />
                      <p className="text-xs text-gray-600">
                        {stat.label}
                      </p>
                      <p className="text-gray-900">
                        {stat.value}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <a
                href="https://www.ubiobio.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.ubiobio.cl →
              </a>
            </div>
            <div className="h-64 md:h-auto">
              <ImageWithFallback
                src="https://fi.ubiobio.cl/wp-content/uploads/2026/01/dsc_9740.jpg"
                alt="Campus Universidad del Bío-Bío"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Concepción */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 border border-gray-200 rounded-xl shadow-lg overflow-hidden mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1 h-64 md:h-auto">
              <ImageWithFallback
                src="https://static.wixstatic.com/media/d6977a_2914a5eb96ac4246b245b99b0d04559f~mv2.jpg/v1/fill/w_568,h_710,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d6977a_2914a5eb96ac4246b245b99b0d04559f~mv2.jpg"
                alt="Concepción, Chile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2 p-8 md:p-12">
              <h1 className="mb-6 text-2xl text-blue-900">
                {t.venue.city.title}
              </h1>
              <p className="text-gray-700 mb-4">
                {t.venue.city.p1}
              </p>
              <p className="text-gray-700 mb-4">
                {t.venue.city.p2}
              </p>
              <div className="space-y-3">
                {cityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-900">{feature}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 h-64 w-full rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://maps.google.com/maps?q=Avda.+Collao+1202,+Concepci%C3%B3n,+Chile&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  title="Mapa UBB Concepción"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Información práctica */}
        <div className="grid md:grid-cols-3 gap-8">
          {practicalInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="bg-blue-50 border border-blue-100 rounded-lg p-6"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4"
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <h4 className="mb-3 text-blue-900">
                  {info.title}
                </h4>
                <p className="text-gray-700 text-sm">
                  {info.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}