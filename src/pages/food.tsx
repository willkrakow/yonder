/** @jsx jsx */
import React from "react";
import { jsx, Themed } from "theme-ui";
import {PageProps} from 'gatsby'

interface IFood {
    data: {
        sanityCategory: any
    }
}

type FoodProps = IFood & PageProps

const Food = (props: FoodProps) => {
    console.log(props.data)
    return (
        <>
            <Themed.h2>Food</Themed.h2>
        </>
    )
}


export default Food