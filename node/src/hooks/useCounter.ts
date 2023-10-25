import React from "react";



type useCounterRT = [number, () => void];

export function useCounter (): useCounterRT {
	const [count, setCount] = React.useState<number>(0);
	const incrementCount = () => setCount(c => c+1);
	return [count, incrementCount];
}
