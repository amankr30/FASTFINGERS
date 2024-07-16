import ThemeSwitch from './ThemeSwitch';

const Header = () => {
	return (
		<header>
			<nav className="pt-10 max-w-[900px] mx-auto flex justify-between items-center">
				<div>
					<div className="logo text-3xl font-bold">FastFingers</div>
				</div>
				<div>
					<ThemeSwitch />
				</div>
			</nav>
		</header>
	);
};

export default Header;
