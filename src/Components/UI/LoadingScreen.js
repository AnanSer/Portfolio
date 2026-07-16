import React, { useEffect, useState } from 'react';
import { Code2, Sparkles, Zap, Terminal } from 'lucide-react';
import styles from './LoadingScreen.module.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');
  const [isExiting, setIsExiting] = useState(false);

  const loadingStages = [
    { progress: 0, text: 'Initializing portfolio...' },
    { progress: 25, text: 'Loading components...' },
    { progress: 50, text: 'Applying theme...' },
    { progress: 75, text: 'Rendering projects...' },
    { progress: 90, text: 'Almost ready...' },
    { progress: 100, text: 'Welcome!' }
  ];

  useEffect(() => {
    let currentStage = 0;
    
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        
        // Update loading text based on progress
        if (newProgress >= loadingStages[currentStage]?.progress && currentStage < loadingStages.length - 1) {
          setLoadingText(loadingStages[currentStage].text);
          currentStage++;
        }
        
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setProgress(100);
          setLoadingText('Welcome!');
          
          // Start exit animation
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              onLoadingComplete();
            }, 800);
          }, 500);
          
          return 100;
        }
        
        return newProgress;
      });
    }, 200);

    return () => clearInterval(progressInterval);
  }, [onLoadingComplete]);

  return (
    <div className={`${styles.loadingScreen} ${isExiting ? styles.exiting : ''}`}>
      <div className={styles.loadingContent}>
        {/* Animated Logo/Icon */}
        <div className={styles.iconContainer}>
          <div className={styles.iconCircle}>
            <Code2 className={styles.mainIcon} size={48} />
          </div>
          <Sparkles className={styles.floatingIcon} size={20} />
          <Zap className={styles.floatingIcon2} size={20} />
          <Terminal className={styles.floatingIcon3} size={20} />
        </div>

        {/* Portfolio Name */}
        <h1 className={styles.portfolioTitle}>
          <span className={styles.titleChar}>A</span>
          <span className={styles.titleChar}>n</span>
          <span className={styles.titleChar}>a</span>
          <span className={styles.titleChar}>n</span>
          <span className={styles.titleSpace}> </span>
          <span className={styles.titleChar}>S</span>
          <span className={styles.titleChar}>e</span>
          <span className={styles.titleChar}>r</span>
          <span className={styles.titleChar}>b</span>
          <span className={styles.titleChar}>e</span>
          <span className={styles.titleChar}>s</span>
          <span className={styles.titleChar}>a</span>
        </h1>

        <p className={styles.subtitle}>Full Stack Developer</p>

        {/* Progress Bar */}
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            >
              <div className={styles.progressGlow}></div>
            </div>
          </div>
          <div className={styles.progressText}>
            <span>{loadingText}</span>
            <span className={styles.progressPercent}>{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Loading Dots Animation */}
        <div className={styles.loadingDots}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className={styles.bgElements}>
        <div className={styles.bgCircle1}></div>
        <div className={styles.bgCircle2}></div>
        <div className={styles.bgCircle3}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
