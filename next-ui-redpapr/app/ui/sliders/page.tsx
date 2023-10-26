"use client";
import {
	TextSliderH1, TextSliderH2, TextSliderH3,
	TextSliderH4, TextSliderH5, TextSliderH6,
	TextSlider, Textron, useSliderIndex
} from "../../../redpapr";



const texts = [
	"Uno",
	"Dos",
	"Tres",
	"Cuatro"
];

export default function Sliders() {
	const [activeIndex] = useSliderIndex({bound: texts.length});
	return (
		<section className="">
			<header>
				<h1>All about Sliders</h1>
			</header>
			<section>
				<h4>This is a Textron</h4>
				<Textron {...{texts, activeIndex}} />

				<h4>This is a TextSlider</h4>
				<TextSlider {...{texts, activeIndex}} />

				<h4>This is a TextSliderH1</h4>
				<TextSliderH1 {...{texts, activeIndex}} />

				<h4>This is a TextSliderH2</h4>
				<TextSliderH2 {...{texts, activeIndex}} />

				<h4>This is a TextSliderH3</h4>
				<TextSliderH3 {...{texts, activeIndex}} />

				<h4>This is a TextSliderH4</h4>
				<TextSliderH4 {...{texts, activeIndex}} />

				<h4>This is a TextSliderH5</h4>
				<TextSliderH5 {...{texts, activeIndex}} />

				<h4>This is a TextSliderH6</h4>
				<TextSliderH6 {...{texts, activeIndex}} />
			</section>
		</section>
	);
}
