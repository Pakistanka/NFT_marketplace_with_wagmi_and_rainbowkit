import stylesNew from '@/styles/home.module.scss';
import { Navigation } from '../Navigation';
import { SocialNetworks } from '../../shared/ui/SocialNetworks';
import { Logo } from '../../shared/ui/Logo';
import cl from 'classnames';
import CustomConnectButton from '../../features/CustomConnectButton';
import FirstLayout from '@/widgets/MintBlock';


const Header = () => {
  return (
    <section>
        <header
          className={stylesNew.header}
        >
          <Logo />
          <SocialNetworks />
          <CustomConnectButton />

        </header>
      </section>
  );
};

export default Header;
