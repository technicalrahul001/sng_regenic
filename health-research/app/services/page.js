import Link from "next/link";

function ServiceCard({ badge, title, points, note }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white shadow-sm">
      <div className="p-6">
        <span className="inline-flex items-center rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
          {badge}
        </span>
        <h3 className="mt-3 text-lg font-semibold">{title}</h3>
        <ul className="mt-3 space-y-2 text-sm text-zinc-700">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        {note && <p className="mt-3 text-xs text-zinc-500">{note}</p>}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div>
      <div className="hero-gradient">
        <section className="container-section py-14 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Comprehensive <span className="text-violet-600">Research Support</span>
          </h1>
          <p className="mt-2 text-sm text-zinc-600 max-w-2xl mx-auto">
            From custom scaffold design to training programs, we provide end-to-end support for your projects.
          </p>
        </section>
      </div>
      <section className="container-section pb-16 grid gap-5 md:grid-cols-2">
        <ServiceCard
          badge="Design Service"
          title="Customized 3D Scaffolds & Soft Tissues"
          points={["Bespoke scaffold design", "Cellular compatibility validation", "Bioreactor-ready setups"]}
          note="Delivery: 2–8 weeks"
        />
        <ServiceCard
          badge="Comprehensive Training"
          title="Comprehensive Training Program"
          points={["Hybrid fabrication", "Advanced tissue engineering", "Assay development"]}
          note="Certificate upon completion"
        />
      </section>
      <section className="container-section pb-20">
        <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 p-8 text-white flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-semibold">Ready to Start Your Project?</h3>
            <p className="text-white/85 text-sm mt-1">Contact our team to discuss your requirements and timelines.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="inline-flex h-9 items-center rounded-md bg-white/95 px-4 text-sm font-medium text-zinc-900 hover:bg-white">Start a Project</Link>
            <Link href="/research" className="inline-flex h-9 items-center rounded-md border border-white/60 bg-transparent px-4 text-sm font-medium text-white hover:bg-white/10">Explore R&D</Link>
          </div>
        </div>
      </section>
    </div>
  );
}


