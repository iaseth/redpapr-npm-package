import React from "react";



export function useCounter () {
    const [count, setCount] = React.useState<number>(0);
    const incrementCount = () => setCount(c => c+1);
    return [count, incrementCount];
}
