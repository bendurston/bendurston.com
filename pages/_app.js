// CSS Imports
import "../styles/globals.css";

// Components Imports
import Layout from "../components/layout";

function Website({ Component, pageProps }) {
  return (
    <>
      <Layout />
      <Component {...pageProps} />
    </>
  );
}

export default Website;
