
export const localconfig = {

    // 配置来源选项
    useLocal_CONFIG: true, //use this config or not
    useLocal_HEAD: true, //use local dynamicHeads or not
    useLocal_JS: true, //use local dynamic.js or not
    useLocal_CSS: true, //use local dynamic.css or not
    remoteURI: "https://raw.githubusercontent.com/AHA1GE/cf-worker-dir-remasterd/main/src/", //remote resources URI
    faviconGetter: "https://favicon.ahaigege.com/?url=", //favicon getter

    // 网页内容选项
    title: "AHAI Nav", //website title
    subtitle: "AHAI's Index", //website subtitle
    logo_icon: "globe", //select your logo by semantic-ui icon (you can get more info at:https://semantic-ui.com/elements/icon.html)
    hitokoto: true, //use hitokoto or not
    search: true, //enable search function
    search_engine: [
        //choose search engine which you use
        {
            name: "Bing",
            template: "https://www.bing.com/search?q=$s",
        },
        {
            name: "Duck",
            template:
                "https://start.duckduckgo.com/?q=$s&kak=-1&kal=-1&kao=-1&kaq=-1&kp=-2&kaj=m&k1=-1&kav=1&kn=1&kam=google-maps&kax=-1&kap=-1&k5=2",
        },
        {
            name: "Google",
            template: "https://www.google.com/search?q=$s",
        },
        {
            name: "Baidu",
            template: "https://www.baidu.com/s?wd=$s",
        },
    ],
    selling_ads: true, //Selling your domain or not.(turning on may be helpful for selling this domain by showing some ads.)
    sell_info: {
        domain: "ahaigege.com",
        price: 99.99, //domain price
        mon_unit: "yen sign", //monetary unit
        contact: [
            //how to contact you
            {
                type: "envelope", //contact type ("weixin","qq","telegram plane","envelope" or "phone")
                content: "ahaiG0d@gmail.com",
            },
        ],
    },
    quickLinkLists: [
        //Url list
        {
            name: "Local",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" class="svg-icon" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8.5v3a1.5 1.5 0 0 1 1.5 1.5h5.5a.5.5 0 0 1 0 1H10A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5H.5a.5.5 0 0 1 0-1H6A1.5 1.5 0 0 1 7.5 10V7H2a2 2 0 0 1-2-2V4zm1 0v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1zm6 7.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5z" />
            </svg>`,
            quickLinkList: [
                {
                    url: "https://file.aha1.top",
                    name: "Seafile",
                    desc: "Seafile Server",
                    icon_size: '32',
                },
                {
                    url: "https://nas.ahaigege.com:8443",
                    name: "NAS",
                    desc: "Redir to NAS",
                    icon_size: '32',
                },
                // {
                //     url: "https://at.ahaigege.com",
                //     name: "about",
                //     desc: "info about Hai",
                //     icon_size: '32',
                // },
                {
                    url: "https://dweet.io/follow/zeropi",
                    name: "0Pi",
                    desc: "zero pi sbc info.",
                    icon_size: '16',
                },
                {
                    url: "https://ysun.site",
                    name: "About me",
                    desc: "Personal website",
                    icon_size: '32',
                },
            ],
        },
        {
            name: "Tools",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" class="svg-icon" fill="currentColor" viewBox="0 0 16 16">
            </svg>`,
            quickLinkList: [
                {
                    url: "https://chat2.jinshutuan.com/",
                    name: "ChatGPT",
                    desc: "ChatGPT that works in mainland China",
                    icon_size: '32',
                },
                {
                    url: "https://example.com/",
                    name: "example",
                    desc: "example.com",
                    icon_size: '32',
                },
                {
                    url: "https://example.com/",
                    name: "example",
                    desc: "example.com",
                    icon_size: '32',
                },
                {
                    url: "https://example.com/",
                    name: "example",
                    desc: "example.com",
                    icon_size: '32',
                },
            ],
        },
        {
            name: "Tech",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" class="svg-icon" fill="currentColor" viewBox="0 0 16 16">
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
            </svg>`,
            quickLinkList: [
                {
                    url: "https://github.com/",
                    name: "Github",
                    desc: "The world's largest code manage platform",
                    icon_size: '32',
                },
                {
                    url: "https://www.w3schools.com/",
                    name: "W3schools",
                    desc: "Front-end basic tutorial",
                    icon_size: '32',
                },
                {
                    url: "https://www.csdn.net",
                    name: "CSDN",
                    desc: "Chinese technology blog",
                    icon_size: '32',
                },
                {
                    url: "https://www.runoob.com/",
                    name: "RUNOOB",
                    desc: "Basic programing tutorial",
                    icon_size: '32',
                },
            ],
        },
        {
            name: "Academic",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" class="svg-icon" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
              </svg>`,
            quickLinkList: [
                {
                    url: "https://scholar.google.com/",
                    name: "Google Scholar",
                    desc: "Academic search",
                    icon_size: '32',
                },
                {
                    url: "https://www.cnki.net/",
                    name: "知网",
                    desc: "Knowledge Infrastructure",
                    icon_size: '16',
                },
                {
                    url: "https://v2ex.com/",
                    name: "V2EX",
                    desc: "Chat room",
                    icon_size: '32',
                },
                {
                    url: "https://www.researchgate.net/",
                    name: "Research Gate",
                    desc: "Publish search",
                    icon_size: '64',
                },
            ],
        },

    ],
};
