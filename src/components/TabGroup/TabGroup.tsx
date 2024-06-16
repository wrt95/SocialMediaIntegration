import { PageType } from '../../types/PageType';
import { Tab } from './Tab';
import classes from './TabGroup.module.css';

type TabGroupProps = {
	activeTab: PageType;
	setActiveTab: (tab: PageType) => void;
};

export const TabGroup = ({ activeTab, setActiveTab }: TabGroupProps) => {
	return (
		<div role="tablist" className={classes.tabList}>
			<Tab
				title="Twitch"
				onClick={() => setActiveTab('twitch')}
				isActive={activeTab === 'twitch'}
			/>
			<Tab
				title="YouTube"
				onClick={() => setActiveTab('youtube')}
				isActive={activeTab === 'youtube'}
			/>
			<Tab
				title="Instagram"
				onClick={() => setActiveTab('insta')}
				isActive={activeTab === 'insta'}
			/>
			<Tab
				title="Tiktok"
				onClick={() => setActiveTab('tiktok')}
				isActive={activeTab === 'tiktok'}
			/>
		</div>
	);
};
