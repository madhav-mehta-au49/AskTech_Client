/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Use an array of strings or regular expressions
    domains: ['lh3.googleusercontent.com', 'firebasestorage.googleapis.com'],
  },
};

module.exports = nextConfig;