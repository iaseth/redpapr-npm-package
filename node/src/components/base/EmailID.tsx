


interface EmailIDProps {
	emailID: string
}

export default function EmailID ({
	emailID
}: EmailIDProps) {
	return (
		<span className="red-link">
			<span>{emailID}</span>
		</span>
	);
}
