import styles from "./style.module.css";
import Disqus from "disqus-react";

function SinglePost({ id, slug, title, img, author, content }) {

  const disqusShortname = "abubakarwebdev"
  const disqusConfig = {
    url: `${process.env.NEXT_PUBLIC_HOST}/blog/${slug}`,
    identifier: id,
    title: title
  }

  return (
    <>
      <div className="max-w-screen-xl mx-auto pt-0 sm:pt-0 md:pt-0 p-5 sm:p-10 md:p-16 relative">

        <div className="mx-auto max-w-screen-md text-center">
          <img className="inline-block w-full" src={img} alt={title} />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">

            <h1 href="#" className="mt-5 text-gray-900 font-bold text-3xl mb-2">{title}</h1>

            <p className="text-gray-700 text-lg mt-2 w-max">
              Written By: <a href="#" className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"> {author.name} </a>
            </p>

            <div className={`${styles.content} mb-5`} dangerouslySetInnerHTML={{ __html: content }}></div>

            <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
          </div>
        </div>
      </div>


    </>
  );
};

export default SinglePost;