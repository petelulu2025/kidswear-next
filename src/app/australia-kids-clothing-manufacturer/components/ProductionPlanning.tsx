const planningMetrics = [
  {
    value: "300",
    unit: "PCS",
    title: "Typical Starting MOQ",
    description:
      "Custom production typically starts from around 300 pieces per style. Final MOQ depends on fabric, colour, trims, printing, washing and product complexity.",
  },
  {
    value: "7–14",
    unit: "DAYS",
    title: "Prototype Development",
    description:
      "A practical sampling baseline after the main design, fabric, trims and technical requirements have been confirmed.",
  },
  {
    value: "30–45",
    unit: "DAYS",
    title: "Bulk Production",
    description:
      "A typical production window after the pre-production sample and final production details have been approved.",
  },
];

const projectInputs = [
  "Product type & size range",
  "Fabric preference",
  "Estimated order quantity",
  "Target market & launch timing",
];

export default function ProductionPlanning() {
  return (
    <section
      className="kw-section bg-[#fbfaf7]"
      aria-labelledby="production-planning-title"
    >
      <div className="kw-container py-20 lg:py-24">

        {/* Introduction */}
        <div className="grid grid-cols-1 gap-8 border-b border-[var(--kw-border)] pb-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">

          <div>
            <p className="kw-eyebrow">
              MOQ · Sampling · Production
            </p>

            <h2
              id="production-planning-title"
              className="kw-h2 mt-5 max-w-[560px]"
            >
              Plan Your Collection Before Committing to Production
            </h2>
          </div>


          <div className="flex items-end">
            <p className="kw-body max-w-[720px]">
              Before starting development, buyers usually need clarity around
              minimum quantities, sampling time and the likely production
              window. These planning baselines help your team evaluate whether
              a project is commercially workable before moving forward.
            </p>
          </div>

        </div>


        {/* Commercial Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3">

          {planningMetrics.map((item, index) => (
            <article
              key={item.title}
              className={[
                "py-10 lg:px-9 lg:py-12",
                index !== 0
                  ? "border-t border-[var(--kw-border)] lg:border-l lg:border-t-0"
                  : "",
              ].join(" ")}
            >

              <div className="flex items-end gap-3">

                <strong className="text-5xl font-semibold tracking-[-0.04em] text-[var(--kw-green)] sm:text-6xl">
                  {item.value}
                </strong>

                <span className="mb-2 text-xs font-semibold tracking-[0.14em] text-[#728077]">
                  {item.unit}
                </span>

              </div>


              <h3 className="kw-h3 mt-7 !text-[20px]">
                {item.title}
              </h3>


              <p className="kw-body-small mt-4 max-w-[390px]">
                {item.description}
              </p>

            </article>
          ))}

        </div>


        {/* Project Review Panel */}
        <div className="mt-6 grid grid-cols-1 overflow-hidden border border-[#d5d0c6] bg-[#f3efe6] lg:grid-cols-[0.75fr_1.25fr]">

          {/* Introduction */}
          <article className="p-8 sm:p-10 lg:border-r lg:border-[#d5d0c6] lg:p-12">

            <p className="kw-eyebrow">
              Before We Quote
            </p>

            <h3 className="kw-h3 mt-5 max-w-[430px] !text-[26px]">
              You Don&apos;t Need a Finished Tech Pack to Start
            </h3>

            <p className="kw-body-small mt-5 max-w-[440px]">
              A tech pack can make development faster, but an initial project
              can also begin with reference images, an existing garment,
              sketches or a clear product concept.
            </p>

          </article>


          {/* Required Information */}
          <article className="p-8 sm:p-10 lg:p-12">

            <h3 className="text-sm font-semibold text-[var(--kw-green)]">
              Useful information for an initial project review
            </h3>


            <ul className="mt-7 grid list-none grid-cols-1 border-t border-[#d5d0c6] p-0 sm:grid-cols-2">

              {projectInputs.map((item, index) => (
                <li
                  key={item}
                  className={[
                    "flex min-h-[78px] items-center gap-4 border-b border-[#d5d0c6] py-5",
                    index % 2 === 1
                      ? "sm:border-l sm:pl-7"
                      : "",
                  ].join(" ")}
                >

                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#718677]"
                  />

                  <span className="text-sm leading-6 text-[#555b55]">
                    {item}
                  </span>

                </li>
              ))}

            </ul>


            {/* Actions */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <a
                href="https://kidswearfactory.com/contact/"
                className="kw-primary-button"
              >
                Discuss Your Production Plan
              </a>

              <a
                href="https://kidswearfactory.com/custom-manufacturing/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--kw-green)]"
              >
                View Complete Custom Process
                <span aria-hidden="true">→</span>
              </a>

            </div>

          </article>

        </div>


        {/* Scope Note */}
        <aside className="mt-6">
          <p className="max-w-[900px] text-xs leading-6 text-[#7a7f79]">
            Production timing and MOQ vary by garment type, fabric
            availability, custom dyeing or printing, trims, testing
            requirements and approval rounds. Final quantities and timing are
            confirmed after project review.
          </p>
        </aside>

      </div>
    </section>
  );
}