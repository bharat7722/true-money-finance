import { useWeb3React } from '@web3-react/core';
import React, { useEffect, useState } from 'react'
import Web3 from 'web3';
import {token_abi,token_address,pair_abi,pair_address,busd_address, wbnb_decimal,busd_decimal,bnb_busd_pair_address,wbnb_address,fixed_decimal} from '../components/helper/apis'
import CountdownTimer from './Countdown';
function AppComponent() {
	const { account } = useWeb3React()
	const web3 = new Web3(window.ethereum);
	const [tokenPrice, setTokenPrice] = useState(0)
	const [balance, setbalance] = useState(0)
	const [marketCap, setmarketCap] = useState(0)
	const [circulatingSupply, setcirculatingSupply] = useState(0)
	const [totalSupply, settotalSupply] = useState(0)
	const [treasuryAssetValue, settreasuryAssetValue] = useState(0)
	const [poolValue, setpoolValue] = useState(0)
	const [insuranceValue, setinsuranceValue] = useState(0)
	const [firepittoken, setfirepittoken] = useState(0)
	const [firepitinusd, setfirepitinusd] = useState(0)
	const [firepitSupply, setfirepitSupply] = useState(0)
	const v2initTokenContract = new web3.eth.Contract(
		token_abi,
		token_address
	);
	async function getContractBnbBalance(address) {
		let balance = await web3.eth.getBalance(address);
		return parseFloat((balance / Math.pow(10, 18)).toFixed(fixed_decimal));
	}
	
	async function getBUSDBalance(address) {
		const busd_contract = new web3.eth.Contract(token_abi, busd_address);
		let balance = await busd_contract.methods.balanceOf(address).call();
		balance = parseFloat(balance / Math.pow(10, busd_decimal).toFixed(fixed_decimal));
		return balance;
	}
	
	const getTotalToken = async () => {
		const getToken = await v2initTokenContract.methods
			.balanceOf(account)
			.call();
		setbalance(getToken)
	}
	const getMarketCap = async () => {
		const token_contract = new web3.eth.Contract(token_abi, token_address);
		let total_supply = await token_contract.methods.totalSupply().call();
		let decimal = await token_contract.methods.decimals().call();
		total_supply = total_supply / Math.pow(10, decimal);
		let burn = await token_contract.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();
		burn = burn / Math.pow(10, decimal);
		let marketCap = parseFloat((total_supply - burn) * tokenPrice).toFixed(fixed_decimal);
		if (isNaN(marketCap)) {
			setmarketCap(0);
		  } else {
			setmarketCap(marketCap);
		  }
		
	}
	
	const getCirculatingSupply = async() => {
		const token_contract = new web3.eth.Contract(token_abi, token_address);
		let CirculatingSupply = await token_contract.methods.getCirculatingSupply().call();
		let decimal = await token_contract.methods.decimals().call();
		CirculatingSupply = CirculatingSupply / Math.pow(10, decimal);
		setcirculatingSupply(CirculatingSupply)
	}

	const getTotalSupply = async() => {
		const token_contract = new web3.eth.Contract(token_abi, token_address);
		let TotalSupply = await token_contract.methods.totalSupply().call();
		let decimal = await token_contract.methods.decimals().call();
		TotalSupply = TotalSupply / Math.pow(10, decimal);
		if (isNaN(TotalSupply)) {
			settotalSupply(TotalSupply)
		}else{
			settotalSupply(TotalSupply)
		}
	} 
	async function getCurrentBNBPrice() {
		let bnb_price_contract = new web3.eth.Contract(pair_abi, bnb_busd_pair_address);
		let reserve_bnb = await bnb_price_contract.methods.getReserves().call();
		let bnb_price = reserve_bnb._reserve1 / reserve_bnb._reserve0;
		return bnb_price;
	}
	const geTtreasuryAssetValue = async() => {
		const token_contract = new web3.eth.Contract(token_abi, token_address);
		let treasuryReceiver = await token_contract.methods.treasuryReceiver().call();
		let a = await getContractBnbBalance(treasuryReceiver);
		let b = await getBUSDBalance(treasuryReceiver);
		let bnb_price = await getCurrentBNBPrice();
		let treasuryValue_usd = parseFloat(bnb_price * a) + b;
		if (isNaN(treasuryValue_usd)) {
			settreasuryAssetValue(0)
		}else{
			settreasuryAssetValue(treasuryValue_usd)
		}
	}
	async function getWBNBBalance(address) {
		const wbnb_contract = new web3.eth.Contract(token_abi, wbnb_address);
		let balance = await wbnb_contract.methods.balanceOf(address).call();
		balance = parseFloat(balance / Math.pow(10, wbnb_decimal).toFixed(fixed_decimal));
		return balance;
	}

	const getPoolValue = async() => {
		const token_contract = new web3.eth.Contract(token_abi, token_address);
		let pairContract = await token_contract.methods.pairContract().call();
		let a = await getWBNBBalance(pairContract);
		let bnb_price = await getCurrentBNBPrice();
		let pairContract_usd = parseFloat(bnb_price * a);
		setpoolValue(pairContract_usd)
	} 
	const insuranceFundValue = async() => {
		const token_contract = new web3.eth.Contract(token_abi, token_address);
		let InsuranceFundReceiver = await token_contract.methods.tmfInsuranceFundReceiver().call();
		let a = await getContractBnbBalance(InsuranceFundReceiver);
		let b = await getBUSDBalance(InsuranceFundReceiver);
		let bnb_price = await getCurrentBNBPrice();
		let insurancefundreceiver_usd = parseFloat(bnb_price * a) + b;
		setinsuranceValue(insurancefundreceiver_usd)
	}
	const valueOfFirepit = async() => {
		const token_contract = new web3.eth.Contract(token_abi, token_address);
		let pairContract = await token_contract.methods.firePit().call();
		let decimal = await token_contract.methods.decimals().call();
		let value_firepit = await token_contract.methods.balanceOf(pairContract).call();
		value_firepit = value_firepit / Math.pow(10, decimal);
		setfirepittoken(value_firepit)
	}
	const getFirePitSupply = async() => {
		const token_contract = new web3.eth.Contract(token_abi, token_address);
		let TotalSupply = await token_contract.methods.totalSupply().call();
		let decimal = await token_contract.methods.decimals().call();
		TotalSupply = TotalSupply / Math.pow(10, decimal);
		let pairContract = await token_contract.methods.firePit().call();
		let balance = await token_contract.methods.balanceOf(pairContract).call();
		balance = balance / Math.pow(10, decimal);
		let per = parseFloat(balance) / parseFloat(TotalSupply);
		const finalfirePitSupply = parseFloat((per * 100).toFixed(2));
		setfirepitSupply(finalfirePitSupply)
	}

	useEffect(() => {
		const fetchData = async () => {
		  const [reserve, bnb_price, wbnb_balance, lp_balance, reserve_bnb] = await Promise.all([
			new web3.eth.Contract(pair_abi, bnb_busd_pair_address).methods.getReserves().call(),
			new web3.eth.Contract(pair_abi, bnb_busd_pair_address).methods.getReserves().call(),
			new web3.eth.Contract(token_abi, wbnb_address).methods.balanceOf(pair_address).call(),
			new web3.eth.Contract(token_abi, token_address).methods.balanceOf(pair_address).call(),
			new web3.eth.Contract(pair_abi, bnb_busd_pair_address).methods.getReserves().call()
		  ]);
	  
		  const bnb_token_price = reserve._reserve1 / reserve._reserve0;
		  const wbnb_balance_float = wbnb_balance / Math.pow(10, 18);
		  const lp_balance_float = lp_balance / Math.pow(10, fixed_decimal);
		  const bnb_price_float = reserve_bnb._reserve1 / reserve_bnb._reserve0;
		  const token_price = parseFloat((wbnb_balance_float * bnb_price_float * 10) / lp_balance_float);
		  setTokenPrice(isNaN(token_price) ? 0 : token_price);
	  
		  getTotalToken();
		  getMarketCap();
		  getCirculatingSupply();
		  getTotalSupply();
		  geTtreasuryAssetValue();
		  getPoolValue();
		  insuranceFundValue();
		  valueOfFirepit();
		  getFirePitSupply();
		};
	  
		fetchData();
	  }, []);
	  

	return (
		<section class="app-area">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 col-md-12 col-lg-12">
						<div class="card">
							<div class="card-body">
								<div class="row">
								<div class="col-sm-12 col-md-6 col-lg-4">
										<div class="text-center">
											<p class="card-title">My Token</p>
											<p class="card-value"><span>{balance}</span></p>
										</div>
									</div>
									<div class="col-sm-12 col-md-6 col-lg-4">
										<div class="text-center">
											<p class="card-title">My Token Value</p>
											<p class="card-value">$ <span>{balance * tokenPrice}</span></p>
										</div>
									</div>
									<div class="col-sm-12 col-md-6 col-lg-4">
										<div class="text-center">
											<p class="card-title"> Interest (Per day)</p>
											<p class="card-value"> <span>1 %</span></p>
										</div>
									</div>
									<div class="col-sm-12 col-md-6 col-lg-4">
										<div class="text-center">
											<p class="card-title">$TMF Price</p>
											<p class="card-value">$ <span>{tokenPrice.toFixed(4)}</span></p>
										</div>
									</div>
									<div class="col-sm-12 col-md-6 col-lg-4">
										<div class="text-center">
											<p class="card-title">Market Cap</p>
											<p class="card-value"><span >${marketCap}</span></p>
										</div>
									</div>
									<div class="col-sm-12 col-md-6 col-lg-4">
										<div class="text-center">
											<p class="card-title">Circulating Supply</p>
											<p class="card-value"><span>{circulatingSupply.toFixed(3)}</span></p>
										</div>
									</div>
									<div class="col-sm-12 col-md-6 col-lg-4">
										<div class="text-center">
											<p class="card-title">Backed Liquidity</p>
											<p class="card-value">100%</p>
										</div>
									</div>
									<div class="col-sm-12 col-md-6 col-lg-4">
										<div class="text-center">
											<p class="card-title">Next Rebase</p>
											<p class="card-value"></p>
											<CountdownTimer/>
											<p></p>
										</div>
									</div>
									<div class="col-sm-12 col-md-6 col-lg-4">
										<div class="text-center">
											<p class="card-title">Total Supply</p>
											<p class="card-value"><span>{totalSupply}</span></p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-12 col-md-6 col-lg-6">
						<div class="card">
							<div class="card-body text-center">
								<p class="card-title">$TMF Price</p>
								<p class="card-value">$ <span>{tokenPrice.toFixed(4)}</span></p>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-md-6 col-lg-6">
						<div class="card">
							<div class="card-body text-center">
								<p class="card-title">Market Value of Treasury Assets</p>
								<p class="card-value"><span>${treasuryAssetValue.toFixed(2)}</span></p>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-md-6 col-lg-6">
						<div class="card">
							<div class="card-body text-center">
								<p class="card-title">Pool Value</p>
								<p class="card-value"><span>{poolValue.toFixed(3)}</span></p>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-md-6 col-lg-6">
						<div class="card">
							<div class="card-body text-center">
								<p class="card-title">$TMF Insurance Fund Value</p>
								<p class="card-value"><span>${insuranceValue.toFixed(2)}</span></p>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-md-6 col-lg-4">
						<div class="card">
							<div class="card-body text-center">
								<p class="card-title">$TMF Firepit Value (In Tokens)</p>
								<p class="card-value"><span>{firepittoken.toFixed(3)} TMF</span></p>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-md-6 col-lg-4">
						<div class="card">
							<div class="card-body text-center">
								<p class="card-title">$TMF Firepit Value (In $)</p>
								<p class="card-value"><span className='usdvalue_firepit'>$</span></p>
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-md-6 col-lg-4">
						<div class="card">
							<div class="card-body text-center">
								<p class="card-title">$TMF Firepit Supply (In %)</p>
								<p class="card-value"><span >{firepitSupply}%</span></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AppComponent