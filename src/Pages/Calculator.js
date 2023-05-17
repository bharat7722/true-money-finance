import { useWeb3React } from '@web3-react/core';
import React, { useEffect, useState } from 'react'
import Web3 from 'web3';
import { token_abi, token_address, pair_abi, interest, pair_address, bnb_busd_pair_address, wbnb_address, fixed_decimal, next_reward_time } from '../components/helper/apis'
import $ from 'jquery'
function Calculator() {
    $(document).ready(function () {
        $("#dismiss, .overlay").on("click", function () {
            $("#sidebar").removeClass("active");
            $(".overlay").removeClass("active");
        });
        $("#sidebarCollapse").on("click", function () {
            $("#sidebar, #content").toggleClass("active");
            $(".overlay").addClass("active");
            $(".collapse.in").toggleClass("in");
            $("a[aria-expanded=true]").attr("aria-expanded", "false");
        });
    });
    const { account } = useWeb3React()
    const web3 = new Web3(window.ethereum);
    const [tokenAmount, settokenAmount] = useState(1000)
    const [tokenPrice, setTokenPrice] = useState(0)
    const [period, setperiod] = useState(0)
    const [amount, setamount] = useState(0)
    const [balance, setbalance] = useState(0)
    const [nextReward, setnextReward] = useState(0)
    const [RIO, setRIO] = useState(0)
    const v2initTokenContract = new web3.eth.Contract(
        token_abi,
        token_address
    );

    const getTotalToken = async () => {
        const getToken = await v2initTokenContract.methods
            .balanceOf(account)
            .call();
        setbalance(getToken)
    }
    const calculateAPY = () => {
        if (period === 365) {
            setamount(parseFloat(tokenAmount * 37.1610).toFixed(fixed_decimal));
        } else if (period === 180) {
            setamount(parseFloat(tokenAmount * 5.2390).toFixed(fixed_decimal));
        } else if (period === 30) {
            setamount(parseFloat(tokenAmount * 0.3610).toFixed(fixed_decimal));
        } else if (period === 7) {
            setamount(parseFloat(tokenAmount * 0.0720).toFixed(fixed_decimal));
        }

    };
    async function apyCalculator(amount, time, interest) {
        let a = 1 + parseFloat(interest) / 36500;
        let b = Math.pow(parseFloat(a), parseFloat(time) * 365);
        let c = parseFloat(amount * b);
        return c;
    }

    const calculateNextReward = async () => {
        let apy = await apyCalculator(100, 1, interest);
        apy = apy - 100;
        setnextReward(parseFloat((next_reward_time * apy) / 86400).toFixed(fixed_decimal))
    }

    const calculateROI = async () => {
        let ROI = await apyCalculator(100, 5, interest);
        ROI = ROI - 100;
        setRIO(ROI)
    }
    useEffect(() => {
        const getTokenPrice = async () => {
            const bnb_lp_pair_contract = new web3.eth.Contract(pair_abi, bnb_busd_pair_address);
            let reserve = await bnb_lp_pair_contract.methods.getReserves().call();
            let bnb_token_price = reserve._reserve1 / reserve._reserve0;
            const token_contract = new web3.eth.Contract(token_abi, token_address);
            const wbnb_contract = new web3.eth.Contract(token_abi, wbnb_address);
            let wbnb_balance = await wbnb_contract.methods.balanceOf(pair_address).call();
            wbnb_balance = wbnb_balance / Math.pow(10, 18);
            let lp_balance = await token_contract.methods.balanceOf(pair_address).call();
            lp_balance = lp_balance / Math.pow(10, fixed_decimal);
            let bnb_price_contract = new web3.eth.Contract(pair_abi, bnb_busd_pair_address);
            let reserve_bnb = await bnb_price_contract.methods.getReserves().call();
            let bnb_price = reserve_bnb._reserve1 / reserve_bnb._reserve0;
            let token_price = parseFloat((wbnb_balance * bnb_price * 10) / lp_balance);
            if (isNaN(token_price)) {
                setTokenPrice(0);
            } else {
                setTokenPrice(token_price);
            }
        };
        getTokenPrice();
        getTotalToken();
        calculateNextReward()
        calculateROI()
    }, []);
    useEffect(() => {
        calculateAPY()
    }, [period])

    return (
        <div>
            <div id="content">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <div class="d-inline-block d-lg-none">
                            <img src="assets/images/logo-1.png" alt="" style={{ width: "50px" }} />
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
                                <h3>Calculator</h3>
                                <div class="calculator">
                                    <div class="calculator-bx">
                                        <h4>Estimate Your Rewards</h4>
                                        <div class="input-space">
                                            <input type="text" onChange={(e) => settokenAmount(e.target.value)} placeholder="Add Token Amount here..." id="amount" />
                                        </div>
                                        <ul class="years-list clearfix" id="days-tab">
                                            <li
                                                className={period === 7 ? "days-tab link-point active" : "days-tab link-point"}
                                                onClick={() => setperiod(7)}
                                                data-value="7"
                                            >
                                                <a>7 days</a>
                                            </li>
                                            <li class={period == 30 ? "days-tab link-point active" : "days-tab link-point"} onClick={(e) => setperiod(30)} data-value="30"><a>1 Month</a></li>
                                            <li class={period == 180 ? "days-tab link-point active" : "days-tab link-point"} onClick={(e) => setperiod(180)} data-value="180"><a>6 Months</a></li>
                                            <li class={period == 365 ? "days-tab link-point active" : "days-tab link-point"} onClick={(e) => setperiod(365)} data-value="365"><a>1 year</a></li>
                                        </ul>
                                        <ul class="total-profit clearfix">
                                            <li>$TMF Rewards (in Tokens):</li>
                                            <li><span>{amount}</span></li>
                                        </ul>
                                        <ul class="total-profit clearfix mb-3">
                                            <li>$TMF Rewards (USD Value):</li>
                                            <li className="sea-green">$ <span>{(amount * tokenPrice).toFixed(fixed_decimal)}</span></li>
                                        </ul>
                                        <p class="small-font">Earnings calculated, indicate the scenario when the RFV Sustain the Rebase Reward for <span class="period">365</span> days</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-12">
                                <div>
                                    <h3 class="mt-5">Calculating Statistics</h3>
                                    <div class="card">
                                        <div class="card-header">
                                            <h4>Current APY:</h4>
                                            <h5><span id="apy_satistics"></span></h5>
                                        </div>
                                        <div class="card-body">
                                            <ul>
                                                <li>
                                                    <p>Your Wallet Balance:</p>
                                                    <p>{balance}</p>
                                                </li>
                                                <li>
                                                    <p>Next Reward Amount:</p>
                                                    <p>{nextReward}%</p>
                                                </li>
                                                <li>
                                                    <p class="mb-0">ROI (5-Day Rate):</p>
                                                    <p class="mb-0"><span >{RIO.toFixed(fixed_decimal)}</span>%</p>
                                                </li>
                                            </ul>
                                        </div>
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

export default Calculator