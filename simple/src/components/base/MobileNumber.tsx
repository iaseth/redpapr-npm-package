


interface MobileNumberProps {
	mobileNumber: string
}

export default function MobileNumber ({
	mobileNumber
}: MobileNumberProps) {
	return (
		<span className="red-link space-x-1">
			<span>{mobileNumber.slice(0, 3)}</span>
			<span>{mobileNumber.slice(3, 6)}</span>
			<span>{mobileNumber.slice(6)}</span>
		</span>
	);
}
