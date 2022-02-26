import React, { useRef } from 'react';
import dynamic from 'next/dynamic';

const Editor = dynamic(
  () => import('@tinymce/tinymce-react').then(mod => mod.Editor),
  { ssr: false }
);

function ArticleEditor(props) {
  const editorRef = useRef(null);

  return (
    <>
      <div className={`${props.init ? "" : "hidden"}`}>
        <Editor
          apiKey="fhchw3oz6nwcw78jm220120xueyjlyk9vx81cakqjy7up1u3"
          onInit={(event, editor) => {
            editorRef.current = editor;
            props.handleInit(true);
          }}
          onEditorChange={() => {
            props.handleContent(editorRef.current.getContent());
          }}
          initialValue={props.initialContent}
          init={{
            height: 500,
            plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
            menubar: 'file edit view insert format tools table help',
            toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
            quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',

            selector: 'textarea',
            contextmenu: 'link image imagetools table',
            image_caption: true,
            toolbar_mode: 'sliding',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px } ',
            statusbar: false,

            images_upload_handler: function (blobInfo, success, failure) {
              let formData = new FormData();
              formData.append('image', blobInfo.blob());

              fetch('https://api.ghar47.pk/media', {
                method: 'POST',
                body: formData, // file Object
                headers: {
                  'Authorization': 'bearer 401|2fWiHn9bfjkKB5WvrTqTwiKQrFdKLbb3x0oGtvZM'
                },
              })
                .then(res => res.json())
                .then(json => { success(json.image); console.log(json) })
                .catch(err => failure(err));
            },
          }}
        />
      </div>
    </>
  );
}

export default ArticleEditor;


/*--------------------- HOW TO USE THIS COMPONENT ---------------------

import React, { useState } from 'react'
import ArticleEditor from "../components/Editor/ArticleEditor";

function ExampleComponent() {
  const [init, setInit] = useState(false);
  const [articleBody, setArticleBody] = useState(`<p>This is Initial Content!</p>`);

  function handleContent(content) {
    setArticleBody(content);
  }

  function handleInit(EditorInit) {
    setInit(EditorInit);
  }

  return (
    <>
      <p className={`${init ? "hidden" : ""}`}> Loading........... </p>

      <div className={`container mx-auto ${init ? "" : "hidden"}`}>
        <ArticleEditor
          initialContent={articleBody}
          handleContent={handleContent}
          handleInit={handleInit}
          init={init}
        />
        <textarea
          className="w-full h-[275px] my-6 p-5 border border-gray-300"
          value={articleBody}
          disabled
        />
      </div>
    </>
  );
}

export default ExampleComponent;

-------------------------------------------------------------------*/