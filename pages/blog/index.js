import Head from 'next/head'
import Navbar from "../../components/Navbar";
import PostGrid from "../../components/PostGrid";

export default function Blog({posts}) {
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
      </div>

    </>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:4000/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}