import { createDiaryAction } from '@/actions/createDiaryAction'
import React from 'react'

const createDiaryForm = ():React.ReactElement => {
  return (
    //createDiaryAction fungsi yang ada di folder actions
    <form action={createDiaryAction} className="flex flex-col gap-4 max-w-xl mx-auto">
        <textarea 
            className="h-52 p-4 text-lg border border-primary rounded" 
            placeholder="Isi diary anda disini"
            name="content">
        </textarea>
        <button type="submit" className="btn btn-primary">
            Create Now
        </button>
    </form>
  )
}

export default createDiaryForm