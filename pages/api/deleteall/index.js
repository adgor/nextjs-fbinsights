import { connectToDatabase } from "../../../utils/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  const data = req.query;

  // const response =
  await db.collection("test").deleteMany(data);

  res.json({ msg: "All posts has been deleted" });
}
