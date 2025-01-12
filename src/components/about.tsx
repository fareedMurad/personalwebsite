import React, { useEffect } from "react";
import {
  Box,
  Heading,
  Stack,
  Text,
  Flex,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import ClassCard from "./classcard";
import { motion } from "framer-motion";
import ResumeModal from "./resumemodal";
import Wave from "react-wavify";
import ClubCard from "./clubcard";
import CompaniesSection from "./companiesSection";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const saasDescription = [
    "A community of UC Berkeley students with a shared interest in data science.",
    "Fa22: Web Development Committee",
    "Sp23: Web Development Committee",
    "Fa23: Leadership, Web Developer",
  ];

  const babDescription = [
    "A student-run organization at UC Berkeley focused on blockchain innovation via education, research, and consulting.",
    "Sp23: Internal Developer, B@BPoll  Governance: Uniswap, Aave Teams",
    "Fa23: External Developer, TBD Project",
  ];

  const classes = [
    {
      name: "CS 61A",
      description: "Structure and Interpretation of Computer Programs",
      link: "https://cs61a.org/",
    },
    {
      name: "CS 61B",
      description: "Data Structures and Algorithms",
      link: "https://inst.eecs.berkeley.edu/~cs61b/fa21/",
    },
    {
      name: "CS 61C",
      description: "Great Ideas in Computer Architecture",
      link: "https://cs61c.org/",
    },
    {
      name: "CS 70",
      description: "Discrete Mathematics and Probability Theory",
      link: "https://eecs70.org/",
    },
    {
      name: "CS 170",
      description: "Efficient Algorithms and Intractable Problems",
      link: "https://cs170.org/",
    },
    {
      name: "Data 100",
      description: "Principles of Data Science",
      link: "https://ds100.org/su23/",
    },
  ];

  const rows = [];
  const rowSize = 2;

  for (let i = 0; i < classes.length; i += rowSize) {
    const row = classes.slice(i, i + rowSize);
    rows.push(row);
  }

  return (
    <Box>
      <Wave mask="url(#mask)" fill="url(#gradient)">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="rgba(255, 255, 255, 1)" />
            <stop offset="0.3" stopColor="rgba(62, 100, 255, 0.4)" />
            <stop offset="0.7" stopColor="rgba(29, 211, 189, 0.4)" />
            <stop offset="1" stopColor="rgba(255, 255, 255, 1)" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="auto"
        marginTop="10vh"
        marginBottom="15px"
        data-aos="fade-in"
      >
        <Heading
          size="lg"
          color="transparent"
          bgGradient="linear-gradient(to right, rgba(29, 211, 189, 0.5), rgba(62, 100, 255, 0.5))"
          bgClip="text"
          fontWeight="700"
        >
          About
        </Heading>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        marginBottom="25px"
        marginTop="50px"
        maxWidth={{ base: "90%", sm: "80%", md: "70%", lg: "50%" }}
        marginLeft="auto"
        marginRight="auto"
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "20px",
            padding: "0 20px", // Added padding for better readability on smaller screens
          }}
        >
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="300" data-aos="zoom-out-up">
            My name is Adrian Kwan and I&apos;m currently studying Computer
            Science @
            <Text as="em" className="highlight" data-aos="zoom-out-up">
              UC Berkeley
            </Text>
            . <br></br>I am an aspiring full-stack
            <Text as="em" className="highlight" data-aos="zoom-out-up ">
              software engineer
            </Text>
            and tech
            <Text as="em" className="highlight" data-aos="zoom-out-up">
              entrepreneur
            </Text>
            .
          </Text>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="300" data-aos="zoom-out-up">
            I&apos;m interested in LLMs, computer vision, zero knowledge proofs,
            and decentralized finance.
          </Text>
        </div>

        <Box textAlign="center" marginTop="25px" marginBottom="15vh">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background:
                "linear-gradient(to right, rgba(29, 211, 189, 0.3), rgba(62, 100, 255, 0.3))",
              display: "flex",
              borderRadius: "25px",
              padding: "10px 20px",
              justifyContent: "center",
              minWidth: "150px", // Added minimum width to prevent button from shrinking too much
            }}
            onClick={onOpen}
          >
            <Text fontSize="xl" fontWeight="400">
              
              View Resume
            </Text>
          </motion.button>
        </Box>
      </Box>

      <CompaniesSection />
      {/* data-aos="zoom-in-left" */}
      <Box  marginTop={{ base: "5vh", md: "10vh" }}>
        <Heading
          size="lg"
          textAlign="center"
          fontWeight="100"
          marginBottom={{ base: "20px", md: "40px" }}
        >
          Student Organizations
        </Heading>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          marginBottom="25px"
          marginTop="40px"
        >
          <Stack
            direction={{ base: "column", lg: "row" }}
            data-aos="fade-in"
            spacing={8}
            align="center"
            fontWeight="300"
            maxWidth="800px" // Added maxWidth to limit the width of the stack on larger screens
            marginX="auto" // Center the stack horizontally
          >
            <ClubCard
              name="Blockchain at Berkeley"
              description={babDescription}
              link="https://blockchain.berkeley.edu/"
              logo="https://i.ibb.co/dQdstSH/1519869642581.jpg"
            />

            <ClubCard
              name="Students Association of Applied Statistics"
              description={saasDescription}
              link="https://saas.berkeley.edu/"
              logo="https://i.ibb.co/PmG450P/Screenshot-2023-06-27-at-11-56-54-AM.png"
            />
          </Stack>
        </Box>
      </Box>




      <Box data-aos="fade-up" marginTop="10vh">
        <Heading size="lg" textAlign="center" fontWeight="100">
          Previous Coursework
        </Heading>
      </Box>

      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        height="auto"
        marginBottom="25px"
        data-aos="zoom-in"
        marginTop={{ base: "5vh", md: "7vh" }}
      >
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={8}
          align="center"
          maxWidth={{ base: "100%", md: "1200px" }} // Added maxWidth to limit the width of the stack on larger screens
          marginX="auto" // Center the stack horizontally
        >
          {/* Class cards */}
          {rows.map((row, index) => (
            <Stack
              key={index}
              direction="column"
              spacing={4}
              width={{ base: "100%", md: "auto" }}
            >
              {row.map((classItem) => (
                <ClassCard
                  key={classItem.name}
                  name={classItem.name}
                  description={classItem.description}
                  link={classItem.link}
                />
              ))}
            </Stack>
          ))}
        </Stack>
        <ResumeModal isOpen={isOpen} onClose={onClose} />
      </Box>
    </Box>
  );
}
