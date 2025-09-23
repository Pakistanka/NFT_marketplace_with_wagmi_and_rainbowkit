import stylesNew from '@/styles/home.module.scss';
import { ArtButton } from '../../shared/ui/ArtButton';
import { Title } from '../../shared/ui/Title';
import { Navigation } from '../Navigation';
import { SocialNetworks } from '../../shared/ui/SocialNetworks';
import { Logo } from '../../shared/ui/Logo';
import cl from 'classnames';
import CustomConnectButton from '../../features/CustomConnectButton';


const Header = () => {
  return (
    <section className={cl(stylesNew.section, stylesNew.sectionMain)}>
        <header
          className={stylesNew.header}
        >
          <Logo />
          <SocialNetworks />
          <CustomConnectButton />
          {/* <ArtButton onClick={() => {}}>
            Whitepaper
          </ArtButton> */}
        </header>
        <Navigation />
        <div>
          <Title>
            From dust to&nbsp;dawn
          </Title>
          <ul className={stylesNew.buttonList}>
            <li>
              <ArtButton onClick={() => {}}>
                Mint
              </ArtButton>
            </li>
          </ul>
        </div>
      </section>
  );
};

export default Header;
