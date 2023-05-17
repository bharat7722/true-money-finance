import { useWeb3React } from '@web3-react/core';
import React from 'react'
import { Link } from 'react-router-dom';
import {token_abi,quoteAddress} from '../components/helper/apis'
import Web3 from 'web3/types';
function AppPage() {

	return (
		<div class="wrapper">
			<nav id="sidebar">
				<div id="dismiss">
					<i class="fas fa-arrow-left"></i>
				</div>
				<div class="sidebar-header">
					<a href="index.html">
						<img src="assets/images/logo-1.png" alt="" />
					</a>
				</div>
				<ul class="list-unstyled components">
					<li>
						<Link to='/'><i class="fas fa-home"></i>Home</Link>
					</li>
					<li >
						<Link path='/app' ><i class="fas fa-dashboard"></i>App</Link>
					</li>
					<li >
						<Link to='/cal'><i class="fas fa-layer-group"></i>Calculator</Link>
					</li>
					<li>
						<a href="https://pancakeswap.finance/swap?outputCurrency=0xb77022763201b3F34cE3254BC5B5acE38fDd0b48"><i class="fas fa-right-left"></i>Swap</a>
					</li>
					<li>
						<a href="#"><i class="fas fa-paper-plane"></i> Telegram</a>
					</li>
					<li>
						<a href="#"><i class="fab fa-twitter"></i> Twitter</a>
					</li>
					<li>
						<a href="#"><i class="fab fa-facebook-f"></i> Facebook</a>
					</li>
				</ul>
			</nav>
			<div id="content">
				<nav class="navbar navbar-expand-lg">
					<div class="container-fluid">
						<div class="d-inline-block d-md-none">
							<img src="assets/images/logo-1.png" alt="" style={{ width: "50px" }} />
						</div>
						<div class="connectWallet ms-auto">
							<button class="btn button-49 connectToNetwork ms-auto me-2">
								Connect Wallet
							</button>
						</div>
						<button type="button" id="sidebarCollapse" class="btn button-49 d-inline-block d-md-none d-lg-none ms-2">
							<i class="fas fa-align-justify"></i>
						</button>
					</div>
				</nav>
				<section class="app-area">
					<div class="container">
						<div class="row">
							<div class="col-sm-12 col-md-12 col-lg-12">
								<div class="card">
									<div class="card-body">
										<div class="row">
											<div class="col-sm-12 col-md-6 col-lg-4">
												<div class="text-center">
													<p class="card-title">$TMF Price</p>
													<p class="card-value">$ <span class="token_price">00.00</span></p>
												</div>
											</div>
											<div class="col-sm-12 col-md-6 col-lg-4">
												<div class="text-center">
													<p class="card-title">Market Cap</p>
													<p class="card-value"><span id="marketcap">$0.00</span></p>
												</div>
											</div>
											<div class="col-sm-12 col-md-6 col-lg-4">
												<div class="text-center">
													<p class="card-title">Circulating Supply</p>
													<p class="card-value"><span id="circulating_supply">0</span></p>
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
													<p class="card-text" id="tiles"><span id="hours">00</span>:<span id="minutes">00</span>:<span id="seconds">00</span></p>
													<p></p>
												</div>
											</div>
											<div class="col-sm-12 col-md-6 col-lg-4">
												<div class="text-center">
													<p class="card-title">Total Supply</p>
													<p class="card-value"><span id="total_supply">0</span></p>
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
										<p class="card-value">$ <span class="token_price">00.00</span></p>
									</div>
								</div>
							</div>
							<div class="col-sm-12 col-md-6 col-lg-6">
								<div class="card">
									<div class="card-body text-center">
										<p class="card-title">Market Value of Treasury Assets</p>
										<p class="card-value"><span class="treasuryAssets">$00.00</span></p>
									</div>
								</div>
							</div>
							<div class="col-sm-12 col-md-6 col-lg-6">
								<div class="card">
									<div class="card-body text-center">
										<p class="card-title">Pool Value</p>
										<p class="card-value"><span class="pool_asset">00.00</span></p>
									</div>
								</div>
							</div>
							<div class="col-sm-12 col-md-6 col-lg-6">
								<div class="card">
									<div class="card-body text-center">
										<p class="card-title">$TMF Insurance Fund Value</p>
										<p class="card-value"><span class="insurance_asset">$00.00</span></p>
									</div>
								</div>
							</div>
							<div class="col-sm-12 col-md-6 col-lg-4">
								<div class="card">
									<div class="card-body text-center">
										<p class="card-title">$TMF Firepit Value (In Tokens)</p>
										<p class="card-value"><span class="value_firepit">0 TMF</span></p>
									</div>
								</div>
							</div>
							<div class="col-sm-12 col-md-6 col-lg-4">
								<div class="card">
									<div class="card-body text-center">
										<p class="card-title">$TMF Firepit Value (In $)</p>
										<p class="card-value"><span class="usdvalue_firepit">$00.00</span></p>
									</div>
								</div>
							</div>
							<div class="col-sm-12 col-md-6 col-lg-4">
								<div class="card">
									<div class="card-body text-center">
										<p class="card-title">$TMF Firepit Supply (In %)</p>
										<p class="card-value"><span class="fire_supply_per">00.00</span></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div class="overlay"></div>
		</div>
	)
}

export default AppPage