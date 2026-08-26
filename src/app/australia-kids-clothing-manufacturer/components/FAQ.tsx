const faqs = [
  {
    question:
      "What is your MOQ for custom kids clothing for Australian brands?",

    answer:
      "Our typical starting MOQ is around 300 pieces per style. The final minimum depends on garment type, fabric, colour, printing or washing processes, trims and the level of customisation. We recommend sharing your initial collection plan so the most practical production quantity can be reviewed style by style.",
  },

  {
    question:
      "Can we start development without a completed tech pack?",

    answer:
      "Yes. A completed tech pack can make development faster, but it is not required for the first project review. Development can also begin from reference images, sketches, an existing garment or a clear product concept before fabric, construction, measurements and sampling requirements are confirmed.",
  },

  {
    question:
      "Do you offer GOTS and OEKO-TEX material options?",

    answer:
      "We can support projects using organic cotton and other certified material options, including GOTS and OEKO-TEX related supply chains where applicable. Certification requirements should be confirmed for each project because fabric certification, processing scope and finished-garment certification are not always the same.",
  },

  {
    question:
      "Can you support children's clothing developed for the Australian market?",

    answer:
      "Yes. The intended garment category, age range, materials, construction and labelling requirements can be reviewed during product development. Certain products, including children's nightwear, may be subject to specific Australian safety, testing and labelling requirements, so these should be identified before bulk production.",
  },

  {
    question:
      "How long does custom sample development usually take?",

    answer:
      "A typical prototype development window is around 7–14 business days after the main design details, fabric direction, trims and technical requirements have been confirmed. More complex garments, custom fabrics, prints or multiple revision rounds may require additional time.",
  },

  {
    question:
      "What is your typical bulk production lead time?",

    answer:
      "Bulk production commonly takes around 30–45 days after the pre-production sample and final production details have been approved. Actual timing depends on fabric availability, custom dyeing or printing, trims, testing requirements, order quantity and production complexity.",
  },

  {
    question:
      "Can you provide full private label and OEM/ODM manufacturing?",

    answer:
      "Yes. Depending on the project, support can include product development, fabric sourcing, custom colours and prints, labels, trims, packaging, sampling and bulk manufacturing. Projects can range from adapting an existing product direction to developing a more fully customised collection.",
  },

  {
    question:
      "Can you ship finished kidswear orders to Australia?",

    answer:
      "Yes. Finished orders can be prepared for shipment to Australia. Freight method, destination, packing requirements and trade terms are confirmed for each order, with shipping arrangements coordinated after production and final quality inspection.",
  },
];


export default function FAQ() {

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: faqs.map((faq) => ({
      "@type": "Question",

      name: faq.question,

      acceptedAnswer: {
        "@type": "Answer",

        text: faq.answer,
      },
    })),
  };


  return (
    <section
      className="kw-section bg-[var(--kw-bg)]"
      aria-labelledby="faq-title"
    >

      <div className="kw-container py-20 lg:py-24">


        {/* =====================================================
            INTRODUCTION
        ====================================================== */}

        <div className="grid grid-cols-1 gap-8 border-b border-[var(--kw-border)] pb-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">

          <div>

            <p className="kw-eyebrow">
              Buyer Questions
            </p>


            <h2
              id="faq-title"
              className="kw-h2 mt-5 max-w-[560px]"
            >
              Frequently Asked Questions From Australian Brands
            </h2>

          </div>


          <div className="flex items-end">

            <p className="kw-body max-w-[720px]">
              Practical questions buyers usually need answered before moving
              from supplier evaluation into sampling and production planning.
            </p>

          </div>

        </div>



        {/* =====================================================
            FAQ LIST
        ====================================================== */}

        <div className="mt-4">

          {faqs.map((faq, index) => (

            <details
              key={faq.question}
              className="group border-b border-[var(--kw-border)]"
            >

              {/* Question */}
              <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-7 sm:py-8">

                <div className="grid flex-1 grid-cols-[40px_1fr] gap-4 sm:grid-cols-[58px_1fr] sm:gap-6">

                  <span
                    aria-hidden="true"
                    className="pt-1 text-xs font-semibold tracking-[0.14em] text-[#819184]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>


                  <h3 className="kw-h3 max-w-[820px] !text-[19px] sm:!text-[20px]">
                    {faq.question}
                  </h3>

                </div>


                {/* Plus icon */}
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center border border-[#aeb7ae] text-lg font-light text-[var(--kw-green-soft)] transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>

              </summary>



              {/* Answer */}
              <div className="grid grid-cols-[40px_1fr] gap-4 pb-8 sm:grid-cols-[58px_1fr] sm:gap-6">

                <div aria-hidden="true" />


                <p className="kw-body max-w-[820px]">
                  {faq.answer}
                </p>

              </div>

            </details>

          ))}

        </div>



        {/* =====================================================
            FAQ SCHEMA
        ====================================================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />

      </div>

    </section>
  );
}