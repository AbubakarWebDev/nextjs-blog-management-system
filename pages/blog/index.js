import WithLayout from "../../components/WithLayout";
import BlogLayout from "../../components/BlogLayout";


const data = {
  title: "A blog about Technology & Entrepreneurship | AbubakarWebDev Blog"
};

function Blog({posts, page, total, limit}) {

  return (
    <>
      <BlogLayout
        posts={posts}
        page={page}
        total={total}
        limit={limit}
      />
    </>
  );
};

export default WithLayout(Blog, data);


export async function getStaticProps() {
  const limit = 3;
  const page = 1;
  const res = await fetch(`http://localhost:4000/posts?_page=1&_limit=${limit}`);
  const posts = await res.json();

  const recordsResponse = await fetch(`http://localhost:4000/meta`);
  const meta = await recordsResponse.json()

  return {
    props: {
      posts,
      limit,
      page,
      total: meta.totalrecords,
    },
  }
}