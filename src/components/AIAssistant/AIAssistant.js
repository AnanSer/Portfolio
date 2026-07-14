import React, { useState, useEffect, useRef } from 'react';
import styles from './AIAssistant.module.css';
import { findBestMatch } from '../../data/portfolioKnowledgeBase';

// ============================================
// QUICK QUESTION CHIPS
// ============================================
const quickQuestions = [
  "Tell me about yourself",
  "Projects",
  "Backend Skills",
  "Mobile Apps",
  "Experience",
  "Services",
  "Availability",
  "Download Resume",
  "GitHub",
  "LinkedIn"
];

// ============================================
// AI ORB ANIMATION COMPONENT (MINI VERSION)
// ============================================
const MiniAIOrb = () => {
  return (
    <div className={styles.miniOrbContainer}>
      <div className={styles.miniOrb}>
        <div className={styles.miniOrbCore}></div>
        <div className={styles.miniOrbGlow}></div>
      </div>
    </div>
  );
};

// ============================================
// ENHANCED RESPONSE WITH ACTION BUTTONS
// ============================================
const getEnhancedResponse = (question) => {
  const lowerQuestion = question.toLowerCase();
  let response = findBestMatch(question);
  let actionButtons = [];

  // Check for special action requests
  if (lowerQuestion.includes('resume') || lowerQuestion.includes('cv') || lowerQuestion.includes('download')) {
    actionButtons.push({
      label: 'Download Resume',
      icon: 'download',
      action: 'download-resume'
    });
  }

  if (lowerQuestion.includes('github')) {
    actionButtons.push({
      label: 'Visit GitHub',
      icon: 'github',
      action: 'open-github',
      url: 'https://github.com/anan' // Update with real URL
    });
  }

  if (lowerQuestion.includes('linkedin')) {
    actionButtons.push({
      label: 'Visit LinkedIn',
      icon: 'linkedin',
      action: 'open-linkedin',
      url: 'https://linkedin.com/in/anan' // Update with real URL
    });
  }

  if (lowerQuestion.includes('contact') || lowerQuestion.includes('email') || lowerQuestion.includes('reach')) {
    actionButtons.push({
      label: 'Go to Contact',
      icon: 'mail',
      action: 'scroll-contact'
    });
  }

  return { response, actionButtons };
};

// ============================================
// ACTION BUTTON COMPONENT
// ============================================
const ActionButton = ({ button, onAction }) => {
  const icons = {
    download: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    github: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 1C19.91 1 18.73 0.65 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.65 5.09 1 5.09 1C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    linkedin: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    mail: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  };

  return (
    <button className={styles.actionButton} onClick={() => onAction(button)}>
      {icons[button.icon]}
      <span>{button.label}</span>
    </button>
  );
};
// ============================================
// TYPING INDICATOR COMPONENT
// ============================================
const TypingIndicator = () => {
  return (
    <div className={styles.typingIndicator}>
      <div className={styles.typingDot}></div>
      <div className={styles.typingDot}></div>
      <div className={styles.typingDot}></div>
    </div>
  );
};

// ============================================
// MESSAGE BUBBLE COMPONENT
// ============================================
const MessageBubble = ({ message, isUser, actionButtons, onActionClick }) => {
  return (
    <div className={`${styles.messageWrapper} ${isUser ? styles.userMessage : styles.assistantMessage}`}>
      {!isUser && (
        <div className={styles.avatarIcon}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
      <div className={styles.messageBubbleContent}>
        <div className={styles.messageBubble}>
          <div className={styles.messageText}>
            {message.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < message.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        </div>
        {actionButtons && actionButtons.length > 0 && (
          <div className={styles.actionButtonsContainer}>
            {actionButtons.map((button, index) => (
              <ActionButton key={index} button={button} onAction={onActionClick} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================
// MAIN AI ASSISTANT COMPONENT (FLOATING)
// ============================================
const AIAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);
  const floatingButtonRef = useRef(null);
  const chatPanelRef = useRef(null);

  // ============================================
  // INITIAL WELCOME MESSAGE
  // ============================================
  useEffect(() => {
    const welcomeMessage = {
      text: `👋 Hi!\n\nI'm Anan's Portfolio Assistant.\n\nI can answer questions about:\n• Projects\n• Experience\n• Skills\n• Mobile Development\n• Services\n• Internship\n• Availability\n\nClick one of the suggestions below or ask me anything!`,
      isUser: false,
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, []);

  // ============================================
  // AUTO SCROLL TO BOTTOM
  // ============================================
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // ============================================
  // FOCUS INPUT WHEN OPENED
  // ============================================
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 300);
    }
  }, [isOpen]);

  // ============================================
  // ESC KEY TO CLOSE
  // ============================================
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // ============================================
  // CLICK OUTSIDE TO CLOSE
  // ============================================
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        chatPanelRef.current &&
        !chatPanelRef.current.contains(e.target) &&
        floatingButtonRef.current &&
        !floatingButtonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // ============================================
  // ACTION HANDLER
  // ============================================
  const handleAction = (button) => {
    if (button.action === 'download-resume') {
      // Trigger resume download
      window.open('/resume.pdf', '_blank');
    } else if (button.action === 'open-github') {
      window.open(button.url, '_blank');
    } else if (button.action === 'open-linkedin') {
      window.open(button.url, '_blank');
    } else if (button.action === 'scroll-contact') {
      setIsOpen(false);
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // ============================================
  // SEND MESSAGE HANDLER
  // ============================================
  const handleSendMessage = async (messageText) => {
    const text = messageText || inputValue.trim();
    
    if (!text) return;

    // Hide quick questions after first message
    setShowQuickQuestions(false);

    // Add user message
    const userMessage = {
      text,
      isUser: true,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Show typing indicator
    setIsTyping(true);

    // Simulate thinking delay
    const thinkingDelay = 300 + Math.random() * 500;
    
    setTimeout(() => {
      // Get enhanced response with action buttons
      const { response: responseText, actionButtons } = getEnhancedResponse(text);
      
      const assistantMessage = {
        text: responseText,
        isUser: false,
        timestamp: new Date(),
        actionButtons
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, thinkingDelay);
  };

  // ============================================
  // QUICK QUESTION CLICK HANDLER
  // ============================================
  const handleQuickQuestion = (question) => {
    handleSendMessage(question);
  };

  // ============================================
  // INPUT HANDLERS
  // ============================================
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage();
  };

  // ============================================
  // TOGGLE CHAT
  // ============================================
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!hasOpenedOnce) {
      setHasOpenedOnce(true);
    }
  };

  // ============================================
  // RENDER
  // ============================================
  return (
    <>
      {/* Floating Button */}
      <button
        ref={floatingButtonRef}
        className={`${styles.floatingButton} ${!hasOpenedOnce ? styles.pulseOnce : ''}`}
        onClick={toggleChat}
        aria-label="Open AI Assistant"
      >
        <div className={styles.buttonContent}>
          <div className={styles.buttonIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className={styles.sparkle}>✨</div>
          </div>
          <span className={styles.buttonLabel}>Ask Anan</span>
        </div>
        <div className={styles.buttonGlow}></div>
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div ref={chatPanelRef} className={`${styles.chatPanel} ${styles.chatPanelOpen}`}>
          {/* Chat Header */}
          <div className={styles.chatHeader}>
            <div className={styles.headerLeft}>
              <MiniAIOrb />
              <div className={styles.headerInfo}>
                <div className={styles.headerTitle}>Ask Anan</div>
                <div className={styles.headerSubtitle}>
                  <div className={styles.onlineIndicator}></div>
                  <span>Portfolio Assistant</span>
                </div>
              </div>
            </div>
            <button 
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Chat Messages */}
          <div className={styles.chatMessages} ref={chatContainerRef}>
            {messages.map((message, index) => (
              <MessageBubble 
                key={index} 
                message={message.text} 
                isUser={message.isUser}
                actionButtons={message.actionButtons}
                onActionClick={handleAction}
              />
            ))}
            
            {isTyping && (
              <div className={`${styles.messageWrapper} ${styles.assistantMessage}`}>
                <div className={styles.avatarIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.messageBubbleContent}>
                  <div className={styles.messageBubble}>
                    <TypingIndicator />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Questions */}
          {showQuickQuestions && messages.length === 1 && (
            <div className={styles.quickQuestions}>
              <div className={styles.chipContainer}>
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    className={styles.chip}
                    onClick={() => handleQuickQuestion(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chat Input */}
          <form className={styles.chatInput} onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
              <textarea
                ref={inputRef}
                className={styles.textInput}
                placeholder="Ask me anything..."
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                rows="1"
                aria-label="Message input"
              />
              <button 
                type="submit" 
                className={styles.sendButton}
                disabled={!inputValue.trim()}
                aria-label="Send message"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
