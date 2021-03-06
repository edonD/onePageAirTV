import { useStore } from "../app/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import aws_exports from "../src/aws-exports";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.css";
import Amplify from "aws-amplify";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo-config";

Amplify.configure(aws_exports);

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });

  return (
    <>
      <DefaultSeo {...SEO} />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
