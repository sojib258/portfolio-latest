"use client";
import { NormalText } from "@/components";
import { Box, BoxProps } from "@chakra-ui/react";
import { FC, useEffect, useMemo, useState } from "react";

type DateTimeProps = BoxProps & {};

const DateTime: FC<DateTimeProps> = ({ children, ...props }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = useMemo(() => {
    return currentTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  }, [currentTime]);

  const formattedDate = useMemo(() => {
    return currentTime.toLocaleDateString("en-US");
  }, [currentTime]);

  return (
    <Box
      borderRadius="4px"
      cursor={"pointer"}
      py="4px"
      px="8px"
      userSelect="none"
      _hover={{ bg: "#3c343499" }}
      {...props}
    >
      <NormalText fontSize=".70rem" textAlign="right">
        {formattedTime}
      </NormalText>
      <NormalText fontSize=".70rem" textAlign="right">
        {formattedDate}
      </NormalText>
    </Box>
  );
};

export default DateTime;
