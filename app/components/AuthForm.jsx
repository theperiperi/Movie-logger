'use client';

import { Auth } from '@supabase/auth-ui-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function AuthForm() {
  const supabase = createClientComponentClient();

  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      showLinks={false}
      providers={[]}
      redirectTo='http://localhost:3000/auth/callback'
      appearance={{
        theme: 'dark',
        button: {
          className: 'bg-pink-500 text-white hover:bg-pink-700 px-4 py-2 rounded-full',
        },
        input: {
          className: 'bg-gray-700 border-gray-700 text-white px-4 py-2 rounded-lg',
        },
      }}
    />
  );
}
