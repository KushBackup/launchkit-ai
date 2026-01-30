export default function Success() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-4xl font-bold mb-4">Welcome to LaunchKit AI!</h1>
        <p className="text-xl text-gray-600 mb-8">
          Your subscription is active. Check your email for next steps.
        </p>
        <a
          href="mailto:kush@launchkit.ai"
          className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
        >
          Let's Get Started →
        </a>
      </div>
    </div>
  );
}
