import React from "react";


type useSliderIndexProps = {
	init?: number,
	bound: number,
	ms?: number
};
type useSliderIndexRT = [number, () => void];

export function useSliderIndex ({
	init=0,
	bound, ms=1000
}: useSliderIndexProps): useSliderIndexRT {
	const [activeIndex, setActiveIndex] = React.useState<number>(init);
	const goToNext = () => setActiveIndex(x => (x + 1 < bound) ? x + 1 : 0);

	const [paused, setPaused] = React.useState(false);
	const pauseOrPlay = () => setPaused(x => !x);

	React.useEffect(() => {
		const interval = setInterval(() => {
			if (paused) {
				//
			} else {
				goToNext();
			}
		}, ms);

		return () => clearInterval(interval);
	}, []);

	return [activeIndex, pauseOrPlay];
}
