"use server"

import { getUserData } from "@/utils/clerk"
import { randomUUID } from "crypto"
import { Comments } from "@/utils/supabase"
import { supabase } from "@/utils/supabase"

export const createCommentAction = async(formData: FormData) => {
    const content = formData.get("content") as string
    const diary_id = formData.get("diary_id")
    const comment_id = randomUUID()

    const { avatar, email, username } = await getUserData()

    const data: Comments = {comment_id, avatar, email, username, content}

    // cek comment terakhir
    const getComment = await supabase.from("diary").select("comments").eq("id", diary_id).single()
    
    const existingComment: Array<Comments> = getComment.data?.comments || []

    //tambah komen ke array terbaru
    const newComment = [...existingComment, data]

    await supabase.from("diary").update({comments: newComment}).eq("id", diary_id)
    
    // redirect(`/diary/${diary_id}`)
}