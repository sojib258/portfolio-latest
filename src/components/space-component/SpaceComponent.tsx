import { Flex, Image } from "@chakra-ui/react";

const SpaceComponent = () => {
  return (
    <Flex w="full" h="full">
      <Image
        w="full"
        h="full"
        objectFit={"cover"}
        alt="space"
        src="bg/2.jpeg"
      />
    </Flex>
  );
};

export default SpaceComponent;
