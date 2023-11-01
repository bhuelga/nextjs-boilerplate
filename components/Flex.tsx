import React from "react";
import styled, { CSSProperties } from "styled-components";

/** Helper component to quickly add flex */
export const Flex = ({ children, style }: FlexProps) => {
  return <Flex.Wrapper style={style}>{children}</Flex.Wrapper>;
};

Flex.Wrapper = styled.div`
  display: flex;
`;

interface FlexProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[];
  orientation?: "row" | "col";
}
