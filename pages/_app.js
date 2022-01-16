// CSS Imports
import "../styles/globals.css";

// Components Imports
import Header from "../components/header";
import Footer from "../components/footer";

function Website({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default Website;
