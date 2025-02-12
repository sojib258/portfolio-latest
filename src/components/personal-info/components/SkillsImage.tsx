import { Center, CenterProps, Image } from "@chakra-ui/react";
import { FC } from "react";

type SkillsImageProps = CenterProps & {
  image: string;
};

const SkillsImage: FC<SkillsImageProps> = ({ image, ...props }) => {
  return (
    <Center
      px="16px"
      py="16px"
      borderRadius="4px"
      userSelect="none"
      _hover={{ bg: "rgba(93, 105, 161, 0.2)" }}
      {...props}
    >
      <Image
        w="50px"
        h="auto"
        objectFit="contain"
        src={image}
        alt="Skills Image"
        borderRadius="6px"
      />
    </Center>
  );
};

export default SkillsImage;
