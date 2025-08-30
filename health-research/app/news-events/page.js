import Link from "next/link";

function NewsCard({ badge, title, summary, cta }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6">
      <span className="inline-flex items-center rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
        {badge}
      </span>
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600">{summary}</p>
      {cta && (
        <div className="mt-4">
          <Link href={cta.href} className="inline-flex h-9 items-center rounded-md bg-zinc-900 px-4 text-sm font-medium text-white hover:bg-zinc-800">
            {cta.label}
          </Link>
        </div>
      )}
    </div>
  );
}

function EventRow({ date, name, location }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4 text-sm">
      <div className="font-medium">{name}</div>
      <div className="text-zinc-600">{location}</div>
      <div className="text-zinc-600">{date}</div>
    </div>
  );
}

export default function NewsEventsPage() {
  return (
    <div>
      <div className="hero-gradient">
        <section className="container-section py-14 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Latest <span className="text-violet-600">News</span> & Upcoming <span className="text-violet-600">Events</span>
          </h1>
          <p className="mt-2 text-sm text-zinc-600 max-w-2xl mx-auto">Stay updated with breakthroughs, publications, and conferences.</p>
        </section>
      </div>
      <section className="container-section pb-12">
        <div className="grid gap-5 md:grid-cols-2">
          <NewsCard
            badge="Breakthrough"
            title="Regenerative Neural Tissue Breakthrough"
            summary="Our team demonstrates enhanced functional recovery using hybrid scaffolds."
            cta={{ href: "/research", label: "Read More" }}
          />
          <NewsCard
            badge="Publication"
            title="Journal Cover Recognition"
            summary="SNG Regenic featured on the cover for advances in neural biomaterials."
            cta={{ href: "/research", label: "View Paper" }}
          />
        </div>
      </section>
      <section className="container-section pb-12">
        <div className="text-sm font-semibold text-zinc-900 mb-3">Join us at these events</div>
        <div className="grid gap-4 md:grid-cols-2">
          <NewsCard
            badge="Conference"
            title="International Bioprinting Conference 2025"
            summary="Workshop on Hybrid Fabrication for Soft Tissues."
          />
          <NewsCard
            badge="Symposium"
            title="Regenerative Medicine Summit"
            summary="Keynote on biomaterials for neural tissue engineering."
          />
        </div>
        <div className="mt-6 space-y-3">
          <EventRow date="Mar 05, 2025" name="Neurotech Workshop" location="Singapore" />
          <EventRow date="Apr 12, 2025" name="Biofabrication Meetup" location="Berlin" />
          <EventRow date="Jun 21, 2025" name="Bioinformatics Roundtable" location="Remote" />
        </div>
      </section>
      <section className="container-section pb-20">
        <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 p-8 text-white flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-semibold">Join Our Research Mission</h3>
            <p className="text-white/85 text-sm mt-1">Collaborate with us on pioneering studies in regenerative medicine.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="inline-flex h-9 items-center rounded-md bg-white/95 px-4 text-sm font-medium text-zinc-900 hover:bg-white">Contact Us</Link>
            <Link href="/services" className="inline-flex h-9 items-center rounded-md border border-white/60 bg-transparent px-4 text-sm font-medium text-white hover:bg-white/10">See Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}


