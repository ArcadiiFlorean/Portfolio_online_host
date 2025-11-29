import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import {
  ArrowLeft,
  CreditCard,
  CheckCircle,
  AlertCircle,
  Lock,
} from "lucide-react";

// ⭐ ÎNLOCUIEȘTE cu cheia ta publică Stripe
const stripePromise = loadStripe(
  "pk_live_51SRdV7FjtsPvvag4XtAlQXpH4VInHK3yFTgt4BLMQCiVmd4nQmyZSOiuKBwLMmizae8FOq0vx3WjlFili1bfuPtS008K77nD7r"
);

// Componenta de formular de plată
function CheckoutForm({ paymentData }) {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setErrorMessage("");

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment-success`,
          receipt_email: paymentData.email,
        },
        redirect: "if_required",
      });

      if (error) {
        setErrorMessage(error.message);
        setIsProcessing(false);
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        navigate("/payment-success", {
          state: {
            amount: paymentData.amount,
            email: paymentData.email,
            description: paymentData.description,
          },
        });
      }
    } catch (err) {
      setErrorMessage("An unexpected error occurred. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/30">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-300">Amount to pay:</span>
          <span className="text-3xl font-bold text-green-400">
            £{paymentData.amount}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-400">Email:</span>
          <span className="text-white">{paymentData.email}</span>
        </div>
      </div>

      {errorMessage && (
        <div className="bg-red-900/30 border-2 border-red-500 p-4 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-red-400 mb-1">Payment Error</h4>
            <p className="text-sm text-red-200">{errorMessage}</p>
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-4">
          💳 Card Details
        </label>
        <div className="bg-gray-900/50 p-6 rounded-xl border-2 border-gray-700">
          <PaymentElement options={{ layout: "tabs" }} />
        </div>
      </div>

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 font-bold text-lg rounded-lg hover:shadow-[0_0_40px_rgba(34,197,94,0.8)] transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
      >
        {isProcessing ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Processing Payment...</span>
          </>
        ) : (
          <>
            <CreditCard className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Pay £{paymentData.amount}</span>
          </>
        )}
      </button>
    </form>
  );
}

function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const paymentData = location.state || {};

  useEffect(() => {
    if (!paymentData.amount || !paymentData.email) {
      navigate("/payment");
      return;
    }

    const createPaymentIntent = async () => {
      try {
        const response = await fetch(
          "https://arcadii-florean.onrender.com/create-payment-intent",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              amount: parseFloat(paymentData.amount) * 100,
              email: paymentData.email,
              description: paymentData.description,
            }),
          }
        );

        const data = await response.json();
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          setError("Failed to initialize payment. Please try again.");
        }
      } catch (err) {
        setError("Failed to connect to payment server. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    createPaymentIntent();
  }, [paymentData, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl text-gray-300">Preparing your payment...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6">
        <div className="max-w-md w-full">
          <div className="bg-red-900/30 border-2 border-red-500 p-8 rounded-2xl text-center">
            <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-red-400 mb-4">
              Payment Error
            </h2>
            <p className="text-gray-300 mb-6">{error}</p>
            <button
              onClick={() => navigate("/payment")}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 font-bold rounded-lg transition-all"
            >
              Back to Payment
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-12">
          <Link to="/" className="text-xl font-bold text-green-400">
            Prolio
          </Link>
          <button
            onClick={() => navigate("/payment")}
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium transition-all group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </button>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border-2 border-green-500 shadow-[0_0_50px_rgba(34,197,94,0.3)]">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              Complete Your Payment
            </h1>
            <p className="text-gray-300">
              Enter your card details securely below
            </p>
          </div>

          {clientSecret && (
            <Elements
              stripe={stripePromise}
              options={{
                clientSecret,
                appearance: {
                  theme: "night",
                  variables: {
                    colorPrimary: "#22c55e",
                    colorBackground: "#1a1a1a",
                    colorText: "#ffffff",
                    colorDanger: "#ef4444",
                    fontFamily: "system-ui, sans-serif",
                    borderRadius: "8px",
                  },
                  rules: {
                    ".Input": {
                      border: "2px solid #374151",
                      boxShadow: "none",
                    },
                    ".Input:focus": {
                      border: "2px solid #22c55e",
                      boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.1)",
                    },
                    ".Label": {
                      color: "#d1d5db",
                      fontWeight: "600",
                    },
                  },
                },
              }}
            >
              <CheckoutForm paymentData={paymentData} />
            </Elements>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
