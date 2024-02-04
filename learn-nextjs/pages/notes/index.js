import Layout from "@/layout";
import Link from "next/link";
import React from "react";

export default function Notes({ repo }) {
  // console.log(repo);
  return (
    <Layout metaTitle="Profil">
      {repo.data.map((item) => (
        <div className="mt-3">
          <Link href={`/notes/${item.id}`}>{item.title}</Link>
          <p>Deskripsi : {item.description}</p>
          <p>Tanggal Update : {item.updated_at}</p>
          <hr />
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes");
  const repo = await res.json();
  return { props: { repo } };
}
