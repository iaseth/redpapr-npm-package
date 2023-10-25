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

	const setActiveIndexSafe = (newIndex: number) => {
		if (newIndex >= 0 && newIndex < bound) {
			setActiveIndex(newIndex);
		}
	};

	const goToNext = () => setActiveIndex(x => (x + 1 < bound) ? x + 1 : 0);
	const goToPrev = () => setActiveIndex(x => (x > 0) ? x - 1 : bound - 1);

	React.useEffect(() => {
		const interval = setInterval(() => {
			goToNext();
		}, ms);

		return () => clearInterval(interval);
	}, []);

	return [activeIndex, setActiveIndexSafe, goToPrev, goToNext];
}
