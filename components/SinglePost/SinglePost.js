import styles from "./style.module.css";
import Disqus from "disqus-react";

function SinglePost({id, slug, title, img, author, content}) {
  
  const disqusShortname = "abubakarwebdev"
  const disqusConfig = {
    url: `http://localhost:3000/blog/${slug}`,
    identifier: id,
    title: title
  }

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div className="bg-cover h-64 text-center overflow-hidden" style={{height: "450px", backgroundImage: `url('${img}')`}} title={title}></div>

        <div className="max-w-2xl mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">

            <h1 href="#" className="mt-5 text-gray-900 font-bold text-3xl mb-2">{title}</h1>

            <p className="text-gray-700 text-xs mt-2"> 
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