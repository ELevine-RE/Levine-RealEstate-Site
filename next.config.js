/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    quietDeps: true, // This will silence deprecation warnings
    silenceDeprecations: [
      "mixed-decls",
      "legacy-js-api",
      "import",
      "slash-div",
      "global-builtin",
    ],
  },
  // Builder.io configuration
  async rewrites() {
    return [
      {
        source: '/builder/:path*',
        destination: '/api/builder/:path*',
      },
    ]
  },
  // Enable external packages for Builder.io
  serverExternalPackages: ['@builder.io/sdk'],
};

module.exports = nextConfig;
