const IFRAME_HEIGHT: string = '360';
const IFRAME_WIDTH: string = '640';

type IFrameProps = {
	title: string;
	videoSrc: string;
};

export const IFrame = ({ title, videoSrc }: IFrameProps) => {
	return (
		<iframe
			title={title}
			src={videoSrc}
			height={IFRAME_HEIGHT}
			width={IFRAME_WIDTH}
			allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
			allowFullScreen={true}
		/>
	);
};
