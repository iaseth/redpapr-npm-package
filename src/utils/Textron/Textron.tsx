import CharBox from "./CharBox/CharBox";



const DEFAULT_SIZE = 96;
const DEFAULT_FONT_SIZE = 28;

interface TextronProps {
	texts: string[],
	activeIndex: number,
	height?: number,
	width?: number,
	fontSize?: number
}

export default function Textron ({
	texts, activeIndex,
	height=0, width=0,
	fontSize=DEFAULT_FONT_SIZE
}: TextronProps) {
	height = height || width || DEFAULT_SIZE;
	width = width || height;

	const septArray = [1, 2, 3, 4, 5, 6, 7];

	return (
		<section>
			<section className="flex gap-x-1 py-4">
				{septArray.map((x, k) => <CharBox key={x} index={x} {...{activeIndex, height, width, fontSize}} chars={texts.map(text => text[k])} />)}
			</section>
		</section>
	);
}
