import "../styles/global.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store";
import "@fontsource/dosis";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
