import { Fragment } from "react";
import Head from "next/head";
import { connectToDatabase } from "../utils/mongodb";
// import { useRouter } from "next/router";

import { FullFeatureTable } from "../src/components/FullFeatureTable";
import Modal from "../src/components/Modal";
// import { PaginationTable } from "../src/components/PaginationTable";
// import { SortingFilteringTable } from "../src/components/SortingFilteringTable";
// import FilteringTable from "../src/components/FilteringTable";
// import SortingTable from "../src/components/SortingTable";
// import BasicTable from "../src/components/BasicTable";

export default function Home({ posts }) {
  // console.log(posts);
  // const router = useRouter();
  const deleteAllPosts = () => {
    fetch("http://localhost:3000/api/deleteall");

    // router.push("/");
  };

  return (
    <Fragment>
      <Head>
        <title>FBINSIGHTS</title>
      </Head>

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

        <Modal deletePosts={() => deleteAllPosts()} />
      </main>
    </Fragment>
  );
}

export async function getStaticProps() {
  const { db } = await connectToDatabase();

  const postsCollection = db.collection("test");

  const posts = await postsCollection.find().toArray();

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
