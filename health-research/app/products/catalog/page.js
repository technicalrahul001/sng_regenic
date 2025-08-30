export default function CatalogPage() {
  return (
    <section className="container-section py-16">
      <h1 className="text-3xl font-bold tracking-tight">Product Catalog</h1>
      <p className="mt-2 text-sm text-zinc-600">Detailed catalog coming soon. Contact us for early access.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-zinc-200 bg-white p-5">
            <div className="h-28 w-full rounded-md bg-zinc-100" />
            <div className="mt-3 text-sm font-medium">Biomaterial #{i + 1}</div>
            <div className="text-xs text-zinc-600">Neural-compatible hydrogel</div>
          </div>
        ))}
      </div>
    </section>
  );
}


