import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import Web3 from "web3";
import { DEFAULT_CHAIN } from "./constant";
import { supportNetwork, RPC_URLS } from './network';

export const infura_Id = "84842078b09946638c03157f83405213";

export const getWeb3 = () => {
  return new Web3(supportNetwork[DEFAULT_CHAIN].rpc);
}

export const supportChainId = Object.keys(supportNetwork).map(function (key) {
  return parseInt(key);
});



export const injected = new InjectedConnector({
  supportedChainIds: supportChainId
})

export const walletconnect = new WalletConnectConnector({
  rpc: RPC_URLS,
  qrcode: true,
  infuraId: infura_Id,
});

export const coinbaseWallet = new WalletLinkConnector({

  url: `https://mainnet.infura.io/v3/84842078b09946638c03157f83405213`,
  appName: "busdgame App",
  supportedChainIds: supportChainId,

});
