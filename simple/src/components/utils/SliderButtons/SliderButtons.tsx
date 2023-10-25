import SliderButton from "./SliderButton";



interface SliderButtonsProps {
	count: number,
	activeIndex: number,
	setActiveIndex: (x: number) => void
}

export default function SliderButtons ({
	count, activeIndex, setActiveIndex
}: SliderButtonsProps) {
	const arr = Array.from(Array(count).keys());

	return (
		<section>
			<section className="flex justify-center px-2 py-2">
				{arr.map(k => <SliderButton key={k} active={activeIndex === k} onClick={() => setActiveIndex(k)} />)}
			</section>
		</section>
	);
}
