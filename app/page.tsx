export default function Home() {
  const faqs = [
    {
      q: "How does domain sniping work?",
      a: "Some registrars track which domains you search for and register them before you can, then resell them at a premium. Domain Snipe Detector monitors your searched domains and alerts you the moment a registrar registers one."
    },
    {
      q: "What alerts do I receive?",
      a: "You get instant email notifications and optional webhook alerts (Slack, Discord, Zapier) whenever a domain you tracked gets registered by a registrar within a suspicious timeframe."
    },
    {
      q: "Which registrars are monitored?",
      a: "We check domain status across all major registrars using WHOIS and RDAP lookups. If a domain you searched flips from available to registered, you'll know immediately."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Domain Protection
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Registrars From{" "}
          <span className="text-[#58a6ff]">Sniping Your Domains</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Domain Snipe Detector monitors every domain you search and fires instant alerts the moment a registrar registers it behind your back.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Monitoring — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        {/* Social proof strip */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-[#8b949e]">
          <div><span className="text-white font-semibold">500+</span> domains monitored</div>
          <div><span className="text-white font-semibold">12+</span> registrars tracked</div>
          <div><span className="text-white font-semibold">&lt;60s</span> alert latency</div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Add Domains", desc: "Paste the domains you're researching into your dashboard." },
            { step: "2", title: "We Watch", desc: "Our background jobs poll WHOIS & RDAP every minute across all major registrars." },
            { step: "3", title: "Get Alerted", desc: "Receive email or webhook alerts the instant sniping is detected." }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] font-bold text-xl mb-2">{step}</div>
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <p className="text-[#8b949e] text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Monitor up to 500 domains",
              "12+ registrars tracked",
              "Email + webhook alerts",
              "WHOIS & RDAP polling",
              "Snipe history & reports",
              "Slack & Discord integration"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Domain Snipe Detector. All rights reserved.
      </footer>
    </main>
  );
}
