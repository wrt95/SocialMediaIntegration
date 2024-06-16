import axios from 'axios';
import { RAPID_API_TIKTOK_HOST, RAPID_API_KEY } from './env';
import { TikTokVideo } from '../types/TiktokTypes';

export const getTiktokPostsByUserid = (
	userId: string
): Promise<TikTokVideo[]> => {
	return axios
		.get(
			`https://tiktok-scraper7.p.rapidapi.com/user/posts?user_id=${userId}`,
			{
				headers: {
					'X-RapidAPI-Host': RAPID_API_TIKTOK_HOST,
					'X-RapidAPI-Key': RAPID_API_KEY,
				},
			}
		)
		.then((res) => {
			const posts: TikTokVideo[] = res.data.data.videos;
			console.log('posts', posts);
			return posts;
		});
};
