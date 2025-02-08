import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
};
const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <Box>{children}</Box>
    </>
  );
};

export default PageLayout;
