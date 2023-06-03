import { ref } from "vue";

// Go to www.alchemy.com and create an account to grab your own api key!
const apiKey = "6g4Gvn-o1nZOoKvBuP05TCTgj6mze1cg";
const endpoint = `https://eth-mainnet.alchemyapi.io/v2/${apiKey}`;

export const allNfts = ref([]);

export const fetchNFTs = async (owner, contractAddress) => {
  let retryAttempt = 0;
  if (retryAttempt === 5) {
    return;
  }
  if (owner) {
    let data;
    try {
      if (contractAddress) {
        data = await fetch(
          `${endpoint}/getNFTs?owner=${owner}&contractAddresses%5B%5D=${contractAddress}`
        ).then((data) => data.json());
      } else {
        data = await fetch(`${endpoint}/getNFTs?owner=${owner}`).then((data) =>
          data.json()
        );
      }
    } catch (e) {
      fetchNFTs(owner, contractAddress);
      retryAttempt + 1;
    }

    allNfts.value = data.ownedNfts;

    return data;
  }
};

//lion
/* owner address :   0x82888A271FAe31794493B9f95d5f0F7175b810e3

optional  contract address : 0x8943C7bAC1914C9A7ABa750Bf2B6B09Fd21037E0 

*/

/* 
  monkey

// 0xfFC69E7B347713A4D1A4f280700253388589d9Ad 

*/

//art work
// contract  0xe361f10965542ee57D39043C9c3972B77841F581

// required address 0xC49b551d4A4a0c6a739EFd89916467c16038b203
