"use client";
import {
	TextSliderH1, TextSliderH2, TextSliderH3,
	TextSliderH4, TextSliderH5, TextSliderH6,
	TextSlider, Textron, useSliderIndex, DemoBox
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
				<p>This is a Textron</p>
				<Textron {...{texts, activeIndex}} />

				<p>This is a TextSlider</p>
				<DemoBox>
					<TextSlider {...{texts, activeIndex}} />
				</DemoBox>

				<p>This is a TextSliderH1</p>
				<DemoBox>
					<TextSliderH1 {...{texts, activeIndex}} />
				</DemoBox>

				<p>This is a TextSliderH2</p>
				<DemoBox>
					<TextSliderH2 {...{texts, activeIndex}} />
				</DemoBox>

				<p>This is a TextSliderH3</p>
				<DemoBox>
					<TextSliderH3 {...{texts, activeIndex}} />
				</DemoBox>

				<p>This is a TextSliderH4</p>
				<DemoBox>
					<TextSliderH4 {...{texts, activeIndex}} />
				</DemoBox>

				<p>This is a TextSliderH5</p>
				<DemoBox>
					<TextSliderH5 {...{texts, activeIndex}} />
				</DemoBox>

				<p>This is a TextSliderH6</p>
				<DemoBox>
					<TextSliderH6 {...{texts, activeIndex}} />
				</DemoBox>
			</section>
		</section>
	);
}
