/**@jsx jsx */
import React from 'react'
import { jsx, Container, Themed, Flex } from 'theme-ui'
import {darken } from '@theme-ui/color'
interface CenterTextSectionProps {
    bodyText: string,
    headerText: string,
}

const CenterTextSection: React.FC<CenterTextSectionProps> = ({headerText, bodyText}) => {
    return (
      <>
        <Container
          as="section"
          sx={{
            background: (t) =>
              `linear-gradient(45deg, ${darken("background", 0.1)(t)}, ${darken("background", 0.05)(t)})`,
            maxWidth: "100%",
          }}
        >
          <Flex
            sx={{
              maxWidth: 9,
              flexWrap: "wrap",
              margin: "auto",
              justifyContent: "center",
            }}
          >
            {headerText && (
              <Themed.h3 sx={{ textAlign: "center" }}>{headerText}</Themed.h3>
            )}
            {bodyText && (
              <Themed.p sx={{ fontSize: 2, textAlign: "center" }}>
                {bodyText}
              </Themed.p>
            )}
          </Flex>
        </Container>
          {/* <LocationSection /> */}
      </>
    );
}

export default CenterTextSection