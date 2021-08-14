/** @jsx jsx */
import React from 'react'
import { jsx, Flex, Badge } from 'theme-ui'
import _ from 'lodash'
import { EventTag } from '../../typings'

interface Props {
    badges: EventTag[],
    centered?: boolean,
}

const EventBadges = ({badges, centered}: Props) => {
  return (
    <React.Fragment>
      <Flex sx={{ flexWrap: "wrap", flexDirection: "row", justifyContent: centered ? "center" : "left" }}>
        {badges.map((b, index) => (
            //@ts-ignore
          <Badge key={index} px={4} py={1} mx={4} my={2} variant={"primary"}>{b}</Badge>
        ))}
      </Flex>
    </React.Fragment>
  );
}

export default EventBadges