import axios from 'axios';
import { TWITCH_BEARER_TOKEN, TWITCH_CLIENT_ID } from './env';
import { TwitchVideo } from '../types/TwitchVideo';

export const getTwitchVideosByUserId = (
	userId: string
): Promise<TwitchVideo[]> => {
	return axios
		.get(`https://api.twitch.tv/helix/videos?user_id=${userId}`, {
			headers: {
				Authorization: `Bearer ${TWITCH_BEARER_TOKEN}`,
				'Client-Id': TWITCH_CLIENT_ID,
			},
		})
		.then((res) => {
			const twitchVideos: TwitchVideo[] = res.data.data as TwitchVideo[];
			return twitchVideos;
		});
};
