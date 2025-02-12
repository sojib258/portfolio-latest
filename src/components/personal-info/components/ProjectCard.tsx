import { NormalText } from "@/components/text";
import { Flex, FlexProps, Image } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

type ProjectCardProps = FlexProps & {
  image: string;
  title: string;
  href: string;
};

const ProjectCard: FC<ProjectCardProps> = ({
  image,
  title,
  href,
  ...props
}) => {
  return (
    <Link href={href} target="_blank">
      <Flex px={4} {...props}>
        <Flex minW="50px" w="50px" h="50px" minH="50px" mr="1rem">
          <Image
            w="full"
            h="full"
            objectFit={"contain"}
            alt="Image"
            src={image}
            borderRadius="4px"
          />
        </Flex>
        <Flex>
          <NormalText>{title}</NormalText>
        </Flex>
      </Flex>
    </Link>
  );
};

export default ProjectCard;
