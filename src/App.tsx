import { useState } from 'react';
import classes from './App.module.css';
import { YouTubePage } from './pages/YouTubePage';
import { TwitchPage } from './pages/TwitchPage';
import { PageType } from './types/PageType';
import { InstagramPage } from './pages/InstagramPage';
import { TiktokPage } from './pages/TiktokPage';
import { TabGroup } from './components/TabGroup';

export const App = () => {
	const [activeView, setActiveView] = useState<PageType>('twitch');

	const pageName = () => {
		switch (activeView) {
			case 'twitch':
				return 'Twitch data';
			case 'youtube':
				return 'YouTube data';
			case 'insta':
				return 'Instagram data';
			case 'tiktok':
				return 'Tiktok data';
		}
	};
	return (
		<div className={classes.wrapper}>
			<h1>{pageName()}</h1>
			<TabGroup
				activeTab={activeView}
				setActiveTab={(tab) => setActiveView(tab)}
			/>
			{activeView === 'twitch' && <TwitchPage />}
			{activeView === 'youtube' && <YouTubePage />}
			{activeView === 'insta' && <InstagramPage />}
			{activeView === 'tiktok' && <TiktokPage />}
		</div>
	);
};
