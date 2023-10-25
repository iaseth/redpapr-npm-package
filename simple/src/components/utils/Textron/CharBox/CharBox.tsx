import Char from "./Char";



interface CharBoxProps {
	activeIndex: number,
	index: number,
	chars: string[],
	height: number,
	width: number,
	fontSize: number
}

export default function CharBox ({
	activeIndex, index, chars,
	height, width, fontSize
}: CharBoxProps) {
	const style = {
		top: `-${activeIndex * 100}%`,
		transitionDelay: `${index * 100}ms`
	};

	const outerStyle = {
		height: `${height}px`,
		width: `${width}px`
	};

	return (
		<section className="relative overflow-hidden" style={outerStyle}>
			<section className="absolute left-0 w-full h-[1000%] duration-300" style={style}>
				{chars.map((ch, k) => <Char key={k} {...{ch, fontSize}} />)}
			</section>
		</section>
	);
}
