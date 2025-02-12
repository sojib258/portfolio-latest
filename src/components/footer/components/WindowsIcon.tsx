import { Center, CenterProps, Image } from "@chakra-ui/react";
import { FC } from "react";

type WindowsIconProps = CenterProps & {};

const WindowsIcon: FC<WindowsIconProps> = ({ ...props }) => {
  return (
    <Center
      w="40px"
      h="40px"
      borderRadius="4px"
      cursor={"pointer"}
      _hover={{ bg: "#132eb799" }}
      {...props}
    >
      <Image
        w="28px"
        h="28px"
        objectFit="contain"
        src="img/3.png"
        alt="Windows Icon"
      />
    </Center>
  );
};

export default WindowsIcon;
