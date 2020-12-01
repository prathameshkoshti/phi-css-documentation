import HeadComponent from '../components/HeadComponent';
import NavBar from "../components/NavigationBar/NavBar";
import Footer from "../components/Footer";

// css imports
import 'phi-css/dist/phi.min.css';
import '../css/font.css';
import '../css/docs.css';
import '../css/icons.css';
import "../css/prism.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="content">
      <HeadComponent/>
      <NavBar/>
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp;
