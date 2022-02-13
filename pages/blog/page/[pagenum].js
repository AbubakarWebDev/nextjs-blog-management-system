import MainLayout from "../../../components/MainLayout";
import BlogLayout from "../../../components/BlogLayout";

export default function Blog({posts, page, total, limit}) {
  return (
    <>
      <MainLayout title={`A blog about Technology & Entrepreneurship | Page ${page} of ${total} | AbubakarWebDev Blog`}>
        <BlogLayout
          posts={posts}
          page={page}
          total={total}
          limit={limit}
        />
      </MainLayout>
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
  const limit = 3
  const url = `http://localhost:4000/posts?_page=${params.pagenum}&_limit=${limit}`;
  const postRespone = await fetch(url);
  const isValidJson = postRespone.headers.get('content-type')?.includes('application/json');
  const posts = isValidJson ? await postRespone.json() : null;

  const metaResponse = await fetch(`http://localhost:4000/meta`);
  const isJson = metaResponse.headers.get('content-type')?.includes('application/json');
  const meta = isJson ? await metaResponse.json() : null;

  return {
    props: {
      posts,
      limit,
      page: parseInt(params.pagenum),
      total: meta.totalrecords,
    },
  }
}