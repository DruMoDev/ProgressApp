import { useState } from "react";
import { UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic with Supabase
    console.log("Registration attempt with:", {
      name,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Create Your Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-[#4B5563] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
              required
            />
          </div>
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
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border border-[#4B5563] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1E90FF] text-white py-2 px-4 rounded-md font-medium hover:bg-[#187bcd] transition duration-300 ease-in-out flex items-center justify-center">
            <UserPlus size={20} className="mr-2" />
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-[#1E90FF] hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </main>
  );
}
