import { useState } from "react";
import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic with Supabase
    console.log("Login attempt with:", { email, password });
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Login to Your Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-[#4B5563] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-[#4B5563] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1E90FF] text-white py-2 px-4 rounded-md font-medium hover:bg-[#187bcd] transition duration-300 ease-in-out flex items-center justify-center">
            <LogIn size={20} className="mr-2" />
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#1E90FF] hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </main>
  );
}
