const materials = [
  {
    name: "Organic Cotton",
    detail:
      "GOTS-related organic cotton options for babywear, kidswear and private label collections where applicable to the project and supply chain.",
  },
  {
    name: "Cotton Jersey",
    detail:
      "Soft single-knit constructions suited to bodysuits, tops, basics and lightweight everyday garments.",
  },
  {
    name: "Cotton Interlock",
    detail:
      "A smoother and more structured double-knit option for premium babywear, sleepwear and coordinated sets.",
  },
  {
    name: "Modal Blends",
    detail:
      "Soft and fluid fabric options for collections where hand-feel, drape and next-to-skin comfort are priorities.",
  },
  {
    name: "Bamboo Blends",
    detail:
      "Soft textile options available for selected baby and kidswear developments according to project requirements.",
  },
];

const marketChecks = [
  {
    number: "01",
    title: "Children’s Nightwear",
    text:
      "Certain children's nightwear products sold in Australia are subject to mandatory fire-safety and labelling requirements. Fabric type, garment construction and intended use should be reviewed before production.",
  },
  {
    number: "02",
    title: "Care Labelling",
    text:
      "Clothing and textile products supplied in Australia generally require appropriate care information. Final labelling should be reviewed according to the product and selling market.",
  },
  {
    number: "03",
    title: "Trims & Child-Safe Construction",
    text:
      "Drawstrings, attachments, labels, trims and garment construction should be reviewed according to the age group, garment function and intended use.",
  },
  {
    number: "04",
    title: "Testing & Documentation",
    text:
      "Testing requirements vary by product. Material, construction and documentation needs can be reviewed before bulk production, with relevant testing coordinated where required.",
  },
];

export default function MaterialsCompliance() {
  return (
    <section
      className="kw-section bg-[var(--kw-green)] text-white"
      aria-labelledby="materials-compliance-title"
    >
      <div className="kw-container py-20 lg:py-24">

        {/* Introduction */}
        <div className="grid grid-cols-1 gap-8 border-b border-white/20 pb-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">

          <div>
            <p className="kw-eyebrow !text-[#b8c7ba]">
              Materials & Market Readiness
            </p>

            <h2
              id="materials-compliance-title"
              className="mt-5 max-w-[600px] text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-white sm:text-[40px]"
            >
              Materials Selected for Comfort, Performance and Market
              Requirements
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-[720px] text-base leading-[1.9] text-[#d4ddd5]">
              Material selection for baby and children&apos;s apparel affects
              more than hand-feel. Fabric composition, weight, construction,
              dyeing, garment use and target-market requirements should all be
              considered before a style moves into bulk production.
            </p>
          </div>

        </div>


        {/* Main Content */}
        <div className="grid grid-cols-1 gap-14 pt-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* Materials */}
          <article aria-labelledby="material-options-title">

            <p className="kw-eyebrow !text-[#aebdaf]">
              Material Development
            </p>

            <h3
              id="material-options-title"
              className="mt-4 text-2xl font-semibold leading-[1.3] text-white"
            >
              Fabric Options for Custom Kidswear
            </h3>


            <dl className="mt-8 border-t border-white/20">

              {materials.map((material) => (
                <div
                  key={material.name}
                  className="grid grid-cols-1 gap-3 border-b border-white/15 py-6 sm:grid-cols-[150px_1fr] sm:gap-7"
                >
                  <dt className="text-sm font-semibold text-white">
                    {material.name}
                  </dt>

                  <dd className="m-0 text-sm leading-7 text-[#cad4cb]">
                    {material.detail}
                  </dd>
                </div>
              ))}

            </dl>


            <a
              href="https://kidswearfactory.com/material-purity-gots-oekotex-baby-clothes-factory/"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#b9c9bb] pb-1 text-sm font-semibold text-[#eef2ee] transition hover:text-white"
            >
              Explore Material & Certification Information
              <span aria-hidden="true">→</span>
            </a>

          </article>


          {/* Australia Market */}
          <article aria-labelledby="australia-market-checks-title">

            <p className="kw-eyebrow !text-[#aebdaf]">
              Australian Market Considerations
            </p>

            <h3
              id="australia-market-checks-title"
              className="mt-4 max-w-[520px] text-2xl font-semibold leading-[1.3] text-white"
            >
              Develop With the Final Selling Market in Mind
            </h3>


            <ol className="mt-8 list-none p-0">

              {marketChecks.map((item) => (
                <li
                  key={item.number}
                  className="grid grid-cols-[42px_1fr] gap-5 border-t border-white/20 py-7 sm:grid-cols-[56px_1fr]"
                >
                  <span
                    aria-hidden="true"
                    className="pt-1 text-xs font-semibold tracking-[0.12em] text-[#9eafa0]"
                  >
                    {item.number}
                  </span>

                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-[#cad4cb]">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}

            </ol>


            {/* Official References */}
            <aside className="mt-5 border-l border-[#93a495] pl-5">

              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#aebdaf]">
                Official Australian References
              </p>

              <div className="mt-4 flex flex-col gap-3">

                <a
                  href="https://www.productsafety.gov.au/business/search-mandatory-standards/nightwear-for-children-mandatory-standard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#e3e9e3] transition hover:text-white"
                >
                  Children&apos;s Nightwear Mandatory Standard
                  <span aria-hidden="true">↗</span>
                </a>

                <a
                  href="https://www.productsafety.gov.au/business/search-mandatory-standards/care-labelling-for-clothing-and-textiles-mandatory-standard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#e3e9e3] transition hover:text-white"
                >
                  Clothing & Textile Care Labelling Standard
                  <span aria-hidden="true">↗</span>
                </a>

              </div>

            </aside>

          </article>

        </div>


        {/* Compliance Note */}
        <aside className="mt-14 border-t border-white/20 pt-7">
          <p className="max-w-[900px] text-xs leading-6 text-[#aeb8af]">
            Compliance requirements depend on the exact garment category,
            design, materials, age range and intended use. Testing,
            certification and labelling requirements should be confirmed for
            each production project before products are placed on the
            Australian market.
          </p>
        </aside>

      </div>
    </section>
  );
}