"use client"
import React, { RefObject, useRef } from 'react'
import { createCommentAction } from "@/actions/createCommentAction";

type ParamsProps = {
  diary_id: number;
}
const CreateCommentForm = ({diary_id}: ParamsProps) => {
  const formRef: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null)

  const resetForm = ():void => {
      setTimeout(() => {
        formRef.current?.reset();
      }, 1000);
  }
  return (
    <form
      action={createCommentAction}
      className="flex flex-col gap-4 max-w-xl mx-auto"
      onSubmit={resetForm}
      ref={formRef}>
      <textarea
        placeholder="type your comment here..."
        className="h-52 p-4 text-lg border border-primary textarea"
        name="content"
      />
      <input type="hidden" name="diary_id" value={diary_id}/>
      <button className="btn btn-primary max-w-sm mx-auto w-full" type="submit">
        Comment Now
      </button>
    </form>
  );
}

export default CreateCommentForm