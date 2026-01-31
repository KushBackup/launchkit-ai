export default function CheckoutButton({ priceId, plan }: { priceId: string; plan: string }) {
  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, plan }),
      });
      
      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="block w-full bg-primary hover:bg-primary-dark text-white text-center px-6 py-3 rounded-lg font-semibold transition"
    >
      Get Started
    </button>
  );
}
