
import { Inter } from "next/font/google";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const LayoutComponent = dynamic(()=>import("@/layout"))
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    fetch("api/hello")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <LayoutComponent
        metaTitle="Home"
        metaDescription="Ini adalah halaman home, informasi dapat anda lihat disini!"
      >
        <Image src="/ultramen.jpg" width={200} height={200} alt="ultramen"/>
        <img src="/ultramen.jpg" style={{  width:200,height:200 }} alt="ultramen"/>
      </LayoutComponent>
    </>
  );
}
