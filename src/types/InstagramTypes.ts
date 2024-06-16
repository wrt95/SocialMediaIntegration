export type InstagramReelData = {
	video_url: string;
	caption: {
		text: string;
		hashtags?: string[];
		created_at: string;
	};
	play_count: number;
	like_count: number;
};
