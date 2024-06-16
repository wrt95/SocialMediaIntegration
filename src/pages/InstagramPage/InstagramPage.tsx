import { useEffect, useState } from 'react';
import { InstagramReelData } from '../../types/InstagramTypes';
import { getInstagramReelsByUsername } from '../../api/instagram';
import { STREAMER_1_INSTAGRAM_USERNAME } from '../../api/env';
import { VideoElement } from '../../components/VideoElement';
import { PageWrapper } from '../../components/PageWrapper';

export const InstagramPage = () => {
	const [instagramReels, setInstagramReels] = useState<InstagramReelData[]>();
	const [loadingInsta, setLoadingInsta] = useState(true);

	useEffect(() => {
		if (loadingInsta) {
			getInstagramReelsByUsername(STREAMER_1_INSTAGRAM_USERNAME).then(
				(data) => {
					setInstagramReels(data);
				}
			);

			setLoadingInsta(false);
		}
	}, [loadingInsta]);

	const displayInstaVideos = instagramReels?.map((reel: InstagramReelData) => (
		<VideoElement
			key={reel.video_url}
			title={reel.caption.text}
			videoSrc={`${reel.video_url}&autoplay=false`}
		>
			<p>Hashtags: {reel.caption.hashtags?.join(', ')}</p>
			<p>
				Published on: {new Date(reel.caption.created_at).toLocaleDateString()}
			</p>
			<p>Total likes: {reel.like_count}</p>
			<p>Total views: {reel.play_count}</p>
		</VideoElement>
	));

	return (
		<PageWrapper>
			{!loadingInsta ? displayInstaVideos : 'Loading...'}
		</PageWrapper>
	);
};
