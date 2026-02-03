// Mock API service for Keno numbers
// In production, replace with your actual API endpoint

export const fetchDrawnNumbers = async () => {
  // Simulates fetching drawn numbers from an API
  // Returns 20 random numbers between 1-80 (typical Keno)
  return new Promise((resolve) => {
    setTimeout(() => {
      const numbers = new Set();
      while (numbers.size < 20) {
        numbers.add(Math.floor(Math.random() * 80) + 1);
      }
      resolve(Array.from(numbers).sort((a, b) => a - b));
    }, 1000);
  });
};

// Generate all Keno numbers (1-80)
export const generateKenoNumbers = () => {
  return Array.from({ length: 80 }, (_, i) => i + 1);
};
