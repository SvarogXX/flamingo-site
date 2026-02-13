"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "TechCorp", logo: "💎" },
  { name: "DataFlow", logo: "🔷" },
  { name: "CloudSync", logo: "☁️" },
  { name: "NetPro", logo: "🌐" },
  { name: "SecureIT", logo: "🛡️" },
];

export default function Partners() {
  return (
    <section className="relative py-16 bg-[#0a0a0f]">
      {/* Border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm tracking-wider mb-10"
        >
          НАШІ ПАРТНЕРИ
        </motion.p>

        {/* Partners logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors cursor-pointer group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">{partner.logo}</span>
              <span className="font-medium">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
