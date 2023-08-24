import { FC, useState, useEffect } from 'react';

interface TypewritingProps {
    text: string;
    speed: number;
}

const TypewriterEffect:FC<TypewritingProps> = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [currentIndex, text, speed]);

  return displayText;
};

export default TypewriterEffect;