/** @jsx jsx */
import React from 'react'
import Facebook from "./facebook";
import Email from "./email";
import Website from './website'
import Instagram from './instagram'
import { jsx, Link, StylePropertyValue } from 'theme-ui'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IconProps {
    icon: IconProp,
    size?: number,
    color?: string | StylePropertyValue<string | undefined>
    url: string,
    label?: string,
}

interface CreateContainerProps {
    El: React.ReactElement<any>;
}

const createContainer = ({
  El,
}: CreateContainerProps): any => {
  const { props } = El;
  return class extends React.Component<any, any> {
    render() {
      return <li {...props}>{El}</li>;
    }
  }
};

const GenericIcon = ({ icon, size = 1, color = "primary", url = ".", label, ...props}: IconProps) => {
    return (
        <>
      <Link href={url} {...props}>
        <FontAwesomeIcon icon={icon} sx={{ fontSize: size, color: color }} />
        {label && <span sx={{ pl: 3, verticalAlign: "top" }}>{label}</span>}
      </Link>
      </>
    );
}


export { Facebook, Email, Website, Instagram, GenericIcon }