import { Box, BoxProps } from "@chakra-ui/react";
import { FC } from "react";

type ContainerProps = BoxProps & {
  children: React.ReactNode;
};

const Container: FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <Box
      position="fixed"
      bottom="0"
      w="full"
      h="50px"
      bg="linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 16, 98, 0.6), rgba(0, 0, 0, 1) )"
      zIndex={"1001"}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Container;
