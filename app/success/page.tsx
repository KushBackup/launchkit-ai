export default function Success() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-4xl font-bold mb-4">Welcome to LaunchKit AI!</h1>
        <p className="text-xl text-gray-600 mb-8">
          Your subscription is active. Check your email for next steps.
        </p>
        <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
          <h2 className="font-bold text-lg mb-3">What happens next:</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✅ You"ll receive a welcome email with onboarding instructions</li>
            <li>✅ Our team will reach out within 24 hours to schedule your kickoff call</li>
            <li>✅ We"ll start working on your business immediately</li>
          </ul>
        </div>
        <a 
          href="/"
          className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
