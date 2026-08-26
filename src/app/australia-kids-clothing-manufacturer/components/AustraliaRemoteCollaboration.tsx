const collaborationItems = [
  {
    number: "01",
    title: "Product Information",
    text:
      "Tech packs, reference garments, sketches or product images help define the development direction before sampling begins.",
    detail: "References · Measurements · Fabrics · Quantity",
  },
  {
    number: "02",
    title: "Physical Sample Review",
    text:
      "Fabric swatches and development samples can be shipped to your team in Australia for fit, construction and material review.",
    detail: "Swatches · Samples · Fit comments · Revisions",
  },
  {
    number: "03",
    title: "Documented Approvals",
    text:
      "Fabric, colour, measurements, trims, labels, prints and packing details should be confirmed before bulk production.",
    detail: "Colour · Fit · Trims · Labels · Packaging",
  },
  {
    number: "04",
    title: "Production Visibility",
    text:
      "Relevant production status, approvals and quality-control information can be coordinated with your team while manufacturing is underway.",
    detail: "Production · Approvals · Quality control",
  },
  {
    number: "05",
    title: "Shipment Coordination",
    text:
      "After final inspection and packing, freight requirements can be coordinated according to destination, order size and agreed trade terms.",
    detail: "Packing · Freight · Destination",
  },
];

export default function AustraliaRemoteCollaboration() {
  return (
    <section
      className="kw-section bg-[#f4f1e9]"
      aria-labelledby="remote-collaboration-title"
    >
      <div className="kw-container py-20 lg:py-24">

        {/* Introduction */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">

          <div>
            <p className="kw-eyebrow">
              Australia ↔ China
            </p>

            <h2
              id="remote-collaboration-title"
              className="kw-h2 mt-5 max-w-[560px]"
            >
              Managing Development Across Distance
            </h2>
          </div>


          <div>
            <p className="kw-body max-w-[720px]">
              Offshore manufacturing works best when specifications, samples
              and approvals remain visible to both teams. Physical distance is
              manageable when each important product decision is documented
              before the next production stage begins.
            </p>
          </div>

        </div>


        {/* Main Collaboration Layout */}
        <div className="mt-14 grid grid-cols-1 overflow-hidden border border-[#d5d0c5] bg-white lg:grid-cols-[0.72fr_1.28fr]">

          {/* Australia / China Context */}
          <aside className="border-b border-[#d5d0c5] bg-[#e9e4d9] p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">

            <p className="kw-eyebrow">
              Remote Development
            </p>

            <h3 className="kw-h3 mt-5 max-w-[390px] !text-[26px]">
              Clear Approvals Matter More Than Physical Distance
            </h3>

            <p className="kw-body-small mt-5 max-w-[410px]">
              Your team does not need to be physically present for every
              manufacturing decision. What matters is having a clear reference
              for the product before work moves forward.
            </p>


            {/* Australia ↔ China visual */}
            <div className="mt-10 border-t border-[#cfc8bb] pt-8">

              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#78847b]">
                    Australia
                  </p>

                  <p className="mt-2 text-sm font-semibold text-[var(--kw-green)]">
                    Brand Team
                  </p>
                </div>


                <div
                  aria-hidden="true"
                  className="flex items-center gap-2"
                >
                  <span className="h-px w-8 bg-[#9eaa9f]" />
                  <span className="text-[#718677]">↔</span>
                  <span className="h-px w-8 bg-[#9eaa9f]" />
                </div>


                <div className="text-right">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#78847b]">
                    China
                  </p>

                  <p className="mt-2 text-sm font-semibold text-[var(--kw-green)]">
                    Manufacturing Team
                  </p>
                </div>

              </div>

            </div>


            {/* Core principle */}
            <blockquote className="m-0 mt-10 border-l-2 border-[#849688] pl-5">

              <p className="kw-body-small">
                One approved product reference is more useful than a long chain
                of unclear messages.
              </p>

            </blockquote>

          </aside>


          {/* Collaboration Information */}
          <div className="px-7 sm:px-10 lg:px-12">

            <ol className="m-0 list-none p-0">

              {collaborationItems.map((item) => (
                <li
                  key={item.number}
                  className="grid grid-cols-[42px_1fr] gap-5 border-b border-[var(--kw-border)] py-8 last:border-b-0 sm:grid-cols-[58px_1fr] sm:gap-7"
                >

                  <span
                    aria-hidden="true"
                    className="pt-1 text-xs font-semibold tracking-[0.13em] text-[#829085]"
                  >
                    {item.number}
                  </span>


                  <div>
                    <h3 className="kw-h3 !text-[20px]">
                      {item.title}
                    </h3>

                    <p className="kw-body-small mt-3 max-w-[720px]">
                      {item.text}
                    </p>

                    <p className="mt-4 text-xs font-semibold tracking-[0.03em] text-[#858b84]">
                      {item.detail}
                    </p>
                  </div>

                </li>
              ))}

            </ol>

          </div>

        </div>


        {/* Bottom CTA */}
        <div className="grid grid-cols-1 bg-[var(--kw-green)] lg:grid-cols-[1fr_auto]">

          <div className="p-8 sm:p-10">

            <p className="kw-eyebrow !text-[#aebdaf]">
              Before Sampling
            </p>

            <h3 className="mt-4 max-w-[700px] text-2xl font-semibold leading-[1.3] text-white">
              Share What You Already Have — We Can Review the Next Step
            </h3>

            <p className="mt-4 max-w-[700px] text-sm leading-7 text-[#ccd5cd]">
              A completed tech pack is helpful, but reference images, an
              existing garment or an early product concept can also be used for
              an initial manufacturing review.
            </p>

          </div>


          <div className="flex items-center border-t border-white/15 p-8 sm:p-10 lg:border-l lg:border-t-0">

            <a
              href="https://kidswearfactory.com/contact/"
              className="inline-flex min-h-[50px] min-w-[220px] items-center justify-center bg-[#f4f1e9] px-7 text-sm font-semibold text-[var(--kw-green)] transition hover:bg-white"
            >
              Start a Project Review
            </a>

          </div>

        </div>


        <aside className="mt-6">
          <p className="max-w-[900px] text-xs leading-6 text-[#7a7f79]">
            Sampling, freight, approval timing and communication arrangements
            vary according to product complexity, destination, order size and
            project requirements.
          </p>
        </aside>

      </div>
    </section>
  );
}