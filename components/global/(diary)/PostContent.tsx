import React from "react";
import Image from "next/image";
import {Diary} from "@/utils/supabase"

const PostContent = ({avatar, content, username, email}: Diary): React.ReactElement => {
  return (
    <div className="card card-body card-bordered shadow-lg bg-base-300 cursor-pointer duration-300 ease-in-out hover:shadow-xl hover:bg-secondary hover:scale-105 h-72">
      <div className="flex items-center gap-4">
        <Image 
          src={avatar as string} 
          alt={avatar as string} 
          width={50} height={50} 
          className="rounded-full bg-primary"
        />
        <p className="font-semibold text-lg">{username || email}</p>
      </div>
      <p className="overflow-y-auto text-md">{content}</p>
    </div>
  );
};

export default PostContent;
