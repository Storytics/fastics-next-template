import React, { Fragment } from "react";
import Head from "next/head";
//Containers
import HomeContainer from "containers/Home";
import MainLayout from "containers/Layout/Main";
//Locales
import { defineMessages, useIntl } from "react-intl";

const messages = defineMessages({
  title: {
    id: "page.home.head.title",
    defaultMessage: "Fastics",
  },
  description: {
    id: "page.home.head.description",
    defaultMessage: "Fastics Description",
  },
});

const HomePage = () => {
  const intl = useIntl();
  return (
    <Fragment>
      <Head>
        <meta
          name="description"
          content={intl.formatMessage(messages.description)}
        />
        <title>{intl.formatMessage(messages.title)}</title>
      </Head>
      <HomeContainer />
    </Fragment>
  );
};

HomePage.Layout = MainLayout;

export default HomePage;
