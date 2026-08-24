import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Kids Clothing Manufacturer for Australian Brands | Kidswearfactory",

  description:
    "Kidswearfactory supports Australian brands with custom kids clothing manufacturing, OEM, private label production and quality control.",

robots: {
  index: true,
  follow: true,
},
alternates: {
  canonical:
    "https://kidswearfactory.com/australia-kids-clothing-manufacturer/",
},
};

export default function AustraliaKidsClothingManufacturerPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f5ef",
        color: "#1d1d1d",
        padding: "80px 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#365f50",
            fontSize: "13px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          OEM · ODM · Private Label Kidswear
        </p>

        <h1
          style={{
            maxWidth: "850px",
            fontSize: "56px",
            lineHeight: "1.05",
            margin: "20px 0",
          }}
        >
          Kids Clothing Manufacturer Supporting Australian Brands
        </h1>

        <p
          style={{
            maxWidth: "720px",
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#5d625e",
          }}
        >
          Custom kidswear manufacturing for Australian children's
          clothing brands, retailers and established private label
          collections.
        </p>

        <div
          style={{
            display: "flex",
            gap: "14px",
            marginTop: "32px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://kidswearfactory.com/contact/"
            style={{
              background: "#293622",
              color: "#ffffff",
              padding: "15px 24px",
              textDecoration: "none",
            }}
          >
            Discuss Your Collection
          </a>

          <a
            href="https://kidswearfactory.com/products/"
            style={{
              border: "1px solid #293622",
              color: "#293622",
              padding: "15px 24px",
              textDecoration: "none",
            }}
          >
            Explore Our Products
          </a>
        </div>
      </div>
    </main>
  );
}