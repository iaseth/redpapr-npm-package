import TextSliderText from "./TextSliderText";



const DEFAULT_FONT_SIZE = 20;

interface TextSliderProps {
	texts: string[],
	activeIndex: number,
	className?: string,
	fontSize?: number,
	height?: number,
	horizontal?: boolean,
	bold?: boolean
}

export default function TextSlider ({
	texts, activeIndex,
	className="", horizontal=false, bold=false,
	fontSize=DEFAULT_FONT_SIZE,
	height=0
}: TextSliderProps) {
	height = height || fontSize * 2;
	const outerStyle = {
		height: `${height}px`
	};

	const innerStyle = {
		top: `-${horizontal ? 0 : activeIndex*100}%`,
		left: `-${horizontal ? activeIndex*100 : 0}%`
	};

	return (
		<section className={"relative overflow-hidden " + className} style={outerStyle}>
			<section className={`absolute duration-300 ${horizontal ? "h-full w-[1000%] flex" : "h-[1000%] w-full"}`} style={innerStyle}>
				{texts.map((text, k) => <TextSliderText key={k} {...{text, fontSize, horizontal, bold}} />)}
			</section>
		</section>
	);
}
