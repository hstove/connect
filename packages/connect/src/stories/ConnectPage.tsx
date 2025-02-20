import { clearSelectedProviderId } from '@stacks/connect-ui';
import { showConnect } from '../ui';

export const ConnectPage = ({ children }: { children?: any }) => {
  function connect() {
    showConnect({
      appDetails: {
        name: 'Connect Demo',
        icon: window.location.origin + '/favicon.ico',
      },
    });
  }

  return (
    <div>
      <button onClick={connect}>Connect Wallet</button>
      <button onClick={() => clearSelectedProviderId()}>Disconnect</button>
      {children}
    </div>
  );
};
