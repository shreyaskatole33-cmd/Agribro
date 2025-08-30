import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.marketplace': 'Marketplace',
    'nav.inputs': 'Inputs',
    'nav.advisory': 'AI Advisory',
    'nav.logistics': 'Logistics',
    'nav.community': 'Community',
    'nav.profile': 'Profile',
    
    // Marketplace
    'marketplace.title': 'Crop Marketplace',
    'marketplace.subtitle': 'Buy and sell crops directly with transparent pricing',
    'marketplace.list_crop': 'List Your Crop',
    'marketplace.current_bid': 'Current Bid',
    'marketplace.place_bid': 'Place Bid',
    'marketplace.ends_in': 'Ends in',
    
    // Inputs
    'inputs.title': 'Input Procurement',
    'inputs.subtitle': 'Quality seeds, pesticides, and farming supplies',
    'inputs.add_to_cart': 'Add to Cart',
    'inputs.buy_now': 'Buy Now',
    
    // Advisory
    'advisory.title': 'AI Farming Advisory',
    'advisory.subtitle': 'Get expert advice powered by AI',
    'advisory.ask_question': 'Ask your farming question...',
    'advisory.send': 'Send',
    
    // Logistics
    'logistics.title': 'Logistics & Transport',
    'logistics.subtitle': 'Connect with transport providers for your produce',
    'logistics.request_transport': 'Request Transport',
    
    // Community
    'community.title': 'Farmer Community',
    'community.subtitle': 'Connect, share, and learn from fellow farmers',
    'community.new_post': 'New Post',
    
    // Common
    'common.login': 'Login',
    'common.register': 'Register',
    'common.logout': 'Logout',
    'common.search': 'Search...',
    'common.filter': 'Filter',
    'common.sort': 'Sort',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    'common.loading': 'Loading...',
  },
  hi: {
    // Navigation
    'nav.marketplace': 'बाज़ार',
    'nav.inputs': 'सामग्री',
    'nav.advisory': 'AI सलाह',
    'nav.logistics': 'परिवहन',
    'nav.community': 'समुदाय',
    'nav.profile': 'प्रोफ़ाइल',
    
    // Marketplace
    'marketplace.title': 'फसल बाज़ार',
    'marketplace.subtitle': 'पारदर्शी मूल्य निर्धारण के साथ सीधे फसल खरीदें और बेचें',
    'marketplace.list_crop': 'अपनी फसल सूचीबद्ध करें',
    'marketplace.current_bid': 'वर्तमान बोली',
    'marketplace.place_bid': 'बोली लगाएं',
    'marketplace.ends_in': 'समाप्त होने में',
    
    // Inputs
    'inputs.title': 'सामग्री खरीद',
    'inputs.subtitle': 'गुणवत्तापूर्ण बीज, कीटनाशक और कृषि सामग्री',
    'inputs.add_to_cart': 'कार्ट में जोड़ें',
    'inputs.buy_now': 'अभी खरीदें',
    
    // Advisory
    'advisory.title': 'AI कृषि सलाह',
    'advisory.subtitle': 'AI द्वारा संचालित विशेषज्ञ सलाह प्राप्त करें',
    'advisory.ask_question': 'अपना कृषि प्रश्न पूछें...',
    'advisory.send': 'भेजें',
    
    // Logistics
    'logistics.title': 'रसद और परिवहन',
    'logistics.subtitle': 'अपने उत्पादों के लिए परिवहन प्रदाताओं से जुड़ें',
    'logistics.request_transport': 'परिवहन का अनुरोध करें',
    
    // Community
    'community.title': 'किसान समुदाय',
    'community.subtitle': 'साथी किसानों से जुड़ें, साझा करें और सीखें',
    'community.new_post': 'नई पोस्ट',
    
    // Common
    'common.login': 'लॉगिन',
    'common.register': 'पंजीकरण',
    'common.logout': 'लॉगअउट',
    'common.search': 'खोजें...',
    'common.filter': 'फ़िल्टर',
    'common.sort': 'क्रमबद्ध करें',
    'common.submit': 'जमा करें',
    'common.cancel': 'रद्द करें',
    'common.loading': 'लोड हो रहा है...',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('hi');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};