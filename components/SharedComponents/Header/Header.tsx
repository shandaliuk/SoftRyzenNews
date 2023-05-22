import HeaderNavigation from './HeaderNavigation';

import Logo from '../Logo';

import Container from '../Container';

const Header = () => {
  return (
    <header className="fixed z-50 w-full bg-main">
      <div className="flex items-center border-b border-black">
        <Container>
          <Logo />
        </Container>
      </div>
      <HeaderNavigation />
    </header>
  );
};

export default Header;
