import ImageSliderImage from "./ImageSliderImage";



export interface ImageData {
	src: string,
	caption: string
}

interface ImageSliderProps {
	images: ImageData[],
	activeIndex: number,
	height: number,
	width: number,
	horizontal?: boolean
}

export default function ImageSlider ({
	images, activeIndex,
	height, width,
	horizontal=false
}: ImageSliderProps) {
	const outerStyle = {
		height: `${height}px`,
		width: `${width}px`
	};

	const innerStyle = {
		top: `-${horizontal ? 0 : activeIndex*100}%`,
		left: `-${horizontal ? activeIndex*100 : 0}%`
	};

	return (
		<section className="relative bg-zinc-700 overflow-hidden" style={outerStyle}>
			<section className={`absolute duration-300 ${horizontal ? "h-full w-[1000%] flex" : "h-[1000%] w-full"}`} style={innerStyle}>
				{images.map((image, k) => <ImageSliderImage key={k} {...{image, horizontal}} />)}
			</section>
		</section>
	);
}
