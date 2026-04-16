import { useDonationModal } from "@/contexts/DonationModalContext";
import PayPalDonateButton from "./PayPalDonateButton";

export default function DonationModal() {
  const { isOpen, closeModal } = useDonationModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Make a Donation</h2>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
          >
            &times;
          </button>
        </div>
        <PayPalDonateButton />
      </div>
    </div>
  );
}