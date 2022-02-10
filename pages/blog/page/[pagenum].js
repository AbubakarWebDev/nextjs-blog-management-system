import Head from 'next/head'
import Navbar from "../../../components/Navbar";
import PostGrid from "../../../components/PostGrid";
import Pagination from "../../../components/Pagination";

const limit = 3;

export default function Blog({posts, page, total}) {
  return (
    <>
      <Head>
        <title>Blog Page </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navbar />

      <div className="container mx-auto my-5">
        <div className="flex flex-wrap overflow-hidden">
            {posts.map((post) => (
              <div key={post.id} className="my-2 px-2 w-full overflow-hidden lg:w-1/3">
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
          limit={limit}
          total={total}
        />
      </div>

    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:4000/posts`);
  const posts = await res.json();

  const paths = posts.map((post, index) => ({
    params: { pagenum: `${index + 1}` },
  }))

  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:4000/posts?_page=${params.pagenum}&_limit=${limit}`)
  const posts = await res.json()

  const recordsResponse = await fetch(`http://localhost:4000/meta`);
  const json = await recordsResponse.json()

  return {
    props: {
      posts,
      page: parseInt(params.pagenum),
      total: json.totalrecords,
    },
  }
}