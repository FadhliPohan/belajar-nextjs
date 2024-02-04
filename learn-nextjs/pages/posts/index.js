import Layout from "@/layout";
import React from "react";

export default function Posts({ repo }) {
  console.log(repo);
  return (
    <Layout metaTitle="Profil">
      {repo.map((item) => (
        <div className="border-solid mt-4">
          <p className="text-xl text-slate-500">title : {item.title}</p>
          <p>title : {item.body}</p>
          <hr></hr>
        </div>
      ))}
      <p>jall</p>
    </Layout>
  );
}
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const repo = await res.json();
  return { props: { repo } };
}
