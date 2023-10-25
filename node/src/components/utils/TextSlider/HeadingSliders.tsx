import { default as TextSlider } from "./TextSlider"



export function HeadingSlider ({
	texts, activeIndex,
	className="",
	fontSize=32,
	height=0,
	horizontal=false
}: {
	texts: string[],
	activeIndex: number,
	className?: string,
	fontSize?: number,
	height?: number,
	horizontal?: boolean
}) {
    height = height || fontSize * 2;
	return <TextSlider {...{texts, activeIndex, className, fontSize, height, horizontal}} />
}

export function TextSliderH1 ({
	texts, activeIndex,
	className="",
	fontSize=24,
	height=0,
	horizontal=false
}: {
	texts: string[],
	activeIndex: number,
	className?: string,
	fontSize?: number,
	height?: number,
	horizontal?: boolean
}) {
	return <HeadingSlider {...{texts, activeIndex, className, fontSize, height, horizontal}} />;
}

export function TextSliderH2 ({
	texts, activeIndex,
	className="",
	fontSize=20,
	height=0,
	horizontal=false
}: {
	texts: string[],
	activeIndex: number,
	className?: string,
	fontSize?: number,
	height?: number,
	horizontal?: boolean
}) {
	return <HeadingSlider {...{texts, activeIndex, className, fontSize, height, horizontal}} />;
}

export function TextSliderH3 ({
	texts, activeIndex,
	className="",
	fontSize=18,
	height=0,
	horizontal=false
}: {
	texts: string[],
	activeIndex: number,
	className?: string,
	fontSize?: number,
	height?: number,
	horizontal?: boolean
}) {
	return <HeadingSlider {...{texts, activeIndex, className, fontSize, height, horizontal}} />;
}

export function TextSliderH4 ({
	texts, activeIndex,
	className="",
	fontSize=16,
	height=0,
	horizontal=false
}: {
	texts: string[],
	activeIndex: number,
	className?: string,
	fontSize?: number,
	height?: number,
	horizontal?: boolean
}) {
	return <HeadingSlider {...{texts, activeIndex, className, fontSize, height, horizontal}} />;
}

export function TextSliderH5 ({
	texts, activeIndex,
	className="",
	fontSize=14,
	height=0,
	horizontal=false
}: {
	texts: string[],
	activeIndex: number,
	className?: string,
	fontSize?: number,
	height?: number,
	horizontal?: boolean
}) {
	return <HeadingSlider {...{texts, activeIndex, className, fontSize, height, horizontal}} />;
}

export function TextSliderH6 ({
	texts, activeIndex,
	className="",
	fontSize=12,
	height=0,
	horizontal=false
}: {
	texts: string[],
	activeIndex: number,
	className?: string,
	fontSize?: number,
	height?: number,
	horizontal?: boolean
}) {
	return <HeadingSlider {...{texts, activeIndex, className, fontSize, height, horizontal}} />;
}
