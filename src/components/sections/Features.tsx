import { features } from "@/lib/nxs-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Free Fire Tournament Features"
          title="Built for fast, trusted mobile esports"
          description="Every card is designed around speed, trust, and conversion from tournament discovery to reward withdrawal."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="tilt-card glass-panel h-full rounded-[2rem] p-6 transition-colors hover:border-cyan/30">
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan/30 bg-cyan/10 text-cyan shadow-cyan">
                <div className="h-7 w-7">{feature.icon}</div>
              </div>
              <h3 className="mt-6 text-xl font-black uppercase tracking-[-0.03em] text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/58">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
