// Analytics da Vercel
import { Analytics } from "@vercel/analytics/next";

function AppHome({ Component, pageProps }) {
  return (
    <>
      <h1>Analytics da Vercel</h1>
      
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default AppHome;