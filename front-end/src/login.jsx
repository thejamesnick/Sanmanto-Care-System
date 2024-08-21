import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Login.css'; // Import the CSS file

const Login = () => {
  // Animation for the form
  const formSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 220, friction: 120 },
  });

  // Animation for the button
  const buttonSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.9)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 180, friction: 12 },
    delay: 500,
  });

  return (
    <div className="login-container">
      <animated.div className="login-form" style={formSpring}>
        <h1>Login</h1>
        <form>
          <label htmlFor="careId">Care ID:</label>
          <input type="text" id="careId" name="careId" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <animated.button type="submit" style={buttonSpring}>
            Login
          </animated.button>
        </form>
      </animated.div>
    </div>
  );
};

export default Login;
