


interface MainProps {
	children: React.ReactNode
}

export default function Main ({children}: MainProps) {
	return (
		<main className="min-h-screen bg-zinc-900 text-white">
			{children}
		</main>
	);
}
