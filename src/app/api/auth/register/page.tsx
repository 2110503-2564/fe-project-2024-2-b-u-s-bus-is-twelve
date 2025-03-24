'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {

  const [name, setName] = useState("");
  const [telephone_num, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const router = useRouter();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5003/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          telephone_num,
          email,
          password,
          role: "user",
        }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      setSuccessMsg("Registration successful! Redirecting to login...");
      setErrorMsg("");
      setTimeout(() => {
        window.location.href = "http://localhost:3000/api/auth/signin";
      }, 1500);
    } catch (err) {
      setErrorMsg("Something went wrong during registration.");
      setSuccessMsg("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Create Account</h2>

        <label className="block mb-2 font-medium">Full Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="block mb-2 font-medium">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={telephone_num}
          onChange={(e)=>setPhoneNumber(e.target.value)}
          pattern="\d{10}"
          required
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          minLength={6}
          required
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="block mb-2 font-medium">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
          minLength={6}
          required
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Register
        </button>

        {errorMsg && (
          <p className="mt-4 text-center text-sm text-red-600 font-medium">
            {errorMsg}
          </p>
        )}
        {successMsg && (
          <p className="mt-4 text-center text-sm text-green-600 font-medium">
            {successMsg}
          </p>
        )}

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="http://localhost:3000/api/auth/signin" className="text-blue-600 hover:underline">
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
}
