import React from "react";



export function useCounter () {
    const [x, setX] = React.useState(0);
    const incrementX = () => setX(x => x+1);
    return [x, incrementX];
}
