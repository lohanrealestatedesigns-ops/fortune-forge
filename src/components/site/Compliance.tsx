import { motion } from "motion/react";
import { ShieldCheck, FileSearch, Landmark, Activity } from "lucide-react";

const pillars = [
  { icon: ShieldCheck, label: "AML / CFT Frameworks" },
  { icon: FileSearch, label: "KYC Verification" },
  { icon: Landmark, label: "Daily Bank Reconciliations" },
  { icon: Activity, label: "Business Continuity Plan" },
];

export function Compliance() {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <div className="absolute inset-y-0 left-1/2 hidden w-px bg-background/10 lg:block" />
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-5 py-24 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[0.65rem] font-semibold tracking-[0.4em] text-bronze uppercase">
            Integrity & Compliance
          </span>
          <h2 className="mt-6 font-display text-4xl leading-tight font-bold text-background lg:text-5xl">
            Rigorous Risk Management & Compliance
          </h2>
          <span className="mt-8 block h-0.5 w-24 bg-bronze" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:pl-16"
        >
          <p className="text-base leading-relaxed text-background/75 lg:text-lg">
            We operate under strict AML/CFT and KYC regulatory frameworks. Our operations are
            governed by transparent internal controls, daily bank reconciliations, and a robust
            business continuity plan to protect our stakeholders and clients.
          </p>

          <ul className="mt-12 grid grid-cols-1 gap-px bg-background/12 sm:grid-cols-2">
            {pillars.map((p) => (
              <li key={p.label} className="flex items-center gap-4 bg-navy-deep px-5 py-6">
                <p.icon className="size-5 shrink-0 text-bronze" strokeWidth={1.4} />
                <span className="text-[0.7rem] font-semibold tracking-[0.14em] text-background/85 uppercase">
                  {p.label}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
