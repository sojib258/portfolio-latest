"use client";
import { Heading, NormalText } from "@/components";
import { Box, BoxProps } from "@chakra-ui/react";
import { FC, useEffect, useMemo, useState } from "react";

type DateCountProps = BoxProps & {
  ref?: any;
};

const DateCount: FC<DateCountProps> = ({ children, ref, ...props }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date()); // Update time every second
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Memoize the formatted time
  const formattedTime = useMemo(() => {
    return time.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true, // Enables AM/PM format
    });
  }, [time]);

  return (
    <Box
      position="fixed"
      bottom="10%"
      right="3rem"
      bg="#2b4162"
      bgImage="linear-gradient(315deg, #2b4162 0%, #12100e 74%)"
      //   bg="#090947"
      //   bgImage="linear-gradient(315deg, #090947 0%, #5a585a 74%)"
      borderRadius="4px"
      w={{ base: "220px", md: "330px" }}
      py="24px"
      px="8px"
      userSelect="none"
      ref={ref}
      {...props}
    >
      <NormalText fontSize=".7rem" textAlign="center">
        Time is running out, my friend. You have to succeed in your life. Just{" "}
        <b>do it</b> and be the best at what you do.
      </NormalText>
      <Box pt="1rem">
        <Heading fontSize={{ base: "1rem", md: "2rem" }} textAlign="center">
          {formattedTime}
        </Heading>
      </Box>
    </Box>
  );
};

export default DateCount;
