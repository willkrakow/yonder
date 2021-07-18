/**@jsx jsx */
import React from 'react'
import { Themed, jsx, Flex } from 'theme-ui'
import { GatsbyImage } from 'gatsby-plugin-image'
import { HeroProps } from '../typings'


const Hero: React.FC<HeroProps> = (props) => {
    const { mainText, subtitleText, heroImage } = props;
    return (
      <Flex as="section" sx={{ flexWrap: "wrap", position: "relative", height: '67vh' }}>
        <GatsbyImage
          image={heroImage.asset.gatsbyImageData}
          alt={`Yonder | Southern Cocktails and Brew`}
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            zIndex: -1,
          }}
        />
        <header sx={{ 
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            alignContent: 'center',
         }}>
          <Themed.h2>{mainText}</Themed.h2>
          {subtitleText && <Themed.h3>{subtitleText}</Themed.h3>}
        </header>
      </Flex>
    );
}


export default Hero