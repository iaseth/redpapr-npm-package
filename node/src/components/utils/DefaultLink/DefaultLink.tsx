


export interface DefaultLinkProps {
	href: string,
	children: React.ReactNode
}

export function DefaultLink ({href, children}: DefaultLinkProps) {
	return (
		<a href={href}>{children}</a>
	);
}
