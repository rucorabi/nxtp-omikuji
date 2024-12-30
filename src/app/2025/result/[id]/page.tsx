import path from "node:path";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { fortunes, getById } from "../../fortunes";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const baseUrl = "https://rucorabi.github.io/nxtp-omikuji";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  const result = getById(id);
  const title = `次星おみくじ: 結果は${result.result}でした！`;
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
          alt: result.alt,
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
  return fortunes.map(({ id }) => ({
    id,
  }));
}

export default Page;
