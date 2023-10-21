


interface CharProps {
	ch: string,
	fontSize: number
}

export default function Char ({ch, fontSize}: CharProps) {
	const h1Style = {
		fontSize: `${fontSize}px`
	};

	return (
		<section className="w-full h-[10%] bg-zinc-800 flex rounded shadow">
			{ch ? <h1 className="m-auto uppercase text-xl md:text-3xl" style={h1Style}>{ch}</h1> : <span className="m-auto bg-red-500 p-1 rounded-full"></span>}
		</section>
	);
}
