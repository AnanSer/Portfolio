import React, { useState, useEffect, useRef } from 'react';
import { Play, Terminal, Code, Maximize2, X } from 'lucide-react';
import styles from './DeveloperPlayground.module.css';

const DeveloperPlayground = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const terminalRef = useRef(null);

  // Compact code to display in the editor
  const code = `const developer = {
  name: "Anan Serbesa",
  role: "Full Stack Developer",
  frontend: ["React", "Next.js"],
  backend: ["Node.js", "Express"],
  mobile: ["React Native", "Flutter"],
  available: true,
};

run(developer);`;

  // Compact terminal output lines (8-10 lines max)
  const outputLines = [
    { type: 'command', text: '$ node developer.js', delay: 0 },
    { type: 'success', text: '✓ Profile Loaded', delay: 150 },
    { type: 'success', text: '✓ Full Stack Developer', delay: 250 },
    { type: 'success', text: '✓ Frontend Skills Verified', delay: 350 },
    { type: 'success', text: '✓ Backend Skills Verified', delay: 450 },
    { type: 'success', text: '✓ Mobile Development Active', delay: 550 },
    { type: 'info', text: '→ Available for Work', delay: 650 },
    { type: 'result', text: '✓ Ready to Collaborate', delay: 800 }
  ];

  // Handle Run button click
  const handleRun = () => {
    if (isRunning) return;

    setIsRunning(true);
    setTerminalOutput([]);
    setCurrentLineIndex(0);
    setCurrentCharIndex(0);
  };

  // Typing animation effect with moving cursor
  useEffect(() => {
    if (!isRunning || currentLineIndex >= outputLines.length) {
      if (currentLineIndex >= outputLines.length && isRunning) {
        setTimeout(() => setIsRunning(false), 300);
      }
      return;
    }

    const currentLine = outputLines[currentLineIndex];
    const fullText = currentLine.text;

    if (currentCharIndex === 0) {
      const timer = setTimeout(() => {
        setCurrentCharIndex(1);
      }, currentLine.delay);
      return () => clearTimeout(timer);
    }

    if (currentCharIndex <= fullText.length) {
      const timer = setTimeout(() => {
        setCurrentCharIndex(prev => prev + 1);
      }, 35); // Slightly faster typing

      return () => clearTimeout(timer);
    } else {
      setTerminalOutput(prev => [
        ...prev,
        {
          type: currentLine.type,
          text: fullText
        }
      ]);
      setCurrentLineIndex(prev => prev + 1);
      setCurrentCharIndex(0);
    }
  }, [isRunning, currentLineIndex, currentCharIndex, outputLines]);

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalOutput, currentCharIndex]);

  return (
    <>
      <section 
        id="playground" 
        className={styles.playgroundSection}
        aria-label="Developer Playground"
      >
        <div className={styles.container}>
          {/* Compact Header */}
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <Code size={20} strokeWidth={2} />
              <h2 className={styles.title}>Developer Playground</h2>
            </div>
            <span className={styles.subtitle}>Interactive Code Preview</span>
          </div>

          {/* Compact Playground Window */}
          <div className={styles.playground}>
            {/* VS Code Style Window Controls */}
            <div className={styles.windowControls}>
              <div className={styles.trafficLights}>
                <span className={styles.trafficLight} data-color="red"></span>
                <span className={styles.trafficLight} data-color="yellow"></span>
                <span className={styles.trafficLight} data-color="green"></span>
              </div>
              <div className={styles.windowTitle}>Developer Preview</div>
              <button 
                className={styles.expandButton}
                onClick={() => setIsExpanded(true)}
                aria-label="Expand playground"
                title="Expand (⛶)"
              >
                <Maximize2 size={14} />
              </button>
            </div>

            {/* VS Code Style Tab */}
            <div className={styles.tabBar}>
              <div className={styles.tab}>
                <span className={styles.tabDot}>●</span>
                <span className={styles.tabLabel}>developer.js</span>
                <button className={styles.tabClose} aria-label="Close tab">×</button>
              </div>
            </div>

            {/* Main Content - 55/45 Ratio */}
            <div className={styles.content}>
              {/* Left: Code Editor (55%) */}
              <div className={styles.editor}>
                <div className={styles.editorContent}>
                  <div className={styles.lineNumbers}>
                    {code.split('\n').map((_, index) => (
                      <div key={index} className={styles.lineNumber}>
                        {index + 1}
                      </div>
                    ))}
                  </div>
                  <pre className={styles.codeBlock}>
                    <code className={styles.code}>
                      {code.split('\n').map((line, index) => (
                        <div key={index} className={styles.codeLine}>
                          {highlightSyntax(line)}
                        </div>
                      ))}
                    </code>
                  </pre>
                </div>
                
                {/* VS Code Style Status Bar */}
                <div className={styles.statusBar}>
                  <span className={styles.statusItem}>JavaScript</span>
                  <span className={styles.statusItem}>UTF-8</span>
                  <span className={styles.statusReady}>Ready ✓</span>
                </div>
              </div>

              {/* Right: Terminal (45%) */}
              <div className={styles.terminal}>
                <div className={styles.terminalHeader}>
                  <Terminal size={14} />
                  <span className={styles.terminalTitle}>Terminal</span>
                  <button
                    className={`${styles.runButton} ${isRunning ? styles.running : ''}`}
                    onClick={handleRun}
                    disabled={isRunning}
                    aria-label={isRunning ? 'Running...' : 'Run code'}
                  >
                    <Play size={14} strokeWidth={2.5} />
                    {isRunning ? 'Running...' : 'Run'}
                  </button>
                </div>
                <div 
                  ref={terminalRef}
                  className={styles.terminalContent}
                >
                  {terminalOutput.length === 0 && !isRunning && (
                    <div className={styles.terminalPlaceholder}>
                      <Terminal size={24} strokeWidth={1.5} />
                      <span>Click Run to execute</span>
                    </div>
                  )}

                  {terminalOutput.map((line, index) => (
                    <div 
                      key={index} 
                      className={`${styles.terminalLine} ${styles[`type-${line.type}`]}`}
                    >
                      {line.text}
                    </div>
                  ))}

                  {isRunning && currentLineIndex < outputLines.length && (
                    <div className={`${styles.terminalLine} ${styles[`type-${outputLines[currentLineIndex].type}`]} ${styles.typing}`}>
                      {outputLines[currentLineIndex].text.substring(0, currentCharIndex)}
                      <span className={styles.cursor}>▊</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Modal */}
      {isExpanded && (
        <div className={styles.expandedOverlay} onClick={() => setIsExpanded(false)}>
          <div className={styles.expandedPlayground} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeButton}
              onClick={() => setIsExpanded(false)}
              aria-label="Close expanded view"
            >
              <X size={20} />
            </button>
            
            {/* Same content as compact view but larger */}
            <div className={styles.windowControls}>
              <div className={styles.trafficLights}>
                <span className={styles.trafficLight} data-color="red"></span>
                <span className={styles.trafficLight} data-color="yellow"></span>
                <span className={styles.trafficLight} data-color="green"></span>
              </div>
              <div className={styles.windowTitle}>Developer Preview - Expanded</div>
            </div>

            <div className={styles.tabBar}>
              <div className={styles.tab}>
                <span className={styles.tabDot}>●</span>
                <span className={styles.tabLabel}>developer.js</span>
                <button className={styles.tabClose}>×</button>
              </div>
            </div>

            <div className={styles.content}>
              <div className={styles.editor}>
                <div className={styles.editorContent}>
                  <div className={styles.lineNumbers}>
                    {code.split('\n').map((_, index) => (
                      <div key={index} className={styles.lineNumber}>
                        {index + 1}
                      </div>
                    ))}
                  </div>
                  <pre className={styles.codeBlock}>
                    <code className={styles.code}>
                      {code.split('\n').map((line, index) => (
                        <div key={index} className={styles.codeLine}>
                          {highlightSyntax(line)}
                        </div>
                      ))}
                    </code>
                  </pre>
                </div>
                <div className={styles.statusBar}>
                  <span className={styles.statusItem}>JavaScript</span>
                  <span className={styles.statusItem}>UTF-8</span>
                  <span className={styles.statusReady}>Ready ✓</span>
                </div>
              </div>

              <div className={styles.terminal}>
                <div className={styles.terminalHeader}>
                  <Terminal size={14} />
                  <span className={styles.terminalTitle}>Terminal</span>
                  <button
                    className={`${styles.runButton} ${isRunning ? styles.running : ''}`}
                    onClick={handleRun}
                    disabled={isRunning}
                  >
                    <Play size={14} strokeWidth={2.5} />
                    {isRunning ? 'Running...' : 'Run'}
                  </button>
                </div>
                <div className={styles.terminalContent}>
                  {terminalOutput.length === 0 && !isRunning && (
                    <div className={styles.terminalPlaceholder}>
                      <Terminal size={32} strokeWidth={1.5} />
                      <span>Click Run to execute</span>
                    </div>
                  )}

                  {terminalOutput.map((line, index) => (
                    <div 
                      key={index} 
                      className={`${styles.terminalLine} ${styles[`type-${line.type}`]}`}
                    >
                      {line.text}
                    </div>
                  ))}

                  {isRunning && currentLineIndex < outputLines.length && (
                    <div className={`${styles.terminalLine} ${styles[`type-${outputLines[currentLineIndex].type}`]} ${styles.typing}`}>
                      {outputLines[currentLineIndex].text.substring(0, currentCharIndex)}
                      <span className={styles.cursor}>▊</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Simple syntax highlighter
const highlightSyntax = (line) => {
  line = line.replace(/(const|let|var|return)/g, '<span class="keyword">$1</span>');
  line = line.replace(/"([^"]*)"/g, '<span class="string">"$1"</span>');
  line = line.replace(/\b(true|false)\b/g, '<span class="boolean">$1</span>');
  line = line.replace(/(\w+):/g, '<span class="property">$1</span>:');
  line = line.replace(/\b(run)\b/g, '<span class="function">$1</span>');

  return <span dangerouslySetInnerHTML={{ __html: line }} />;
};

export default DeveloperPlayground;
