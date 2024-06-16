import { useEffect, useState } from 'react';
import { getTwitchVideosByUserId } from '../../api/twitch';
import { STREAMER_1_TWITCH_USER_ID } from '../../api/env';
import { TwitchVideo } from '../../types/TwitchVideo';
import { VideoElement } from '../../components/VideoElement';
import { PageWrapper } from '../../components/PageWrapper';

export const TwitchPage = () => {
	const [twitchVideos, setTwitchVideos] = useState<TwitchVideo[]>([]);
	const [loadingTwitch, setLoadingTwitch] = useState(true);

	useEffect(() => {
		if (loadingTwitch) {
			getTwitchVideosByUserId(STREAMER_1_TWITCH_USER_ID).then((data) =>
				setTwitchVideos(data)
			);
			setLoadingTwitch(false);
		}
	}, [loadingTwitch]);

	const displayTwitchVideos = twitchVideos.map((video: TwitchVideo) => {
		const videoSrc = `https://player.twitch.tv/?video=${video.id}&parent=${window.location.hostname}&autoplay=false`;

		return (
			<VideoElement key={video.id} title={video.title} videoSrc={videoSrc}>
				<p>Published on: {new Date(video.published_at).toLocaleDateString()}</p>
				{video.description && <p>{video.description}</p>}
				<p>Views: {video.view_count}</p>
			</VideoElement>
		);
	});

	return (
		<PageWrapper>
			<div>{twitchVideos ? displayTwitchVideos : 'Loading...'}</div>
		</PageWrapper>
	);
};
