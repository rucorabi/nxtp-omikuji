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
      <OmikujiApp fortunes={fortunes} />
    </Template>
  );
};

export default Page;
