import MainLayout from "../../components/MainLayout";
import BlogLayout from "../../components/BlogLayout";

export default function Blog({posts, page, total, limit}) {
  return (
    <>
      <MainLayout title={`A blog about Technology & Entrepreneurship | AbubakarWebDev Blog`}>
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

export async function getStaticProps() {
  const limit = 3;
  const page = 1;
  const res = await fetch(`http://localhost:4000/posts?_page=1&_limit=${limit}`);
  const posts = await res.json();

  const recordsResponse = await fetch(`http://localhost:4000/meta`);
  const json = await recordsResponse.json()

  return {
    props: {
      posts,
      limit,
      page,
      total: json.totalrecords,
    },
  }
}