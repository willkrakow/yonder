/** @jsx jsx */
import React from 'react'
import { jsx, Box, Themed } from 'theme-ui'

const Tooltip = () => {
    const [ isHovered, setIsHovered ] = React.useState(false)

    const handleHover = (e: React.MouseEvent<HTMLDivElement>) => setIsHovered(true)
    return (
        <Box onMouseOver={handleHover} >
            <Themed.p></Themed.p>
        </Box>
    )
}