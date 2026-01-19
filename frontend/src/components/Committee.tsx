"use client";

import { Mail, Building2 } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./misc/ImageWithFallback";
import { useLanguage } from "../context/LanguageContext";

export function Committee() {
  const { t } = useLanguage();

  const committeeMembers = [
    {
      name: "Jaime Rohten Carrasco",
      role: t.committee.roles.director,
      institution: "Universidad del Bío Bío",
      email: "jrohten@ubiobio.cl",
      image: "https://fi.ubiobio.cl/wp-content/uploads/2023/05/jaime-rohten-scaled-e1684873906646.jpg",
    },
    {
      name: "José Silva Cortés",
      role: t.committee.roles.academic,
      institution: "Universidad del Bío Bío",
      email: "jsilva@ubiobio.cl",
      image: "https://fi.ubiobio.cl/wp-content/uploads/2025/01/dsc0493-scaled-e1736424466176.jpg",
    },
    {
      name: "Christopher Flores Jara",
      role: t.committee.roles.academic,
      institution: "Universidad del Bío Bío",
      email: "cfloresj@ubiobio.cl",
      image: "https://fi.ubiobio.cl/wp-content/uploads/2025/01/dsc0224-scaled-e1736424338514.jpg",
    },
    {
      name: "Cristian Durán",
      role: t.committee.roles.academic,
      institution: "Universidad del Bío Bío",
      email: "cduran@ubiobio.cl",
      image: "https://fi.ubiobio.cl/wp-content/uploads/2023/05/cristian-duran-scaled-e1684873722437.jpg",
    },
  ];

  const referenceMembers = [
    {
      name: "Nombre Apellido",
      role: t.committee.roles.organizer,
      institution: "Institución",
      email: "email@ejemplo.com",
      image: "",
    },
    {
      name: "Nombre Apellido",
      role: t.committee.roles.organizer,
      institution: "Institución",
      email: "email@ejemplo.com",
      image: "",
    },
    {
      name: "Nombre Apellido",
      role: t.committee.roles.organizer,
      institution: "Institución",
      email: "email@ejemplo.com",
      image: "",
    },
  ];

  return (
    <section id="committee" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="mb-4 text-3xl">{t.committee.ubTitle}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.committee.ubDesc}
          </p>
        </motion.div>
        {/* IEEE, ICA-ACCA E IFAC*/}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {committeeMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all"
            >
              <div className="mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center"
                >
                  {member.image ? (
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-3xl text-blue-700">
                      {member.name.charAt(0)}
                    </span>
                  )}
                </motion.div>
                <h4 className="text-blue-900 mb-1 text-center">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-600 mb-2 text-center">
                  {member.role}
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                  <Building2 className="w-4 h-4 flex-shrink-0 text-gray-400" />
                  <span>{member.institution}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                  <Mail className="w-4 h-4 flex-shrink-0 text-gray-400" />
                  <span className="text-gray-600">
                    {member.email}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 mt-20"
        >
          <h1 className="mb-4 text-3xl">{t.committee.refTitle}</h1>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {referenceMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all"
            >
              <div className="mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center"
                >
                  <span className="text-3xl text-blue-700">
                    {member.name.charAt(0)}
                  </span>
                </motion.div>
                <h4 className="text-blue-900 mb-1 text-center">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-600 mb-2 text-center">
                  {member.role}
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                  <Building2 className="w-4 h-4 flex-shrink-0 text-gray-400" />
                  <span>{member.institution}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                  <Mail className="w-4 h-4 flex-shrink-0 text-gray-400" />
                  <span className="text-gray-600">
                    {member.email}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}