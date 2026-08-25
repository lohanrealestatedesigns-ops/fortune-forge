import { motion } from "motion/react";
import heroImage from "@/assets/hero-market.jpg";

const credentials = [
  "Est. 2008",
  "Member of ANMFIN",
  "Awarded Best Financial Service Provider in Nigeria (2017)",
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-end overflow-hidden">
      <img
        src={heroImage}
        alt="Nigerian market women and artisans at work"
        width={1920}
        height={1280}
        className="absolute inset-0 size-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-navy-deep/30" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, var(--navy-deep) 4%, color-mix(in oklab, var(--navy-deep) 80%, transparent) 38%, color-mix(in oklab, var(--navy-deep) 8%, transparent) 100%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-5 pt-36 pb-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-16 bg-bronze" />
            <span className="text-[0.65rem] font-semibold tracking-[0.4em] text-bronze uppercase">
              Incorporated Micro-Finance Institution
            </span>
          </div>

          <h1 className="mt-8 font-display text-[2.6rem] leading-[1.02] font-bold text-background sm:text-6xl lg:text-[5.2rem]">
            Empowering Your
            <br />
            Financial Future.
          </h1>

          <p className="mt-8 max-w-2xl border-l-2 border-bronze/70 pl-6 text-base leading-relaxed text-background/75 lg:text-lg">
            Nigeria's premier micro-finance institution dedicated to eradicating poverty and funding
            small-scale business growth without discrimination.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center bg-bronze px-9 py-4.5 text-[0.72rem] font-bold tracking-[0.2em] text-navy-deep uppercase transition-colors hover:bg-bronze-soft"
            >
              Explore Loan Options
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center border border-background/70 px-9 py-4.5 text-[0.72rem] font-bold tracking-[0.2em] text-background uppercase transition-colors hover:border-bronze hover:text-bronze"
            >
              Open a Savings Account
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative border-t border-background/15 bg-navy-deep/70 backdrop-blur-sm"
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 divide-y divide-background/15 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-10">
          {credentials.map((c) => (
            <div key={c} className="px-0 py-5 sm:px-8 sm:first:pl-0 sm:last:pr-0">
              <p className="text-[0.68rem] leading-relaxed font-semibold tracking-[0.18em] text-background/80 uppercase">
                {c}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
