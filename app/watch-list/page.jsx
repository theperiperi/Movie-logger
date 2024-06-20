import WatchForm from '../components/WatchForm.jsx';
import EditWatch from '../components/EditWatch.jsx';
import { deleteWatch } from '../server-actions/deleteWatch.js';
import {cookies} from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

export default async function WatchList() {

    const cookieStore=cookies();
    const supabase= createServerComponentClient({cookies:()=>cookieStore});
    const {data: {session}}=await supabase.auth.getSession();
    const user = session?.user;

    const {data: watches, error} = await supabase
        .from('watches')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', {ascending: false});
    
    if(error){
        console.error(error);
        return <p>Something went wrong</p>
    }


    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
            <div className="w-full max-w-4xl">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold mb-4 text-pink-400">Watch List</h1>
                    <form action="/auth/signout" method="post" className="mb-6">
                        <button
                            type="submit"
                            className="bg-pink-500 text-white hover:bg-pink-700 px-4 py-2 rounded-full"
                        >
                            Sign Out
                        </button>
                    </form>
                    <WatchForm />
                </div>
                <div className="mt-6 space-y-6">
                    {watches.map((watch) => (
                        <div key={watch.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold mb-2 text-pink-400">
                                {watch.brand} - {watch.name}
                            </h2>
                            <div className="flex space-x-4">
                                <form action={deleteWatch} className="flex-shrink-0">
                                    <input type="hidden" name="id" value={watch.id} />
                                    <button
                                        type="submit"
                                        className="bg-red-500 text-white hover:bg-red-700 px-4 py-2 rounded-full"
                                    >
                                        Delete
                                    </button>
                                </form>
                                <EditWatch />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    )
}