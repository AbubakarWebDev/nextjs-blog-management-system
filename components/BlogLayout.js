import PostGrid from "./PostGrid";
import Pagination from "./Pagination";

function BlogLayout({posts, page, total, limit}) {
    return (
        <div className="container mx-auto mb-5">
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
                page={page}
                limit={limit}
                total={total}
            />
        </div>
    );
}

export default BlogLayout;