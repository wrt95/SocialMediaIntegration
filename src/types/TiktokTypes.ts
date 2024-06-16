export type MusicInfo = {
	id: string;
	title: string;
	play: string;
	cover: string;
	author: string;
	original: boolean;
	duration: number;
	album: string;
};

export type AuthorInfo = {
	id: string;
	unique_id: string;
	nickname: string;
	avatar: string;
};

export type TikTokVideo = {
	aweme_id: string;
	video_id: string;
	region: string;
	title: string;
	cover: string;
	ai_dynamic_cover: string;
	origin_cover: string;
	duration: number;
	play: string;
	wmplay: string;
	size: number;
	wm_size: number;
	music: string;
	music_info: MusicInfo;
	play_count: number;
	digg_count: number;
	comment_count: number;
	share_count: number;
	download_count: number;
	collect_count: number;
	create_time: number;
	author: AuthorInfo;
	is_top: number;
};

export type TikTokApiResponse = {
	code: number;
	msg: string;
	processed_time: number;
	data: {
		videos: TikTokVideo[];
	};
};
