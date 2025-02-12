import { Icon } from "@/components";
import { IconNameOptions } from "@/components/icon/Icon";
import { colors } from "@/lib/colors";
import { Flex, FlexProps } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

type SocialLinkProps = FlexProps & {
  link: string;
  name: IconNameOptions;
  variant?: string;
};

const SocialLink: FC<SocialLinkProps> = ({ link, name, variant, ...props }) => {
  return (
    <Link href={link} target="_blank">
      <Flex mt={variant == "large" ? "2px" : "0px"} {...props}>
        <Icon
          color={colors?.white}
          size={variant == "large" ? 24 : 18}
          name={name}
        />
      </Flex>
    </Link>
  );
};

export default SocialLink;
