import { MenuEntry } from '@gameswapfinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0x76879bacf1ed503dadc4e6e5482d851c654ab8e9',
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0x76879bacf1ed503dadc4e6e5482d851c654ab8e9',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
    label: 'Dividends',
    icon: 'TicketIcon',
    href: '/profit',
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/cswapdevteam/cryptoswap',
      },
      {
        label: 'Docs',
        href: 'https://github.com/cswapdevteam/cryptoswap',
      },
      {
        label: 'Medium',
        href: 'https://medium.com/@cswapfinance',
      }
    ],
  },
]

export default config
