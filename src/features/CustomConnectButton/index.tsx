import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ArtButton } from '../../shared/ui/ArtButton';

import styles from '@/styles/home.module.scss';
import { useDisconnect } from 'wagmi';

const CustomConnectButton = () => {
  const { disconnect } = useDisconnect();

  return (
    <ConnectButton.Custom>
      {({ account, openConnectModal, mounted }) => {

        if (!mounted) return null;

        const handleClick = () => {
          if (account) {
            disconnect();
          } else {
            openConnectModal();
          }
        };

        const buttonText = account
          ? account.displayName || 'Connected'
          : 'Connect Wallet';

        return (
          <ArtButton
            onClick={handleClick}
            className={styles.myCustomButton}
          >
            {buttonText}
          </ArtButton>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default CustomConnectButton;
