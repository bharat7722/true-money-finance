import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Connect from '../components/Connect'

function MainPage() {
	const location = useLocation()
  return (
	<div>
	<div class="wrapper">
	<nav id="sidebar">
		<div id="dismiss">
			<i class="fas fa-arrow-left"></i>
		</div>
		<div class="sidebar-header">
			<Link to='/'>
				<img src="/images/logo-1.png" alt="" />
			</Link>
		</div>
		<ul class="list-unstyled components">
			<li>
				<Link to="/"><i class="fas fa-home"></i>Home</Link>
			</li>
			<li className={location.pathname.length == 10 ? "active" :""} >
				<Link to=""><i class="fas fa-dashboard"></i>App</Link>
			</li>
			<li className={location.pathname.length === 21 ? "active" :""} >
				<Link to='calculator'><i class="fas fa-layer-group"></i>Calculator</Link>
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
					<img src="/images/logo-1.png" alt="" style={{width: "50px"}} />
				</div>
				<div class="connectWallet ms-auto">
					<Connect/>
				</div>
				<button type="button" id="sidebarCollapse" class="btn button-49 d-inline-block d-md-none d-lg-none ms-2">
					<i class="fas fa-align-justify"></i>
				</button>
			</div>
		</nav>
		<Outlet/>
	</div>
	<div class="overlay"></div>
</div>
</div>
  )
}

export default MainPage