"use client";

import { useState } from "react";

export default function EmailWaitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("✓ You're on the list! Check your email for early access.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
      <h3 className="text-2xl font-bold mb-4 text-center">
        🎯 Join the Waitlist
      </h3>
      <p className="text-gray-600 mb-6 text-center">
        Get early access and a <span className="font-bold text-primary">50% discount</span> for the first month.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={status === "loading" || status === "success"}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
        />

        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed animate-pop"
          style={{ animationDelay: '300ms' }}
        >
          {status === "loading"
            ? "Joining..."
            : status === "success"
            ? "Joined!"
            : "Get Early Access"}
        </button>

        {message && (
          <p
            className={`text-sm text-center ${
              status === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </form>

      <p className="text-xs text-gray-500 text-center mt-4">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
