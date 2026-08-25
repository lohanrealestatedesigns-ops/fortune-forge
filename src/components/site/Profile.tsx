import { motion } from "motion/react";
import officeImage from "@/assets/corporate-office.jpg";

const values = [
  "Uplifting clients economically",
  "Uncompromising integrity",
  "Love for the poor",
  "Simplicity",
  "Customer-centeredness",
];

export function Profile() {
  return (
    <section id="profile" className="bg-background">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-5 py-24 lg:grid-cols-12 lg:gap-20 lg:px-10 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <span className="text-[0.65rem] font-semibold tracking-[0.4em] text-bronze uppercase">
            Corporate Profile
          </span>

          <h2 className="mt-6 font-display text-4xl leading-tight font-bold text-navy lg:text-5xl">
            An institution built on service since 2008.
          </h2>

          <div className="mt-12 border-t border-border pt-8">
            <p className="text-[0.66rem] font-semibold tracking-[0.28em] text-slate uppercase">
              Our Vision
            </p>
            <p className="mt-5 font-display text-2xl leading-snug text-navy lg:text-[2rem]">
              “To become one of the leading Micro-finance bank institutions in Africa, enriching
              beyond a million Nigerians.”
            </p>
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <p className="text-[0.66rem] font-semibold tracking-[0.28em] text-slate uppercase">
              Core Values
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2">
              {values.map((v, i) => (
                <li key={v} className="flex items-baseline gap-4 border-b border-border py-4 pr-6">
                  <span className="font-mono text-[0.7rem] text-bronze">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.95rem] text-navy">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-5"
        >
          <div className="absolute -top-4 -left-4 hidden h-32 w-32 border-t-2 border-l-2 border-bronze lg:block" />
          <img
            src={officeImage}
            alt="Executive team meeting in a corporate boardroom"
            loading="lazy"
            width={1200}
            height={1408}
            className="relative h-full max-h-[720px] w-full object-cover"
          />
          <div className="mt-px bg-navy p-8">
            <p className="font-display text-3xl font-bold text-bronze">18+</p>
            <p className="mt-2 text-[0.68rem] font-semibold tracking-[0.2em] text-background/70 uppercase">
              Years of uninterrupted operations
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
