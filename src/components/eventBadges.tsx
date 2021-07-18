/** @jsx jsx */
import React from 'react'
import { jsx, Flex, Badge } from 'theme-ui'
import _ from 'lodash'
import { EventTag } from '../typings'

interface Props {
    badges: EventTag[]
}

const EventBadges = ({badges}: Props) => {
  return (
    <React.Fragment>
      <Flex sx={{ flexWrap: "wrap", flexDirection: "row", mt: 4, mb: 5 }}>
        {badges.map((b, index) => (
            //@ts-ignore
          <Badge key={index} px={3} py={1} mr={4} variant={"primary"}>{b}</Badge>
        ))}
      </Flex>
    </React.Fragment>
  );
}

export default EventBadges