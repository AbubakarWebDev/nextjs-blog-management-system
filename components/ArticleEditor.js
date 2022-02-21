import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

function ArticleEditor() {
    const editorRef = useRef(null);

    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    return (
        <>
            <Editor
                apiKey="fhchw3oz6nwcw78jm220120xueyjlyk9vx81cakqjy7up1u3"
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                    height: 500,
                    plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
                    menubar: 'file edit view insert format tools table help',
                    toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
                    quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                    
                    importcss_append: true,
                    contextmenu: 'link image imagetools table',
                    image_caption: true,
                    toolbar_mode: 'sliding',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',

                    images_upload_handler: function (blobInfo, success, failure) {
                        // fetch('/upload', {
                        //     method: 'POST',
                        //     body: blobInfo.blob() // file Object
                        // })
                        // .then(res => res.json())
                        // .then(json => console.log(json))
                        // .catch(err => console.error(err));

                        console.log(blobInfo.blob(), blobInfo.blobUri(), blobInfo);
                        success(blobInfo.blobUri());
                    },
                }}
            />
            <button onClick={log}>Log editor content</button>
        </>
    );
}

export default ArticleEditor;