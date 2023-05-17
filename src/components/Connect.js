import React, { useContext } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { NoEthereumProviderError } from "@web3-react/injected-connector";
import { useEffect, useState } from "react";
import { injected, walletconnect, coinbaseWallet } from "../hooks/connectors";
import Modal from 'react-bootstrap/Modal';
import { DEFAULT_CHAIN } from '../hooks/constant';
import useEagerConnect from '../hooks/useWeb3';
import metamaskIcon from '../images/metamask.png';
import trustIcon from '../images/trust.png';
import coinbaseIcon from '../images/coinbase.png';
import walletconnectIcon from '../images/walletconnect.png';
import localStorage from "local-storage";
import { supportNetwork } from "../hooks/network";
import { Context } from "../context/context";
import { ethers } from 'ethers'

export const Connect = function () {
    const context = useWeb3React();
    const { connector, account, activate, deactivate, active, error, library } = context;
    const [show, setShow] = useState(false);
    const { darkMode } = useContext(Context);
    const [istrust, setIstrust] = useState(false);
    const [selectedAccount, setselectedAccount] = useState("");
    const [balance, setBalance] = useState("")


    useEffect(() => {
        if (account) {
            setselectedAccount(account)
            localStorage.set('address', account);
            console.log(account) 
        }
    }, [account])

    useEffect(() => {
        const fetchBalance = async () => {
            if (library && account) {
                const provider = new ethers.providers.Web3Provider(library.provider);
                const balance = await provider.getBalance(account);
                setBalance(ethers.utils.formatEther(balance));
                console.log(ethers.utils.formatEther(balance))
            }
        };
        fetchBalance();
    }, [library, account]);

    // handle logic to recognize the connector currently being activated
    const [activatingConnector, setActivatingConnector] = useState();
    useEagerConnect();
    useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined);
        }
    }, [activatingConnector, connector]);


    function getErrorMessage(error) {

        if (error instanceof NoEthereumProviderError) {
            if (istrust) {
                const dappUrl = window.location.href; // TODO enter your dapp URL. 
                let metamaskAppDeepLink = "https://link.trustwallet.com/open_url?coin_id=56&url=" + dappUrl;
                window.open(metamaskAppDeepLink)
            }
            else {
                const dappUrl = window.location.href; // TODO enter your dapp URL. 
                let metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
                window.open(metamaskAppDeepLink)
            }
        }
        if (error instanceof UnsupportedChainIdError) {
            return <span className="btn-text" onClick={(e) => switchNetwork(supportNetwork[DEFAULT_CHAIN].chainId)}>Switch Network</span>;
        }

        deactivate(injected);
    }

    const activating = (connection) => connection === activatingConnector;
    const connected = (connection) => connection === connector;

    const switchNetwork = (networkid) => {
        try {
            // @ts-ignore
            window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: `0x${networkid.toString(16)}` }]
            });
        } catch (e) {
            console.error(e);
        }
    }
    const getDotedAddress = () =>{
  const firstFourDigits = account.substring(2, 7);
  const lastFiveDigits = account.substr(-5);
  const displayedAddress = `${firstFourDigits}...${lastFiveDigits}`
  return displayedAddress
    }
    return (
        <React.Fragment>
            {
                error &&
                <button type="button" className="btn btn-primary btn-connect btn-icon-text" onClick={() => {
                    setActivatingConnector();
                }}>
                    {getErrorMessage(error)}
                </button>
            }
            {!error &&
                <>


                    {active && (connected(injected) || connected(walletconnect) || connected(coinbaseWallet)) &&
                        <button type="button" className="btn btn-primary btn-connect btn-icon-text" onClick={() => {
                            setActivatingConnector();
                            localStorage.remove('address');
                            deactivate();
                        }}>{getDotedAddress()}
                        </button>
                    }
                    {!active && (!connected(injected) || !connected(walletconnect) || connected(coinbaseWallet)) &&
                        <button type="button" className="btn btn-primary btn-connect btn-icon-text" onClick={() => {
                            setShow(!show);
                        }}>
                            {(activating(injected) || activating(walletconnect) || activating(coinbaseWallet)) && <span className="btn-text">Connecting...</span>}
                            {(!activating(injected) || !activating(walletconnect) || !activating(coinbaseWallet)) && <span className="btn-text">Launch Dapp</span>}

                        </button>
                    }
                </>
            }


            <Modal
                show={show}
                onHide={() => setShow(false)}
                className={`${darkMode ? 'dark-theme' : ''}`}
            >
                <Modal.Header closeButton >
                    <Modal.Title>Launch Dapp</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="wallets-container svelte-11upx36">

                        <div id="A" className="modal-card left-half">
                            <button className="relative justify-content-start modal-btn svelte-ucnmri" onClick={() => {
                                activate(injected);
                                setShow(false);
                                setIstrust(false);
                            }}>
                                <div className="relative svelte-1wcty06 border-blue background-transparent" >
                                    <div className="icon flex justify-content-center items-center svelte-1wcty06">
                                        <img src={metamaskIcon} alt="metamask img" height="40px" width="40px" />
                                    </div>
                                </div>
                                <span className="name svelte-ucnmri">Metamask</span>
                            </button>
                        </div>
                        <div id="B" className="modal-card right-half">
                            <button className="relative justify-content-start  modal-btn svelte-ucnmri" onClick={() => {
                                activate(walletconnect);
                                setShow(false);
                                setIstrust(false);
                            }}>
                                <div className="relative svelte-1wcty06 border-blue background-transparent">
                                    <div className="icon flex justify-content-center items-center svelte-1wcty06">

                                        <img src={walletconnectIcon} height="40px" width="40px" alt="binance img" />
                                    </div>
                                </div>
                                <span className="name svelte-ucnmri">WalletConnect</span>
                            </button>
                        </div>
                        <div id="A" className="modal-card left-half">
                            <button className="relative justify-content-start modal-btn svelte-ucnmri" onClick={() => {
                                activate(injected);
                                setShow(false);
                                setIstrust(true);
                            }}>
                                <div className="relative svelte-1wcty06 border-blue background-transparent" >
                                    <div className="icon flex justify-content-center items-center svelte-1wcty06">
                                        <img src={trustIcon} alt="metamask img" height="40px" width="40px" />
                                    </div>
                                </div>
                                <span className="name svelte-ucnmri">TrustWallet</span>
                            </button>
                        </div>
                        <div id="B" className="modal-card right-half">
                            <button className="relative justify-content-start  modal-btn svelte-ucnmri" onClick={() => {
                                activate(coinbaseWallet);
                                setShow(false);
                                setIstrust(false);
                            }}>
                                <div className="relative svelte-1wcty06 border-blue background-transparent">
                                    <div className="icon flex justify-content-center items-center svelte-1wcty06">

                                        <img src={coinbaseIcon} height="40px" width="40px" alt="binance img" />
                                    </div>
                                </div>
                                <span className="name svelte-ucnmri">Coinbase</span>
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>


        </React.Fragment >
    );
};

export default Connect;