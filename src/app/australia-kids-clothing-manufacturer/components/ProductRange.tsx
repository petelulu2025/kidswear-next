const ageRanges = [
  {
    number: "01",
    eyebrow: "Baby",
    age: "0–24 Months",
    title: "Baby Essentials",

    image: "/images/custom-baby-clothing-manufacturing.webp",

    alt:
      "Custom baby clothing samples developed for private label collections",

    description:
      "Develop soft and practical babywear collections from newborn basics to coordinated private label ranges.",

    products: [
      "Baby Bodysuits",
      "Rompers",
      "Baby Dresses",
      "Bibs & Baby Accessories",
      "Baby Pajamas",
    ],

    href:
      "https://kidswearfactory.com/products/?e-filter-13d54e8-product_cat=baby-0-24-months",
  },

  {
    number: "02",
    eyebrow: "Toddlers",
    age: "2–6 Years",
    title: "Toddler Collections",

    image: "/images/custom-toddler-clothing-manufacturing.webp",

    alt:
      "Private label toddler clothing collection samples for custom manufacturing",

    description:
      "Build comfortable everyday collections with flexible fabric, colour, print and private label development.",

    products: [
      "Matching Sets",
      "T-Shirts & Tops",
      "Pants & Shorts",
      "Dresses",
      "Pajamas",
    ],

    href:
      "https://kidswearfactory.com/products/?e-filter-13d54e8-product_cat=toddlers-2-6-years",
  },

  {
    number: "03",
    eyebrow: "Kids",
    age: "7–14 Years",
    title: "Kidswear Collections",

    image: "/images/custom-kidswear-manufacturing.webp",

    alt:
      "Custom kidswear samples including sets sweatshirts and everyday children's clothing",

    description:
      "Develop more structured and trend-led kidswear for growing brands, seasonal ranges and retail collections.",

    products: [
      "Everyday Kidswear",
      "Tracksuits",
      "Dungarees",
      "Sweatshirts",
      "Seasonal Sets",
    ],

    href: "https://kidswearfactory.com/products/",
  },
];


const extensions = [
  "Clothing Sets",
  "Knitwear & Sweaters",
  "Pajamas & Sleepwear",
  "Everyday Kidswear",
];


export default function ProductRange() {
  return (
    <section
      className="kw-section bg-[#f3efe6]"
      aria-labelledby="product-range-title"
    >
      <div className="kw-container py-20 lg:py-24">

        {/* Intro */}
        <div className="grid grid-cols-1 gap-8 border-b border-[#d4cec1] pb-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">

          <div>
            <p className="kw-eyebrow">
              What We Manufacture
            </p>

            <h2
              id="product-range-title"
              className="kw-h2 mt-5 max-w-[560px]"
            >
              Custom Kidswear Across Every Growth Stage
            </h2>
          </div>


          <div className="flex items-end">

            <p className="kw-body max-w-[720px]">
              From newborn essentials to school-age collections, we support
              Australian brands with custom development across baby, toddler
              and kidswear categories. Fabrics, colours, prints, trims, labels
              and packaging can be adapted around your collection requirements.
            </p>

          </div>

        </div>



        {/* Product Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3">

          {ageRanges.map((range, index) => (

            <article
              key={range.number}
              className={[
                "group py-10 lg:py-12",

                index === 0
                  ? "lg:pr-8"
                  : "",

                index === 1
                  ? "border-t border-[#d4cec1] lg:border-l lg:border-t-0 lg:px-8"
                  : "",

                index === 2
                  ? "border-t border-[#d4cec1] lg:border-l lg:border-t-0 lg:pl-8"
                  : "",
              ].join(" ")}
            >

              {/* Product Image */}
              <figure className="m-0 overflow-hidden bg-[#e5dfd2]">

                <div className="aspect-[4/3] overflow-hidden">

                  <img
                    src={range.image}
                    alt={range.alt}
                    width="800"
                    height="600"
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />

                </div>

              </figure>



              {/* Number / Age */}
              <div className="mt-7 flex items-start justify-between gap-6">

                <span
                  aria-hidden="true"
                  className="text-xs font-semibold tracking-[0.14em] text-[#879488]"
                >
                  {range.number}
                </span>


                <div className="text-right">

                  <p className="kw-eyebrow !text-[11px]">
                    {range.eyebrow}
                  </p>

                  <p className="mt-1 text-sm text-[var(--kw-text-muted)]">
                    {range.age}
                  </p>

                </div>

              </div>



              {/* Product Heading */}
              <h3 className="kw-h3 mt-6 text-[24px]">
                {range.title}
              </h3>


              <p className="kw-body-small mt-5 min-h-[92px]">
                {range.description}
              </p>



              {/* Product List */}
              <ul className="mt-7 list-none border-t border-[#d8d2c6] p-0">

                {range.products.map((product) => (

                  <li
                    key={product}
                    className="border-b border-[#ddd7cb] py-3"
                  >

                    <span className="text-sm leading-6 text-[#4f554f]">
                      {product}
                    </span>

                  </li>

                ))}

              </ul>



              {/* Internal Product Link */}
              <a
                href={range.href}
                className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[var(--kw-green)] transition-all group-hover:gap-4"
              >
                Explore {range.eyebrow} Collection

                <span aria-hidden="true">
                  →
                </span>
              </a>

            </article>

          ))}

        </div>



        {/* Collection Extensions */}
        <div className="mt-8 border-t border-[#cfc8bb] pt-10">

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.55fr_1.45fr]">

            <div>

              <p className="kw-eyebrow">
                Collection Extensions
              </p>

              <p className="kw-body-small mt-4 max-w-[330px]">
                Expand your core age-range collection with additional seasonal
                or category-specific product groups.
              </p>

            </div>



            <ul className="grid list-none grid-cols-1 border-t border-[#d4cec1] p-0 sm:grid-cols-2 lg:grid-cols-4 lg:border-t-0">

              {extensions.map((item, index) => (

                <li
                  key={item}
                  className={[
                    "flex min-h-[100px] items-center border-b border-[#d4cec1] py-5 sm:px-5 lg:border-b-0",

                    index !== 0
                      ? "lg:border-l lg:border-[#d4cec1]"
                      : "",
                  ].join(" ")}
                >

                  <span className="max-w-[160px] text-sm font-semibold leading-6 text-[var(--kw-green)]">
                    {item}
                  </span>

                </li>

              ))}

            </ul>

          </div>

        </div>



        {/* Main Product Hub Link */}
        <div className="mt-12 flex justify-start lg:justify-end">

          <a
            href="https://kidswearfactory.com/products/"
            className="inline-flex items-center gap-3 border-b border-[var(--kw-green)] pb-1 text-sm font-semibold text-[var(--kw-green)]"
          >
            View Complete Product Collection

            <span aria-hidden="true">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}