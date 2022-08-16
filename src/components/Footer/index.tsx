import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { Link, Flex } from "@chakra-ui/react";
import { links } from "../Links";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Flex justifyContent="space-between" w="100%">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <Flex gap={[2, 6]} mr={4} display={["none", "none", "flex"]}>
          {links.map((link) => (
            <Link
              target="_blank"
              _hover={{ opacity: "0.5" }}
              href={link.href}
              key={link.href}
            >
              {link.icon}
            </Link>
          ))}
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
