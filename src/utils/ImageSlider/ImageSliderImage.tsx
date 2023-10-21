import { ImageData } from "./ImageSlider";



interface ImageSliderImageProps {
	image: ImageData,
	horizontal: boolean
}

export default function ImageSliderImage ({image, horizontal}: ImageSliderImageProps) {
	return (
		<section className={`flex flex-col bg-zinc-800 odd:bg-zinc-950 ${horizontal ? "w-[10%] h-full" : "w-full h-[10%]"}`}>
			<header className="grow w-full">
				<img src={image.src} className="w-full h-full" alt={image.caption} />
			</header>
			<footer className="px-4 py-3 bg-zinc-600/50">
				<h4>Caption</h4>
				<p>{image.caption}</p>
			</footer>
		</section>
	);
}
