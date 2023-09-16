import Image from 'next/image'
import React from 'react'
import '../../styles/WalletConnet.css'
const WalletConnect = ({walletConnect,toggleHandleWallet}) => {
  return (
    <>
     {walletConnect && (
        <div className="wallet_model">
          <div className="overlay2"></div>
          <div className=" wallet-connect-content">
            <div className="modal-header flex-column justify-content-center text-center">
              <h5 className="modal-title">
                Connect to your Wallet
              </h5>
              <p>If you don't have a wallet, you can select a provider and create one now.</p>
              <button
                type="button"
                className="btn-close"
                onClick={toggleHandleWallet}
              ></button>
            </div>
            <div className="wallet-content-wrapper d-flex flex-column gap-3">
                <button
                //   onClick={handleMetamask}
                  className="connect-wallet-item d-flex align-items-center flex-column gap-2 justify-content-center"
                >
                  <div className="wallet-img">
                    <Image src="/assets/img/wallet/metamask.png" width={50} height={47} />
                  </div>
                  <h4>Metamask</h4>
                  <span>Connect to your Metamask</span>
                </button>
                <button
                //   onClick={() => {
                //     handleCoinBase();
                //     setProvider("coinbaseWallet");
                //   }
                // }
                  className="connect-wallet-item d-flex align-items-center flex-column gap-2 justify-content-center"
                >
                  <div className="wallet-img">
                    <Image src="/assets/img/wallet/coinbase.png" width={50} height={50} />
                  </div>
                  <h4>Coinbase Wallet</h4>
                  <span>Connect to your Coinbase Wallet</span>
                </button>
              </div>
          </div>
        </div>
      )}
    </>
  )
}

export default WalletConnect