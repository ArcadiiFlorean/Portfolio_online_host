import React from "react";
import { useLocation, Link } from "react-router-dom";
import { CheckCircle, Home, Download } from "lucide-react";

function PaymentSuccess() {
  const location = useLocation();
  const paymentData = location.state || {
    amount: "0",
    email: "your@email.com",
    description: "Payment",
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6">
      <div className="relative z-10 max-w-2xl w-full">
        <div className="bg-gray-800/50 backdrop-blur-sm p-12 rounded-2xl border-2 border-green-500 shadow-[0_0_50px_rgba(34,197,94,0.3)] text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            Payment Successful! 🎉
          </h1>

          <p className="text-xl text-gray-300 mb-2">Thank you for your payment</p>
          <p className="text-3xl font-bold text-white mb-8">£{paymentData.amount}</p>

          <div className="bg-gray-900/50 p-6 rounded-lg mb-8">
            <p className="text-sm text-gray-400 mb-2">
              A confirmation email has been sent to:
            </p>
            <p className="text-lg text-green-400 font-semibold mb-4">{paymentData.email}</p>
            
            {paymentData.description && (
              <>
                <p className="text-sm text-gray-400 mb-2">Payment for:</p>
                <p className="text-white">{paymentData.description}</p>
              </>
            )}

            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-xs text-gray-500">
                Transaction completed on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 font-bold rounded-lg hover:shadow-[0_0_40px_rgba(34,197,94,0.8)] transition-all"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            
            <button
              onClick={() => window.print()}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-700 hover:bg-gray-600 font-bold rounded-lg transition-all"
            >
              <Download className="w-5 h-5" />
              <span>Print Receipt</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;