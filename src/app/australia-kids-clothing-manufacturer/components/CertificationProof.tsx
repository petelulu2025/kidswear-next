const certifications = [
  {
    number: "01",

    type: "GOTS",

    title: "GOTS Certification Documentation",

    image: "/images/gots-scope-certificate.webp",

    alt:
      "GOTS Scope Certificate supporting organic textile manufacturing and material sourcing",

    description:
      "For projects requiring certified organic textile materials, relevant GOTS documentation can be reviewed according to the certification scope and supply chain used for the order.",

    holder: "ADD CERTIFICATE HOLDER",

    certificateNumber: "ADD CERTIFICATE NUMBER",

    scope: "ADD EXACT CERTIFICATE SCOPE",

    validUntil: "ADD VALIDITY DATE",

    note:
      "Certification scope should be checked against the specific material, processing stage and finished-product requirements of each project.",

    verificationLabel: "Verify GOTS Certification",

    verificationUrl:
      "https://global-standard.org/find-suppliers-shops-and-inputs/certified-suppliers",
  },

  {
    number: "02",

    type: "OEKO-TEX®",

    title: "OEKO-TEX® Certification Documentation",

    image: "/images/oeko-tex-certificate.webp",

    alt:
      "OEKO-TEX Standard 100 certificate supporting certified textile material options for baby and kidswear",

    description:
      "OEKO-TEX® certified textile options can be reviewed for applicable baby and kidswear projects. The certificate holder, product scope and certificate number should match the materials used for the project.",

    holder: "ADD CERTIFICATE HOLDER",

    certificateNumber: "ADD CERTIFICATE / LABEL NUMBER",

    scope: "ADD EXACT PRODUCT SCOPE",

    validUntil: "ADD VALIDITY DATE",

    note:
      "A supplier or fabric certificate should not be presented as certification of the finished garment unless the certification scope explicitly covers it.",

    verificationLabel: "Verify OEKO-TEX® Certificate",

    verificationUrl:
      "https://www.oeko-tex.com/en/label-check",
  },
];


export default function CertificationProof() {
  return (
    <section
      className="kw-section bg-[#fbfaf7]"
      aria-labelledby="certification-proof-title"
    >
      <div className="kw-container py-20 lg:py-24">

        {/* =====================================================
            INTRODUCTION
        ====================================================== */}

        <div className="grid grid-cols-1 gap-8 border-b border-[var(--kw-border)] pb-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">

          <div>

            <p className="kw-eyebrow">
              Certification & Documentation
            </p>

            <h2
              id="certification-proof-title"
              className="kw-h2 mt-5 max-w-[580px]"
            >
              Review Certification Scope Before You Approve Materials
            </h2>

          </div>


          <div className="flex items-end">

            <p className="kw-body max-w-[720px]">
              Certification should be evaluated against the actual material,
              supplier, processing scope and finished-product requirements of
              each project. Where applicable, relevant documentation can be
              reviewed before materials are approved for production.
            </p>

          </div>

        </div>



        {/* =====================================================
            CERTIFICATES
        ====================================================== */}

        <div>

          {certifications.map((certificate, index) => (

            <article
              key={certificate.type}
              className="grid grid-cols-1 gap-10 border-b border-[var(--kw-border)] py-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16 lg:py-16"
            >

              {/* =================================================
                  CERTIFICATE IMAGE
              ================================================= */}

              <figure
                className={[
                  "m-0 overflow-hidden border border-[#d6d1c7] bg-[#eeeae1]",

                  index % 2 === 1
                    ? "lg:order-2"
                    : "",
                ].join(" ")}
              >

                <div className="aspect-[4/5] overflow-hidden bg-white">

                  <img
                    src={certificate.image}
                    alt={certificate.alt}
                    width="900"
                    height="1125"
                    loading="lazy"
                    className="h-full w-full object-contain p-4 sm:p-6"
                  />

                </div>


                <figcaption className="border-t border-[#d6d1c7] bg-[#f3efe7] px-6 py-4">

                  <p className="text-xs leading-5 text-[#737871]">
                    Certificate image shown for documentation review.
                    Certification scope and validity should be checked against
                    the current certificate.
                  </p>

                </figcaption>

              </figure>



              {/* =================================================
                  CERTIFICATE INFORMATION
              ================================================= */}

              <div
                className={
                  index % 2 === 1
                    ? "lg:order-1"
                    : ""
                }
              >

                {/* Number / Type */}
                <div className="flex items-center gap-4">

                  <span
                    aria-hidden="true"
                    className="text-xs font-semibold tracking-[0.14em] text-[#819184]"
                  >
                    {certificate.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="h-px w-10 bg-[#a7b2a8]"
                  />

                  <p className="kw-eyebrow">
                    {certificate.type}
                  </p>

                </div>



                {/* Heading */}
                <h3 className="kw-h3 mt-5 !text-[28px]">
                  {certificate.title}
                </h3>



                {/* Description */}
                <p className="kw-body mt-5 max-w-[680px]">
                  {certificate.description}
                </p>



                {/* =================================================
                    CERTIFICATE DATA
                ================================================= */}

                <dl className="mt-9 border-t border-[var(--kw-border)]">

                  {/* Certificate Holder */}
                  <div className="grid grid-cols-1 gap-2 border-b border-[var(--kw-border)] py-5 sm:grid-cols-[180px_1fr] sm:gap-8">

                    <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-[#7c877e]">
                      Certificate Holder
                    </dt>

                    <dd className="m-0 text-sm font-semibold leading-6 text-[var(--kw-green)]">
                      {certificate.holder}
                    </dd>

                  </div>



                  {/* Certificate Number */}
                  <div className="grid grid-cols-1 gap-2 border-b border-[var(--kw-border)] py-5 sm:grid-cols-[180px_1fr] sm:gap-8">

                    <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-[#7c877e]">
                      Certificate No.
                    </dt>

                    <dd className="m-0 text-sm leading-6 text-[#4f554f]">
                      {certificate.certificateNumber}
                    </dd>

                  </div>



                  {/* Scope */}
                  <div className="grid grid-cols-1 gap-2 border-b border-[var(--kw-border)] py-5 sm:grid-cols-[180px_1fr] sm:gap-8">

                    <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-[#7c877e]">
                      Certification Scope
                    </dt>

                    <dd className="m-0 text-sm leading-7 text-[#4f554f]">
                      {certificate.scope}
                    </dd>

                  </div>



                  {/* Validity */}
                  <div className="grid grid-cols-1 gap-2 border-b border-[var(--kw-border)] py-5 sm:grid-cols-[180px_1fr] sm:gap-8">

                    <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-[#7c877e]">
                      Valid Until
                    </dt>

                    <dd className="m-0 text-sm leading-6 text-[#4f554f]">
                      {certificate.validUntil}
                    </dd>

                  </div>

                </dl>



                {/* Verification */}
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">

                  <a
                    href={certificate.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kw-secondary-button"
                  >
                    {certificate.verificationLabel}

                    <span
                      aria-hidden="true"
                      className="ml-2"
                    >
                      ↗
                    </span>
                  </a>


                  <a
                    href="https://kidswearfactory.com/material-purity-gots-oekotex-baby-clothes-factory/"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--kw-green)]"
                  >
                    Material & Certification Information

                    <span aria-hidden="true">
                      →
                    </span>
                  </a>

                </div>



                {/* Important Note */}
                <aside className="mt-8 border-l-2 border-[#91a194] pl-5">

                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#738077]">
                    Scope Note
                  </p>

                  <p className="kw-body-small mt-3 max-w-[650px]">
                    {certificate.note}
                  </p>

                </aside>

              </div>

            </article>

          ))}

        </div>



        {/* =====================================================
            DOCUMENTATION DISCLAIMER
        ====================================================== */}

        <aside className="mt-10 grid grid-cols-1 gap-6 border border-[#d5d0c6] bg-[#f3efe6] p-7 sm:p-9 lg:grid-cols-[auto_1fr] lg:gap-8">

          <div>

            <span className="inline-flex min-h-[34px] items-center border border-[#aab5ab] px-4 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--kw-green)]">
              Important
            </span>

          </div>


          <div>

            <h3 className="text-base font-semibold leading-6 text-[var(--kw-green)]">
              Certification Claims Depend on the Exact Supply Chain
            </h3>

            <p className="kw-body-small mt-3 max-w-[900px]">
              Fabric certification, supplier certification, processing
              certification and finished-garment certification are different.
              The documentation applicable to a specific order should be
              confirmed before a product is marketed or labelled as certified.
            </p>

          </div>

        </aside>

      </div>
    </section>
  );
}