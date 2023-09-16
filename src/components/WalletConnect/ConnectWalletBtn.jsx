import React, { useState } from "react";
import WalletConnect from "./WalletConnect";


const ConnectWalletBtn = () => {
  const [walletConnect, setWalletConnect] = useState(false);

  const toggleHandleWallet = () => {
    setWalletConnect(!walletConnect);
  };
  return (
    <>
      <button
        href=""
        className="custom-btn-alt"
        onClick={toggleHandleWallet}
      >
        <span>Connect Wallet</span>
      </button>

      <WalletConnect
        setWalletConnect={walletConnect}
        walletConnect={walletConnect}
        toggleHandleWallet={toggleHandleWallet}
      />
    </>
  );
};

export default ConnectWalletBtn;
