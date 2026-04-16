import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

export default function PayPalDonateButton() {
  const [amount, setAmount] = useState("5.00");
  const [message, setMessage] = useState("");

  // Validate and format amount to two decimal places
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9.]/g, "");
    const parts = value.split(".");
    if (parts.length > 2) {
      value = parts[0] + "." + parts.slice(1).join("");
    }
    if (parts[1]?.length > 2) {
      value = parts[0] + "." + parts[1].slice(0, 2);
    }
    setAmount(value);
  };

  const getValidatedAmount = (): string => {
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount < 5) return "5.00";
    if (numericAmount > 1000000) return "1000000.00";
    return numericAmount.toFixed(2);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Donation Amount (USD)
        </label>
        <div className="relative">
          <span className="absolute left-3 top-2 text-gray-500">$</span>
          <input
            type="text"
            inputMode="decimal"
            value={amount}
            onChange={handleAmountChange}
            onBlur={() => setAmount(getValidatedAmount())}
            className="pl-7 pr-3 py-2 w-full border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
            placeholder="5.00"
            min="5.00"
            max="1000000.00"
          />
        </div>
        <p className="mt-1 text-xs text-gray-500">
          Minimum $5.00 • Maximum $1,000,000.00
        </p>
      </div>

      {message && <p className="text-center text-green-600">{message}</p>}

      <PayPalButtons
        style={{ layout: "vertical" }}
        forceReRender={[amount]} // Recreate buttons when amount changes
        createOrder={(data, actions) => {
          const finalAmount = getValidatedAmount();
          return actions.order.create({
            purchase_units: [
              {
                description: "Donation to Harmonic",
                amount: {
                  currency_code: "USD",
                  value: finalAmount,
                },
              },
            ],
            intent: "CAPTURE",
          });
        }}
        onApprove={(data, actions) => {
          if (actions.order) {
            return actions.order.capture().then((details) => {
              setMessage(
                `Thank you, ${details.payer?.name?.given_name || "donor"}! Your donation of $${getValidatedAmount()} is complete.`
              );
              console.log("Transaction completed by", details.payer?.name?.given_name);
            });
          } else {
            setMessage("Transaction could not be captured. Please try again.");
            console.error("Order capture failed");
            return Promise.reject(new Error("Order capture failed"));
          }
        }}
        onError={(err) => {
          setMessage("An error occurred with your donation. Please try again.");
          console.error("PayPal Checkout onError", err);
        }}
      />
    </div>
  );
}