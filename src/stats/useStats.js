import { useEffect, useState , useContext } from "react"
import { useWeb3React } from "@web3-react/core";
import { getGameContract, getTokenContract, MulticallContractWeb3 } from "../hooks/contractHelper";
import { toast } from "react-toastify";
import { contract, DEFAULT_CHAIN } from "../hooks/constant";
import { Context } from "../context/context";

export const useCommonStats = (updater) => {
    let { chainId } = useWeb3React();
    const {  setProgress } = useContext(Context);

    const [stats, setStats] = useState({
        contractBalance: 0,
        contractInit: 0,
        defaultRefer: '',
        getCurDay: 0,
        leaderPoolLp: 0,
        leaderPoolLr: 0,
        leaderPoolLpTeam: 0,
        leaderPoolMp: 0,
        leaderPoolMr: 0,
        leaderPoolMpTeam: 0,
        totalUsers: 0,
    });


    let gameContract = getGameContract();

    useEffect(() => {
        const fetch = async () => {
            setProgress(40)
            try {
                const data = await MulticallContractWeb3(
                    [
                        gameContract.methods.contractInfo(), //0
                        gameContract.methods.defaultRefer(), //1
                        gameContract.methods.getCurDay(), //2
                        gameContract.methods.leaderPool(), //3
                        gameContract.methods.totalUsers() //4
                    ]
                );

                
                setProgress(70)

                setStats({
                    contractBalance: data[0][0] / Math.pow(10, 18),
                    contractInit: data[0][1],
                    defaultRefer: data[1],
                    getCurDay: data[2],
                    leaderPoolLp: data[3][0] / Math.pow(10, 18),
                    leaderPoolLr: data[3][1],
                    leaderPoolLpTeam: data[3][2],
                    leaderPoolMp: data[3][3] / Math.pow(10, 18),
                    leaderPoolMr: data[3][4],
                    leaderPoolMpTeam: data[3][5],
                    totalUsers: data[4]
                })

                setProgress(100)
            }
            catch (err) {
                console.log(err.message);
                toast.error(err.reason)
                setProgress(100)
            }
        }

        if (gameContract) {
            fetch();
        }
        else {
            setStats({
                contractBalance: 0,
                contractInit: 0,
                defaultRefer: '',
                getCurDay: 0,
                leaderPoolLp: 0,
                leaderPoolLr: 0,
                leaderPoolLpTeam: 0,
                leaderPoolMp: 0,
                leaderPoolMr: 0,
                leaderPoolMpTeam: 0,
                totalUsers: 0,
                getLastDepositors : []
            })
            setProgress(100)
        }

        // eslint-disable-next-line
    }, [updater, chainId]);

    return stats;
}


export const useAccStats = (updater) => {
    let { chainId, account } = useWeb3React();
    const {  setProgress } = useContext(Context);
   
    const [stats, setStats] = useState({
        ref: 0,
        ltA: 0,
        ltB: 0,
        lbA: 0,
        lbB: 0,
        myDirect: 0,
        refNo: 0,
        myLastDeposit: 0,
        totalIncome: 0,
        totalWithdraw: 0,
        isStar: 0,
        isLeader: 0,
        isManager: 0,
        split: 0,
        splitAct: 0,
        splitTrnx: 0,
        myRegister: 0,
        myActDirect: 0,
        incomeDetails1: 0,
        incomeDetails2: 0,
        incomeDetails3: 0,
        incomeDetails4: 0,
        incomeDetails5: 0,
        incomeDetails6: 0,
        incomeDetails7: 0,
        incomeDetails8: 0,
        incomeDetails9: 0,
        incomeDetails10: 0,
        incomeDetails11: 0,
        isApproved: false,
        tokenBalance: 0,
        userDepts: []

    });


    let gameContract = getGameContract();
    let tokenContract = getTokenContract();

    useEffect(() => {
        const fetch = async () => {
            setProgress(40)
            try {
                const data = await MulticallContractWeb3(
                    [
                        gameContract.methods.userDetails(account), //0
                        gameContract.methods.userInfo(account), //1
                        gameContract.methods.incomeDetails(account), //2
                        gameContract.methods.getUserDeposits(account), //3
                    ]
                );
                
                setProgress(60)
                const tokenData = await MulticallContractWeb3(
                    [
                        tokenContract.methods.allowance(account, contract[DEFAULT_CHAIN].GAME_ADDRESS),
                        tokenContract.methods.balanceOf(account),

                    ]
                )
                setProgress(80)
                setStats({
                    ref: data[0][0],
                    ltA: data[0][1],
                    ltB: data[0][2],
                    lbA: data[0][3] / Math.pow(10, 18),
                    lbB: data[0][4] / Math.pow(10, 18),
                    myDirect: data[0][5],
                    refNo: data[1][1],
                    myLastDeposit: data[1][2] / Math.pow(10, 18),
                    totalIncome: data[1][3] / Math.pow(10, 18),
                    totalWithdraw: data[1][4] / Math.pow(10, 18),
                    isStar: data[1][5],
                    isLeader: data[1][6],
                    isManager: data[1][7],
                    split: data[1][8] / Math.pow(10, 18) - data[1][9] / Math.pow(10, 18) - data[1][10] / Math.pow(10, 18)  ,
                    splitAct: data[1][9] / Math.pow(10, 18),
                    splitTrnx: data[1][10] / Math.pow(10, 18),
                    myRegister: data[1][11],
                    myActDirect: data[1][12],
                    incomeDetails1: data[2][0] / Math.pow(10, 18),
                    incomeDetails2: data[2][1] / Math.pow(10, 18),
                    incomeDetails3: data[2][2] / Math.pow(10, 18),
                    incomeDetails4: data[2][3] / Math.pow(10, 18),
                    incomeDetails5: data[2][4] / Math.pow(10, 18),
                    incomeDetails6: data[2][5] / Math.pow(10, 18),
                    incomeDetails7: data[2][6] / Math.pow(10, 18),
                    incomeDetails8: data[2][7] / Math.pow(10, 18),
                    incomeDetails9: data[2][8] / Math.pow(10, 18),
                    incomeDetails10: data[2][9] / Math.pow(10, 18),
                    incomeDetails11: data[2][10] / Math.pow(10, 18),
                    isApproved: parseFloat(tokenData[0] / Math.pow(10, 18)) > 10000 ? true : false,
                    tokenBalance: tokenData[1] / Math.pow(10, 18),
                    userDepts: data[3]
                })

                setProgress(100)
            }
            catch (err) {
                setProgress(100)
                console.log(err.message);
                toast.error(err.reason)
            }
        }

        if (account) {
            fetch();
        }
        else {
            setStats({
                ref: 0,
                ltA: 0,
                ltB: '',
                lbA: 0,
                lbB: 0,
                myDirect: 0,
                refNo: 0,
                myLastDeposit: 0,
                totalIncome: 0,
                totalWithdraw: 0,
                isStar: 0,
                isLeader: 0,
                isManager: 0,
                split: 0,
                splitAct: 0,
                splitTrnx: 0,
                myRegister: 0,
                myActDirect: 0,
                incomeDetails1: 0,
                incomeDetails2: 0,
                incomeDetails3: 0,
                incomeDetails4: 0,
                incomeDetails5: 0,
                incomeDetails6: 0,
                incomeDetails7: 0,
                incomeDetails8: 0,
                incomeDetails9: 0,
                incomeDetails10: 0,
                incomeDetails11: 0,
                isApproved: false,
                tokenBalance: 0,
                userDepts: []
            })
            setProgress(100)
        }

        // eslint-disable-next-line
    }, [updater, chainId, account]);

    return stats;
}


export const useLastDepositorsStats = (updater) => {
    let { chainId } = useWeb3React();
    const { setProgress } = useContext(Context);

    const [stats, setStats] = useState({
        getLastDepositors : []
    });


    let gameContract = getGameContract();

    useEffect(() => {
        const fetch = async () => {
            setProgress(40)
            try {
                const data = await MulticallContractWeb3(
                    [
                        gameContract.methods.depositLength() //0
                    ]
                );

                setProgress(60)

                let depositer = [];
                if(parseInt(data[0]) > 0){
                    let start = parseInt(data[0]);
                    let end =  start > 10 ? start - 10 : 0;
                    let callArray = [];
                    let z = 0;
                    for(let i=end;i<start;i++){
                        callArray[z] = gameContract.methods.depositHistory(i);
                        z++;
                    }
                    
                    
                    depositer = await MulticallContractWeb3(callArray);

                }

                setProgress(80)

                setStats({
                    getLastDepositors  : depositer 
                })

                setProgress(100)
            }
            catch (err) {
                console.log(err.message);
                toast.error(err.reason)
                setProgress(100)
            }
        }

        if (gameContract) {
            fetch();
        }
        else {
            setStats({
                getLastDepositors : []
            })
            setProgress(100)
        }

        // eslint-disable-next-line
    }, [updater, chainId]);

    return stats;
}










