import path from "node:path";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { fortunes } from "../../fortunes";
import { getById } from "../../../Fortunes";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const baseUrl = `https://${process.env.HOSTNAME}`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  const result = getById(fortunes, id);
  const title = `次星おみくじ`;
  const description = result.description;
  const imageUrl = path.join(baseUrl, result.image);
  return {
    title,
    description,
    openGraph: {
      type: "article",
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 640,
          height: 480,
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

const Page = () => {
  redirect("/2025");
};

export async function generateStaticParams() {
  return fortunes.map((fortune) => ({ id: fortune.id }));
}

export default Page;
