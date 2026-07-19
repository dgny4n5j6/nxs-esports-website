type PhoneMockupProps = {
  title?: string;
  metric?: string;
  variant?: "hero" | "carousel";
};

export function PhoneMockup({ title = "GS Arena", metric = "LIVE", variant = "hero" }: PhoneMockupProps) {
  return (
    <div className="phone-shell animate-phoneFloat">
      <div className="phone-screen">
        <div className="scan-line" aria-hidden="true" />
        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-5 flex items-center justify-between">
              <span className="rounded-full border border-blue/40 bg-blue/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-blue">
                GS
              </span>
            <span className="rounded-full border border-ice/30 bg-ice/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-ice">
              {metric}
            </span>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-blue">{title}</p>
            {variant === "hero" ? (
              <>
                <h3 className="mt-2 text-3xl font-black leading-none tracking-[-0.06em] text-white">Dominate</h3>
                <p className="mt-2 text-xs leading-5 text-white/58">Tournaments, results, wallet, and rewards in one arena.</p>
              </>
            ) : (
              <>
                <h3 className="mt-2 text-2xl font-black leading-none tracking-[-0.05em] text-white">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-white/58">Swipe premium mobile flows built for esports speed.</p>
              </>
            )}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-blue/30 bg-blue/15 p-3">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue">Players</p>
              <p className="mt-1 text-xl font-black text-white">428K</p>
            </div>
            <div className="rounded-2xl border border-royal/30 bg-royal/15 p-3">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-royal">Prize</p>
              <p className="mt-1 text-xl font-black text-white">$2.4M</p>
            </div>
          </div>

          <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-black/30 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-white/80">Live Match</span>
              <span className="rounded-full bg-blue/20 px-2 py-1 text-[10px] font-black text-blue">Online</span>
            </div>
            <div className="space-y-3">
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-2 w-3/4 rounded-full bg-blue" />
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-2 w-2/3 rounded-full bg-royal" />
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-2 w-5/6 rounded-full bg-ice" />
              </div>
            </div>
          </div>

          <div className="mt-auto rounded-full border border-blue/40 bg-blue/15 px-4 py-3 text-center text-xs font-black uppercase tracking-[0.22em] text-blue">
            Tap to compete
          </div>
        </div>
      </div>
    </div>
  );
}
