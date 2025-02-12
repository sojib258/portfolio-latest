import { Box, BoxProps } from "@chakra-ui/react";
import { FC } from "react";

type ContainerProps = BoxProps & {
  children: React.ReactNode;
};

const Container: FC<ContainerProps> = ({ children, ...props }) => {
  return <Box>{children}</Box>;
};

export default Container;
