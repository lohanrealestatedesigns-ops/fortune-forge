import { motion } from "motion/react";
import { Banknote, Briefcase, Refrigerator, LineChart } from "lucide-react";

const products = [
  {
    no: "01",
    icon: Banknote,
    title: "Short-Term Finance & Advanced Salary Loan",
    body: "Designed for civil servants, military, and police personnel. Borrow up to 60% of your salary with repayment spread up to 24 months. Interest rates from 5.5% to 7.5% per month.",
    meta: ["Up to 60% of salary", "Up to 24 months", "5.5% – 7.5% monthly"],
    span: "lg:col-span-7",
  },
  {
    no: "02",
    icon: Briefcase,
    title: "Business & Artisan Loans",
    body: "Scale your trade. Access up to N10m with a maximum duration of 6 months. Subject to collateral valuation. Competitive rates between 20% to 25%.",
    meta: ["Up to N10,000,000", "Max 6 months", "20% – 25%"],
    span: "lg:col-span-5",
  },
  {
    no: "03",
    icon: Refrigerator,
    title: "Home Appliance Support Scheme",
    body: "Equip your home with ACs, Gas Cookers, Freezers, Generators, and TVs. Repayment is conveniently spread over a period of 10 months.",
    meta: ["10-month repayment", "Verified vendors", "No hidden charges"],
    span: "lg:col-span-5",
  },
  {
    no: "04",
    icon: LineChart,
    title: "Wealth Management",
    body: "Equity Fund Savings, Contribution Savings, and Financial Consultancy.",
    meta: ["Equity fund savings", "Contribution savings", "Financial consultancy"],
    span: "lg:col-span-7",
  },
];

export function Products() {
  return (
    <section id="products" className="border-y border-border bg-secondary">
      <div className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-8 border-b border-border pb-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-[0.65rem] font-semibold tracking-[0.4em] text-bronze uppercase">
              Core Financial Products
            </span>
            <h2 className="mt-6 font-display text-4xl leading-tight font-bold text-navy lg:text-5xl">
              Capital structured for real Nigerian livelihoods.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-slate lg:col-span-6 lg:col-start-7 lg:pt-10">
            Every facility is underwritten with disciplined credit assessment and transparent
            pricing. Terms are disclosed in full before disbursement — no discrimination, no
            ambiguity.
          </p>
        </div>

        <div className="mt-px grid grid-cols-1 gap-px bg-border lg:grid-cols-12">
          {products.map((p, i) => (
            <motion.article
              key={p.no}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative flex flex-col bg-card p-8 transition-colors hover:bg-background lg:p-12 ${p.span}`}
            >
              <span className="absolute top-0 left-0 h-0.5 w-0 bg-bronze transition-all duration-500 group-hover:w-full" />
              <div className="flex items-start justify-between gap-6">
                <p.icon className="size-8 text-bronze" strokeWidth={1.25} />
                <span className="font-display text-2xl text-border">{p.no}</span>
              </div>
              <h3 className="mt-10 font-display text-2xl leading-snug font-bold text-navy lg:text-[1.75rem]">
                {p.title}
              </h3>
              <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-slate">{p.body}</p>
              <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6">
                {p.meta.map((m) => (
                  <li
                    key={m}
                    className="text-[0.66rem] font-semibold tracking-[0.16em] text-navy uppercase"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
