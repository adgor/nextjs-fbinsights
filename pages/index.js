import { MongoClient } from "mongodb";
// import Example from "../src/components/example";
// import styles from "../styles/Home.module.css";

import { PaginationTable } from "../src/components/PaginationTable";
// import { SortingFilteringTable } from "../src/components/SortingFilteringTable";
// import FilteringTable from "../src/components/FilteringTable";
// import SortingTable from "../src/components/SortingTable";
// import BasicTable from "../src/components/BasicTable";

export default function Home({ posts }) {
  // console.log(props);
  return (
    <div>
      <main className="container mx-auto">
        <h1 className="block p-5 text-5xl text-center bg-red-300">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <PaginationTable posts={posts} />
        {/* <SortingFilteringTable posts={posts} /> */}
        {/* <FilteringTable posts={posts} /> */}
        {/* <SortingTable posts={posts} /> */}
        {/* <BasicTable posts={posts} /> */}
      </main>
      {/* punon  */}
      {/* <Example posts={props.posts} /> */}
    </div>
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
        ptime: post.ptime,
        stime: post.stime,
        link: post.link,
      })),
    },
  };
}
