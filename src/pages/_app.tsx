import React from "react";
import { AppProps } from "next/app";
//Styles
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";
//Locales
import { IntlProvider } from "react-intl";
import { language, messages } from "locales";

const Noop = ({ children }: { children: React.ReactNode }) => children;

function MyApp({ Component, pageProps }: AppProps) {
  //@ts-ignore
  const Layout = Component.Layout || Noop;
  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </IntlProvider>
  );
}

export default MyApp;
