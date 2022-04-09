/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
// module.exports = {
//   rewrites() {
//     return [
//       {
//         source: "/edge/api/authentication/:path*",
//         destination: "/api/auth/:path*",
//       },
//     ];
//   },
// };
module.exports = nextConfig;

// https://sabrinastuff.vercel.app/api/auth/callback/github?error=redirect_uri_mismatch&error_description=The+redirect_uri+MUST+match+the+registered+callback+URL+for+this+application.&error_uri=https%3A%2F%2Fdocs.github.com%2Fapps%2Fmanaging-oauth-apps%2Ftroubleshooting-authorization-request-errors%2F%23redirect-uri-mismatch&state=WnLsM5jj1Q6ODAQM5KRLmyavClLHzHhvv-CGYu38ZJ8
