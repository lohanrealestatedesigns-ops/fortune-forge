const quickLinks = [
  "Salary Loans",
  "SME Loans",
  "Debt Recovery",
  "Small Scale Enterprise Management",
];

export function Footer() {
  return (
    <footer id="contact" className="border-t-2 border-bronze bg-navy">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-5 py-20 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <div className="lg:col-span-5">
          <p className="font-display text-lg leading-snug font-bold tracking-[0.1em] text-background uppercase">
            JAM-Fortune Financial Services Ltd
          </p>
          <p className="mt-2 text-[0.62rem] font-semibold tracking-[0.45em] text-bronze uppercase">
            God 1st
          </p>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-background/65">
            A federally incorporated micro-finance institution operating since 2008, dedicated to
            eradicating poverty and funding small-scale business growth across Nigeria without
            discrimination.
          </p>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[0.66rem] font-semibold tracking-[0.28em] text-background/50 uppercase">
            Quick Links
          </p>
          <ul className="mt-6 space-y-4">
            {quickLinks.map((l) => (
              <li key={l}>
                <a
                  href="#products"
                  className="text-sm text-background/80 transition-colors hover:text-bronze"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="text-[0.66rem] font-semibold tracking-[0.28em] text-background/50 uppercase">
            Contact & Customer Support
          </p>
          <dl className="mt-6 space-y-5 text-sm text-background/80">
            <div>
              <dt className="text-[0.62rem] tracking-[0.2em] text-background/45 uppercase">
                Head Office
              </dt>
              <dd className="mt-1">Corporate Headquarters, Lagos, Nigeria</dd>
            </div>
            <div>
              <dt className="text-[0.62rem] tracking-[0.2em] text-background/45 uppercase">
                Telephone
              </dt>
              <dd className="mt-1">+234 (0) 800 000 0000</dd>
            </div>
            <div>
              <dt className="text-[0.62rem] tracking-[0.2em] text-background/45 uppercase">
                Email
              </dt>
              <dd className="mt-1">support@jamfortune.example</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="border-t border-background/12">
        <div className="mx-auto max-w-[1400px] px-5 py-10 lg:px-10">
          <p className="max-w-5xl text-xs leading-relaxed text-background/50">
            Disclaimer: All loan facilities, savings products and schemes described herein are
            subject to the terms and conditions of JAM-Fortune Financial Services Ltd, satisfactory
            completion of the loan application procedure, KYC verification, credit assessment and,
            where applicable, collateral valuation. Quoted interest rates, tenors and limits are
            indicative and may change without prior notice. Approval is not guaranteed. Information
            on this website does not constitute an offer, investment advice or a commitment to lend.
          </p>
          <p className="mt-6 text-[0.66rem] tracking-[0.2em] text-background/40 uppercase">
            © {new Date().getFullYear()} JAM-Fortune Financial Services Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
