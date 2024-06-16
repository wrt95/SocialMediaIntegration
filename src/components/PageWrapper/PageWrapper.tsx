import { ReactNode } from 'react';
import classes from './PageWrapper.module.css';

type PageWrapperProps = {
	children: ReactNode;
};

export const PageWrapper = ({ children }: PageWrapperProps) => {
	return <div className={classes.wrapper}>{children}</div>;
};
