import React from 'react';



export const REDPAPR_HOOKS_COUNT = 0;

export function useSliderIndex () {
    const [x, setX] = React.useState(0);
    return x;
}
