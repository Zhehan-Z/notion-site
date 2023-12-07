import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'c406c2582d8e49a59ec81256ec06e63b',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'ZhehanZ',
  domain: 'zhehanz.com',
  author: 'ZhehanZ',

  // open graph metadata (optional)
  description: 'Zheha.nZ / 张哲涵的个人网站分享',

  // social usernames (optional)
  twitter: 'Zhehan_Z',
  github: 'Zhehan-Z',
  // linkedin: 'mighil',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: https://picsum.photos/1500/1500.webp,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
     '/blog': '68807bbb3db746e6ab6b7db79477aadf',
     '/portfolio': '21b2316c658941568156dc71f687d781',
     '/about': 'b51d52be62784a6d83ed71866ae26b11',
     '/friends': '5d9008b017d248e492b79ce96b95118b',
     '/contact': 'b9451aab2a3f48c89839c28074d66f87',
   },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default',
  navigationLinks: [   
    {
      title: 'Blog',
      pageId: '68807bbb3db746e6ab6b7db79477aadf'
    },    
    {
      title: 'About',
      pageId: 'b51d52be62784a6d83ed71866ae26b11'
    },
    {
      title: 'Friends',
      pageId: '5d9008b017d248e492b79ce96b95118b'
    },
    {
      title: 'Contact',
      pageId: 'b9451aab2a3f48c89839c28074d66f87'
    }
  ]
})
