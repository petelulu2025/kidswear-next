const heroImage =
  "/images/australia-kidswear-manufacturer-hero.webp";

export default function Hero() {
  return (
    <section
      className="kw-section bg-[#f7f5ef]"
      aria-labelledby="au-kidswear-hero-title"
    >
      <div className="kw-container grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16 lg:py-24">

        {/* Content */}
        <div>
          <p className="kw-eyebrow">
            Kidswear Manufacturing · OEM · ODM · Private Label
          </p>

          <h1
            id="au-kidswear-hero-title"
            className="kw-h1 mt-6 max-w-[700px]"
          >
            Kids Clothing Manufacturer
            <br className="hidden sm:block" />
            {" "}for Australian Brands
          </h1>

          <p className="kw-body mt-7 max-w-[620px]">
            Custom baby and kids apparel manufacturing for Australian brands,
            retailers and private labels. We support product development,
            fabric sourcing, sampling, quality control and bulk production
            through one coordinated manufacturing process.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://kidswearfactory.com/contact/"
              className="kw-primary-button"
            >
              Request Manufacturing Quote
            </a>

            <a
              href="https://kidswearfactory.com/contact/"
              className="kw-secondary-button"
            >
              Send Your Tech Pack or Reference
            </a>
          </div>

          {/* Trust Signals */}
          <div className="mt-11 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-[#d9d5cc] pt-8 sm:grid-cols-4">

            <div>
              <p className="text-xl font-semibold text-[#293622]">
                10+
              </p>
              <p className="mt-1 text-xs leading-5 text-[#6b706b]">
                Years Experience
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold text-[#293622]">
                OEM / ODM
              </p>
              <p className="mt-1 text-xs leading-5 text-[#6b706b]">
                Custom Manufacturing
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold text-[#293622]">
                GOTS
              </p>
              <p className="mt-1 text-xs leading-5 text-[#6b706b]">
                Material Options
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold text-[#293622]">
                7–14
              </p>
              <p className="mt-1 text-xs leading-5 text-[#6b706b]">
                Days Sampling
              </p>
            </div>

          </div>
        </div>


        {/* Hero Image */}
        <figure className="m-0 overflow-hidden border border-[#d8d3c9] bg-[#e9e4d9]">

          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={heroImage}
              alt="Kidswear manufacturer development table with baby clothing samples, fabric swatches and technical documents"
              width="900"
              height="1125"
              loading="eager"
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </div>

          <figcaption className="border-t border-[#d8d3c9] bg-[#f2eee5] px-6 py-4">
            <p className="text-xs leading-5 text-[#687068]">
              Product development, fabric review and sample preparation for
              custom baby and kidswear collections.
            </p>
          </figcaption>

        </figure>

      </div>
    </section>
  );
}