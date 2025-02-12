import { projectsData, skillsData } from "@/lib/data";
import { Box, BoxProps, Grid } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import { Heading } from "../text";
import {
  Container,
  ProjectCard,
  SectionBox,
  SkillsImage,
} from "./components/index";

const TEMPLATE_COLUMN = {
  base: "repeat(3, 1fr)",
  sm: "repeat(4, 1fr)",
  md: "repeat(6, 1fr)",
};

type PersonalInfoProps = BoxProps & {
  ref?: any;
};

const PersonalInfo: FC<PersonalInfoProps> = ({ ref, ...props }) => {
  return (
    <Container ref={ref} {...props}>
      <SectionBox>
        <Heading mb="1rem" px={4}>
          Skills
        </Heading>
        <Grid gridTemplateColumns={TEMPLATE_COLUMN} gap={4} gapY={4}>
          {skillsData?.map((skill, index) => (
            <Link key={index} href={skill.url} target="_blank">
              <SkillsImage image={skill.img} />
            </Link>
          ))}
        </Grid>
      </SectionBox>
      <SectionBox borderBottomLeftRadius="8px" borderBottomRightRadius="8px">
        <Heading mb="1rem" px={4}>
          Projects
        </Heading>
        <Box>
          {projectsData?.map((project, index) => (
            <ProjectCard
              key={index}
              image={project?.img}
              title={project?.title}
              href={project?.url}
              mb="1rem"
            />
          ))}
        </Box>
      </SectionBox>
    </Container>
  );
};

export default PersonalInfo;
