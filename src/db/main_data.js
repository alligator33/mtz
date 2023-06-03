import Store from "../../src/store/store";


const domain = Store.state.config.domain;
const address = Store.state.config.address;
const telephone = Store.state.config.telephone;
const name = Store.state.config.name;

let icons = `
<div class="field has-addons">
  <p class="control">
    <i class="fab fa-skype ml-5 is-size-3 has-text-primary"></i>
    <span class="has-text-weight-bold">Skype</span>
  </p>
  <p class="control">
   <i class="fas fa-envelope ml-3 is-size-3 has-text-primary"></i>
   <span class="has-text-weight-bold">Email</span>

  </p>
</div>

                    `;
const global = {
    name,
    telephone,
    address,
    domain,
};

const features = [

    {
        icon: 'fas fa-users-cog',
        image: '/img/home/trade-for-me.jpg',
        title: 'NFT Trading',
        text: ` Be a part of Savvy collectors, Buy trending high-valued NFTs in groups and earn when your art resales. Minimum 150% ROI as a share-owner.
           Own a certain % of a million-dollar worth of arts 
        `,
        link: 'nftPage',
    },  
    
    {
        link: 'arbitrage',

        icon: 'fas fa-users-cog',
        image: '/img/home/trade-for-me.jpg',
        title: 'Arbitrage Trading',
        text: ` Arbitrage is simply buying an asset cheaper in broker A and selling it higher in broker B. Using different brokers, you can buy and sell the same asset at different prices`,
    },





];

const preferences = [
    {
        title: 'PRIMARY TFM',
        item: [
            'Subscription cost range; USD 5,000+',
            'Estimated minimum payout (2weeks); USD $19,850',
            '24/7 Customer support', 'Designated Trade Expert',
            'Trade-expert contact:',
        ],
        contact: icons

    },
    {
        title: 'Secondary TFM',
        item: [
            'Subscription Cost Range; 1850+',
            'Estimated minimum payout (2weeks); USD $9,850',
            '24/7 Customer support',
            'Designated Trade Expert',
            '100% access into trading account',
        ],
        contact: `<br>`


    }
];

const starters = [
    {
        no: '01',
        title: 'Subscribe',
        text: 'Subscribe into the TradeForMe service ( 2 basic category, Tick your Preferred category in Application form ).',
    },

    {
        no: '02',
        title: 'Open Account',
        text: 'After Subscribing to the Trade for me Service, Open a good broker account and deposit the minimum.'
    },

    {
        no: '03',
        title: 'Get a Trader',
        text: 'Upon confirmation of your broker account, an expert is assigned to Trade for you  ( Minimum of 2 weeks ).',
    },
];

const history = [
    {
        number: '2412',
        title: 'Total Clients'
    },
    {
        number: '4',
        title: 'Global Fin\n' +
            'TechAwards'
    },
    {
        number: '220',
        title: 'Employees'
    },
    {
        number: '5',
        title: 'Years of Trading\n' + '  Experince'
    },
];


export default {features, preferences, global, starters, history};
