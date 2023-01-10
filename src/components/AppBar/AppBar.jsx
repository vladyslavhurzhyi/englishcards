import { IoIosAlbums, IoIosAddCircle, IoIosOptions } from 'react-icons/io';

import { Header, Nav, NavLinkStyled } from './AppBar.styled';

const navItem = [
  { href: 'mycards', text: 'My Cards', icon: IoIosAlbums },
  { href: 'add-new-cards', text: 'Add New Cards', icon: IoIosAddCircle },
  { href: 'option', text: 'Option', icon: IoIosOptions },
];

export const AppBar = () => {
  return (
    <Header>
      <Nav>
        {navItem.map(({ href, text, icon: Icon }) => (
          <NavLinkStyled to={href} key={text}>
            <Icon size={16} />
            {text}
          </NavLinkStyled>
        ))}
      </Nav>
    </Header>
  );
};
