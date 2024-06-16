import { ReactNode } from 'react';
import classes from './VideoElement.module.css';

type VideoElementProps = {
	title: string;
	videoSrc: string;
	children: ReactNode;
};

export const VideoElement = ({
	title,
	videoSrc,
	children,
}: VideoElementProps) => {
	return (
		<div className={classes.wrapper}>
			<h1 className={classes.header}>{title}</h1>
			<iframe
				height="360"
				width="640"
				src={videoSrc}
				allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
				allowFullScreen
				title={title}
			/>
			{children}
		</div>
	);
};
