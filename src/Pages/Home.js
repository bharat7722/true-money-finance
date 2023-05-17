import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Home() {
    const [copy, setcopy] = useState(false)
    const scrollToSection = (sectionId, event) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <header>
                <nav class="navbar navbar-expand-lg">
                    <div class="container">
                        <a onClick={() => (window.scroll(0, 0))} class="navbar-brand" >
                            <img src="/images/logo-1.png" alt="" />
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menubar" aria-controls="menubar" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fas fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="menubar">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                                <li class="nav-item curosr-pointer" onClick={(e) => scrollToSection("about", e)}>
                                    <a class="nav-link" >About</a>
                                </li>
                                <li class="nav-item" onClick={(e) => scrollToSection("how-works", e)}>
                                    <a class="nav-link" >How It Works</a>
                                </li>
                                <li class="nav-item" onClick={(e) => scrollToSection("earn", e)}>
                                    <a class="nav-link" >Earn</a>
                                </li>
                                <li class="nav-item" onClick={(e) => scrollToSection("tokenomics", e)}>
                                    <a class="nav-link" >Tokenomics</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="https://True+Money.gitbook.io/True+Money/" target="_blank">Docs</a>
                                </li>
                                <li class="nav-item">
                                    <Link class="btn button-49" to="/dashboard">Launching Dapp</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <section class="banner-area">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-sm-12 col-md-7 col-lg-7">
                            <h1><span>True Money</span> is best Auto Staking & Auto Compounding Protocol in Crypto with Real Life Utilities.</h1>
                            <p>The platform offers a comprehensive suite of utilities to cater to the diverse needs of its users. These utilities include the Synthetic Crypto Features & CFD’s, Casino’s, Metaverse, Liquidity Pool Token vault, Token Vault, Launchpad, and DAO Platform, among others.</p>
                            <ul>
                                <li>
                                    <Link to={'/dashboard'} class="btn button-49">Launching Dapp<i class="ps-2 fas fa-angle-right"></i></Link>
                                </li>
                                <li><a href="#" class="btn btn-secondry">Chart <i class="ps-2 fas fa-chart-bar"></i></a></li>
                            </ul>
                        </div>
                        <div class="col-sm-12 col-md-5 col-lg-5">
                            <div class="hero-img">
                                <img src="/images/logo-1.png" alt="" class="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="staking-apy" id="about">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <h4 class="section-title">
                                True Money Auto Staking Protocol
                            </h4>
                            <div class="decor-bottom mt-3 mb-5"></div>
                        </div>
                    </div>
                    <div class="row align-items-center mt-5">
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <h3>3716.10%</h3>
                            <p class="staking-text">True Money Staking APY</p>
                            <div class="text-center">
                                <Link to="/dashboard" class="btn button-49">Launching Dapp <i class="ps-2 fas fa-angle-right"></i></Link>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <h5>ABOUT</h5>
                            <p class="staking-content"
                            >
                                $TMF rewards holders with a sustainable APY of 3716.10% auto compounding return on daily basis using the smart price balancing algorithm. At the end of the year and with USD 1,000 of $TMF invested You can earn
                                up to USD 37161.27 worth of $TMF Tokens.
                            </p>
                            <div class="copy-button mt-5">
                                <div>
                                    <span class="title">Contract</span>
                                    <span class="value" id="copy-text">0xb77022763201b3F34cE3254BC5B5acE38fDd0b48</span>
                                </div>
                                <button onClick={() => {
                                    setcopy(!copy);
                                    navigator.clipboard.writeText("0xb77022763201b3F34cE3254BC5B5acE38fDd0b48");
                                }} class="btn btn-copy">{ copy ? "Copied!" : "Copy"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="rating-section">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <div class="text">
                                <h4 class="section-title">
                                    True Money, the 5-star Token
                                </h4>
                                <div class="decor-bottom mt-3 mb-5"></div>
                                <article class="js-animation fadeup fadeInUp" style={{ opacity: 1, visibility: "visible" }}>
                                    <p>
                                        One of the Highest Auto Sustainable APY as high as 3716.10%
                                    </p>
                                    <p>
                                        <span>$TMF Treasury: </span>
                                        <span>4% of all buy fees and 6% of all sale fees is sent to the Treasury (to sustain the rebase).</span>
                                    </p>
                                    <p>
                                        <span>$TMF Insurance: </span>
                                        <span>2.5% of all trading fees is sent to the Insurance (to insure the risks).</span>
                                    </p>
                                    <p>
                                        <span>$TMF Firepit: </span>
                                        <span>2.5% of all trading fees are burnt in the Firepit (send to a dead wallet).</span>
                                    </p>
                                    <p>
                                        <span>$TMF Utilities: </span>
                                        <span>Platform offers various utilities such as Liquidity Pool Token vault, Token Vault, Launchpad, DAO Platform and much more.</span>
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="holders-area">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <h3 class="holders-title" title="Holders">True Money rewards holders with compounding interest, increasing their True Money holdings over time.</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section class="how-works-area" id="how-works">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <h4 class="section-title">
                                How It Works?
                            </h4>
                            <div class="decor-bottom mt-3 mb-5"></div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-sm-12 col-md-4 col-lg-4">
                            <div class="box-wrap">
                                <img src={require("../components/assets/images/gift.gif").default} style={{ width: "150px", height: "150px" }} />
                                <h4>Staking Rewards</h4>
                                <p>By simply buying and holding a $TMF token in your wallet, you earn rebase rewards as interest payments directly into your wallet. Your tokens will increase every 1 day.</p>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4 col-lg-4">
                            <div class="box-wrap">
                                <img src={require("../components/assets/images/growth-chart.gif").default} style={{ width: "150px", height: "150px" }} />
                                <h4>Treasury Growth</h4>
                                <p>A portion of the buy and sell fees help sustain the True Money Treasury revenue. 4% of all buy fees and 6% of sell fees are stored in the $TMF Treasury fund.</p>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4 col-lg-4">
                            <div class="box-wrap">
                                <img src={require("../components/assets/images/office-bag.gif").default} style={{ width: "150px", height: "150px" }} />
                                <h4>Insurance Cover</h4>
                                <p>A portion of the buy and sell fees help cover the True Money unforseen risks. 2.5% of all trading fees are stored in the $TMF Insurance fund.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="earn-area" id="earn">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <h4 class="section-title">
                                How much can I earn?
                            </h4>
                            <div class="decor-bottom mt-3 mb-5"></div>
                        </div>
                    </div>
                    <div class="row mt-5 justify-content-between align-items-center">
                        <div class="col-sm-12 col-md-5 col-lg-5">
                            <h3>At the end of the year and with US $1,000 of $TMF invested.</h3>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6 text-center">
                            <h3>You can earn up to <span>US$ 37161.27 USD</span> of $TMF at 3716.10% APY*.</h3>
                            <p class="mb-4">Earnings are calculated in a scenario where the RFV sustains the rebase reward for 365 days.</p>
                            <a href="" class="btn button-49-two w-auto">Start Earning Now! <i class="ps-2 fas fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="tokenomics-area" id="tokenomics">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <h4 class="section-title">
                                Tokenomics
                            </h4>
                            <div class="decor-bottom mt-3 mb-5"></div>
                        </div>
                    </div>
                    <div class="row mt-5 align-items-center">
                        <div class="col-sm-12 col-md-4">
                            <h3 class="mb-4">$TMF Tokenomics Explained</h3>
                            <p>$TMF is a BEP-20 token with an elastic supply that rewards holders with a positive rebase formula, thus creating the first automatic staking token.</p>
                        </div>
                        <div class="col-sm-12 col-md-8 col-lg-8">
                            <div class="row align-items-center">
                                <div class="col-sm-12 col-md-6 col-lg-6">
                                    <div class="token-box">
                                        <img src={require("../components/assets/images/pie-chart.gif").default} style={{ width: "60px", height: "60px" }} />
                                        <h4>Buy Tax</h4>
                                        <p>4% Treasury, 2.5% Insurance, 5% Liquidity and 2.5% Firepit tax on all Purchase.</p>
                                    </div>
                                    <div class="token-box">
                                        <img src={require("../components/assets/images/wallet.gif").default} style={{ width: "60px", height: "60px" }} />
                                        <h4>Sale Tax</h4>
                                        <p>6% Treasury, 2.5% Insurance, 5% Liquidity and 2.5% Firepit tax on all Sales.</p>
                                    </div>
                                </div>

                                <div class="col-sm-12 col-md-6 col-lg-6">
                                    <div class="token-box">
                                        <img src={require("../components/assets/images/bolt.gif").default} style={{ width: "60px", height: "60px" }} />
                                        <h4>Deflationery</h4>
                                        <p>Unlike other forks, our Fork has in built burning mechanism of Tokens and make it ever deflationey Token, while sustaining rebase.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="liquidity-area">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <h4 class="section-title">
                                Liquidity Protected
                            </h4>
                            <div class="decor-bottom mt-3 mb-5"></div>
                            <p class="text-center">$TMF Liquidity is owned and protected by True Money itself. True Money owns almost all of its liquidity, which helps maintain price stability and treasury income.</p>
                            <p class="text-center">
                                With protocol-owned liquidity, True Money protects itself from unpredictable and unfavorable market conditions due to the longevity and efficiency of its tokenomics
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="partner-area">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <h4 class="section-title">
                                Partners
                            </h4>
                            <div class="decor-bottom mt-3 mb-5"></div>
                        </div>
                    </div>
                    <div class="row mt-5 align-items-center">
                        <div class="col-sm-12 col-md-6 col-lg-4 mb-4 text-center">
                            <a href="#">
                                <img src="/images/coingecko.png" alt="" class="img-fluid" style={{ width: "225px", marginTop: "25px" }} />
                            </a>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4 mb-4 text-center">
                            <a href="#">
                                <img src="/images/coingecko.png" alt="" class="img-fluid text-center" style={{ width: "225px", marginTop: "25px" }} />
                            </a>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4 mb-4 text-center">
                            <a href="#">
                                <img src="/images/pancakeswap.png" alt="" class="img-fluid text-center" style={{ width: "225px", marginTop: "25px" }} />
                            </a>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4 mb-4 text-center">
                            <a href="#">
                                <img src="/images/forkhunter.png" alt="" target="_blank" class="img-fluid text-center" style={{ width: "225px", marginTop: "25px" }} />
                            </a>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4 mb-4 text-center">
                            <a href="#">
                                <img src="/images/bscscan.png" alt="" class="img-fluid text-center" style={{ width: "225px", marginTop: "25px" }} />
                            </a>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4 mb-4 text-center">
                            <a href="#">
                                <img src="/images/tech-audit.png" alt="" class="img-fluid text-center" style={{ width: "225px", marginTop: "25px" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home