import React, { useState } from 'react'
import WithLayout from "../HOC/WithLayout";
// import ArticleEditor from "../components/Editor/Editor";
import ArticleEditor from "../components/ArticleEditor";

function Article() {
  const [articleBody, setArticleBody] = useState("");

  function handleContent(content) {
    setArticleBody(content);
  }

  return (
    <>
      <div className="container mx-auto">
        {/* <ArticleEditor
          initialContent=""
          handleContent={handleContent}
        />
        <textarea
          disabled
          className="w-full h-[275px] my-6"
          value={articleBody}
        /> */}
        <ArticleEditor />
      </div>
    </>
  );
}

export default WithLayout(Article, { title: "Contactus" });