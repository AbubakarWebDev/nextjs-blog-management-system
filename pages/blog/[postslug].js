import Head from 'next/head'
import Navbar from "../../components/Navbar";
import SinglePost from "../../components/SinglePost";

export default function Post({ post }) {
  return (
    <>
      <Head>
        <title>Post</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <Navbar />
      
      <SinglePost
        title={post.title}
        img={post.img}
        author={post.author}
        content={post.content}
      />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:4000/posts`);
  const posts = await res.json()

  const paths = posts.map((post) => ({
    params: { postslug: post.slug },
  }))

  return { paths, fallback: 'blocking' }
}

export async function getStaticProps(context) {
  const slug = context.params.postslug;
  const res = await fetch(`http://localhost:4000/posts?slug=${slug}`)
  const post = await res.json()

  if (!post.length) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post: post[0]
    },

    revalidate: 100
  }
}