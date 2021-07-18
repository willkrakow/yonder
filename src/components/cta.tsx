/**@jsx jsx */
import React from "react";
import { Link } from "gatsby";
import { jsx, Themed, Flex } from "theme-ui";

interface CtaProps {
  link: URL;
  buttonText: string;
  text: string;
  isInternal: boolean;
}

const Cta: React.FC<CtaProps> = ({ link, buttonText, text, isInternal }) => (
  <Flex
    as="section"
    sx={{
      flexWrap: "wrap",
      maxWidth: 8,
      margin: "auto",
      justifyContent: "center",
    }}
  >
    <Themed.h4>{text}</Themed.h4>
    {isInternal ? (
      <Link to={link.toString()}>{buttonText}</Link>
    ) : (
      <a href={link.toString()}>{buttonText}</a>
    )}
  </Flex>
);

export default Cta;
