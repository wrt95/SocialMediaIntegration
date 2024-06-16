import axios from 'axios';
import { RAPID_API_INSTAGRAM_HOST, RAPID_API_KEY } from './env';
import { InstagramReelData } from '../types/InstagramTypes';

export const getInstagramReelsByUsername = (
	username: string
): Promise<InstagramReelData[]> => {
	return axios
		.get(
			`https://instagram-scraper-API2.p.rapidapi.com/v1.2/reels?username_or_id_or_url=${username}`,
			{
				headers: {
					'X-RapidAPI-Host': RAPID_API_INSTAGRAM_HOST,
					'X-RapidAPI-Key': RAPID_API_KEY,
				},
			}
		)
		.then((res) => {
			const responseDataDataItems = res.data.data.items;

			const reels: InstagramReelData[] = responseDataDataItems.map(
				(item: any) => ({
					video_url: item.video_url,
					caption: {
						text: item?.caption?.text ?? '',
						hashtags: item?.caption?.hashtags ?? [],
						created_at: item?.caption?.created_at ?? '',
					},
					play_count: item?.play_count ?? 0,
					like_count: item?.like_count ?? 0,
				})
			);
			return reels;
		});
};
