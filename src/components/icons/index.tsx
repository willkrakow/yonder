/** @jsx jsx */
import React from 'react'
import Facebook from "./facebook";
import Email from "./email";
import Website from './website'
import Instagram from './instagram'
import { jsx, Link, StylePropertyValue } from 'theme-ui'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

interface IconProps {
    icon: IconProp,
    size?: SizeProp,
    color?: string | StylePropertyValue<string | undefined>
    url: string,
    label?: string,
}

// interface CreateContainerProps {
//     El: React.ReactElement<any>;
// }

// const createContainer = ({
//   El,
// }: CreateContainerProps): any => {
//   const { props } = El;
//   return class extends React.Component<any, any> {
//     render() {
//       return <li {...props}>{El}</li>;
//     }
//   }
// };

const GenericIcon = ({ icon, size="1x", color = "primary", url = ".", label, ...props}: IconProps) => {
    return (
        <>
      <Link href={url} {...props} sx={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon icon={icon} size={size} sx={{ color: color, flex: "1 1 15%" }} />
        {label && <span sx={{ pl: 3, verticalAlign: "top", flex: "3 1 100%"  }}>{label}</span>}
      </Link>
      </>
    );
}


export { Facebook, Email, Website, Instagram, GenericIcon }