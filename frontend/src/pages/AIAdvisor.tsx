import React, { useState } from 'react';
import { Send, Bot, User, Leaf, AlertTriangle, Cloud, Bug, Globe } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: string;
}

type Language = 'hindi' | 'english' | 'both';

const AIAdvisor: React.FC = () => {
  const [language, setLanguage] = useState<Language>('both');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: 'नमस्ते! मैं आपका AI कृषि सलाहकार हूं। मैं आपकी फसलों, बीमारियों, मौसम और खेती की तकनीकों के बारे में सवालों का जवाब दे सकता हूं। आप मुझसे हिंदी या अंग्रेजी में सवाल पूछ सकते हैं।\n\nHello! I am your AI Agriculture Advisor. I can answer your questions about crops, diseases, weather, and farming techniques. You can ask me questions in Hindi or English.',
      timestamp: new Date().toISOString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    { 
      icon: Bug, 
      text: 'Wheat crop disease identification',
      textHindi: 'गेहूं की फसल में बीमारी की पहचान',
      category: 'disease' 
    },
    { 
      icon: Cloud, 
      text: 'Weather alerts for farming',
      textHindi: 'खेती के लिए मौसम की चेतावनी',
      category: 'weather' 
    },
    { 
      icon: Leaf, 
      text: 'Best fertilizer for rice',
      textHindi: 'धान के लिए सर्वोत्तम उर्वरक',
      category: 'fertilizer' 
    },
    { 
      icon: AlertTriangle, 
      text: 'Pest control solutions',
      textHindi: 'कीट नियंत्रण के समाधान',
      category: 'pest' 
    }
  ];

  const getAIResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('wheat') || lowerQuestion.includes('गेहूं')) {
      if (language === 'hindi') {
        return `🌾 गेहूं की फसल के लिए सुझाव:

• बुआई का सही समय: नवंबर-दिसंबर
• सिंचाई: CRI, tillering, और grain filling stages पर
• उर्वरक: 120 kg N, 60 kg P2O5, 40 kg K2O प्रति हेक्टेयर
• मुख्य बीमारियां: Rust, smut, और karnal bunt
• रोकथाम: प्रमाणित बीज का उपयोग करें

कोई विशिष्ट समस्या है?`;
      } else if (language === 'english') {
        return `🌾 Wheat Crop Recommendations:

• Sowing time: November-December
• Irrigation: At CRI, tillering, and grain filling stages
• Fertilizer: 120 kg N, 60 kg P2O5, 40 kg K2O per hectare
• Main diseases: Rust, smut, and karnal bunt
• Prevention: Use certified seeds

Any specific problem?`;
      } else {
        return `🌾 गेहूं की फसल के लिए सुझाव / Wheat Crop Recommendations:

🇮🇳 हिंदी में:
• बुआई का सही समय: नवंबर-दिसंबर
• सिंचाई: CRI, tillering, और grain filling stages पर
• उर्वरक: 120 kg N, 60 kg P2O5, 40 kg K2O प्रति हेक्टेयर
• मुख्य बीमारियां: Rust, smut, और karnal bunt
• रोकथाम: प्रमाणित बीज का उपयोग करें

🇺🇸 In English:
• Sowing time: November-December
• Irrigation: At CRI, tillering, and grain filling stages
• Fertilizer: 120 kg N, 60 kg P2O5, 40 kg K2O per hectare
• Main diseases: Rust, smut, and karnal bunt
• Prevention: Use certified seeds

कोई विशिष्ट समस्या है? / Any specific problem?`;
      }
    }
    
    if (lowerQuestion.includes('rice') || lowerQuestion.includes('धान')) {
      if (language === 'hindi') {
        return `🌾 धान की खेती के लिए महत्वपूर्ण बातें:

• रोपाई: जून-जुलाई में करें
• पानी का प्रबंधन: 5 cm खड़ा पानी बनाए रखें
• उर्वरक: 100 kg N, 50 kg P, 50 kg K प्रति हेक्टेयर
• मुख्य कीट: Stem borer, leaf folder
• बीमारियां: Blast, sheath blight
• समाधान: IPM approach अपनाएं

और कुछ जानना चाहते हैं?`;
      } else if (language === 'english') {
        return `🌾 Rice Cultivation Guide:

• Transplanting: June-July
• Water management: Maintain 5 cm standing water
• Fertilizer: 100 kg N, 50 kg P, 50 kg K per hectare
• Main pests: Stem borer, leaf folder
• Diseases: Blast, sheath blight
• Solution: Adopt IPM approach

Need to know anything else?`;
      } else {
        return `🌾 धान की खेती के लिए महत्वपूर्ण बातें / Rice Cultivation Guide:

🇮🇳 हिंदी में:
• रोपाई: जून-जुलाई में करें
• पानी का प्रबंधन: 5 cm खड़ा पानी बनाए रखें
• उर्वरक: 100 kg N, 50 kg P, 50 kg K प्रति हेक्टेयर
• मुख्य कीट: Stem borer, leaf folder
• बीमारियां: Blast, sheath blight
• समाधान: IPM approach अपनाएं

🇺🇸 In English:
• Transplanting: June-July
• Water management: Maintain 5 cm standing water
• Fertilizer: 100 kg N, 50 kg P, 50 kg K per hectare
• Main pests: Stem borer, leaf folder
• Diseases: Blast, sheath blight
• Solution: Adopt IPM approach

और कुछ जानना चाहते हैं? / Need to know anything else?`;
      }
    }
    
    if (lowerQuestion.includes('disease') || lowerQuestion.includes('बीमारी')) {
      if (language === 'hindi') {
        return `🔍 फसल की बीमारियों की पहचान और रोकथाम:

सामान्य लक्षण:
• पत्तियों पर धब्बे
• पीलापन या मुरझाना
• फल/दाने में सड़न

रोकथाम:
• फसल चक्र अपनाएं
• प्रमाणित बीज का उपयोग
• खेत की सफाई रखें
• उचित जल निकास

कृपया अपनी फसल की तस्वीर भेजें या लक्षणों का विस्तार से बताएं।`;
      } else if (language === 'english') {
        return `🔍 Crop Disease Identification & Prevention:

Common Symptoms:
• Spots on leaves
• Yellowing or wilting
• Rot in fruits/grains

Prevention:
• Maintain crop rotation
• Use certified seeds
• Keep field clean
• Ensure proper drainage

Please send a photo of your crop or describe symptoms in detail.`;
      } else {
        return `🔍 फसल की बीमारियों की पहचान और रोकथाम / Crop Disease Identification & Prevention:

🇮🇳 हिंदी में:
सामान्य लक्षण / Common Symptoms:
• पत्तियों पर धब्बे / Spots on leaves
• पीलापन या मुरझाना / Yellowing or wilting
• फल/दाने में सड़न / Rot in fruits/grains

रोकथाम / Prevention:
• फसल चक्र अपनाएं / Adopt crop rotation
• प्रमाणित बीज का उपयोग / Use certified seeds
• खेत की सफाई रखें / Keep field clean
• उचित जल निकास / Proper drainage

🇺🇸 In English:
• Maintain crop rotation
• Use certified seeds
• Keep field clean
• Ensure proper drainage

कृपया अपनी फसल की तस्वीर भेजें या लक्षणों का विस्तार से बताएं।
Please send a photo of your crop or describe symptoms in detail.`;
      }
    }
    
    if (lowerQuestion.includes('weather') || lowerQuestion.includes('मौसम')) {
      if (language === 'hindi') {
        return `🌤️ मौसम की जानकारी और खेती:

• आज: 25°C, हल्की बारिश की संभावना
• कल: 28°C, धूप रहेगी
• सप्ताह भर: सामान्य तापमान 22-30°C

सुझाव:
• बारिश से पहले स्प्रे न करें
• सिंचाई का समय बदलें
• फसल की कटाई तेज़ करें

मौसम के अनुसार काम की योजना बनाएं।`;
      } else if (language === 'english') {
        return `🌤️ Weather Information & Farming:

• Today: 25°C, chance of light rain
• Tomorrow: 28°C, sunny weather
• Week ahead: Normal temperature 22-30°C

Suggestions:
• Don't spray before rain
• Adjust irrigation timing
• Speed up crop harvesting

Plan work according to weather.`;
      } else {
        return `🌤️ मौसम की जानकारी और खेती / Weather Information & Farming:

🇮🇳 हिंदी में:
• आज: 25°C, हल्की बारिश की संभावना
• कल: 28°C, धूप रहेगी
• सप्ताह भर: सामान्य तापमान 22-30°C

सुझाव / Suggestions:
• बारिश से पहले स्प्रे न करें / Don't spray before rain
• सिंचाई का समय बदलें / Adjust irrigation timing
• फसल की कटाई तेज़ करें / Speed up crop harvesting

🇺🇸 In English:
• Today: 25°C, chance of light rain
• Tomorrow: 28°C, sunny weather
• Week ahead: Normal temperature 22-30°C

मौसम के अनुसार काम की योजना बनाएं।
Plan work according to weather.`;
      }
    }
    
    if (lowerQuestion.includes('fertilizer') || lowerQuestion.includes('खाद')) {
      if (language === 'hindi') {
        return `🌱 उर्वरक की जानकारी:

मुख्य पोषक तत्व:
• नाइट्रोजन (N): पत्तियों की बढ़वार
• फॉस्फोरस (P): जड़ों का विकास
• पोटाश (K): रोग प्रतिरोधा

सुझाव:
• मिट्टी की जांच कराएं
• सूक्ष्म पोषक तत्व भी दें
• जैविक खाद का प्रयोग करें
• सही समय पर दें

किस फसल के लिए जानकारी चाहिए?`;
      } else if (language === 'english') {
        return `🌱 Fertilizer Information:

Main Nutrients:
• Nitrogen (N): Leaf growth
• Phosphorus (P): Root development
• Potassium (K): Disease resistance

Suggestions:
• Get soil tested
• Also provide micronutrients
• Use organic manure
• Apply at right time

Which crop information do you need?`;
      } else {
        return `🌱 उर्वरक की जानकारी / Fertilizer Information:

🇮🇳 हिंदी में:
मुख्य पोषक तत्व / Main Nutrients:
• नाइट्रोजन (N): पत्तियों की बढ़वार / Leaf growth
• फॉस्फोरस (P): जड़ों का विकास / Root development
• पोटाश (K): रोग प्रतिरोधा / Disease resistance

सुझाव / Suggestions:
• मिट्टी की जांच कराएं / Get soil tested
• सूक्ष्म पोषक तत्व भी दें / Also provide micronutrients
• जैविक खाद का प्रयोग करें / Use organic manure
• सही समय पर दें / Apply at right time

🇺🇸 In English:
• Nitrogen (N): Leaf growth
• Phosphorus (P): Root development
• Potassium (K): Disease resistance

किस फसल के लिए जानकारी चाहिए? / Which crop information do you need?`;
      }
    }
    
    if (language === 'hindi') {
      return `मैं आपकी मदद करने के लिए यहां हूं!

कृपया अपना सवाल विस्तार से पूछें:
• फसल का नाम
• समस्या का विवरण
• आपका क्षेत्र
• फसल की वर्तमान स्थिति

इससे मैं आपको बेहतर सलाह दे सकूंगा। आप हिंदी या अंग्रेजी में सवाल पूछ सकते हैं।`;
    } else if (language === 'english') {
      return `I'm here to help you!

Please ask your question in detail:
• Crop name
• Problem description
• Your area
• Current crop condition

This will help me give you better advice. You can ask questions in Hindi or English.`;
    } else {
      return `मैं आपकी मदद करने के लिए यहां हूं! / I'm here to help you!

🇮🇳 हिंदी में:
कृपया अपना सवाल विस्तार से पूछें:
• फसल का नाम / Crop name
• समस्या का विवरण / Problem description
• आपका क्षेत्र / Your area
• फसल की वर्तमान स्थिति / Current crop condition

🇺🇸 In English:
Please ask your question in detail:
• Crop name
• Problem description
• Your area
• Current crop condition

इससे मैं आपको बेहतर सलाह दे सकूंगा। आप हिंदी या अंग्रेजी में सवाल पूछ सकते हैं।
This will help me give you better advice. You can ask questions in Hindi or English.`;
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: getAIResponse(inputMessage),
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  const getPlaceholderText = () => {
    switch (language) {
      case 'hindi':
        return 'अपना कृषि प्रश्न हिंदी में पूछें...';
      case 'english':
        return 'Ask your farming question in English...';
      default:
        return 'Ask your farming question in Hindi or English... / अपना कृषि प्रश्न हिंदी या अंग्रेजी में पूछें...';
    }
  };

  const getHeaderText = () => {
    switch (language) {
      case 'hindi':
        return 'AI कृषि सलाहकार';
      case 'english':
        return 'AI Agriculture Advisor';
      default:
        return 'AI कृषि सलाहकार / AI Agriculture Advisor';
    }
  };

  const getSubHeaderText = () => {
    switch (language) {
      case 'hindi':
        return '24/7 विशेषज्ञ कृषि सलाह हिंदी में';
      case 'english':
        return '24/7 expert farming advice in English';
      default:
        return '24/7 expert farming advice in Hindi and English / 24/7 विशेषज्ञ कृषि सलाह हिंदी और अंग्रेजी में';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-4 rounded-full">
              <Bot className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{getHeaderText()}</h1>
          <p className="text-gray-600 mb-4">
            {getSubHeaderText()}
          </p>
          
          {/* Language Selector */}
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-lg shadow-md p-2 flex items-center gap-2">
              <Globe className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Language / भाषा:</span>
              <div className="flex bg-gray-100 rounded-md">
                <button
                  onClick={() => setLanguage('hindi')}
                  className={`px-3 py-1 text-sm rounded-md transition-colors ${
                    language === 'hindi' 
                      ? 'bg-green-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  हिंदी
                </button>
                <button
                  onClick={() => setLanguage('english')}
                  className={`px-3 py-1 text-sm rounded-md transition-colors ${
                    language === 'english' 
                      ? 'bg-green-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('both')}
                  className={`px-3 py-1 text-sm rounded-md transition-colors ${
                    language === 'both' 
                      ? 'bg-green-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Both
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Questions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {quickQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuickQuestion(language === 'hindi' ? question.textHindi : question.text)}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow text-left group"
            >
              <question.icon className="h-8 w-8 text-green-600 mb-3 group-hover:scale-110 transition-transform" />
              {language === 'both' ? (
                <>
                  <p className="text-sm font-medium text-gray-900 mb-1">{question.text}</p>
                  <p className="text-xs text-gray-600">{question.textHindi}</p>
                </>
              ) : (
                <p className="text-sm font-medium text-gray-900">
                  {language === 'hindi' ? question.textHindi : question.text}
                </p>
              )}
            </button>
          ))}
        </div>

        {/* Chat Interface */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div className={`flex-shrink-0 ${
                  message.type === 'user' ? 'bg-blue-100' : 'bg-green-100'
                } rounded-full p-2`}>
                  {message.type === 'user' ? (
                    <User className="h-5 w-5 text-blue-600" />
                  ) : (
                    <Bot className="h-5 w-5 text-green-600" />
                  )}
                </div>
                <div className={`flex-1 ${message.type === 'user' ? 'text-right' : ''}`}>
                  <div className={`inline-block p-3 rounded-lg max-w-xs lg:max-w-md ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(message.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 rounded-full p-2">
                  <Bot className="h-5 w-5 text-green-600" />
                </div>
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t p-4">
            <div className="flex space-x-4">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={getPlaceholderText()}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAdvisor;