import Navbar from "../components/Globals/Navbar";
import HeroCenterWithImage from "../components/Hero/HeroCenterWithImage";
import { Link } from "@remix-run/react";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <main className="">
        <HeroCenterWithImage />
      </main>
    </>
  );
}