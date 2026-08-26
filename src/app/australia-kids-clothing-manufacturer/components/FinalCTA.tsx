const projectInfo = [
  "Product or collection references",
  "Estimated quantity per style",
  "Target fabric or material",
  "Size range and target age",
  "Private label requirements",
  "Target launch or delivery timing",
];

export default function FinalCTA() {
  return (
    <section
      className="kw-section bg-[var(--kw-green)] text-white"
      aria-labelledby="final-cta-title"
    >
      <div className="kw-container py-20 lg:py-24">

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">

          {/* Main CTA */}
          <div className="flex flex-col justify-center">

            <p className="kw-eyebrow !text-[#b5c3b7]">
              Start Your Australia Kidswear Project
            </p>

            <h2
              id="final-cta-title"
              className="mt-5 max-w-[600px] text-[34px] font-semibold leading-[1.16] tracking-[-0.02em] text-white sm:text-[42px]"
            >
              Looking for a Long-Term Kidswear Manufacturing Partner?
            </h2>

            <p className="mt-6 max-w-[600px] text-base leading-[1.9] text-[#d0d8d1]">
              Share your collection direction with our team so the product,
              material, quantity and development requirements can be reviewed
              before sampling begins.
            </p>


            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

              <a
                href="https://kidswearfactory.com/contact/"
                className="inline-flex min-h-[50px] items-center justify-center bg-[#f4f1e9] px-7 text-sm font-semibold text-[var(--kw-green)] transition hover:bg-white"
              >
                Request a Manufacturing Review
              </a>

              <a
                href="https://kidswearfactory.com/contact/"
                className="inline-flex min-h-[50px] items-center justify-center border border-white/40 px-7 text-sm font-semibold text-white transition hover:border-white hover:bg-white/5"
              >
                Send Your Tech Pack or Reference
              </a>

            </div>


            <p className="mt-6 max-w-[520px] text-xs leading-6 text-[#aeb9af]">
              A completed tech pack is not required for an initial review.
              Reference images, sketches or an existing garment can also be
              used to start the discussion.
            </p>

          </div>


          {/* Project Information */}
          <aside className="border border-white/20 bg-white/[0.04]">

            <div className="border-b border-white/15 p-7 sm:p-9">

              <p className="kw-eyebrow !text-[#aebdaf]">
                Helpful Project Information
              </p>

              <h3 className="mt-4 text-[22px] font-semibold leading-7 text-white">
                What to Include in Your Initial Inquiry
              </h3>

            </div>


            <ul className="grid list-none grid-cols-1 p-0 sm:grid-cols-2">

              {projectInfo.map((item, index) => (
                <li
                  key={item}
                  className={[
                    "flex min-h-[84px] items-center gap-4 border-b border-white/15 px-7 py-5",
                    index % 2 === 1
                      ? "sm:border-l sm:border-white/15"
                      : "",
                  ].join(" ")}
                >

                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#a9bbaa]"
                  />

                  <span className="text-sm leading-6 text-[#e0e6e1]">
                    {item}
                  </span>

                </li>
              ))}

            </ul>


            {/* Next Step */}
            <div className="p-7 sm:p-9">

              <p className="kw-eyebrow !text-[#aebdaf]">
                What Happens Next
              </p>


              <ol className="mt-6 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-3">

                <li>
                  <span className="text-xs font-semibold text-[#91a494]">
                    01
                  </span>

                  <p className="mt-2 text-sm font-semibold text-white">
                    Project Review
                  </p>
                </li>


                <li>
                  <span className="text-xs font-semibold text-[#91a494]">
                    02
                  </span>

                  <p className="mt-2 text-sm font-semibold text-white">
                    Development Proposal
                  </p>
                </li>


                <li>
                  <span className="text-xs font-semibold text-[#91a494]">
                    03
                  </span>

                  <p className="mt-2 text-sm font-semibold text-white">
                    Sampling
                  </p>
                </li>

              </ol>

            </div>

          </aside>

        </div>


        {/* Internal Navigation */}
        <nav
          aria-label="Related manufacturing resources"
          className="mt-16 flex flex-col gap-5 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >

          <p className="text-xs leading-6 text-[#9fac9f]">
            OEM · ODM · Private Label Baby & Kids Clothing Manufacturing
          </p>


          <div className="flex flex-wrap gap-x-6 gap-y-3">

            <a
              href="https://kidswearfactory.com/products/"
              className="text-xs font-semibold text-[#cbd4cc] transition hover:text-white"
            >
              Products
            </a>

            <a
              href="https://kidswearfactory.com/complete-custom-process/"
              className="text-xs font-semibold text-[#cbd4cc] transition hover:text-white"
            >
              Custom Process
            </a>

            <a
              href="https://kidswearfactory.com/material-purity-gots-oekotex-baby-clothes-factory/"
              className="text-xs font-semibold text-[#cbd4cc] transition hover:text-white"
            >
              Materials
            </a>

            <a
              href="https://kidswearfactory.com/about-us/"
              className="text-xs font-semibold text-[#cbd4cc] transition hover:text-white"
            >
              Factory
            </a>

          </div>

        </nav>

      </div>
    </section>
  );
}