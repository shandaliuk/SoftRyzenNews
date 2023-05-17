import Logo from '../Logo';
import Container from '../Container';
import NavLinkList from './NavLinkList';

const Header = () => {
  return (
    <header className="fixed bg-main w-full z-50">
      <nav>
        <div className="flex items-center border-b border-black">
          <Container>
            <Logo />
          </Container>
        </div>
        <div className="border-b border-black">
          <Container>
            <NavLinkList />
          </Container>
        </div>
      </nav>
    </header>
  );
};

export default Header;
