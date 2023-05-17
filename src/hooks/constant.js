import moment from "moment";


export const trimAddress = (addr) => {
  return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
}

export const contract = {
  97: {
    MULTICALL_ADDRESS: "0xa54fe4a3dbd1eb21524cd73754666b7e13b4cb18",
    GAME_ADDRESS: "0x8e023f29e00205809a1bc8f2aeb800a855416ea4",
    TOKEN_ADDRESS: "0x74341863BEc87eF9579D9e4643E3d7eeB4287e93"
  },
  // 97: {
  //   MULTICALL_ADDRESS: "0xa54fe4a3dbd1eb21524cd73754666b7e13b4cb18",
  //   GAME_ADDRESS: "0xA95A706de0b66a9b8aaeaE498ef4706eAb88179D",
  //   TOKEN_ADDRESS: "0x74341863bec87ef9579d9e4643e3d7eeb4287e93"
  // }
}

export const DEFAULT_CHAIN = 97;
export const MIN_STAKE_TIME = 7;
export const MAX_STAKE_TIME = 500;
export const FEEPERCENTS = 5;
export const STARPERCENTS = 0.4;
export const MANAGERPERCENTS = 0.6;
export const DAYPERCYCLE = 15;
export const MAXADDFREEZE = 45;
export const MINDEPOSIT = 100;
export const MAXDEPOSIT = 100000;
export const EACH_CYCLE = 7.5;
export const LEVEL_BONUSES = [500, 100, 200, 300, 100, 200, 100, 100, 100, 100, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50];  
export const SINGLE_BONUSES = [200, 100, 100, 50, 50, 100, 100, 50, 50, 50, 100, 100, 50, 50, 50, 50, 50, 50, 50, 50];  



export const formatDate = (unixTime) => {
  try {
    let dateString = moment(unixTime).format('lll');
    return dateString;
  }
  catch (err) {
    console.log(err.message);
  }
}


export const formatPrice = (num) => {
  try{
   return new Intl.NumberFormat('ja-JP').format(parseFloat(num).toFixed(5));
  }
  catch(err){
    console.log(err.message);
    return 0;
  }
}
