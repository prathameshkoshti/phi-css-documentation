import 'phi-css/dist/phi.min.css';
import HeadComponent from '../components/HeadComponent';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <HeadComponent/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;
