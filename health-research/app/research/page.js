function Stat({ value, label }) {
  return (
    <div className="rounded-lg border border-zinc-200 p-4 text-center">
      <div className="text-2xl font-semibold text-violet-600">{value}</div>
      <div className="text-xs text-zinc-600">{label}</div>
    </div>
  );
}

function InfoCard({ title, description }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6">
      <div className="font-semibold">{title}</div>
      <p className="mt-2 text-sm text-zinc-600">{description}</p>
    </div>
  );
}

export default function ResearchPage() {
  return (
    <div>
      <div className="hero-gradient">
        <section className="container-section py-14 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Pioneering the Future of <span className="text-violet-600">Regenerative Medicine</span>
          </h1>
          <p className="mt-2 text-sm text-zinc-600 max-w-2xl mx-auto">
            Advancing scientific knowledge through innovative technology, translational research, and worldwide collaborations.
          </p>
        </section>
      </div>
      <section className="container-section pb-12 grid gap-5 md:grid-cols-3">
        <InfoCard title="Neurosciences" description="Neural interfaces, disease modeling, and functional recovery research." />
        <InfoCard title="3D Bioprinting & Scaffolding" description="Hybrid fabrication and micro-architected biomaterials for soft tissues." />
        <InfoCard title="3D Neural Tissue Culture" description="Physiologically relevant in vitro models that recapitulate neural microenvironments." />
      </section>
      <section className="container-section pb-12 grid gap-4 sm:grid-cols-2">
        <div>
          <div className="text-sm font-semibold text-zinc-900">Bioinformatics & Machine Learning</div>
          <p className="mt-2 text-sm text-zinc-600">Quantitative analysis and predictive modeling to accelerate discovery.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <InfoCard title="Computational Biology" description="Pipeline automation, imaging analysis, and multi-omics integration." />
            <InfoCard title="Machine Learning" description="Segmentation, classification, and generative modeling for assays." />
          </div>
        </div>
        <div className="grid grid-rows-3 gap-3">
          <Stat value="127" label="Published Papers" />
          <Stat value="23" label="Active Collaborations" />
          <Stat value="45" label="Ongoing Projects" />
        </div>
      </section>
      <section className="container-section pb-20">
        <div className="rounded-2xl border border-zinc-200 p-6 bg-zinc-50">
          <div className="text-sm font-semibold">From Discovery to Translation</div>
          <p className="mt-2 text-sm text-zinc-600">Our comprehensive workflow delivers reproducible results and translational impact.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-4 text-sm">
            <InfoCard title="1. Discovery" description="Hypothesis generation and rapid prototyping." />
            <InfoCard title="2. Development" description="Iterative validation and optimization." />
            <InfoCard title="3. Validation" description="Robust testing and reproducibility." />
            <InfoCard title="4. Translation" description="Preclinical readiness and transfer." />
          </div>
        </div>
      </section>
    </div>
  );
}


