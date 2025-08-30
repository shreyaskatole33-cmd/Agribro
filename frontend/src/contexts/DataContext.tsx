import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Crop {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  basePrice: number;
  currentBid: number;
  farmerId: string;
  farmerName: string;
  location: string;
  imageUrl: string;
  bids: Bid[];
  status: 'active' | 'completed' | 'expired';
  endTime: string;
}

export interface Bid {
  id: string;
  buyerId: string;
  buyerName: string;
  amount: number;
  timestamp: string;
}

export interface InputItem {
  id: string;
  name: string;
  category: 'seeds' | 'fertilizers' | 'pesticides';
  price: number;
  unit: string;
  imageUrl: string;
  vendorId: string;
  vendorName: string;
  description: string;
  inStock: boolean;
}

export interface LogisticsRequest {
  id: string;
  farmerId: string;
  farmerName: string;
  cropType: string;
  quantity: number;
  fromLocation: string;
  toLocation: string;
  status: 'pending' | 'matched' | 'completed';
  requestedDate: string;
}

export interface CommunityPost {
  id: string;
  authorId: string;
  authorName: string;
  title: string;
  content: string;
  timestamp: string;
  replies: Reply[];
}

export interface Reply {
  id: string;
  authorId: string;
  authorName: string;
  content: string;
  timestamp: string;
}

interface DataContextType {
  crops: Crop[];
  inputItems: InputItem[];
  logisticsRequests: LogisticsRequest[];
  communityPosts: CommunityPost[];
  addCrop: (crop: Omit<Crop, 'id' | 'bids' | 'currentBid'>) => void;
  addBid: (cropId: string, bid: Omit<Bid, 'id' | 'timestamp'>) => void;
  addLogisticsRequest: (request: Omit<LogisticsRequest, 'id'>) => void;
  addCommunityPost: (post: Omit<CommunityPost, 'id' | 'timestamp' | 'replies'>) => void;
  addReply: (postId: string, reply: Omit<Reply, 'id' | 'timestamp'>) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [crops, setCrops] = useState<Crop[]>([]);
  const [inputItems, setInputItems] = useState<InputItem[]>([]);
  const [logisticsRequests, setLogisticsRequests] = useState<LogisticsRequest[]>([]);
  const [communityPosts, setCommunityPosts] = useState<CommunityPost[]>([]);

  useEffect(() => {
    // Initialize with demo data
    const demoCrops: Crop[] = [
      {
        id: '1',
        name: 'Wheat',
        quantity: 100,
        unit: 'quintals',
        basePrice: 2000,
        currentBid: 2150,
        farmerId: 'farmer1',
        farmerName: 'राज कुमार',
        location: 'Punjab',
        imageUrl: '/images/crops/Wheat.jpg',
        bids: [
          { id: '1', buyerId: 'buyer1', buyerName: 'ABC Traders', amount: 2100, timestamp: '2025-01-01T10:00:00Z' },
          { id: '2', buyerId: 'buyer2', buyerName: 'XYZ Mills', amount: 2150, timestamp: '2025-01-01T11:00:00Z' }
        ],
        status: 'active',
        endTime: '2025-01-15T18:00:00Z'
      },
      {
        id: '2',
        name: 'Rice',
        quantity: 75,
        unit: 'quintals',
        basePrice: 1800,
        currentBid: 1950,
        farmerId: 'farmer2',
        farmerName: 'सुरेश पटेल',
        location: 'Haryana',
        imageUrl: '/images/crops/Rice.jpg',
        bids: [
          { id: '3', buyerId: 'buyer3', buyerName: 'Rice Export Co.', amount: 1950, timestamp: '2025-01-01T12:00:00Z' }
        ],
        status: 'active',
        endTime: '2025-01-14T18:00:00Z'
      },
      {
        id: '3',
        name: 'Corn/Maize',
        quantity: 120,
        unit: 'quintals',
        basePrice: 1600,
        currentBid: 1750,
        farmerId: 'farmer3',
        farmerName: 'अमित शर्मा',
        location: 'Madhya Pradesh',
        imageUrl: '/images/crops/Corn.jpg',
        bids: [
          { id: '4', buyerId: 'buyer4', buyerName: 'Corn Processors Ltd', amount: 1750, timestamp: '2025-01-01T13:00:00Z' }
        ],
        status: 'active',
        endTime: '2025-01-16T18:00:00Z'
      },
      {
        id: '4',
        name: 'Soybeans',
        quantity: 60,
        unit: 'quintals',
        basePrice: 3200,
        currentBid: 3400,
        farmerId: 'farmer4',
        farmerName: 'प्रमोद वर्मा',
        location: 'Maharashtra',
        imageUrl: '/images/crops/Soybeans.jpg',
        bids: [
          { id: '5', buyerId: 'buyer5', buyerName: 'Soybean Industries', amount: 3400, timestamp: '2025-01-01T14:00:00Z' }
        ],
        status: 'active',
        endTime: '2025-01-13T18:00:00Z'
      },
      {
        id: '5',
        name: 'Cotton',
        quantity: 45,
        unit: 'quintals',
        basePrice: 4500,
        currentBid: 4800,
        farmerId: 'farmer5',
        farmerName: 'रमेश गुप्ता',
        location: 'Gujarat',
        imageUrl: '/images/crops/Cotton.jpg',
        bids: [
          { id: '6', buyerId: 'buyer6', buyerName: 'Textile Mills Co.', amount: 4800, timestamp: '2025-01-01T15:00:00Z' }
        ],
        status: 'active',
        endTime: '2025-01-17T18:00:00Z'
      },
      {
        id: '6',
        name: 'Sugarcane',
        quantity: 200,
        unit: 'quintals',
        basePrice: 280,
        currentBid: 320,
        farmerId: 'farmer6',
        farmerName: 'दिनेश यादव',
        location: 'Uttar Pradesh',
        imageUrl: '/images/crops/Sugarcane.jpg',
        bids: [
          { id: '7', buyerId: 'buyer7', buyerName: 'Sugar Factory Ltd', amount: 320, timestamp: '2025-01-01T16:00:00Z' }
        ],
        status: 'active',
        endTime: '2025-01-18T18:00:00Z'
      },
      {
        id: '7',
        name: 'Potatoes',
        quantity: 80,
        unit: 'quintals',
        basePrice: 1200,
        currentBid: 1350,
        farmerId: 'farmer7',
        farmerName: 'सुनील कुमार',
        location: 'Bihar',
        imageUrl: '/images/crops/Potatoes.jpg',
        bids: [
          { id: '8', buyerId: 'buyer8', buyerName: 'Fresh Foods Ltd', amount: 1350, timestamp: '2025-01-01T17:00:00Z' }
        ],
        status: 'active',
        endTime: '2025-01-19T18:00:00Z'
      },
      {
        id: '8',
        name: 'Onions',
        quantity: 50,
        unit: 'quintals',
        basePrice: 800,
        currentBid: 950,
        farmerId: 'farmer8',
        farmerName: 'महेश सिंह',
        location: 'Rajasthan',
        imageUrl: '/images/crops/Onions.jpg',
        bids: [
          { id: '9', buyerId: 'buyer9', buyerName: 'Vegetable Traders', amount: 950, timestamp: '2025-01-01T18:00:00Z' }
        ],
        status: 'active',
        endTime: '2025-01-20T18:00:00Z'
      },
      {
        id: '9',
        name: 'Tomatoes',
        quantity: 30,
        unit: 'quintals',
        basePrice: 1500,
        currentBid: 1800,
        farmerId: 'farmer9',
        farmerName: 'राजेश मालवीय',
        location: 'Karnataka',
        imageUrl: '/images/crops/Tomatoes.jpg',
        bids: [
          { id: '10', buyerId: 'buyer10', buyerName: 'Tomato Processors', amount: 1800, timestamp: '2025-01-01T19:00:00Z' }
        ],
        status: 'active',
        endTime: '2025-01-21T18:00:00Z'
      },
      {
        id: '10',
        name: 'Pulses (Lentils)',
        quantity: 40,
        unit: 'quintals',
        basePrice: 4500,
        currentBid: 4800,
        farmerId: 'farmer10',
        farmerName: 'अनिल जैन',
        location: 'Madhya Pradesh',
        imageUrl: '/images/crops/Pulse.jpg',
        bids: [
          { id: '11', buyerId: 'buyer11', buyerName: 'Pulse Traders', amount: 4800, timestamp: '2025-01-01T20:00:00Z' }
        ],
        status: 'active',
        endTime: '2025-01-22T18:00:00Z'
      }
    ];

    // Helper function to get local image path
    const getImageUrl = (cropName: string) => {
      // Map crop names to exact filenames with capital letters
      const filenameMap: { [key: string]: string } = {
        'Wheat': 'Wheat.jpg',
        'Rice': 'Rice.jpg',
        'Corn/Maize': 'Corn.jpg',
        'Soybeans': 'Soybeans.jpg',
        'Cotton': 'Cotton.jpg',
        'Sugarcane': 'Sugarcane.jpg',
        'Potatoes': 'Potatoes.jpg',
        'Onions': 'Onions.jpg',
        'Tomatoes': 'Tomatoes.jpg',
        'Pulses (Lentils)': 'Pulse.jpg'
      };
      
      const filename = filenameMap[cropName] || `${cropName}.jpg`;
      return `/images/crops/${filename}`;
    };

    // Update crops with local images
    const cropsWithLocalImages = demoCrops.map(crop => ({
      ...crop,
      imageUrl: getImageUrl(crop.name)
    }));
    const demoInputs: InputItem[] = [
      {
        id: '1',
        name: 'Wheat Seeds (HD-2967)',
        category: 'seeds',
        price: 45,
        unit: 'per kg',
        imageUrl: '/images/static/wheat-seeds.jpg',
        vendorId: 'vendor1',
        vendorName: 'AgriSeeds Pvt Ltd',
        description: 'High yielding wheat variety suitable for North Indian conditions',
        inStock: true
      },
      {
        id: '2',
        name: 'NPK Fertilizer (10:26:26)',
        category: 'fertilizers',
        price: 1200,
        unit: 'per 50kg bag',
        imageUrl: '/images/static/npk-fertilizer.jpg',
        vendorId: 'vendor2',
        vendorName: 'FertiFarm Solutions',
        description: 'Balanced NPK fertilizer for better crop growth',
        inStock: true
      },
      {
        id: '3',
        name: 'Rice Seeds (Pusa Basmati)',
        category: 'seeds',
        price: 85,
        unit: 'per kg',
        imageUrl: '/images/static/rice-seeds.jpg',
        vendorId: 'vendor3',
        vendorName: 'Rice Seeds Co.',
        description: 'Premium basmati rice variety with excellent aroma',
        inStock: true
      },
      {
        id: '4',
        name: 'Urea Fertilizer',
        category: 'fertilizers',
        price: 300,
        unit: 'per 50kg bag',
        imageUrl: '/images/static/urea-fertilizer.jpg',
        vendorId: 'vendor4',
        vendorName: 'Urea Suppliers Ltd',
        description: 'High nitrogen content for leafy growth',
        inStock: true
      },
      {
        id: '5',
        name: 'Neem Oil Pesticide',
        category: 'pesticides',
        price: 450,
        unit: 'per liter',
        imageUrl: '/images/static/neem-oil-pesticide.jpg',
        vendorId: 'vendor5',
        vendorName: 'Organic Pest Control',
        description: 'Natural pest control solution for organic farming',
        inStock: true
      },
      {
        id: '6',
        name: 'Corn Seeds (Hybrid)',
        category: 'seeds',
        price: 120,
        unit: 'per kg',
        imageUrl: '/images/static/corn-seeds.jpg',
        vendorId: 'vendor6',
        vendorName: 'Hybrid Seeds Corp',
        description: 'High-yielding hybrid corn variety',
        inStock: true
      },
      {
        id: '7',
        name: 'DAP Fertilizer',
        category: 'fertilizers',
        price: 1400,
        unit: 'per 50kg bag',
        imageUrl: '/images/static/dap-fertilizer.jpg',
        vendorId: 'vendor7',
        vendorName: 'DAP Fertilizers Ltd',
        description: 'Phosphorus-rich fertilizer for root development',
        inStock: true
      },
      {
        id: '8',
        name: 'Bacterial Pesticide',
        category: 'pesticides',
        price: 350,
        unit: 'per kg',
        imageUrl: '/images/static/bacterial-pesticide.jpg',
        vendorId: 'vendor8',
        vendorName: 'Bio Pest Solutions',
        description: 'Environment-friendly bacterial pest control',
        inStock: true
      },
      {
        id: '9',
        name: 'Soybean Seeds',
        category: 'seeds',
        price: 95,
        unit: 'per kg',
        imageUrl: '/images/static/soybean-seeds.jpg',
        vendorId: 'vendor9',
        vendorName: 'Soybean Seeds Ltd',
        description: 'High protein soybean variety',
        inStock: true
      },
      {
        id: '10',
        name: 'Potash Fertilizer',
        category: 'fertilizers',
        price: 1100,
        unit: 'per 50kg bag',
        imageUrl: '/images/static/potash-fertilizer.jpg',
        vendorId: 'vendor10',
        vendorName: 'Potash Suppliers',
        description: 'Potassium-rich fertilizer for fruit development',
        inStock: true
      },
      {
        id: '11',
        name: 'Fungicide (Copper-based)',
        category: 'pesticides',
        price: 280,
        unit: 'per kg',
        imageUrl: '/images/static/fungicide.jpg',
        vendorId: 'vendor11',
        vendorName: 'Fungicide Solutions',
        description: 'Effective against fungal diseases',
        inStock: true
      },
      {
        id: '12',
        name: 'Cotton Seeds (BT)',
        category: 'seeds',
        price: 180,
        unit: 'per kg',
        imageUrl: '/images/static/cotton-seeds.jpg',
        vendorId: 'vendor12',
        vendorName: 'BT Cotton Seeds',
        description: 'BT cotton variety resistant to bollworm',
        inStock: true
      }
    ];

    const demoPosts: CommunityPost[] = [
      {
        id: '1',
        authorId: 'farmer1',
        authorName: 'राज कुमार',
        title: 'Wheat crop disease prevention tips',
        content: 'I want to share some effective methods for preventing rust disease in wheat crops...',
        timestamp: '2025-01-01T09:00:00Z',
        replies: [
          {
            id: '1',
            authorId: 'farmer3',
            authorName: 'अमित शर्मा',
            content: 'Very helpful! I will try these methods in my field.',
            timestamp: '2025-01-01T10:00:00Z'
          }
        ]
      }
    ];

    setCrops(cropsWithLocalImages);
    setInputItems(demoInputs);
    setCommunityPosts(demoPosts);
  }, []);

  const addCrop = (cropData: Omit<Crop, 'id' | 'bids' | 'currentBid'>) => {
    const newCrop: Crop = {
      ...cropData,
      id: Date.now().toString(),
      bids: [],
      currentBid: cropData.basePrice
    };
    setCrops(prev => [newCrop, ...prev]);
  };

  const addBid = (cropId: string, bidData: Omit<Bid, 'id' | 'timestamp'>) => {
    const newBid: Bid = {
      ...bidData,
      id: Date.now().toString(),
      timestamp: new Date().toISOString()
    };

    setCrops(prev => prev.map(crop => {
      if (crop.id === cropId) {
        const updatedBids = [...crop.bids, newBid];
        return {
          ...crop,
          bids: updatedBids,
          currentBid: Math.max(crop.currentBid, newBid.amount)
        };
      }
      return crop;
    }));
  };

  const addLogisticsRequest = (requestData: Omit<LogisticsRequest, 'id'>) => {
    const newRequest: LogisticsRequest = {
      ...requestData,
      id: Date.now().toString()
    };
    setLogisticsRequests(prev => [newRequest, ...prev]);
  };

  const addCommunityPost = (postData: Omit<CommunityPost, 'id' | 'timestamp' | 'replies'>) => {
    const newPost: CommunityPost = {
      ...postData,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      replies: []
    };
    setCommunityPosts(prev => [newPost, ...prev]);
  };

  const addReply = (postId: string, replyData: Omit<Reply, 'id' | 'timestamp'>) => {
    const newReply: Reply = {
      ...replyData,
      id: Date.now().toString(),
      timestamp: new Date().toISOString()
    };

    setCommunityPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          replies: [...post.replies, newReply]
        };
      }
      return post;
    }));
  };

  return (
    <DataContext.Provider value={{
      crops,
      inputItems,
      logisticsRequests,
      communityPosts,
      addCrop,
      addBid,
      addLogisticsRequest,
      addCommunityPost,
      addReply
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};