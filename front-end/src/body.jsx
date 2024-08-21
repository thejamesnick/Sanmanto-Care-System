import React from 'react';
import { useSprings, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';
import './WordDrop.css'; // Import custom CSS for styling

const WordDrop = () => {
  const words = ['Welcome', 'To', 'Samanto', 'Care', 'System'];
  const buttons = ['Login', 'Sign Up'];

  // Animate words
  const wordSprings = useSprings(
    words.length,
    words.map((word, index) => ({
      from: { transform: 'translateY(-100px)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 1 },
      delay: index * 200,
      config: { tension: 120, friction: 14 },
    }))
  );

  // Animate buttons
  const buttonSprings = useSprings(
    buttons.length,
    buttons.map((button, index) => ({
      from: { transform: 'translateY(100px)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 1 },
      delay: (words.length + index) * 200, // Start button animation after word animations
      config: { tension: 120, friction: 14 },
    }))
  );

  return (
    <div className="word-drop-container">
      <div className="words-container">
        {wordSprings.map((props, index) => (
          <animated.div key={index} style={props} className="word-drop">
            {words[index]}
          </animated.div>
        ))}
      </div>
      <div className="buttons-container">
        {buttonSprings.map((props, index) => (
          <animated.div key={index} style={props} className="word-drop-button">
            <Link to={index === 0 ? '/login' : '/signup'}>
              {buttons[index]}
            </Link>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default WordDrop;
