import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Content from "@/components/content";
import Layout from "@/layout";
import { useEffect } from "react";

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
      <Layout
        metaTitle="Home"
        metaDescription="Ini adalah halaman home, informasi dapat anda lihat disini!"
      >
        <p>Makan Apa Pagi Ini</p>
      </Layout>
    </>
  );
}
