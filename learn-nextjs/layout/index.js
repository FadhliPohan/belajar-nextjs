import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";
import Button from "@/components/atom/Button";
import { useState } from "react";

const Layout = (props) => {
  const [nilai, setNilai] = useState(0);
  //fungsi tambah
  const tambah = () => {
    setNilai(nilai + 1);
  };

  // fungsi kurang
  const kurang = () => {
    if (nilai == 0) {
      setNilai(0);
    } else {
      setNilai(nilai - 1);
    }
  };

  return (
    <>
      <Head>
        <title>{props.metaTitle}</title>
        <meta name="description" content={props.metaDescription  || "Informasi"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header></Header>
        <p className="text-2xl">Ini adalah nilai : {nilai}</p>
        <Button text="Tambah" onClick={tambah} />
        <Button text="Kurang" onClick={kurang} />
        <p className="text-2xl">gass</p>
        {props.children}
        <Footer></Footer>
      </main>
    </>
  );
};

export default Layout;
