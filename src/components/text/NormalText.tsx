import { colors } from "@/lib/colors";
import { Text, TextProps } from "@chakra-ui/react";
import { FC } from "react";

type NormalTextProps = TextProps & {
  children: React.ReactNode;
};

const NormalText: FC<NormalTextProps> = ({ children, ...props }) => {
  return (
    <Text fontSize=".775rem" color={colors?.white} {...props}>
      {children}
    </Text>
  );
};

export default NormalText;
