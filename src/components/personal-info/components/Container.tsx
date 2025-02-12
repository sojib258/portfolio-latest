import { Box, BoxProps } from "@chakra-ui/react";
import { FC } from "react";

type ContainerProps = BoxProps & {
  children: React.ReactNode;
  ref?: any;
};

const Container: FC<ContainerProps> = ({ children, ref, ...props }) => {
  return (
    <Box
      position="fixed"
      bottom="10%"
      left="50%"
      transform="translateX(-50%)"
      w={{ base: "300px", md: "600px" }}
      h="auto"
      maxH={{ base: "550px", md: "700px" }}
      borderRadius="8px"
      overflow="hidden"
      overflowY="auto"
      zIndex="-1"
      ref={ref}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Container;
