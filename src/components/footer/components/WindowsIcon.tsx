import { Avatar, Center, CenterProps, defineStyle } from "@chakra-ui/react";
import { FC } from "react";

type WindowsIconProps = CenterProps & {};

const ringCss = defineStyle({
  outlineWidth: "2px",
  outlineColor: "colorPalette.500",
  outlineOffset: "2px",
  outlineStyle: "solid",
});

const WindowsIcon: FC<WindowsIconProps> = ({ ...props }) => {
  return (
    <Center
      w="40px"
      h="40px"
      borderRadius="4px"
      cursor={"pointer"}
      px="8px"
      py="8px"
      {...props}
    >
      {/* <Image
        w="28px"
        h="28px"
        objectFit="contain"
        src="img/3.png"
        alt="Windows Icon"
      /> */}
      <Avatar.Root css={ringCss} w="34px" h="34px">
        <Avatar.Fallback name="Sajib Hasan" />
        <Avatar.Image src="avatar/1.jpeg" />
      </Avatar.Root>
    </Center>
  );
};

export default WindowsIcon;
