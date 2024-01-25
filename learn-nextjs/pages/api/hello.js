// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  // res
  //   .status(200)
  //   .json({ name: "John Doe", kelas: "2b", alamat: "K3" });

  try {
    const response = await (await fetch("https://dummyjson.com/users")).json();
    res.status(200).json({ ...response });
  } catch (error) {
    console.log(error);
  }
}
