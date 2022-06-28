import { BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export type CardProps = {
    children: ReactNode;
    boxStyle?: BoxProps;
    withClothespin?: boolean;
  };