import { Box, BoxProps } from "@chakra-ui/react";
import { FC } from "react";

type SectionBoxProps = BoxProps & {
  children: React.ReactNode;
};

const SectionBox: FC<SectionBoxProps> = ({ children, ...props }) => {
  return (
    <Box
      px={4}
      py={4}
      bg="linear-gradient(to right, rgba(0, 0, 0, 1), rgba(1, 5, 23, 0.7), rgba(0, 0, 0, 1) )"
      {...props}
    >
      {children}
    </Box>
  );
};

export default SectionBox;
