const fitSignals = [
  {
    number: "01",
    title: "A Defined Product Direction",
    text:
      "You already have a product category, collection concept, reference garment, design direction or tech pack that can be reviewed for development.",
  },
  {
    number: "02",
    title: "Commercial Production Quantities",
    text:
      "Your project is moving beyond very small test quantities and is ready to evaluate practical manufacturing MOQs, fabric commitments and production planning.",
  },
  {
    number: "03",
    title: "Private Label or Custom Development",
    text:
      "You need more than generic wholesale products, including custom fabrics, colours, prints, fit, labels, trims, packaging or complete OEM development.",
  },
  {
    number: "04",
    title: "A Long-Term Supply Partner",
    text:
      "You are evaluating manufacturers not only for one order, but for repeat collections, quality consistency and a supply relationship that can grow with the brand.",
  },
];

const inquiryInputs = [
  "Product category or style references",
  "Target age and size range",
  "Preferred fabric or material direction",
  "Estimated quantity per style",
  "Target launch or delivery timing",
  "Australian or other target selling markets",
];

export default function BuyerQualification() {
  return (
    <section
      className="kw-section bg-white"
      aria-labelledby="buyer-qualification-title"
    >
      <div className="kw-container py-20 lg:py-24">

        {/* Introduction */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">

          <div>
            <p className="kw-eyebrow">
              Best-Fit Manufacturing Projects
            </p>

            <h2
              id="buyer-qualification-title"
              className="kw-h2 mt-5 max-w-[560px]"
            >
              Built for Brands Ready to Develop for Production
            </h2>
          </div>

          <div>
            <p className="kw-body max-w-[720px]">
              The strongest manufacturing partnerships usually begin when the
              commercial direction of the collection is already becoming
              clear. You do not need every technical detail finalised, but a
              defined product goal makes sourcing, sampling, quotation and
              production planning much more productive.
            </p>
          </div>

        </div>


        {/* Qualification Signals */}
        <ol className="mt-14 list-none border-t border-[var(--kw-border)] p-0">

          {fitSignals.map((item) => (
            <li
              key={item.number}
              className="grid grid-cols-1 gap-5 border-b border-[var(--kw-border)] py-9 sm:grid-cols-[70px_0.72fr_1.28fr] sm:gap-7 lg:py-10"
            >

              <span
                aria-hidden="true"
                className="text-xs font-semibold tracking-[0.14em] text-[#819184]"
              >
                {item.number}
              </span>


              <h3 className="kw-h3 max-w-[300px] !text-[20px]">
                {item.title}
              </h3>


              <p className="kw-body-small max-w-[720px]">
                {item.text}
              </p>

            </li>
          ))}

        </ol>


        {/* Inquiry Preparation */}
        <div className="mt-14 grid grid-cols-1 overflow-hidden bg-[var(--kw-green)] lg:grid-cols-[0.82fr_1.18fr]">

          <article className="p-8 sm:p-10 lg:border-r lg:border-white/15 lg:p-12">

            <p className="kw-eyebrow !text-[#aebdaf]">
              Preparing an Inquiry
            </p>

            <h3 className="mt-5 max-w-[440px] text-[26px] font-semibold leading-[1.3] text-white">
              Give Us Enough Context to Evaluate the Project Properly
            </h3>

            <p className="mt-5 max-w-[440px] text-sm leading-7 text-[#cad4cb]">
              A short but specific project brief helps us understand whether
              the product, material, quantity and timing are a good
              manufacturing fit before custom sample development begins.
            </p>

          </article>


          <article className="p-8 sm:p-10 lg:p-12">

            <h3 className="text-sm font-semibold text-white">
              Helpful information for the first review
            </h3>


            <ul className="mt-7 grid list-none grid-cols-1 border-t border-white/15 p-0 sm:grid-cols-2">

              {inquiryInputs.map((item, index) => (
                <li
                  key={item}
                  className={[
                    "flex min-h-[78px] items-center gap-4 border-b border-white/15 py-5",
                    index % 2 === 1
                      ? "sm:border-l sm:border-white/15 sm:pl-7"
                      : "",
                  ].join(" ")}
                >

                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#a8b9aa]"
                  />

                  <span className="text-sm leading-6 text-[#e0e6e1]">
                    {item}
                  </span>

                </li>
              ))}

            </ul>


            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">

              <a
                href="https://kidswearfactory.com/contact/"
                className="inline-flex min-h-[50px] items-center justify-center bg-[#f4f1e9] px-7 text-sm font-semibold text-[var(--kw-green)] transition hover:bg-white"
              >
                Submit Your Project Brief
              </a>

              <p className="max-w-[270px] text-xs leading-6 text-[#adb9af]">
                A tech pack is helpful, but reference images or an existing
                garment can also support an initial review.
              </p>

            </div>

          </article>

        </div>

      </div>
    </section>
  );
}