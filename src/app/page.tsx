import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "次星おみくじ",
  description: "非公式のねくすとぴあおみくじツールです",
};
const Page = () => {
  redirect("/2025");
};

export default Page;
