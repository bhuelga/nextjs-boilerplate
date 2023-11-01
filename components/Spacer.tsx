import React from "react";
import styled from "styled-components";

/** Used as a structural component to space other components apart */
export const Spacer = (props: SpacerProps) => <Spacer.Wrapper {...props} />;

interface SpacerProps {
  width?: string | number;
  height?: number;
  backgroundColor?: string;
}

Spacer.Wrapper = styled.div<SpacerProps>`
  width: ${(props) => props.width ?? 0}px;
  height: ${(props) => props.height ?? 0}px;
  background-color: ${(props) => props.backgroundColor ?? ""};
`;
