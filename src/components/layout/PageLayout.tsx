import { Box, Center, Image } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
};
const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <Box
      w="full"
      h="100vh"
      background="url(img/1.jpg)"
      bgSize="cover"
      bgRepeat="no-repeat"
      aspectRatio="16/9"
      bgPos={"center, center"}
      overflow="hidden"
    >
      <Box>{children}</Box>
      <Box
        position="absolute"
        bottom="0"
        w="full"
        h="50px"
        bg="linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 16, 98, 0.6), rgba(0, 0, 0, 1) )"
      >
        <Center h="full">
          <Center
            w="40px"
            h="40px"
            borderRadius="4px"
            cursor={"pointer"}
            _hover={{ bg: "#132eb799" }}
          >
            <Image
              w="28px"
              h="28px"
              objectFit="contain"
              src="img/3.png"
              alt="Windows Icon"
            />
          </Center>
        </Center>
      </Box>
    </Box>
  );
};

export default PageLayout;
