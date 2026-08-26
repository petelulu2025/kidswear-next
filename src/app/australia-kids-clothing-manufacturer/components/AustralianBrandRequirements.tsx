const requirements = [
  {
    number: "01",
    title: "Practical MOQ for Collection Development",
    text:
      "Australian kidswear brands often need enough flexibility to test new styles without creating excessive inventory. Typical starting quantities can be around 300 pieces per style, depending on fabric, colour, printing, washing and customisation requirements.",
  },
  {
    number: "02",
    title: "Baby-Safe & Premium Material Options",
    text:
      "Material selection can include organic cotton, cotton, Modal and other soft baby-friendly fabrics, with GOTS or OEKO-TEX related options available where applicable to the project and supply chain.",
  },
  {
    number: "03",
    title: "Development From Tech Packs or References",
    text:
      "Projects can begin from a completed tech pack, an existing garment, reference images or an initial design concept. Development can then move through fabric selection, sampling, fit review and production approval.",
  },
  {
    number: "04",
    title: "Clear Sampling, Quality & Export Coordination",
    text:
      "For overseas production, clear communication matters as much as garment quality. Sampling approvals, production updates, quality checks and shipment preparation are coordinated before bulk goods leave the factory.",
  },
];

export default function AustralianBrandRequirements() {
  return (
    <section
      className="kw-section bg-white"
      aria-labelledby="australian-brand-requirements-title"
    >
      <div className="kw-container grid grid-cols-1 gap-12 py-20 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:py-24">

        {/* Editorial Introduction */}
        <div>
          <p className="kw-eyebrow">
            Manufacturing for Australia
          </p>

          <h2
            id="australian-brand-requirements-title"
            className="kw-h2 mt-5 max-w-[520px]"
          >
            Built Around the Way Australian Kidswear Brands Source
          </h2>

          <p className="kw-body mt-6 max-w-[470px]">
            Sourcing children&apos;s apparel internationally is not only about
            finding a factory. Brands need workable quantities, suitable
            materials, reliable development and a production partner that can
            communicate clearly throughout the order.
          </p>


          {/* AU Sourcing Guide Internal Link */}
          <a
            href="https://kidswearfactory.com/kids-clothing-manufacturer-for-australian-brands-oem-private-label-sourcing-guide/"
            className="mt-7 inline-flex items-center gap-2 border-b border-[#8fa291] pb-1 text-sm font-semibold text-[var(--kw-green)] transition hover:border-[var(--kw-green)]"
          >
            Read Our Australian Kidswear Sourcing Guide

            <span aria-hidden="true">
              →
            </span>
          </a>


          {/* Editorial Note */}
          <aside className="mt-9 max-w-[450px] border-l-2 border-[#8fa291] pl-5">
            <p className="kw-body-small">
              Our role is to make the manufacturing side easier to evaluate
              before you commit to sampling or bulk production.
            </p>
          </aside>

        </div>


        {/* Requirements */}
        <div className="border-t border-[var(--kw-border)]">

          {requirements.map((item) => (
            <article
              key={item.number}
              className="grid grid-cols-[42px_1fr] gap-5 border-b border-[var(--kw-border)] py-8 sm:grid-cols-[58px_1fr] sm:gap-7 lg:py-9"
            >

              <span
                aria-hidden="true"
                className="pt-1 text-xs font-semibold tracking-[0.14em] text-[#819184]"
              >
                {item.number}
              </span>


              <div>

                <h3 className="kw-h3">
                  {item.title}
                </h3>

                <p className="kw-body-small mt-4 max-w-[760px]">
                  {item.text}
                </p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}