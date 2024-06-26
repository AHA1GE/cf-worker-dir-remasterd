// .wrangler/tmp/bundle-uMMGbg/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// src/configs.ts
var localconfig = {
  // 配置来源选项
  useLocal_CONFIG: true,
  //use this config or not
  useLocal_HEAD: true,
  //use local dynamicHeads or not
  useLocal_JS: true,
  //use local dynamic.js or not
  useLocal_CSS: false,
  //use local css.ts or fetch remote css file from remoteURI
  remoteURI: "https://raw.githubusercontent.com/AHA1GE/cf-worker-dir-remasterd/main/src/",
  //remote resources URI
  faviconGetter: "https://favicon.ahaigege.com/?url=",
  //favicon getter
  // 网页内容选项
  title: "AHAI Nav",
  //website title
  subtitle: "AHAI's Index",
  //website subtitle
  logo_icon: "globe",
  //select your logo by semantic-ui icon (you can get more info at:https://semantic-ui.com/elements/icon.html)
  hitokoto: true,
  //use hitokoto or not
  search: true,
  //enable search function
  search_engine: [
    //choose search engine which you use
    {
      name: "Bing",
      template: "https://www.bing.com/search?q=$s"
    },
    {
      name: "Duck",
      template: "https://start.duckduckgo.com/?q=$s&kak=-1&kal=-1&kao=-1&kaq=-1&kp=-2&kaj=m&k1=-1&kav=1&kn=1&kam=google-maps&kax=-1&kap=-1&k5=2"
    },
    {
      name: "Google",
      template: "https://www.google.com/search?q=$s"
    },
    {
      name: "Baidu",
      template: "https://www.baidu.com/s?wd=$s"
    }
  ],
  selling_ads: true,
  //Selling your domain or not.(turning on may be helpful for selling this domain by showing some ads.)
  sell_info: {
    domain: "ahaigege.com",
    price: 99.99,
    //domain price
    mon_unit: "yen sign",
    //monetary unit
    contact: [
      //how to contact you
      {
        type: "envelope",
        //contact type ("weixin","qq","telegram plane","envelope" or "phone")
        content: "ahaiG0d@gmail.com"
      }
    ]
  },
  quickLinkLists: [
    //Url list
    {
      name: "My",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
            </svg>`,
      quickLinkList: [
        {
          url: "https://gi.aha1.top/",
          name: "GI Tools",
          desc: "Anime game cheese.",
          icon_size: "32"
        },
        {
          url: "https://mb.aha1.top/",
          name: "Message Board",
          desc: "Leave me a message.",
          icon_size: "32"
        },
        {
          url: "https://v.ahaigege.com/",
          name: "Lobe",
          desc: "Lobe on Vercel",
          icon_size: "32"
        },
        // {
        //     url: "https://dweet.io/follow/zeropi",
        //     name: "0Pi",
        //     desc: "my zero pi sbc info.",
        //     icon_size: '16',
        // },
        {
          url: "https://ysun.site",
          name: "About me",
          desc: "Personal website",
          icon_size: "32"
        }
      ]
    },
    {
      name: "NAS",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" class="svg-icon" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8.5v3a1.5 1.5 0 0 1 1.5 1.5h5.5a.5.5 0 0 1 0 1H10A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5H.5a.5.5 0 0 1 0-1H6A1.5 1.5 0 0 1 7.5 10V7H2a2 2 0 0 1-2-2V4zm1 0v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1zm6 7.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5z" />
            </svg>`,
      quickLinkList: [
        {
          url: "https://ts466c.ahaigege.com/",
          name: "TS466C",
          desc: "Go to QNAP NAS TS466C.",
          icon_size: "32"
        },
        {
          url: "https://ddns466c.ahaigege.com:8443/",
          name: "TS466C DDNS",
          desc: "Go to QNAP NAS TS466C.",
          icon_size: "32"
        },
        {
          url: "https://ts532x.ahaigege.com/",
          name: "TS532X",
          desc: "Go to QNAP NAS TS532X.",
          icon_size: "32"
        },
        {
          url: "https://ddns532x.ahaigege.com:8443/",
          name: "TS532X DDNS",
          desc: "Go to QNAP NAS TS532X.",
          icon_size: "32"
        }
      ]
    },
    {
      name: "Do For Fun",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-pc-display" viewBox="0 0 16 16">
                <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z"/>
            </svg>`,
      quickLinkList: [
        {
          url: "https://gpt.dofor.fun/",
          name: "China GPTs",
          desc: "China LLMs in lobe-chat.",
          icon_size: "32"
        },
        {
          url: "https://next.dofor.fun/",
          name: "NextChat",
          desc: "Simple basic LLM webui.",
          icon_size: "32"
        },
        {
          url: "https://oneapi.dofor.fun/",
          name: "One Api",
          desc: "Api relay for GPTs.",
          icon_size: "32"
        },
        // {
        //     url: "https://vnology.synology.me:5001/",
        //     name: "Vnology DDNS",
        //     desc: "Go to Virtual Synology NAS.",
        //     icon_size: '32',
        // },
        {
          url: "https://vno.aha1.top/",
          name: "Vnology",
          desc: "Go to Virtual Synology NAS.",
          icon_size: "32"
        }
      ]
    },
    {
      name: "Tools",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
                  <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z"/>
                </svg>`,
      quickLinkList: [
        {
          url: "https://www.calculator.net/",
          name: "Calculators",
          desc: "Dirrerent kinds of calculators",
          icon_size: "32"
        },
        {
          url: "https://chat.openai.com/",
          name: "ChatGPT",
          desc: "ChatGPT by OpenAI",
          icon_size: "32"
        },
        {
          url: "https://r.aha1.top/",
          name: "Music Unlock",
          desc: "Decrypt music files.",
          icon_size: "32"
        },
        {
          url: "https://it-tools.tech/",
          name: "IT Tools",
          desc: "Data convertion tools",
          icon_size: "32"
        }
      ]
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
          icon_size: "32"
        },
        {
          url: "https://www.w3schools.com/",
          name: "W3schools",
          desc: "Front-end basic tutorial",
          icon_size: "32"
        },
        {
          url: "https://dash.cloudflare.com",
          name: "Cloudflare",
          desc: "Cloudflare dashboard",
          icon_size: "32"
        },
        {
          url: "https://www.runoob.com/",
          name: "RUNOOB",
          desc: "Basic programing tutorial",
          icon_size: "32"
        }
      ]
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
          icon_size: "32"
        },
        {
          url: "https://www.cnki.net/",
          name: "\u77E5\u7F51",
          desc: "Knowledge Infrastructure",
          icon_size: "16"
        },
        {
          url: "https://v2ex.com/",
          name: "V2EX",
          desc: "Chat room",
          icon_size: "32"
        },
        {
          url: "https://www.researchgate.net/",
          name: "Research Gate",
          desc: "Publish search",
          icon_size: "64"
        }
      ]
    }
  ],
  //通用配置
  robotsTXT: ``,
  adsTXT: `google.com, pub-5526526482489599, DIRECT, f08c47fec0942fa0`
};

// src/css.ts
var localCSS = `
<style>
    //moved to "/src/index.css"
</style>
`;

// src/index.ts
var config = localconfig;
var src_default = {
  async fetch(request, env) {
    try {
      if (!convertToBoolean(env.useLocal_CONFIG) && env.remoteURI) {
        config = await (await fetch(env.remoteURI + "config.json")).json();
      } else if (!convertToBoolean(env.useLocal_CONFIG) && !env.remoteURI) {
        throw new Error("Remote resources URI NOT found.");
      }
    } catch (e) {
      console.log(e);
    }
    try {
      if (!convertToBoolean(env.useLocal_HEAD)) {
        config.useLocal_HEAD = env.useLocal_HEAD;
      }
      if (!convertToBoolean(env.useLocal_JS)) {
        config.useLocal_JS = env.useLocal_JS;
      }
      if (!convertToBoolean(env.useLocal_CSS)) {
        config.useLocal_CSS = env.useLocal_CSS;
      }
      if (env.remoteURI && /^(https?|ftp):\/\/[^\s/$.?#].[^\s/]*\/?$/.test(env.remoteURI)) {
        config.remoteURI = env.remoteURI;
      }
      if (env.faviconGetter && /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(env.faviconGetter)) {
        config.faviconGetter = env.faviconGetter;
      }
    } catch (e) {
      console.log(e);
    }
    const requestUrl = new URL(request.url);
    switch (requestUrl.pathname.toLowerCase()) {
      case "/":
        return new Response(
          await renderHTML(),
          { headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "max-age=30" } }
        );
      case "/robots.txt":
        return new Response(
          //use tobotsTXT from config, cache 1 year inmutable
          config.robotsTXT,
          { headers: { "Content-Type": "text/plain", "Cache-Control": "max-age=31536000, immutable" } }
        );
      case "/ads.txt":
        return new Response(
          //use adsTXT from config, cache no cache
          config.adsTXT,
          { headers: { "Content-Type": "text/plain", "Cache-Control": "no-cache" } }
        );
      default:
        return new Response(
          "404 Not Found",
          { status: 404, headers: { "Content-Type": "text/plain" } }
        );
    }
  }
};
function element(tag, attrs, content) {
  return `<${tag} ${attrs.join(" ")}>${content}</${tag}>`;
}
function headElement(tag, attrs) {
  return `<${tag} ${attrs.join(" ")}>`;
}
function convertToBoolean(input) {
  if (typeof input === "boolean") {
    return input;
  } else if (typeof input === "string") {
    if (input === "" || input === "false") {
      return false;
    } else if (input === "true") {
      return true;
    } else {
      throw new Error("Invalid input string");
    }
  } else {
    throw new Error("Invalid input type");
  }
}
async function renderHTML() {
  const staticHTML = generateStaticHTML();
  const dynamicHead = await generateDynamicHead();
  const dynamicDiv1 = renderDynamicDiv1();
  const dynamicDiv2 = renderDynamicDiv2();
  const dynamicDiv3 = renderDynamicDiv3();
  const dynamicJS = generateDynamicJS();
  let html = staticHTML.replace('<head src="/dynamicHeads.html"></head>', `${dynamicHead}`).replace("<header></header>", `${dynamicDiv1}`).replace("<main></main>", `${dynamicDiv2}`).replace("<footer></footer>", `${dynamicDiv3}`).replace('<script src="/dynamic.js"><\/script>', `${dynamicJS}`);
  html = html;
  return html;
}
function generateStaticHTML() {
  return `
      <!DOCTYPE html>
      <html lang="en">
        <head src="/dynamicHeads.html"></head>
        <body>
          <header></header>
          <main></main>
          <footer></footer>
          <script src="/dynamic.js"><\/script>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5526526482489599" crossorigin="anonymous"><\/script>
        </body>
        <style src="/dynamic.css"></style>
      </html>
    `;
}
async function generateDynamicHead() {
  const headList = [
    "<head>",
    headElement("meta", ['charset="UTF-8"']),
    headElement("meta", ['name="description" content="AHAI Navigation"']),
    headElement("meta", [
      'name="keywords" content="AHAI, AHAIGEGE, Navigation, AHAI Navigation"'
    ]),
    headElement("meta", [
      'name="viewport" content="width=device-width, initial-scale=1.0"'
    ]),
    headElement("meta", ['http-equiv="X-UA-Compatible" content="ie=edge"']),
    element("title", [], `${config.title} - ${config.subtitle}`),
    headElement("link", [
      'rel="apple-touch-icon"',
      'sizes="180x180"',
      'href="/apple-touch-icon.png"'
    ]),
    headElement("link", [
      'rel="icon"',
      'href="https://ysun.site/images/favicon.ico"'
    ]),
    element("style", [], await generateDynamicCSS()),
    "</head>"
  ];
  const head = headList.join("\n");
  if (config.useLocal_HEAD) {
    return head;
  } else {
    const remoteHeadURI = `${config.remoteURI}HEAD.html`;
    try {
      const response = await fetch(remoteHeadURI);
      const html = await response.text();
      return response.ok ? html : "";
    } catch (error) {
      console.error(`Error fetching remote HEAD: ${error}`);
      return head;
    }
  }
}
function generateDynamicJS() {
  if (config.useLocal_JS) {
    const pageJS = `
      <script src="https://v1.hitokoto.cn/?encode=js&amp;select=%23hitokoto" defer=""><\/script>
      <script>
        var sengineLinks = document.querySelectorAll("#sengine a");
        sengineLinks.forEach(function (link) {
            link.addEventListener("click", function (event) {
                var activeLink = document.querySelector("#sengine a.active");
                if (activeLink) {
                    activeLink.classList.remove("active");
                }
                link.classList.add("active");
                var searchFav = document.querySelector("#search-fav");
                var url = 'https://' + link.getAttribute("data-url").match(` + /^https?:\/\/(?:[^.]+\.)?([^.]+\.[a-z]{2,})/i + `)[1] || '';
                searchFav.setAttribute("src", "${config.faviconGetter}" + url);
            });
        });

        var searchBtn = document.querySelector("#search");
        searchBtn.addEventListener("click", function (event) {
            var activeLink = document.querySelector("#sengine a.active");
            var url = activeLink.getAttribute("data-url");
            var searchInput = document.querySelector("#searchinput");
            url = url.replace(` + /\$s/ + `, searchInput.value);
            window.open(url);
        });
        var searchInput = document.querySelector("#searchinput");
        searchInput.addEventListener("keypress", function (event) {
            if (event.keyCode === 13) {
                searchBtn.click();
            }
        });
        //var menuBtn = document.querySelector("#menubtn");
        //menuBtn.addEventListener("click", function (event) {
        //    var sellerModal = document.querySelector("#seller");
        //    sellerModal.style.display = "block";
        //});

    <\/script>
      `;
    return pageJS;
  } else {
    return `<script src="remote.js" defer=""><\/script>`.replace(`remote.js`, config.remoteURI + "index.js");
  }
}
async function generateDynamicCSS() {
  if (config.useLocal_CSS) {
    return localCSS;
  } else {
    const remoteCSSURI = `${config.remoteURI}index.css`;
    return fetch(remoteCSSURI).then((response) => response.text());
  }
}
function renderDynamicDiv1() {
  const item = (template, name) => element("a", ['class="item"', `data-url="${template}"`], name);
  var headerHitoko = element(
    "div",
    ['class="hitoko"'],
    element(
      "p",
      [
        'id="hitokoto"',
        `onclick="location.href='https://hitokoto.cn';"`,
        'class="prevent-select"'
      ],
      "\u5FA1\u5251\u4E8E\u5FC3\uFF0C\u4E14\u542C\u98CE\u541F\u3002"
    )
  );
  var title = element(
    "h1",
    ['class="title-div prevent-select"'],
    element(
      "i",
      ['class="globe-icon"', 'style="width: 1em;  height: 1em;"'],
      element(
        "svg",
        [
          'xmlns="http://www.w3.org/2000/svg"',
          'width="1em"',
          'height="1em"',
          'class="svg-icon"',
          'fill="currentColor"',
          'viewBox="0 0 16 16"'
        ],
        headElement("path", [
          'd="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"'
        ])
      )
    ) + element(
      "div",
      ['class="title"'],
      config.title + element("div", ['class="sub-title"'], config.subtitle)
    )
  );
  var searchEngineInput = element(
    "div",
    ['class="search-engine-container"'],
    // element(
    //   "div",
    //   ['class="search-engine-top-left-icon-container prevent-select"'],
    //   ""
    // ) +
    element(
      "img",
      [
        'id="search-fav"',
        'class="search-engine-favicon-top-left-float"',
        `src="${config.faviconGetter}https://${config.search_engine[0].template.match(
          /^https?:\/\/(?:[^.]+\.)?([^.]+\.[a-z]{2,})/i
        )?.[1] || ""}"`,
        'alt="logo"'
      ],
      ""
    ) + element(
      "label",
      ['for="searchinput"'],
      "waht do you want to search"
    ) + element(
      "input",
      [
        'id="searchinput"',
        'name="searchinput"',
        'type="search"',
        'placeholder="Search"',
        'autocomplete="off"'
      ],
      ""
    ) + element(
      "i",
      ['id="search"', 'class="search-engine-button"'],
      element(
        "svg",
        [
          'xmlns="http://www.w3.org/2000/svg"',
          'width="1em"',
          'height="1em"',
          'fill="currentColor"',
          'viewBox="0 0 16 16"'
        ],
        headElement("path", [
          'd="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"'
        ])
      )
    )
  );
  var searchEngineSwitchMenu = element(
    "div",
    ['id="sengine"', 'class="search-engine-switch-menu"'],
    config.search_engine.map((link, key) => {
      if (key == 0) {
        return element(
          "a",
          ['class="active item"', `data-url="${link.template}"`],
          link.name
        );
      } else {
        return item(link.template, link.name);
      }
    }).join("")
  );
  return element(
    "header",
    ['class="header"'],
    (config.hitokoto ? headerHitoko : "") + element(
      "div",
      ['id="head"', 'class="head-container"'],
      title
    )
  ) + element(
    "div",
    ['id="title"', 'class="search-engine-wrapper"'],
    config.search ? searchEngineInput + searchEngineSwitchMenu : ""
  );
}
function renderDynamicDiv2() {
  var main = config.quickLinkLists.map((item) => {
    const card = (url, name, desc, icon_size) => element(
      "a",
      ['class="card"', `href=${url}`, 'target="_blank"', 'rel="noreferrer noopener"'],
      element(
        "div",
        ['class="content"'],
        element(
          "img",
          [
            'class="card-favicon-top-left-float" alt="logo"',
            `src="${config.faviconGetter}https://${url.match(/^https?:\/\/([a-z0-9.-]+\.[a-z]{2,})/i)?.[1] || ""}&sz=${icon_size}"`
          ],
          ""
        ) + element("div", ['class="header"'], name) + element("div", ['class="meta"'], desc)
      )
    );
    const divider = element(
      "h2",
      ['class="horizontal-divider"'],
      element("i", ['class="quicklink-icon"'], item.icon) + item.name
    );
    var content = element(
      "div",
      ['class="four-stackable-cards"'],
      item.quickLinkList.map((link) => {
        return card(link.url, link.name, link.desc, link.icon_size);
      }).join("")
    );
    return element("div", ['class="quicklink"'], divider + content);
  }).join("");
  return element(
    "div",
    ['class="scrollable"'],
    element(
      "main",
      ['class="main"'],
      element("div", ['class="quicklink-div"'], main)
    )
  );
}
function renderDynamicDiv3() {
  return element(
    "footer",
    ['class="footer"'],
    element(
      "div",
      ['class="footer-div"'],
      "Powered by" + element(
        "a",
        [
          'class="label"',
          'href="https://github.com/AHA1GE/cf-worker-dir-remasterd"',
          'target="_blank"',
          'rel="noreferrer noopener"'
        ],
        element(
          "i",
          ['class="github-icon"'],
          element(
            "svg",
            [
              'xmlns="http://www.w3.org/2000/svg"',
              'width="1em"',
              'height="1em"',
              'fill="currentColor"',
              'viewBox="0 0 16 16"'
            ],
            headElement("path", [
              'd="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"'
            ])
          )
        ) + "&nbspCWD-re"
      ) + "&nbsp&nbsp \xA9 Based on" + element(
        "a",
        [
          'class="label"',
          'href="https://github.com/AHA1GE/cf-worker-dir-remasterd"',
          'target="_blank"',
          'rel="noreferrer noopener"'
        ],
        element(
          "i",
          ['class="mit-icon"'],
          element(
            "svg",
            [
              'xmlns="http://www.w3.org/2000/svg"',
              'width="1em"',
              'height="1em"',
              'fill="currentColor"',
              'viewBox="0 0 640 512"'
            ],
            headElement("path", [
              'd="M384 32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H398.4c-5.2 25.8-22.9 47.1-46.4 57.3V448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 128c-17.7 0-32-14.3-32-32s14.3-32 32-32H288V153.3c-23.5-10.3-41.2-31.6-46.4-57.3H128c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288H584.4L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320H199.3L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z"'
            ])
          )
        ) + "&nbspMIT License"
      )
    )
  );
}

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;
var wrap = void 0;

// .wrangler/tmp/bundle-uMMGbg/middleware-insertion-facade.js
var envWrappers = [wrap].filter(Boolean);
var facade = {
  ...src_default,
  envWrappers,
  middleware: [
    middleware_miniflare3_json_error_default,
    ...src_default.middleware ? src_default.middleware : []
  ].filter(Boolean)
};
var middleware_insertion_facade_default = facade;

// .wrangler/tmp/bundle-uMMGbg/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
var __facade_modules_fetch__ = function(request, env, ctx) {
  if (middleware_insertion_facade_default.fetch === void 0)
    throw new Error("Handler does not export a fetch() function.");
  return middleware_insertion_facade_default.fetch(request, env, ctx);
};
function getMaskedEnv(rawEnv) {
  let env = rawEnv;
  if (middleware_insertion_facade_default.envWrappers && middleware_insertion_facade_default.envWrappers.length > 0) {
    for (const wrapFn of middleware_insertion_facade_default.envWrappers) {
      env = wrapFn(env);
    }
  }
  return env;
}
var registeredMiddleware = false;
var facade2 = {
  ...middleware_insertion_facade_default.tail && {
    tail: maskHandlerEnv(middleware_insertion_facade_default.tail)
  },
  ...middleware_insertion_facade_default.trace && {
    trace: maskHandlerEnv(middleware_insertion_facade_default.trace)
  },
  ...middleware_insertion_facade_default.scheduled && {
    scheduled: maskHandlerEnv(middleware_insertion_facade_default.scheduled)
  },
  ...middleware_insertion_facade_default.queue && {
    queue: maskHandlerEnv(middleware_insertion_facade_default.queue)
  },
  ...middleware_insertion_facade_default.test && {
    test: maskHandlerEnv(middleware_insertion_facade_default.test)
  },
  ...middleware_insertion_facade_default.email && {
    email: maskHandlerEnv(middleware_insertion_facade_default.email)
  },
  fetch(request, rawEnv, ctx) {
    const env = getMaskedEnv(rawEnv);
    if (middleware_insertion_facade_default.middleware && middleware_insertion_facade_default.middleware.length > 0) {
      if (!registeredMiddleware) {
        registeredMiddleware = true;
        for (const middleware of middleware_insertion_facade_default.middleware) {
          __facade_register__(middleware);
        }
      }
      const __facade_modules_dispatch__ = function(type, init) {
        if (type === "scheduled" && middleware_insertion_facade_default.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return middleware_insertion_facade_default.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(
        request,
        env,
        ctx,
        __facade_modules_dispatch__,
        __facade_modules_fetch__
      );
    } else {
      return __facade_modules_fetch__(request, env, ctx);
    }
  }
};
function maskHandlerEnv(handler) {
  return (data, env, ctx) => handler(data, getMaskedEnv(env), ctx);
}
var middleware_loader_entry_default = facade2;
export {
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
