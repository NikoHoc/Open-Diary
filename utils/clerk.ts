import { currentUser } from "@clerk/nextjs/server";

export interface User {
    email: string | undefined;
    username?: string | null | undefined;
    avatar: string | undefined;
}

export const getUserData = async (): Promise<User> => {
    const user = await currentUser();
    //console.log("🚀 ~ userData ~ user:", user)

    //
    const email = user?.emailAddresses[0].emailAddress
    const username = user?.username
    const avatar = user?.imageUrl

    return { email, username, avatar}
}