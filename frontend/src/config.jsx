const config = {
  baseURL: process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000' 
    : 'https://exam-chain.onrender.com' 
};

export default config;
