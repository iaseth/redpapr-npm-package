


interface SliderButtonProps {
	active: boolean,
	onClick: () => void
}

export default function SliderButton ({
	active, onClick
}: SliderButtonProps) {
	return (
		<div className="px-1 py-1 bg-transparent">
			<h4 className={`p-2 rounded-full border-2 duration-300 ${active ? "bg-zinc-700 border-white" : "bg-white border-transparent cursor-pointer"}`} onClick={onClick}></h4>
		</div>
	);
}
