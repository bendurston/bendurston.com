module.exports = {
  reactStrictMode: true,
  images: {
    domains: [process.env.IMAGE_DOMAIN],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/projects",
        permanent: false,
      },
    ];
  },
};
