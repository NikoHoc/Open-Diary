"use client";
import Wrapper from "@/components/global/Wrapper";
import React from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const page = (): React.ReactElement => {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return <p>please wait...</p>;

  return isSignedIn ? (
    <Wrapper title={user.username ? `${user.username}'s Diary` :`${user.emailAddresses} Diary`}>
      <p>INI MY DIARY</p>
    </Wrapper>
  ) : (
    <Link href="/sign-in">Sign In</Link>
  );

};

export default page;