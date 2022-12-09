import { MainFooterLogo } from './MainFooterLogo';

export const MainFooter = () => {
	return (
		<footer className="bg-primary">
			<div className="container">
				<div className="flex flex-col items-center justify-center text-center py-6 space-y-2">
					<MainFooterLogo className={'text-white'} />
					<div className="text-white text-opacity-70">&copy; Copyright 2022. All rights reserved.</div>
				</div>
			</div>
		</footer>
	);
};
