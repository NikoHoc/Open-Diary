"use server";
import { redirect } from "next/navigation"
import { getUserData } from "@/utils/clerk"
import { Diary, supabase } from "@/utils/supabase"
import { Redirect } from "next/dist/lib/load-custom-routes";

/**
 * 
 * !REQUIREMENTS of diary table:
 *      USER: username?, email, avatar
 *      DIARY: content, comments? 
 */

export const createDiaryAction = async (formData: FormData): Promise<Redirect> => {
    const content = formData.get("content") as string;
    const { avatar, email, username} = await getUserData();
    //console.log("🚀 ~ createDiaryAction ~ user:", user)

    // di supabase.ts sudah di setting data bisa undefined, jdi tidak perlu di cek
    //if(!content || !email || !username || !avatar) return;

    const data: Diary = { content, email, username, avatar }

    await supabase.from("diary").insert(data)

    redirect("/dashboard/my-diary")
};