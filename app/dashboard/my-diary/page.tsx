import React from "react";
import Wrapper from "@/components/global/Wrapper";
import PostContent from "@/components/global/(diary)/PostContent";
import { supabase } from "@/utils/supabase";
import { getUserData } from "@/utils/clerk";

const page = async (): Promise<React.ReactElement> => {
  const { email } = await getUserData();
  const { data, error } = await supabase
    .from("diary")
    .select()
    .order("created_at", { ascending: false })
    .eq("email", email);

  if (error) return <p>Please Reload the page...</p>;

  return (
    <Wrapper title="My Diary">
      <div className="grid md:grid-cols-3 gap-4">
        {data.map((diary: any) => (
          <PostContent
            key={diary.id}
            diary_id={diary.id}
            avatar={diary.avatar}
            content={diary.content}
            email={diary.email}
            username={diary.username}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default page;
