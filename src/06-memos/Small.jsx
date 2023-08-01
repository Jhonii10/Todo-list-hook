/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { memo } from "react";

const Small = memo(({counter}) => {
    console.log('me volvi a dibujar')
    return (
        <small>{counter}</small>)
})


export default Small;