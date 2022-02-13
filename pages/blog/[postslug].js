import MainLayout from "../../components/MainLayout";
import SinglePost from "../../components/SinglePost/SinglePost";

export default function Post({ post }) {

  const disqusShortname = "abubakarwebdev"
  const disqusConfig = {
    url: "https://localhost:3000",
    identifier: post.id,
    title: post.title
  }

  return (
    <>
      <MainLayout title={post.title}>
        <SinglePost
          title={post.title}
          slug={post.slug}
          img={post.img}
          author={post.author}
          content={post.content}
        />
      </MainLayout>
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