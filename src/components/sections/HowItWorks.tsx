import { steps } from "@/lib/nxs-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function HowItWorks() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="site-shell">
        <SectionHeading
          eyebrow="How Free Fire Tournaments Work"
          title="From download to payout in three moves"
          description="A frictionless mobile flow designed to convert visitors into active tournament players."
        />

        <div className="relative mt-12 grid gap-5 lg:grid-cols-3">
          <div className="absolute left-6 top-8 hidden h-full w-px bg-gradient-to-b from-cyan via-purple to-green lg:block" aria-hidden="true" />
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="glass-panel relative rounded-[2rem] p-6"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan/30 bg-cyan/10 font-black text-cyan shadow-cyan">
                {step.number}
              </div>
              <h3 className="mt-6 text-xl font-black uppercase tracking-[-0.03em] text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/58">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
