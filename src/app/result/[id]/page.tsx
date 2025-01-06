import { use } from "react";
import path from "node:path";
import { Metadata } from "next";
import { fortunes } from "../../fortunes";
import { getById } from "../../../Fortunes";
import Template from "../../../components/Template";
import Component from "./Component";
import { PUBLISH_HOSTNAME } from "../../../config";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  const result = getById(fortunes, id);
  const title = `次星おみくじ`;
  const description = result.description.replace(/\n/g, " ");
  return {
    metadataBase: new URL(`https://${PUBLISH_HOSTNAME}`),
    title,
    description,
    robots: "noindex,nofollow",
    openGraph: {
      type: "article",
      title,
      description,
      images: [
        {
          url: result.image,
          width: 800,
          height: 418,
          alt: "抽選結果の画像です",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@rucorabi_",
    },
  };
}

const Page = ({ params }: Props) => {
  const id = use(params).id;
  const fortune = getById(fortunes, id);

  return (
    <Template title="次星おみくじ2025">
      <Component fortune={fortune} />
    </Template>
  );
};

export async function generateStaticParams() {
  return fortunes.map((fortune) => ({ id: fortune.id }));
}

export default Page;
