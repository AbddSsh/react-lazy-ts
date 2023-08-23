import { Layout } from "antd";
import React, { FC, ReactNode, Suspense } from "react";
import Header from "./header";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Layout.Content>{children}</Layout.Content>
      </Suspense>
    </Layout>
  );
};

export default MainLayout;
