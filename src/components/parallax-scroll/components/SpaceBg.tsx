import { Box, BoxProps } from "@chakra-ui/react";
import { FC } from "react";

type SpaceBgProps = BoxProps & {
  children?: React.ReactNode;
};
const SpaceBg: FC<SpaceBgProps> = ({ children, ...props }) => {
  return (
    <Box
      w="full"
      bgSize="cover"
      bgRepeat="no-repeat"
      aspectRatio="16/9"
      bgPos={"center, center"}
      overflow="hidden"
      {...props}
    >
      {children}
    </Box>
  );
};

export default SpaceBg;
