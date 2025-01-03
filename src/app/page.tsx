import { Suspense } from "react";
import { NextPage, Metadata } from "next";
import OmikujiApp from "../components/OmikujiApp";
import { fortunes } from "./fortunes";
import Template from "../components/Template";

export const metadata: Metadata = {
  title: "次星おみくじ2025",
};

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
