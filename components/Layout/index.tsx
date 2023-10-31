import React from "react";
import styled from "styled-components";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Layout.Wrapper>
      <Layout.Header>
        <h1>Qualia Interview</h1>
      </Layout.Header>
      <Layout.Main>{children}</Layout.Main>
    </Layout.Wrapper>
  );
};

Layout.Wrapper = styled.div``;
Layout.Header = styled.header`
  padding: 12px;
`;
Layout.Main = styled.main`
  padding: 12px;
`;

interface LayoutProps {
  children: React.ReactNode;
}
