import { BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export type LayoutContainerProps = {
  children: ReactNode;
  boxProps?: BoxProps;
  gap?: boolean;
};
