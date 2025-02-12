import { DotAnimation } from "@/components/dot-animation";
import { Box } from "@chakra-ui/react";

const WindowsBg = () => {
  return (
    <Box
      w="full"
      h={"100vh"}
      bgImage={{ base: "url(img/4.jpg)", md: "url(img/1.jpg)" }}
      bgSize="cover"
      bgRepeat="no-repeat"
      aspectRatio="16/9"
      bgPos={"center, center"}
      overflow="hidden"
      zIndex="15"
    >
      <DotAnimation />
    </Box>
  );
};

export default WindowsBg;
