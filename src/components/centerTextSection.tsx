/**@jsx jsx */
import React from 'react'
import { jsx, Container, Themed, Flex } from 'theme-ui'

interface CenterTextSectionProps {
    bodyText: string,
    headerText: string,
}

const CenterTextSection: React.FC<CenterTextSectionProps> = ({headerText, bodyText}) => {
    return (
      <Container as="section">
        <Flex sx={{ maxWidth: 9, flexWrap: "wrap", margin: "auto", justifyContent: "center" }}>
          {headerText && <Themed.h3 sx={{ textAlign: "center" }}>{headerText}</Themed.h3>}
          {bodyText && <Themed.p sx={{ fontSize: 2, textAlign: "center" }}>{bodyText}</Themed.p>}
        </Flex>
      </Container>
    );
}

export default CenterTextSection