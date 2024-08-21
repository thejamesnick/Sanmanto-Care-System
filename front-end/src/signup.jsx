import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './SignUp.css'; // Import the CSS file

const SignUp = () => {
  // Animation for the form
  const formSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 220, friction: 120 },
  });

  return (
    <div className="signup-container">
      <animated.div className="signup-form" style={formSpring}>
        <h1>Create Your Account</h1>
        <form>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required />

          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Setup Your Password:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Sign Up</button>
        </form>
      </animated.div>
    </div>
  );
};

export default SignUp;
