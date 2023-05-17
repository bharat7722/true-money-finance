const token_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalSupply","type":"uint256"}],"name":"LogRebase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_UINT256","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_autoAddLiquidity","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_autoRebase","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_initRebaseStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_lastAddLiquidityTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_lastRebasedTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"autoLiquidityReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"checkFeeExempt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"firePit","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"firePitFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCirculatingSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"accuracy","type":"uint256"}],"name":"getLiquidityBacking","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isNotInSwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manualRebase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"manualSync","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pairAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pairContract","outputs":[{"internalType":"contract IPancakeSwapPair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"rescueTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IPancakeSwapRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sellFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_flag","type":"bool"}],"name":"setAutoAddLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_flag","type":"bool"}],"name":"setAutoRebase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_autoLiquidityReceiver","type":"address"},{"internalType":"address","name":"_treasuryReceiver","type":"address"},{"internalType":"address","name":"_tmfInsuranceFundReceiver","type":"address"},{"internalType":"address","name":"_firePit","type":"address"}],"name":"setFeeReceivers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"setWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tmfInsuranceFundFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tmfInsuranceFundReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasuryReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawAllToTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
const pair_abi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];

const token_address = "0xb77022763201b3F34cE3254BC5B5acE38fDd0b48";
const wbnb_address = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
const busd_address = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
const pair_address = "0x952E35614E77E17745C61803F73Abe5cF1EB1B70";
const bnb_busd_pair_address = "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16";
const fixed_decimal = 4;
const busd_decimal = 18;
const wbnb_decimal = 18;

const rpc_url = "https://bsc-dataseed.binance.org/";
const network_id = 56;
const interest = 1;
const next_reward_time = 86400;
const next_rebase_min = 1440;

const ADDRESS = "addressSelected";
const LIST_ADDRESS = "addresses";
let ethereum = window.ethereum;
let web3 = new Web3(rpc_url);

async function setupConnected(first = null) {
    let chainid = await getchainId();
    if (chainid == network_id) {
        let account = await getAccount();
        if (localStorage.getItem(ADDRESS) != null && localStorage.getItem(ADDRESS).length > 0) {
            web3.eth.defaultAccount = localStorage.getItem(ADDRESS);
            $(".connectToNetwork").remove();
            $(".connectWallet").html('<button class="btn btn-primary connected logout">' + shortText(localStorage.getItem(ADDRESS)) + "</button>");
            let user_balance = await getUserTokenBalance(localStorage.getItem(ADDRESS));
            $("#user_balance").text(user_balance);
        }
    } else {
        localStorage.clear();
        closeApp();
        if (first !== true) {
            toastr.error("Connect to Binance Smart Chain Network!");
        }
    }
}

ethereum.on("chainChanged", async function (networkId) {
    localStorage.clear();
    var connect = await ethereum.request({ method: "eth_accounts" });
    if (connect.length == 0) {
        ethereum.enable().then((value) => {
            localStorage.setItem(ADDRESS, value[0]);
            localStorage.setItem(LIST_ADDRESS, JSON.stringify(value));
            setupConnected();
        });
    } else {
        localStorage.setItem(ADDRESS, connect[0]);
        localStorage.setItem(LIST_ADDRESS, JSON.stringify(connect));
        setupConnected();
    }
});

ethereum.on("accountsChanged", async function (accounts) {
    localStorage.clear();
    var connect = await ethereum.request({ method: "eth_accounts" });
    if (connect.length == 0) {
        ethereum.enable().then((value) => {
            localStorage.setItem(ADDRESS, value[0]);
            localStorage.setItem(LIST_ADDRESS, JSON.stringify(value));
            setupConnected();
        });
    } else {
        localStorage.setItem(ADDRESS, connect[0]);
        localStorage.setItem(LIST_ADDRESS, JSON.stringify(connect));
        setupConnected();
    }
});

$(document).ready(async function () {
    await setupConnected();
    let token_price = await getTokenPrice();

    if (token_price) {
        $("#token_price").text(`${token_price.toFixed(fixed_decimal)}`);
        $(".token_price").text(`${token_price.toFixed(fixed_decimal)}`);
    }

    let marketCap = await getMarketCap();
    $("#marketcap").text(`${marketCap}`);
    getLastRebaseTime();

    let circulating_supply = await getCirculatingSupply();
    $("#circulating_supply").text(`${new Intl.NumberFormat("ja-JP").format(circulating_supply.toFixed(3))}`);

    let total_supply = await getTotalSupply();
    $("#total_supply").text(`${total_supply}`);

    let treasury_asset = await treasuryAssetValue();
    $(".treasuryAssets").text(treasury_asset);

    let insurance_asset = await insuranceFundValue();
    $(".insurance_asset").text(insurance_asset);

    let pool_asset = await poolValue();
    $(".pool_asset").text(pool_asset);

    let value_firepit = await valueOfFirepit();
    $(".value_firepit").text(`${new Intl.NumberFormat("ja-JP").format(value_firepit.toFixed(3))} TMF`);

    let usdvalue_firepit = await usdValueOfFirepit();
    $(".usdvalue_firepit").text(`${usdvalue_firepit} TMF`);

    let fire_supply_per = await firePitSupply();
    $(".fire_supply_per").text(`${fire_supply_per}%`);

    // let APYStatistics = await apyCalculator(100,365,interest);
    // $('#apy_satistics').text(APYStatistics.toFixed(fixed_decimal));

    let ROI = await apyCalculator(100, 5, interest);
    ROI = ROI - 100;
    $("#roi_days").text(ROI.toFixed(fixed_decimal));

    let apy = await apyCalculator(100, 1, interest);
    apy = apy - 100;
    let next_reward = parseFloat((next_reward_time * apy) / 86400).toFixed(fixed_decimal);
    $("#next_reward").text(`${next_reward} %`);
});

$(document).on("click", ".connectToNetwork", async function () {
    localStorage.clear();
    var connect = await ethereum.request({ method: "eth_accounts" });
    if (connect.length == 0) {
        ethereum.enable().then((value) => {
            localStorage.setItem(ADDRESS, value[0]);
            localStorage.setItem(LIST_ADDRESS, JSON.stringify(value));
            setupConnected();
        });
    } else {
        localStorage.setItem(ADDRESS, connect[0]);
        localStorage.setItem(LIST_ADDRESS, JSON.stringify(connect));
        setupConnected();
    }
});

$(document).on("click", ".logout", async function () {
    localStorage.clear();
    closeApp();
});

$(document).on("click", ".days-tab", async function () {
    $(".days-tab").removeClass("active");
    $(this).addClass("active");
    let amount = $("#amount").val();
    let period = $("#days-tab").children(".active").data("value");
    $(".period").text(period);
    let apy = 0;
    if (typeof period != "undefined" || period != "") {
        if (period == 365) {
            apy = parseFloat(amount * 37.1610).toFixed(fixed_decimal);
        } else if (period == 180) {
            apy = parseFloat(amount * 5.2390).toFixed(fixed_decimal);
        } else if (period == 30) {
            apy = parseFloat(amount * 0.3610).toFixed(fixed_decimal);
        } else if (period == 7) {
            apy = parseFloat(amount * 0.0720).toFixed(fixed_decimal);
        }
    }
    $("#token_apy_balance").text(apy);
});

async function getAccount() {
    let accounts = await ethereum.request({ method: "eth_requestAccounts" });
    let account = accounts[0];
    return account;
}

async function getchainId() {
    let chainId = await web3.eth.getChainId();
    return chainId;
}

function shortText(str) {
    return str.substr(0, 5) + "...." + str.substr(-5);
}

async function getCurrentBNBPrice() {
    let bnb_price_contract = new web3.eth.Contract(pair_abi, bnb_busd_pair_address);
    let reserve_bnb = await bnb_price_contract.methods.getReserves().call();
    let bnb_price = reserve_bnb._reserve1 / reserve_bnb._reserve0;
    console.log(bnb_price);
    return bnb_price;
}

async function apyCalculator(amount, time, interest) {
    let a = 1 + parseFloat(interest) / 36500;
    let b = Math.pow(parseFloat(a), parseFloat(time) * 365);
    let c = parseFloat(amount * b);
    return c;
}

async function getTokenPrice() {
        const bnb_lp_pair_contract = new web3.eth.Contract(pair_abi, bnb_busd_pair_address);
        let reserve = await bnb_lp_pair_contract.methods.getReserves().call();
        let bnb_token_price = reserve._reserve1 / reserve._reserve0;
        console.log(bnb_token_price);
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
            return 0;
        }
        return token_price;
}

async function getMarketCap() {
    const token_contract = new web3.eth.Contract(token_abi, token_address);
    let total_supply = await token_contract.methods.totalSupply().call();
    let decimal = await token_contract.methods.decimals().call();
    total_supply = total_supply / Math.pow(10, decimal);
    let burn = await token_contract.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();
    burn = burn / Math.pow(10, decimal);
    let token_price = await getTokenPrice();
    let marketCap = parseFloat((total_supply - burn) * token_price).toFixed(fixed_decimal);
    if (isNaN(marketCap)) {
        return 0;
    }
    return new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "usd",
    }).format(marketCap);
}

async function getUserTokenBalance(address) {
    const token_contract = new web3.eth.Contract(token_abi, token_address);
    let balance = await token_contract.methods.balanceOf(address).call();
    let decimals = await token_contract.methods.decimals().call();
    return parseFloat(balance / Math.pow(10, decimals)).toFixed(fixed_decimal);
}

async function getCirculatingSupply() {
    const token_contract = new web3.eth.Contract(token_abi, token_address);
    let CirculatingSupply = await token_contract.methods.getCirculatingSupply().call();
    let decimal = await token_contract.methods.decimals().call();
    CirculatingSupply = CirculatingSupply / Math.pow(10, decimal);
    return CirculatingSupply;
}

async function getTotalSupply() {
    const token_contract = new web3.eth.Contract(token_abi, token_address);
    let TotalSupply = await token_contract.methods.totalSupply().call();
    let decimal = await token_contract.methods.decimals().call();
    TotalSupply = TotalSupply / Math.pow(10, decimal);
    if (isNaN(TotalSupply)) {
        return 0;
    }
    return new Intl.NumberFormat("ja-JP").format(TotalSupply);
}

async function getLastRebaseTime() {
    const token_contract = new web3.eth.Contract(token_abi, token_address);
    let rebaseTime = await token_contract.methods._lastRebasedTime().call();
    console.log(rebaseTime);
    rebaseTime = parseFloat(rebaseTime / Math.pow(10, 15));
    return rebaseTime;
}

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

async function getWBNBBalance(address) {
    const wbnb_contract = new web3.eth.Contract(token_abi, wbnb_address);
    let balance = await wbnb_contract.methods.balanceOf(address).call();
    balance = parseFloat(balance / Math.pow(10, wbnb_decimal).toFixed(fixed_decimal));
    return balance;
}

async function treasuryAssetValue() {
    const token_contract = new web3.eth.Contract(token_abi, token_address);
    let treasuryReceiver = await token_contract.methods.treasuryReceiver().call();
    let a = await getContractBnbBalance(treasuryReceiver);
    let b = await getBUSDBalance(treasuryReceiver);
    let bnb_price = await getCurrentBNBPrice();
    let treasuryValue_usd = parseFloat(bnb_price * a) + b;
    if (isNaN(treasuryValue_usd)) {
        return 0;
    }
    return new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "usd",
    }).format(treasuryValue_usd.toFixed(3));
}

async function insuranceFundValue() {
    const token_contract = new web3.eth.Contract(token_abi, token_address);
    let InsuranceFundReceiver = await token_contract.methods.tmfInsuranceFundReceiver().call();
    let a = await getContractBnbBalance(InsuranceFundReceiver);
    let b = await getBUSDBalance(InsuranceFundReceiver);
    let bnb_price = await getCurrentBNBPrice();
    let insurancefundreceiver_usd = parseFloat(bnb_price * a) + b;
    return new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "usd",
    }).format(insurancefundreceiver_usd.toFixed(3));
}

async function poolValue() {
    const token_contract = new web3.eth.Contract(token_abi, token_address);
    let pairContract = await token_contract.methods.pairContract().call();
    let a = await getWBNBBalance(pairContract);
    let bnb_price = await getCurrentBNBPrice();
    let pairContract_usd = parseFloat(bnb_price * a);
    return new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "usd",
    }).format(pairContract_usd.toFixed(3));
}

async function valueOfFirepit() {
    const token_contract = new web3.eth.Contract(token_abi, token_address);
    let pairContract = await token_contract.methods.firePit().call();
    let decimal = await token_contract.methods.decimals().call();
    let value_firepit = await token_contract.methods.balanceOf(pairContract).call();
    value_firepit = value_firepit / Math.pow(10, decimal);
    return value_firepit;
}

async function usdValueOfFirepit() {
    let total_token = await valueOfFirepit();
    let token_price = await getTokenPrice();
    let usd_value = parseFloat(total_token * token_price);
    return new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "usd",
    }).format(usd_value);
}

async function firePitSupply() {
    const token_contract = new web3.eth.Contract(token_abi, token_address);
    let TotalSupply = await token_contract.methods.totalSupply().call();
    let decimal = await token_contract.methods.decimals().call();
    TotalSupply = TotalSupply / Math.pow(10, decimal);
    let pairContract = await token_contract.methods.firePit().call();
    let balance = await token_contract.methods.balanceOf(pairContract).call();
    balance = balance / Math.pow(10, decimal);
    let per = parseFloat(balance) / parseFloat(TotalSupply);
    return parseFloat((per * 100).toFixed(2));
}

$(document).ready(function () {
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 100) {
            $("header .navbar").addClass("fixed");
            $("header .navbar").addClass("animate__fadeInDown");
            $("header .navbar").addClass("animate__animated");
        } else {
            $("header .navbar").removeClass("fixed");
            $("header .navbar").removeClass("animate__fadeInDown");
        }
    });

    $(".btn-copy").on("click", function () {
        const body = document.querySelector("body");
        const paragraph = document.getElementById("copy-text").innerText;
        const area = document.createElement("textarea");
        body.appendChild(area);

        area.value = paragraph;
        area.select();
        document.execCommand("copy");

        body.removeChild(area);
        $("#copied-success").fadeIn(800);
        $("#copied-success").fadeOut(800);
    });
});

function closeApp() {
    $("#user_balance").text("0");
    $(".connected").remove();
    $(".connectWallet").html('<button class="btn btn-primary ml-2 connectToNetwork">Connect Wallet</button>');
}
