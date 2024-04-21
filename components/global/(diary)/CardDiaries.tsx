import React from 'react'
import PostContent from './PostContent'
import { supabase } from "@/utils/supabase"

const CardDiaries = async (): Promise<React.ReactElement> => {
  const {data, error} = await supabase.from("diary").select()
  
  if (error) return <p>please reload the page....</p>

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((diary) => {
        return <PostContent
          key={diary.id} 
          avatar={diary.avatar} 
          content={diary.content}
          email={diary.email}
          username={diary.username}/>
      })}
    </div>
  )
}

export default CardDiaries