import AuthForm from './components/AuthForm';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-pink-400 mb-4 text-center neon-text">
          Welcome to Watch List
        </h1>
        <p className="text-gray-400 mb-6 text-center">
          Your one-stop shop for keeping track of everything you watch.
          Sign in to create, view, edit, and delete watches from your watch list.
        </p>
        <div className="text-gray-400 mb-6 text-center">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}
