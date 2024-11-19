// TextContext.js
import { createContext, useState } from 'react';

// Create the context
export const TextContext = createContext();

// Create a provider component
export const TextProvider = ({ children }) => {
  const [count, setcount] = useState(0);

  return (
    // Provide both count and setCount in the context
    <TextContext.Provider value={{ count, setcount }}>
      {children} {/* Render any children wrapped inside TextProvider */}
    </TextContext.Provider>
  );
};
