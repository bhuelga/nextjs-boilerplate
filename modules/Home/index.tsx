import { COLORS } from "@/styles/colors";
import React from "react";
import styled from "styled-components";
import { Layout } from "../../components/Layout";

export const Home = ({}: HomeProps) => {
  return (
    <Layout>
      <Home.Wrapper>
        <h1>Home</h1>
      </Home.Wrapper>
    </Layout>
  );
};

Home.Wrapper = styled.div`
  margin: auto;
  color: ${COLORS.primary};
`;

interface HomeProps {}
