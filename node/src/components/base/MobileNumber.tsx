


interface MobileNumberProps {
	mobileNumber: string,
	countryCode?: string
}

export default function MobileNumber ({
	mobileNumber, countryCode="+91"
}: MobileNumberProps) {
	return (
		<span className="red-link space-x-1.5">
			<span>{countryCode}</span>
			<span>{mobileNumber.slice(0, 3)}</span>
			<span>{mobileNumber.slice(3, 6)}</span>
			<span>{mobileNumber.slice(6)}</span>
		</span>
	);
}
