import { FC } from "react";



interface TextSliderTextProps {
    text: string,
	fontSize: number,
    horizontal: boolean,
    bold: boolean
}

const TextSliderText: FC<TextSliderTextProps> = ({
    text, fontSize, horizontal, bold
}) => {
    const pStyle = {
		fontSize: `${fontSize}px`,
        fontWeight: bold ? 700 : 400
	};

    return (
        <section className={`flex ${horizontal ? "w-[10%] h-full" : "w-full h-[10%]"}`}>
            <p className="my-auto" style={pStyle}>{text}</p>
        </section>
    );
}

export default TextSliderText;
