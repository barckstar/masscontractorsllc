import HomeContent from "@/components/HomeContent";

export const metadata = {
  title: "MAS Contractors | General Contractor in Richmond, VA",
  description: "MAS Contractors offers top-tier commercial and residential construction services in Richmond, VA. From remodeling to new builds, we transform spaces with quality and innovation.",
  keywords: ["General Contractor", "Richmond VA", "Construction", "Remodeling", "Commercial", "Residential", "MAS Contractors"],
  openGraph: {
    title: "MAS Contractors | Transforming Spaces, Building Legacies",
    description: "Expert general contracting services in Richmond, VA. Quality craftsmanship for commercial and residential projects.",
    url: "https://mascontractors.com",
    siteName: "MAS Contractors",
    images: [
      {
        url: "/img-1.jpg",
        width: 1200,
        height: 630,
        alt: "MAS Contractors Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return <HomeContent />;
}
