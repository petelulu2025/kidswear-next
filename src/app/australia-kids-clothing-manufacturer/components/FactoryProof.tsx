const proofStages = [
  {
    number: "01",
    label: "Before Bulk Production",
    title: "Development Control",
    image: "/images/kidswear-sample-quality-review.webp",
    alt:
      "Kidswear sample review with measurement sheet fabric swatches and approved production specifications",
    description:
      "Bulk consistency starts with an approved production reference. Measurements, construction details, fabrics, trims, colours and labelling requirements are reviewed before mass production begins.",
    checks: [
      "Tech pack & measurement review",
      "Fabric and trim confirmation",
      "Fit and grading review",
      "PPS approval before bulk cutting",
    ],
    caption:
      "Approved sample, measurements, fabric and production details reviewed before bulk manufacturing.",
  },
  {
    number: "02",
    label: "During Manufacturing",
    title: "In-Line Production Control",
    image: "/images/kidswear-inline-quality-control.webp",
    alt:
      "In-line quality control inspection during children's clothing production",
    description:
      "Quality problems are easier to correct while production is underway. Construction, measurements and workmanship are checked at relevant stages instead of waiting until the entire order is finished.",
    checks: [
      "Fabric inspection",
      "In-line sewing checks",
      "Measurement control",
      "Workmanship monitoring",
    ],
    caption:
      "Production garments checked against approved measurement and workmanship requirements.",
  },
  {
    number: "03",
    label: "Before Shipment",
    title: "Final Release Control",
    image: "/images/kidswear-final-inspection-packing.webp",
    alt:
      "Final inspection and packing check for custom children's clothing before shipment",
    description:
      "Finished garments are reviewed against the approved production standard before packing and shipment preparation, helping reduce avoidable quality issues after delivery.",
    checks: [
      "Final garment inspection",
      "Labels & finishing review",
      "Packing and quantity checks",
      "Needle detection where required",
    ],
    caption:
      "Finished garments, labels and packing checked before shipment preparation.",
  },
];

export default function FactoryProof() {
  return (
    <section
      className="kw-section bg-white"
      aria-labelledby="factory-proof-title"
    >
      <div className="kw-container py-20 lg:py-24">

        {/* Introduction */}
        <div className="grid grid-cols-1 gap-8 border-b border-[var(--kw-border)] pb-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">

          <div>
            <p className="kw-eyebrow">
              Factory Proof & Quality Assurance
            </p>

            <h2
              id="factory-proof-title"
              className="kw-h2 mt-5 max-w-[580px]"
            >
              Quality Is Controlled Before It Becomes a Shipping Problem
            </h2>
          </div>

          <div className="flex items-end">
            <p className="kw-body max-w-[720px]">
              A good prototype is only the starting point. Repeatable bulk
              production depends on keeping approved specifications visible
              throughout cutting, sewing, finishing, inspection and packing.
            </p>
          </div>

        </div>


        {/* QC stages */}
        <div>

          {proofStages.map((stage, index) => (
            <article
              key={stage.number}
              className="grid grid-cols-1 gap-10 border-b border-[var(--kw-border)] py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:py-16"
            >

              {/* Image */}
              <figure
                className={[
                  "m-0 overflow-hidden border border-[#d7d2c8] bg-[#eee9df]",
                  index % 2 === 1 ? "lg:order-2" : "",
                ].join(" ")}
              >

                <div className="aspect-[4/3] overflow-hidden">

                  <img
                    src={stage.image}
                    alt={stage.alt}
                    width="900"
                    height="675"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />

                </div>


                <figcaption className="border-t border-[#d7d2c8] bg-[#f6f3ec] px-6 py-4">

                  <p className="text-xs leading-5 text-[#737871]">
                    {stage.caption}
                  </p>

                </figcaption>

              </figure>


              {/* Text */}
              <div
                className={index % 2 === 1 ? "lg:order-1" : ""}
              >

                <div className="flex items-center gap-4">

                  <span
                    aria-hidden="true"
                    className="text-xs font-semibold tracking-[0.14em] text-[#819184]"
                  >
                    {stage.number}
                  </span>

                  <span className="h-px w-10 bg-[#a7b2a8]" />

                  <p className="kw-eyebrow">
                    {stage.label}
                  </p>

                </div>


                <h3 className="kw-h3 mt-5 !text-[28px]">
                  {stage.title}
                </h3>


                <p className="kw-body mt-5 max-w-[620px]">
                  {stage.description}
                </p>


                <ul className="mt-8 grid list-none grid-cols-1 border-t border-[var(--kw-border)] p-0 sm:grid-cols-2">

                  {stage.checks.map((check, checkIndex) => (
                    <li
                      key={check}
                      className={[
                        "flex min-h-[68px] items-center gap-3 border-b border-[var(--kw-border)] py-4",
                        checkIndex % 2 === 1
                          ? "sm:border-l sm:pl-5"
                          : "",
                      ].join(" ")}
                    >

                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#718677]"
                      />

                      <span className="text-sm leading-6 text-[#555b55]">
                        {check}
                      </span>

                    </li>
                  ))}

                </ul>

              </div>

            </article>
          ))}

        </div>


        {/* Bottom CTA */}
        <aside className="mt-12 grid grid-cols-1 gap-8 bg-[var(--kw-bg)] p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">

          <div>

            <p className="kw-eyebrow">
              Production Transparency
            </p>

            <h3 className="kw-h3 mt-4 max-w-[720px] !text-[26px]">
              Review Factory Capability and Samples Before You Commit
            </h3>

            <p className="kw-body-small mt-4 max-w-[720px]">
              Buyers can discuss product specifications, review development
              samples and evaluate manufacturing capability before moving into
              bulk production.
            </p>

          </div>


          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

            <a
              href="https://kidswearfactory.com/contact/"
              className="kw-primary-button"
            >
              Discuss Your Project
            </a>

            <a
              href="https://kidswearfactory.com/about-us/"
              className="kw-secondary-button"
            >
              Explore Our Factory
            </a>

          </div>

        </aside>

      </div>
    </section>
  );
}