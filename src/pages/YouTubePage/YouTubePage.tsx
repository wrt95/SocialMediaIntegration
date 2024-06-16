import { useEffect, useState } from 'react';
import {
	getAllVideosFromPlaylist,
	getUploadsPlaylistId,
} from '../..//api/youTube';
import { STREAMER_1_CHANNEL_ID } from '../../api/env';
import { YouTubeVideoItem, YouTubeVideoList } from '../..//types/YouTubeTypes';
import { VideoElement } from '../../components/VideoElement';
import { PageWrapper } from '../../components/PageWrapper';

export const YouTubePage = () => {
	const [youTubeVideoItems, setYouTubeVideoItems] =
		useState<YouTubeVideoList>();
	const [loadingYouTube, setLoadingYouTube] = useState(true);

	useEffect(() => {
		if (loadingYouTube) {
			getUploadsPlaylistId(STREAMER_1_CHANNEL_ID).then((data) => {
				const playlistId = data;
				getAllVideosFromPlaylist(playlistId).then((data: YouTubeVideoList) => {
					setYouTubeVideoItems(data);
				});
			});

			setLoadingYouTube(false);
		}
	}, [loadingYouTube]);

	const displayYoutubeVideos = youTubeVideoItems?.items.map(
		(videoItem: YouTubeVideoItem) => (
			<VideoElement
				key={videoItem.snippet.resourceId.videoId}
				title={videoItem.id}
				videoSrc={`https://www.youtube.com/embed/${videoItem.snippet.resourceId.videoId}&autoplay=false`}
			>
				<p>
					Published on:{' '}
					{new Date(videoItem.snippet.publishedAt).toLocaleDateString()}
				</p>
				{videoItem.snippet.description && (
					<p>{videoItem.snippet.description}</p>
				)}
			</VideoElement>
		)
	);

	return (
		<PageWrapper>
			{!loadingYouTube ? displayYoutubeVideos : 'Loading...'}
		</PageWrapper>
	);
};
