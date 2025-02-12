import { Footer } from "@/components";
import { FC, ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
};
const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
      {/* <Box
        w="full"
        h="100vh"
        bgImage="url(img/1.jpg)"
        bgSize="cover"
        bgRepeat="no-repeat"
        aspectRatio="16/9"
        bgPos={"center, center"}
        overflow="hidden"
        zIndex="15"
      >
        <DotAnimation />
      </Box> */}
      {children}

      <Footer />
    </>
  );
};

export default PageLayout;
