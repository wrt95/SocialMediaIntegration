import axios from 'axios';
import { YOUTUBE_API_KEY } from './env';
import { YouTubeVideoList } from '../types/YouTubeTypes';

const baseUrl: string = 'https://www.googleapis.com/youtube/v3';

export const getYouTubeVideosByVideoIdList = (
	videoIdList: string[]
): Promise<any> => {
	const allIdsCombined: string = mapCommaSeparatedListToStringCode(videoIdList);
	console.log('ALL COMBINED', allIdsCombined);
	return axios
		.get(
			`${baseUrl}/videos?part=contentDetails%2Cplayer%2Cid%2Csnippet&id=${allIdsCombined}&key=${YOUTUBE_API_KEY}`
		)
		.then((res) => {
			console.log('VIDEO RES', res.data);
			return res;
		});
};

const mapCommaSeparatedListToStringCode = (list: string[]): string => {
	return list.reduce((prevValue, currValue) => `${prevValue}%2C${currValue}`);
};

export const getUploadsPlaylistId = (channelId: string): Promise<string> => {
	const channelDetailsUrl = `${baseUrl}/channels?id=${channelId}&part=contentDetails&key=${YOUTUBE_API_KEY}`;
	return axios.get(channelDetailsUrl).then((res) => {
		const value = res.data.items[0].contentDetails.relatedPlaylists.uploads;
		return value;
	});
};

export const getAllVideosFromPlaylist = (
	playlistId: string
): Promise<YouTubeVideoList> => {
	const basePlaylistItemsUrl = `${baseUrl}/playlistItems?playlistId=${playlistId}&part=contentDetails%2Csnippet&maxResults=50&key=${YOUTUBE_API_KEY}`;

	return axios.get(basePlaylistItemsUrl).then((res) => {
		const value = res.data;
		return value;
	});
};
