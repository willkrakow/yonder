/** @jsx jsx */
import React from "react";
import { IconProps } from "../../typings";
import { jsx, Link,  } from 'theme-ui'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Instagram = ({ link, withText }: IconProps) => {

  return (
    <>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={faInstagram}
          sx={{ fontSize: 1, color: "primary" }}
        />
        {withText && (
          <span sx={{ pl: 3, verticalAlign: "top" }}>
            @{link.split(".com/")[1].slice(0, -1)}
          </span>
        )}
      </Link>
    </>
  );
};

export default Instagram;
