import classes from './Tab.module.css';
import cn from 'classnames';

type TabProps = {
	title: string;
	onClick: () => void;
	isActive: boolean;
};

export const Tab = ({ title, onClick, isActive }: TabProps) => {
	return (
		<button
			role="tab"
			onClick={onClick}
			className={cn(classes.tab, isActive && classes.activeTab)}
		>
			Se data for {title}
		</button>
	);
};
