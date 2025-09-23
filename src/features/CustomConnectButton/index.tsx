import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ArtButton } from '../../shared/ui/ArtButton';

import styles from '@/src/styles/home.module.scss';

const CustomConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, openAccountModal, mounted }) => {
        if (!mounted) return null;

        const handleClick = () => {
          if (account) {
            openAccountModal();
          } else {
            openConnectModal();
          }
        };

        return (
          <ArtButton onClick={handleClick} className={styles.myCustomButton}>
            {account ? account.displayName || 'Connected' : 'Connect Wallet'}
          </ArtButton>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default CustomConnectButton;
