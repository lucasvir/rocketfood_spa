import { Container } from './styles';

import { Button } from '../Button';
import { Search } from '../Search';

import { useAuth } from '../../hooks/auth';

import logoHeader from '../../assets/icon/logo_mob.svg';
import iconMenu from '../../assets/icon/menu.svg';
import iconReceipt from '../../assets/icon/receipt.svg';
import iconSignout from '../../assets/icon/signout.svg';
import iconButton from '../../assets/icon/receipt.svg';

export function Header({ isAdmin, isDesktop, ...rest }) {
  const { signOut } = useAuth();

  return (
    <Container {...rest}>
      {isDesktop ? '' : <img src={iconMenu} alt='ícone do menu' />}
      <div id='logo_header'>
        <img src={logoHeader} alt='logo foodexplorer' />
        <span id='logo_text'>food explorer</span>
        {isAdmin ? <span>admin</span> : ''}
      </div>
      {isDesktop ? (
        <Search placeholder='Busque por pratos ou ingredientes' />
      ) : (
        ''
      )}

      {isDesktop ? (
        <Button icon={iconButton} title='Pedidos (0)' />
      ) : (
        ''
      )}

      {isDesktop ? (
        <a href='/'>
          <img
            src={iconSignout}
            alt='ícone de signout'
            onClick={signOut}
          />
        </a>
      ) : (
        <img src={iconReceipt} alt='ícone do carrinho de compras' />
      )}
    </Container>
  );
}
