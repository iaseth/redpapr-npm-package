


interface ContainerProps {
	height: number,
	width: number,
	className?: string,
	children: React.ReactNode
}

export function Container ({
	height, width,
	className="",
	children
}: ContainerProps) {
	const style = {
		height: `${height}px`,
		width: `${width}px`
	};

	return (
		<section className={"overflow-hidden " + className} style={style}>{children}</section>
	);
}
