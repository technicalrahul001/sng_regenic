import Link from "next/link";

function Section({ title, subtitle }) {
  return (
    <section className="container-section py-14">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          {title} <span className="text-emerald-600">Technology</span>
        </h1>
        {subtitle && (
          <p className="mt-2 text-sm text-zinc-600 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

function ProductCard({ badge, title, features, cta }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white shadow-sm">
      <div className="p-6">
        <span className="inline-flex items-center rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
          {badge}
        </span>
        <h3 className="mt-3 text-lg font-semibold">{title}</h3>
        <ul className="mt-3 space-y-2 text-sm text-zinc-700">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <Link href={cta.href} className="inline-flex h-9 items-center rounded-md bg-zinc-900 px-4 text-sm font-medium text-white hover:bg-zinc-800">
            {cta.label}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div>
      <div className="hero-gradient">
        <Section
          title="Revolutionary Biomedical"
          subtitle="Discover our cutting-edge products transforming regenerative medicine and tissue engineering."
        />
      </div>
      <section className="container-section pb-16 grid gap-5 md:grid-cols-2">
        <ProductCard
          badge="Hybrid Fabrication"
          title="Hybrid Fabrication Technology"
          features={[
            "Micro-macro multi-material system",
            "Optimized for soft tissue models",
            "Rapid prototyping workflows",
          ]}
          cta={{ href: "/contact", label: "Request a Demo" }}
        />
        <ProductCard
          badge="Biomaterials"
          title="Biomaterials for Neural Tissue Engineering"
          features={[
            "Neuro-compatible hydrogels",
            "Tunable stiffness and porosity",
            "Surface functionalization",
          ]}
          cta={{ href: "/products/catalog", label: "View Catalog" }}
        />
      </section>
      <section className="container-section pb-20">
        <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 p-8 text-white flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-semibold">Ready to Transform Your Research?</h3>
            <p className="text-white/85 text-sm mt-1">Discuss your requirements and discover how our solutions accelerate your goals.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="inline-flex h-9 items-center rounded-md bg-white/95 px-4 text-sm font-medium text-zinc-900 hover:bg-white">Request a demo</Link>
            <Link href="/services" className="inline-flex h-9 items-center rounded-md border border-white/60 bg-transparent px-4 text-sm font-medium text-white hover:bg-white/10">See Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}


