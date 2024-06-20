'use server';
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function deleteWatch(formData){
    const watchid = formData.get('id');

    const cookieStore = cookies();
    const supabase = createServerComponentClient({cookies:()=>cookieStore});
    const {data: {session}} = await supabase.auth.getSession();
    const user = session?.user;

    if(!user){
        console.error('user is not authenticated within addDelete server action');
        return;
    }

    const {error} = await supabase
        .from('watches')
        .delete()
        .match({id: watchid, user_id: user.id});

    if(error){
        console.error(error);
        return;
    }

    revalidatePath('/watch-list');
    return {message: 'Watch deleted' }
}