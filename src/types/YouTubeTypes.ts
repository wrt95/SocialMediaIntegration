export type YouTubeVideo = {
	kind: string;
	etag: string;
	id: string;
};

type YouTubeVideoSnippetThumbnail = {
	url: string;
	width: string;
	height: string;
};
type YouTubeVideoSnippetThumbnails = {
	default?: YouTubeVideoSnippetThumbnail;
	medium?: YouTubeVideoSnippetThumbnail;
	high?: YouTubeVideoSnippetThumbnail;
	standard?: YouTubeVideoSnippetThumbnail;
	maxres?: YouTubeVideoSnippetThumbnail;
};

type YouTubeVideoResourceId = {
	kind: string;
	videoId: string;
};

type YouTubeVideoSnippet = {
	publishedAt: string;
	channelId: string;
	title: string;
	description: string;
	thumbnails: YouTubeVideoSnippetThumbnails;
	channelTitle: string;
	position: number;
	resourceId: YouTubeVideoResourceId;
	videoOwnerChannelTitle: string;
	videoOwnerChannelId: string;
};

export type YouTubeVideoItem = {
	kind: string;
	etag: string;
	id: string;
	snippet: YouTubeVideoSnippet;
};

type PageInfo = {
	totalResults: number;
	resultsPerPage: number;
};

export type YouTubeVideoList = {
	items: YouTubeVideoItem[];
	pageInfo: PageInfo;
};

type YouTubeChannelPlayList = {
	items: {
		kind: string;
		etag: string;
		id: string;
		contentDetails: {
			relatedPlaylists: {
				likes: string;
				uploads: string; // This is the ID we need
			};
		};
	}[];
};
