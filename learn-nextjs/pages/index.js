import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Content from "@/components/content";
import Layout from "@/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <p>Makan Apa Pagi Ini</p>
      </Layout>
    </>
  );
}
