


const COLORS = [
	"bg-red-500",
	"bg-blue-500",
	"bg-yellow-500",
	"bg-green-500",
];

interface RainbowBorderProps {
	height?: number
}

export default function RainbowBorder ({
	height=4
}: RainbowBorderProps) {
	const style = {
		height: `${height}px`
	};

	return (
		<section className="w-full flex">
			{COLORS.map((c, k) => <div key={k} className={`basis-0 grow ${c}`} style={style}></div>)}
		</section>
	);
}
