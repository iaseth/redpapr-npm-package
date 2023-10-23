


interface RedpaprIconProps {
	className?: string,
	size?: number
}

export default function RedpaprIcon ({
	className="",
	size=400
}: RedpaprIconProps) {
	const bit = Math.round(size / 40);

	return (
		<svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" className={className}>
			<rect width={15*bit} height={24*bit} x="0" y={16*bit} fill="#dc2626" rx={bit} />
			<rect width={24*bit} height={15*bit} x="0" y="0" fill="#222222" rx={bit} />
			<rect width={15*bit} height={24*bit} x={25*bit} y="0" fill="#dc2626" rx={bit} />
			<rect width={24*bit} height={15*bit} x={16*bit} y={25*bit} fill="#222222" rx={bit} />
		</svg>
	);
}
