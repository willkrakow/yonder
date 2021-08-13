/** @jsx jsx */
import React from "react";
import { IconProps } from "../../typings";
import { jsx, Link, useThemeUI } from 'theme-ui'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Instagram = ({ link }: IconProps) => {
  const context = useThemeUI();

  const fillColor = context?.theme?.colors?.primary?.toString() || "#fafafa"
  return (
    <>
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} fill={fillColor} sx={{ fontSize: 1 }} />
      <span sx={{ pl: 3, verticalAlign: "top" }} >@{link.split(".com/")[1].slice(0, -1)}</span>
    </Link>
    </>
  );
};

export default Instagram;
