import { Suspense } from "react";
import { NextPage, Metadata } from "next";
import OmikujiApp from "../components/OmikujiApp";
import { fortunes } from "./fortunes";
import Template from "../components/Template";
import { imagePath } from "../utils";

export function generateMetadata(): Metadata {
  return {
    title: "次星おみくじ2025",
    description: "ファンメイドの非公式ねくすとぴあおみくじのアプリです",
    openGraph: {
      type: "website",
      title: "次星おみくじ2025",
      description: "ファンメイドの非公式ねくすとぴあおみくじのアプリです",
      images: [
        {
          url: imagePath("/images/logo.png"),
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

const Page: NextPage = () => {
  return (
    <Template title="次星おみくじ2025">
      <Suspense>
        <OmikujiApp fortunes={fortunes} />
      </Suspense>
    </Template>
  );
};

export default Page;
