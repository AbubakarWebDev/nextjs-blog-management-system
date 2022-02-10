import Head from 'next/head'
import Navbar from "../../components/Navbar";
import PostGrid from "../../components/PostGrid";
import Pagination from "../../components/Pagination";

export default function Blog({posts, total}) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navbar />

      <div className="container mx-auto my-5">
        <div className="flex flex-wrap overflow-hidden">
            {posts.map((post) => (
              <div key={post.id} className="w-full overflow-hidden md:w-1/2">
                <PostGrid
                  id={post.id}
                  title={post.title}
                  img={post.img} 
                  slug={post.slug}
                  date={post.publish_date} 
                  author={post.author} 
                  description={post.description}
                />
              </div>
            ))}
        </div>

        <Pagination
          page={1}
          limit={2}
          total={total}
        />
      </div>

    </>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:4000/posts?_page=1&_limit=2')
  const posts = await res.json()

  const recordsResponse = await fetch(`http://localhost:4000/meta`);
  const json = await recordsResponse.json()

  return {
    props: {
      posts,
      total: json.totalrecords,
    },
  }
}