import { MongoClient } from "mongodb";

import { FullFeatureTable } from "../src/components/FullFeatureTable";
// import { PaginationTable } from "../src/components/PaginationTable";
// import { SortingFilteringTable } from "../src/components/SortingFilteringTable";
// import FilteringTable from "../src/components/FilteringTable";
// import SortingTable from "../src/components/SortingTable";
// import BasicTable from "../src/components/BasicTable";

export default function Home({ posts }) {
  // console.log(posts);
  return (
    <main className="container px-5 mx-auto py-14">
      <h1 className="text-4xl italic font-extrabold tracking-tight text-center text-gray-900 uppercase sm:text-5xl md:text-6xl">
        <span className="text-indigo-600 ">fb</span>insights
      </h1>

      <FullFeatureTable posts={posts} />
      {/* <PaginationTable posts={posts} /> */}
      {/* <SortingFilteringTable posts={posts} /> */}
      {/* <FilteringTable posts={posts} /> */}
      {/* <SortingTable posts={posts} /> */}
      {/* <BasicTable posts={posts} /> */}
    </main>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://rap:kiki321123@cluster0.1fub5.mongodb.net/test"
  );
  const db = client.db();
  const postsCollection = db.collection("test");
  const posts = await postsCollection.find().toArray();
  client.close();
  return {
    props: {
      posts: posts.map((post) => ({
        pname: post.pname,
        title: post.title,
        like: post.like,
        comment: post.comment,
        shares: post.shares,
        ptime: post.converted_time.toString(),
        stime: post.stime,
        link: post.link,
      })),
    },
    revalidate: 1800,
  };
}
