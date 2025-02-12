import { colors } from "@/lib/colors";
import { Text, TextProps } from "@chakra-ui/react";
import { FC } from "react";

type HeadingProps = TextProps & {
  children: React.ReactNode;
};

const Heading: FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <Text fontWeight="600" fontSize=".875rem" color={colors?.white} {...props}>
      {children}
    </Text>
  );
};

export default Heading;
