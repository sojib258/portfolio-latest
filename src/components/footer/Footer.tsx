"use client";
import { socialsData } from "@/lib/data";
import { Center, Flex, Grid } from "@chakra-ui/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { PersonalInfo } from "../personal-info";
import {
  Container,
  DateCount,
  DateTime,
  SocialLink,
  WindowsIcon,
} from "./components/index";

const Footer = () => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [isTimeVisible, setIsTimeVisible] = useState(false);
  const infoRef = useRef<HTMLDivElement | null>(null);
  const timeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isInfoVisible) {
      gsap.fromTo(
        infoRef.current,
        { y: "100vh", opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "bounce.out" }
      );
    } else {
      gsap.to(infoRef.current, {
        y: "100vh",
        opacity: 0,
        duration: 0,
        ease: "power3.inOut",
        onComplete: () => setIsInfoVisible(false),
      });
    }
  }, [isInfoVisible]);

  const togglePersonalInfo = () => {
    if (!isInfoVisible) setIsInfoVisible(true);
    else
      gsap.to(infoRef.current, {
        y: "100vh",
        opacity: 0,
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => setIsInfoVisible(false),
      });
  };

  // This is for timer clock
  useEffect(() => {
    if (isTimeVisible) {
      gsap.fromTo(
        timeRef.current,
        { x: "50vw", opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, ease: "back.out(1.7)" }
      );
    } else {
      gsap.to(timeRef.current, {
        x: "100vw",
        opacity: 0,
        duration: 0,
        ease: "power3.inOut",
        onComplete: () => setIsTimeVisible(false),
      });
    }
  }, [isTimeVisible]);

  const handleToggleTime = () => {
    if (!isTimeVisible) setIsTimeVisible(true);
    else
      gsap.to(timeRef.current, {
        x: "50vw",
        opacity: 0,
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => setIsTimeVisible(false),
      });
  };

  return (
    <Container>
      <Grid h="full" gridTemplateColumns="repeat(3, 1fr)" px="3rem">
        <Flex alignItems="center" gap={4}>
          {socialsData?.map((social: any, index) => (
            <SocialLink key={index} link={social?.url} name={social?.name} />
          ))}
          <SocialLink
            link="https://www.linkedin.com/in/sajib-hasan-4062a7223/"
            name={"linkedin"}
            variant="large"
          />
        </Flex>
        <Center>
          <WindowsIcon onClick={togglePersonalInfo} />
        </Center>

        <Flex justifyContent="flex-end" alignItems="center">
          <DateTime onClick={handleToggleTime} />
        </Flex>
      </Grid>

      <PersonalInfo ref={infoRef} display={isInfoVisible ? "block" : "none"} />
      <DateCount ref={timeRef} display={isTimeVisible ? "block" : "none"} />
    </Container>
  );
};

export default Footer;
