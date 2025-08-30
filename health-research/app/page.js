import Link from "next/link";

function Pill({ children, color = "violet" }) {
  const colorMap = {
    emerald: "from-emerald-500 to-cyan-600",
    purple: "from-indigo-500 to-purple-600",
    orange: "from-amber-500 to-orange-600",
    violet: "from-violet-600 to-blue-600",
  };
  return (
    <span className={`inline-flex items-center rounded-full bg-gradient-to-r ${colorMap[color]} px-3 py-1 text-xs font-semibold text-white shadow-sm`}>
      {children}
    </span>
  );
}

function Card({ title, description, items = [], cta, accent = "violet" }) {
  const accentMap = {
    emerald: "ring-emerald-200 hover:ring-emerald-300",
    purple: "ring-indigo-200 hover:ring-indigo-300",
    orange: "ring-amber-200 hover:ring-amber-300",
    violet: "ring-violet-200 hover:ring-violet-300",
  };
  return (
    <div className={`rounded-xl border border-zinc-200 ring-4 ring-transparent transition-all hover:shadow-md ${accentMap[accent]} bg-white`}> 
      <div className="p-5">
        <div className="flex items-center justify-between">
          <Pill color={accent}>{title}</Pill>
        </div>
        <p className="mt-3 text-sm text-zinc-600">{description}</p>
        {items.length > 0 && (
          <ul className="mt-4 space-y-2 text-sm text-zinc-700">
            {items.map((it, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        )}
        {cta && (
          <div className="mt-4">
            <Link href={cta.href} className="inline-flex h-9 items-center rounded-md bg-zinc-900 px-4 text-sm font-medium text-white hover:bg-zinc-800">
              {cta.label}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-cyan-50 to-white" />
        <div className="mx-auto max-w-6xl px-4 py-16 relative">
          <div className="max-w-3xl">
            <Pill>Regenerative Medicine</Pill>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Revolutionizing <span className="text-violet-600">Regenerative</span> Medicine
            </h1>
            <p className="mt-4 text-zinc-600">
              At SNG Regenic, we engineer hybrid fabrication, drug testing, and tissue engineering technologies to accelerate discovery and personalized healthcare.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/services" className="inline-flex h-10 items-center rounded-md bg-gradient-to-r from-violet-600 to-blue-600 px-5 text-sm font-medium text-white shadow hover:shadow-md">Explore Technology</Link>
              <Link href="/research" className="inline-flex h-10 items-center rounded-md border border-zinc-300 px-5 text-sm font-medium text-zinc-900 hover:bg-zinc-50">View Research Papers</Link>
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card
              title="3D Bioprinting"
              description="Advanced printing for tissue models and scaffolds."
              items={["High-precision microfabrication", "Bioink optimization", "Rapid prototyping"]}
              cta={{ href: "/products", label: "Explore" }}
              accent="violet"
            />
            <Card
              title="Biomaterials"
              description="Novel materials engineered for neural tissue."
              items={["Neuro-compatible polymers", "Tunable mechanics", "Surface functionalization"]}
              cta={{ href: "/products", label: "View Catalog" }}
              accent="violet"
            />
            <Card
              title="Neural Culture"
              description="3D neural tissues for disease modeling."
              items={["Human iPSC-derived cells", "Long-term viability", "Electrophysiology ready"]}
              cta={{ href: "/services", label: "Learn more" }}
              accent="violet"
            />
            <Card
              title="Drug Testing"
              description="Scalable in vitro testing with analytics."
              items={["High-content imaging", "Automated workflows", "AI quantification"]}
              cta={{ href: "/services", label: "See Services" }}
              accent="violet"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Pioneering Research Areas</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-2xl">Our multidisciplinary research combines cutting-edge technology with innovative science to advance biomedical solutions.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Neurosciences" description="Neural interfaces, disease modeling, and functional recovery." cta={{ href: "/research", label: "Learn More" }} />
          <Card title="3D Bioprinting & Scaffolding" description="Hybrid fabrication and advanced scaffolds for tissue engineering." cta={{ href: "/research", label: "Learn More" }} accent="violet" />
          <Card title="3D Neural Tissue Culture" description="Physiologically relevant neural tissues for translational models." cta={{ href: "/research", label: "Learn More" }} accent="violet" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 p-8 text-white">
          <div className="flex flex-col gap-4 items-start sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">Ready to Transform Your Research?</h3>
              <p className="text-white/85 text-sm mt-1">Join the future of biomedical research with cutting-edge technology and personalized solutions.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/services" className="inline-flex h-9 items-center rounded-md bg-white/95 px-4 text-sm font-medium text-zinc-900 hover:bg-white">Schedule a Consultation</Link>
              <Link href="/contact" className="inline-flex h-9 items-center rounded-md border border-white/60 bg-transparent px-4 text-sm font-medium text-white hover:bg-white/10">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
