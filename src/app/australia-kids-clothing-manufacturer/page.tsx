import type { Metadata } from "next";

import Hero from "./components/Hero";
import AustralianBrandRequirements from "./components/AustralianBrandRequirements";
import ProductRange from "./components/ProductRange";
import MaterialsCompliance from "./components/MaterialsCompliance";
import ProductionPlanning from "./components/ProductionPlanning";
import FactoryProof from "./components/FactoryProof";
import AustraliaRemoteCollaboration from "./components/AustraliaRemoteCollaboration";
import BuyerQualification from "./components/BuyerQualification";
import FAQ from "./components/FAQ";
import CertificationProof from "./components/CertificationProof";
import FinalCTA from "./components/FinalCTA";


/* =========================================================
   PAGE SEO
========================================================= */

const siteUrl = "https://kidswearfactory.com";

const canonicalUrl =
  `${siteUrl}/australia-kids-clothing-manufacturer/`;

const metaTitle =
  "Kids Clothing Manufacturer for Australian Brands | Kidswearfactory";

const metaDescription =
  "Kids clothing manufacturer for Australian brands offering OEM, ODM, private label, organic cotton options, sampling, quality control and bulk production.";


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: metaTitle,

  description: metaDescription,

  alternates: {
    canonical: canonicalUrl,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",

    url: canonicalUrl,

    siteName: "Kidswearfactory",

    title: metaTitle,

    description: metaDescription,
  },

  twitter: {
    card: "summary_large_image",

    title: metaTitle,

    description: metaDescription,
  },
};


/* =========================================================
   STRUCTURED DATA

   FAQPage Schema is already generated inside FAQ.tsx.
========================================================= */

const organizationId =
  `${siteUrl}/#organization`;

const serviceId =
  `${canonicalUrl}#service`;

const webPageId =
  `${canonicalUrl}#webpage`;


const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    /* -----------------------------------------------------
       ORGANIZATION
    ----------------------------------------------------- */

    {
      "@type": "Organization",

      "@id": organizationId,

      name: "Kidswearfactory",

      url: `${siteUrl}/`,
    },


    /* -----------------------------------------------------
       SERVICE
    ----------------------------------------------------- */

    {
      "@type": "Service",

      "@id": serviceId,

      name: "Kids Clothing Manufacturing for Australian Brands",

      url: canonicalUrl,

      serviceType:
        "OEM, ODM and private label baby and kids clothing manufacturing",

      description:
        "Custom baby and kids clothing manufacturing for Australian brands, including product development, fabric sourcing, sampling, private label development, quality control and bulk production.",

      provider: {
        "@id": organizationId,
      },

      areaServed: {
        "@type": "Country",

        name: "Australia",
      },

      audience: {
        "@type": "BusinessAudience",

        audienceType:
          "Kidswear brands, retailers and private label businesses",
      },
    },


    /* -----------------------------------------------------
       WEB PAGE
    ----------------------------------------------------- */

    {
      "@type": "WebPage",

      "@id": webPageId,

      url: canonicalUrl,

      name: metaTitle,

      description: metaDescription,

      isPartOf: {
        "@type": "WebSite",

        "@id": `${siteUrl}/#website`,

        url: `${siteUrl}/`,

        name: "Kidswearfactory",
      },

      about: {
        "@id": serviceId,
      },

      mainEntity: {
        "@id": serviceId,
      },

      inLanguage: "en",
    },
  ],
};


/* =========================================================
   PAGE
========================================================= */

export default function AustraliaKidsClothingManufacturerPage() {
  return (
    <>
      {/* Page-level structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />


      {/* Main page content */}
      <main>

        <Hero />

        <AustralianBrandRequirements />

        <ProductRange />

        <MaterialsCompliance />
        <CertificationProof />
        <ProductionPlanning />

        <FactoryProof />

        <AustraliaRemoteCollaboration />

        <BuyerQualification />

        <FAQ />

        <FinalCTA />

      </main>
    </>
  );
}