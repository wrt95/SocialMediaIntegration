import { useEffect, useState } from 'react';
import { STREAMER_1_TIKTOK_USER_ID } from '../../api/env';
import { TikTokVideo } from '../../types/TiktokTypes';
import { getTiktokPostsByUserid } from '../../api/tiktok';
import { VideoElement } from '../../components/VideoElement';
import { PageWrapper } from '../../components/PageWrapper';

export const TiktokPage = () => {
	const [tiktokResults, setTiktokResults] = useState<TikTokVideo[]>();
	const [loadingTiktok, setLoadingTiktok] = useState(true);

	useEffect(() => {
		if (loadingTiktok) {
			getTiktokPostsByUserid(STREAMER_1_TIKTOK_USER_ID).then((data) => {
				setTiktokResults(data);
			});

			setLoadingTiktok(false);
		}
	}, [loadingTiktok]);

	const displayInstaVideos = tiktokResults?.map((post: TikTokVideo) => (
		<VideoElement
			key={post.aweme_id}
			title={post.title}
			videoSrc={`${post.play}&autoplay=false`}
		>
			<p>
				Published on: {new Date(post.create_time * 1000).toLocaleDateString()}
			</p>
			<p>Total likes: {post.digg_count}</p>
			<p>Total views: {post.play_count}</p>
		</VideoElement>
	));

	return (
		<PageWrapper>
			{!loadingTiktok ? displayInstaVideos : 'Loading...'}
		</PageWrapper>
	);
};
