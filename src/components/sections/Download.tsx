import { ANDROID_SUPPORT, APK_SIZE, APK_VERSION, downloadInfo } from "@/lib/nxs-data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Download() {
  return (
    <section id="download" className="relative overflow-hidden py-20 sm:py-28">
      <div className="site-shell">
        <div className="glass-panel-strong relative overflow-hidden rounded-[2.5rem] p-6 sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,229,255,0.22),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(123,44,255,0.2),transparent_30%)]" aria-hidden="true" />
          <div className="absolute right-[-8rem] top-[-8rem] h-72 w-72 rounded-full bg-cyan/20 blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-[-8rem] left-[-8rem] h-72 w-72 rounded-full bg-purple/20 blur-3xl" aria-hidden="true" />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.34em] text-green">Secure Free Fire APK Download</p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-[-0.065em] text-white sm:text-6xl lg:text-7xl">
                Install the arena. Start winning.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
                Get the latest GS ESPORTS APK for verified Free Fire tournament access, wallet controls, live match updates, and fast reward withdrawals.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <MagneticButton
                  href={process.env.NEXT_PUBLIC_APK_URL || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Securely download the GS Esports APK"
                  className="download-cta download-cta-primary pulse-download inline-flex h-16 items-center justify-center px-8 text-sm sm:min-w-[280px]"
                >
                  Secure Download APK
                </MagneticButton>
                <MagneticButton
                  href="#faq"
                  aria-label="Check Free Fire tournament app requirements"
                  className="download-cta download-cta-secondary inline-flex h-16 items-center justify-center px-8 text-sm"
                >
                  Check Requirements
                </MagneticButton>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {downloadInfo.map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-5">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-white/45">{item.label}</p>
                  <p className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">{item.value}</p>
                </div>
              ))}
              <div className="rounded-[1.5rem] border border-green/20 bg-green/10 p-5">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-green">Android Support</p>
                <p className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">{ANDROID_SUPPORT}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
