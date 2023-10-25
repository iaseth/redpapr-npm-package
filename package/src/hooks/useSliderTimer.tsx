import React from "react";



interface useSliderTimerProps {
	initialIndex?: number,
	bound: number,
	ms: number
}

export function useSliderTimer ({
	initialIndex=0,
	bound, // index will always be less than bound
	ms // milliseconds
}: useSliderTimerProps) {
	const [activeIndex, setActiveIndex] = React.useState(initialIndex);
	const goToNext = () => setActiveIndex(x => (x + 1 < bound) ? x + 1 : 0);

	React.useEffect(() => {
		const interval = setInterval(() => {
			goToNext();
		}, ms);

		return () => clearInterval(interval);
	}, []);

	return activeIndex;
}
