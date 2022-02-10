function SinglePost({title, img, author, content}) {
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div className="bg-cover h-64 text-center overflow-hidden" style={{height: "450px", backgroundImage: `url('${img}')`}} title={title}></div>

        <div className="max-w-2xl mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">

            <h1 href="#" className="text-gray-900 font-bold text-3xl mb-2">{title}</h1>

            <p className="text-gray-700 text-xs mt-2"> 
              Written By: <a href="#" className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"> {author.name} </a>
            </p>
            
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default SinglePost;