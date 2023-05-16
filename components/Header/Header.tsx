import Logo from '../Logo';
import Container from '../Container';
import NavLinkList from './NavLinkList';

const Header = () => {
  return (
    <header className="fixed py-5 bg-orange-950 w-full">
      <Container>
        <nav className="flex justify-between items-center">
          <Logo />
          <NavLinkList />
        </nav>
      </Container>
    </header>
  );
};

export default Header;
