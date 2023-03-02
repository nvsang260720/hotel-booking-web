import "~/styles/globals.css";
import "~/styles/antd.css";

import React from "react";
import { SWRConfig } from "swr";
import type { AppProps } from "next/app";
import DefaultLayout from "~/components/DefaultLayout";

const routesNoNeedAuth = ["/login"];

function MyApp({
  Component,
  pageProps,
  currentUser,
  globalSettings,
  ...appProps
}: AppProps & any) {
  if (routesNoNeedAuth.includes(appProps.router.pathname))
    return <Component {...pageProps} />;

  return (
    <SWRConfig>
      {/* @ts-ignore */}
      <DefaultLayout
        currentUser={currentUser}
        globalSettings={globalSettings}
        pageProps={pageProps}
      >
        <Component />
      </DefaultLayout>
    </SWRConfig>
  );
}

export default MyApp;
