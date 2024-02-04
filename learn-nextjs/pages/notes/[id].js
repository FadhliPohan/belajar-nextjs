import Layout from "@/layout";
import React from "react";

export default function DetailNote({ notes }) {
  console.log(notes);
  return (
    <Layout metaTitle="Profil">
      <div className="mt-8 mb-8">
        <p className="text-xl text-slate-700">Judul : {notes.data.title}</p>
        <p>Deskripsi : {notes.data.description}</p>
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
  const res = await fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes");
  const notes = await res.json();

  const paths = notes.data.map((item) => ({
    params: {
      id: item.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(
    `https://paace-f178cafcae7b.nevacloud.io/api/notes/${id}`
  );
  const notes = await res.json();
  return { props: { notes }, revalidate: 10 };
}
