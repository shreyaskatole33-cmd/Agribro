import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useData } from '../contexts/DataContext';
import { useAuth } from '../contexts/AuthContext';

interface BidModalProps {
  cropId: string;
  onClose: () => void;
}

const BidModal: React.FC<BidModalProps> = ({ cropId, onClose }) => {
  const { crops, addBid } = useData();
  const { user } = useAuth();
  const [bidAmount, setBidAmount] = useState('');

  const crop = crops.find(c => c.id === cropId);
  if (!crop) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const amount = parseInt(bidAmount);
    if (amount <= crop.currentBid) {
      alert('Bid must be higher than current bid');
      return;
    }

    addBid(cropId, {
      buyerId: user.id,
      buyerName: user.name,
      amount
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">Place Bid</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <img
              src={crop.imageUrl}
              alt={crop.name}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold">{crop.name}</h3>
            <p className="text-gray-600">{crop.quantity} {crop.unit}</p>
            <p className="text-green-600 font-semibold mt-2">
              Current Bid: ₹{crop.currentBid}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Bid Amount (₹ per quintal)
              </label>
              <input
                type="number"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                min={crop.currentBid + 1}
                placeholder={`Minimum: ₹${crop.currentBid + 1}`}
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Bid Summary</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Quantity:</span>
                  <span>{crop.quantity} {crop.unit}</span>
                </div>
                <div className="flex justify-between">
                  <span>Rate:</span>
                  <span>₹{bidAmount || '0'} per quintal</span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-1">
                  <span>Total Amount:</span>
                  <span>₹{(parseInt(bidAmount) || 0) * crop.quantity}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Place Bid
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BidModal;