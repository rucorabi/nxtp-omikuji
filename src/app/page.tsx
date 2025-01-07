import { Suspense } from "react";
import { NextPage, Metadata } from "next";
import OmikujiApp from "../components/OmikujiApp";
import { fortunes } from "./fortunes";
import Template from "../components/Template";
import { imagePath } from "../utils";
import { PUBLISH_HOSTNAME } from "../config";

export function generateMetadata(): Metadata {
  const baseUrl = `https://${PUBLISH_HOSTNAME}`;

  return {
    metadataBase: PUBLISH_HOSTNAME ? new URL(baseUrl) : undefined,
    title: "次星おみくじ",
    description: "ファンメイドの非公式ねくすとぴあおみくじのアプリです",
    openGraph: {
      type: "website",
      title: "次星おみくじ2025",
      description: "ファンメイドの非公式ねくすとぴあおみくじのアプリです",
      images: [
        {
          url: imagePath("/images/logo.webp"),
          width: 600,
          height: 600,
          alt: "アプリのロゴ",
        },
      ],
    },
    twitter: {
      card: "summary",
      creator: "@rucorabi_",
    },
  };
}

const filteredFotunes = fortunes.filter((f) => !f.resultOnly);
const Page: NextPage = () => {
  return (
    <Template title="次星おみくじ2025">
      <Suspense>
        <OmikujiApp fortunes={filteredFotunes} />
      </Suspense>
    </Template>
  );
};

export default Page;
