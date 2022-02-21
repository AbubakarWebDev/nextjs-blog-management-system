import React, { useState, useEffect } from 'react'
import { EditorState, ContentState, convertToRaw } from "draft-js";
import dynamic from 'next/dynamic';
import Loader from '../Loader';
import draftToHtml from 'draftjs-to-html';

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
);

const htmlToDraft = typeof window === 'object' && require('html-to-draftjs').default;

import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styles from "./style.module.css";

function editor(props) {
  const [mounted, setMounted] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    setEditorState(() => {
      if (props.initialContent != undefined && props.initialContent != null && props.initialContent != "") {
        const blocksFromHtml = htmlToDraft(props.initialContent);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
        return EditorState.createWithContent(contentState)
      }
      else {
        return EditorState.createEmpty()
      }
    });

    setMounted(true);

    return function cleanup() {
      setMounted(false);
    };
  }, []);

  function onEditorStateChange(editorState) {
    setEditorState(editorState);
    props.handleContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  }

  async function uploadImageCallBack(file) {
    console.log(file);
  }

  if (mounted) {
    return (
      <Editor
        editorState={editorState}
        toolbarClassName="toolbar-class"
        wrapperClassName="wrapper-class"
        editorClassName={styles.editor}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          image: {
            className: undefined,
            popupClassName: 'editor-image-popup',
            urlEnabled: true,
            uploadEnabled: true,
            alignmentEnabled: true,
            uploadCallback: uploadImageCallBack,
            previewImage: true,
            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png',
            alt: { present: true, mandatory: false },
            defaultSize: {
              height: 'auto',
              width: 'auto',
            },
          }
        }}
      />
    );
  }
  else {
    return  <Loader width='100px' height='100px' />;
  }
}

export default editor;