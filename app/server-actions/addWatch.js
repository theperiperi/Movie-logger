'use server';
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function addWatch(formData){
    const rating = formData.get('rating');
    const title = formData.get('title');
    const review = formData.get('review');

    const cookieStore = cookies();
    const supabase = createServerComponentClient({cookies:()=>cookieStore});
    const {data: {session}} = await supabase.auth.getSession();
    const user = session?.user;

    if(!user){
        console.error('user is not authenticated within addWatch server action');
        return;
    }

    const {data,error} = await supabase
        .from('watches').
        insert([
            { 
                rating,
                title,
                review: review,
                user_id: user.id
            }
        ]);

    if(error){
        console.error(error);
        return;
    }

    revalidatePath('/watch-list');
    return {message: 'Watch added successfully' }
}