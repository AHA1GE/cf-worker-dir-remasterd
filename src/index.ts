// 使用常量存储的网页自定义设置，在这里修改网页的标题、副标题、logo、搜索引擎等。
let config = {

  // 配置来源选项
  useLocal_CONFIG: true, //use this config or not
  useLocal_HEAD: true, //use local dynamicHeads or not
  useLocal_JS: true, //use local dynamic.js or not
  useLocal_CSS: true, //use local dynamic.css or not
  remoteURI: "https://raw.githubusercontent.com/AHA1GE/cf-worker-dir-remasterd/dev/", //remote resources URI
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
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8.5v3a1.5 1.5 0 0 1 1.5 1.5h5.5a.5.5 0 0 1 0 1H10A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5H.5a.5.5 0 0 1 0-1H6A1.5 1.5 0 0 1 7.5 10V7H2a2 2 0 0 1-2-2V4zm1 0v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1zm6 7.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5z" />
            </svg>`,
      quickLinkList: [
        {
          url: "https://qnap.ahaigege.com",
          name: "NAS proxied",
          desc: "NAS proxied by CF",
          icon_size: '32',
        },
        {
          url: "https://nas.ahaigege.com",
          name: "NAS",
          desc: "Redir to NAS",
          icon_size: '32',
        },
        {
          url: "https://gpt.ahaigege.com",
          name: "GPT",
          desc: "online GPT demo",
          icon_size: '32',
        },
        {
          url: "https://dweet.io/follow/zeropi",
          name: "0Pi",
          desc: "zero pi sbc info.",
          icon_size: '16',
        },
        // {
        //   url: "https://ysun.site",
        //   name: "About me",
        //   desc: "Personal website",
        // },
      ],
    },
    {
      name: "Tech",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" fill="currentColor" viewBox="0 0 16 16">
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
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" fill="currentColor" viewBox="0 0 16 16">
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

// 处理请求的函数
export default {
  async fetch(request: Request, env: any) {
    1
    try {
      if (!convertToBoolean(env.useLocal_CONFIG) && env.remoteURI) {
        config = await (await fetch(env.remoteURI + "config.json")).json();
      } else if ((!convertToBoolean(env.useLocal_CONFIG)) && (!env.remoteURI)) { throw new Error("No remote resources URI found."); }
    } catch (e) { console.log(e); }
    //尝试从环境变量中获取配置
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
      if (!env.remoteURI) {
        config.remoteURI = env.remoteURI;
      }
      if (!env.faviconGetter) {
        config.faviconGetter = env.faviconGetter;
      }
    } catch (e) { console.log(e); }

    // 构造 HTML 页面
    const html_FINAL = await renderHTML();
    return new Response(html_FINAL, { headers: { "content-type": "text/html;charset=UTF-8", }, });
  },
};


/**
 * 用来创建element的工具函数
 * @param tag 标签名
 * @param attrs 属性数组
 * @param content 内容，可以是另一个element
 * @returns {string}  以字符串返回的element
 * @description 该函数会生成一个 HTML element。
 **/
function element(tag: string, attrs: string[], content: string): string {
  return `<${tag} ${attrs.join(" ")}>${content}</${tag}>`;
}

/**
 * 用来创建头element的工具函数
 * @param tag 标签名
 * @param attrs 属性数组
 * @returns {string}  以字符串返回的element
 * @description 该函数会生成一个不关闭的 HTML element。
 **/
function headElement(tag: string, attrs: string[]): string {
  return `<${tag} ${attrs.join(" ")}>`;
}

/**
 * 用于把字符串转换成布尔值的工具函数
 * @param input 输入，可以是布尔或者字符串，如果是字符串，只有"true"会被转换为true，如果不是 true，false，空字符串 会抛出错误
 * @returns {boolean}  以布尔返回的输出，如果输入不是布尔或者字符串，会抛出错误 
 */
function convertToBoolean(input: unknown): boolean | never {
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

/**
 * 生成 HTML 页面的函数
 * @returns {string}  以字符串返回的页面
 * @description 该函数会生成一个 HTML 页面。
 **/
async function renderHTML(): Promise<string> {
  const staticHTML: string = generateStaticHTML();
  const dynamicHead: string = await generateDynamicHead();
  const dynamicDiv1: string = renderDynamicDiv1();
  const dynamicDiv2: string = renderDynamicDiv2();
  const dynamicDiv3: string = renderDynamicDiv3();
  const dynamicJS: string = generateDynamicJS();
  const dynamicCSS: string = generateDynamicCSS();
  let html = staticHTML
    .replace('<head src="/dynamicHeads.html"></head>', `${dynamicHead}`)
    .replace('<header></header>', `${dynamicDiv1}`)
    .replace('<main></main>', `${dynamicDiv2}`)
    .replace('<footer></footer>', `${dynamicDiv3}`)
    .replace('<script src="/dynamic.js"></script>', `${dynamicJS}`)
    .replace('<style src="/dynamic.css"></style>', `${dynamicCSS}`);
  html = html
  return html;
}

/**
 * 生成 HTML 静态部分的函数
 * @returns {string}  以字符串返回的静态部分的页面
 **/
function generateStaticHTML(): string {
  return `
      <!DOCTYPE html>
      <html lang="en">
        <head src="/dynamicHeads.html"></head>
        <body>
          <header></header>
          <main></main>
          <footer></footer>
          <script src="/dynamic.js"></script>
        </body>
        <style src="/dynamic.css"></style>
      </html>
    `;
}

/**
 * 生成head的函数
 * @returns {string} 以字符串返回的head
 */
async function generateDynamicHead(): Promise<string> {
  const headList: string[] = [
    "<head>",
    headElement("meta", ["charset=\"UTF-8\""]),
    headElement("meta", ["name=\"description\" content=\"AHAI Navigation\""]),
    headElement("meta", ["name=\"keywords\" content=\"AHAI, AHAIGEGE, Navigation, AHAI Navigation\""]),
    headElement("meta", ["name=\"viewport\" content=\"width=device-width, initial-scale=1.0\""]),
    headElement("meta", ["http-equiv=\"X-UA-Compatible\" content=\"ie=edge\""]),
    element("title", [], `${config.title} - ${config.subtitle}`),
    headElement("link", ["rel=\"apple-touch-icon\"", "sizes=\"180x180\"", "href=\"/apple-touch-icon.png\""]),
    headElement("link", ["rel=\"icon\"", "href=\"https://ysun.site/images/favicon.ico\""]),
    "</head>"
  ]
  if (!config.useLocal_CSS) {
    const remoteCSSURI: string = `${config.remoteURI}index.css`;
    headList.push(headElement("link", [`href="${remoteCSSURI}"`, "rel=\"stylesheet\""]),);
  }
  else {
    // headList.push(headElement("link", ["href=\"https://cdn.jsdelivr.net/gh/chenkerun2000/cf-worker-dir@0.1.10.1/style.css\"", "rel=\"stylesheet\""]),);
    // headList.push(element("script", ["src=\"https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js\""], ""),);
    // headList.push(headElement("link", ["href=\"https://cdn.jsdelivr.net/npm/semantic-superhero-ui-css@1.0.10/semantic.min.css\"", "rel=\"stylesheet\""]),);
    // headList.push(element("script", ["src=\"https://cdn.jsdelivr.net/npm/semantic-superhero-ui-css@1.0.10/semantic.min.js\""], ""),);
  }
  const head: string = headList.join("\n");
  if (config.useLocal_HEAD) { return head; }
  else {
    const remoteHeadURI: string = `${config.remoteURI}HEAD.html`;

    try {

      // Perform a fetch to get the content of the remote file
      const response = await fetch(remoteHeadURI);
      const html = await response.text();

      // Return the fetched text or an empty string if the response is not OK
      return response.ok ? html : '';
    } catch (error) {
      console.error(`Error fetching remote HEAD: ${error}`);
      return head;
    }
  }

}

/**
 * 生成用于更新动态 div 的 JavaScript 的函数
 * @returns {string} 以字符串返回的 JavaScript
 */
function generateDynamicJS(): string {

  if (config.useLocal_JS) {//如果使用本地资源返回js
    const pageJS = `
      <script src="https://v1.hitokoto.cn/?encode=js&amp;select=%23hitokoto" defer=""></script>
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

    </script>
      `
    return pageJS;
  }
  else {//如果使用远程资源返回远程js的ref
    const remoteJS = `<script src="remote.js" defer=""></script>`
    return remoteJS.replace(`remote.js`, config.remoteURI + "index.js");
  }
}

/**
 * 生成 css 的函数
 * @returns {string} 以字符串返回的 css
 */
function generateDynamicCSS(): string {
  if (config.useLocal_CSS) {//如果使用本地资源返回css
    return localCSS
  }
  else {
    const noLocalCSS = `<style></style>`
    return noLocalCSS; //use generateDynamicHead() to link to remote css
  }
}

/**
 * 渲染第一个动态 div 的函数
 * @returns {string} 以字符串返回的第一个Div
 **/
function renderDynamicDiv1(): string {
  const item = (template: string, name: string) =>
    element("a", ['class="item"', `data-url="${template}"`], name);

  var headerHitoko = element("div",
    ['class="hitoko"'],
    element("p",
      ['id="hitokoto"',
        'onclick="location.href=\'https://hitokoto.cn\';"',
        'class="prevent-select"'
      ],
      "御剑于心，且听风吟。"
    )
  );

  var title = element(
    "h1",
    ['class="title-div prevent-select"'],
    element("i",
      ['class="globe-icon"'],
      element("svg",
        ['xmlns="http://www.w3.org/2000/svg"',
          'class="svg-icon"',
          ' fill="currentColor"',
          'viewBox="0 0 16 16"'
        ],
        headElement("path",
          ['d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"']
        )
      )
    ) +
    element(
      "div",
      ['class="title"'],
      config.title +
      element("div", ['class="sub-title"'], config.subtitle)
    )
  );

  var searchEngineInput = element(
    "label",
    ['class="search-engine-container"'],
    element("div",
      ['class="search-engine-top-left-icon-container prevent-select"'],
      element(
        "img",
        [
          'id="search-fav"',
          'class="search-engine-favicon-top-left-float"',
          `src="${config.faviconGetter}https://${config.search_engine[0].template.match(/^https?:\/\/(?:[^.]+\.)?([^.]+\.[a-z]{2,})/i)?.[1] || ''}"`,
          'alt="logo"',
        ],
        ""
      )
    ) +
    element("input",
      [
        'id="searchinput"',
        'type="search"',
        'placeholder="Search"',
        'autocomplete="off"',
      ],
      ""
    ) +
    element("i",
      ['id="search"', 'class="search-engine-button"'],
      element("svg",
        ['xmlns="http://www.w3.org/2000/svg"',
          'width="1em"',
          'height="1em"',
          'fill="currentColor"',
          'viewBox="0 0 16 16"'
        ],
        headElement("path",
          ['d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"']
        )
      )
    )
  );

  var searchEngineSwitchMenu = element(
    "div",
    [
      'id="sengine"',
      'class="search-engine-switch-menu"',
    ],
    config.search_engine
      .map((link, key) => {
        if (key == 0) {
          return element(
            "a",
            ['class="active item"', `data-url="${link.template}"`],
            link.name
          );
        } else {
          return item(link.template, link.name);
        }
      })
      .join("")
  );


  return element(
    "header",
    ['class="header"'],
    (config.hitokoto
      ? headerHitoko
      : "") +
    element(
      "div",
      ['id="head"',
        'class="head-container"',
      ],
      element(
        "div",
        ['id="title"', 'class="title-container"'],
        title +
        (config.search ? searchEngineInput + searchEngineSwitchMenu : "")
      )
    )
  );
}

/**
 * 渲染第二个动态 div 的函数
 * @returns {string} 以字符串返回的第二个Div
 **/
function renderDynamicDiv2(): string {
  var main = config.quickLinkLists
    .map((item) => {
      const card = (url: string, name: string, desc: string, icon_size: string) =>
        element(
          "a",
          ['class="card"', `href=${url}`, 'target="_blank"', 'rel="noopener"'],
          element(
            "div",
            ['class="content"'],
            element(
              "img",
              [
                'class="card-favicon-top-left-float" alt="logo"',
                `src="${config.faviconGetter}https://${url.match(/^https?:\/\/([a-z0-9.-]+\.[a-z]{2,})/i)?.[1] || ''}&sz=${icon_size}"`,
              ],
              ""
            ) +
            element("div", ['class="header"'], name) +
            element("div", ['class="meta"'], desc)
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
        item.quickLinkList
          .map((link) => {
            return card(link.url, link.name, link.desc, link.icon_size);
          })
          .join("")
      );

      return element("div", ['class="quicklink"'], divider + content);
    })
    .join("");
  // const sellerDiv = config.selling_ads ? renderSeller() : "";
  //return element("main", [], element("div", ['class="ui container"'], main));
  return element("div",
    ['class="scrollable"'],
    element("main", ['class="main"'], element("div", ['class="quicklink-div"'], main)));
}

/**
 * 渲染第三个动态 div 的函数
 * @returns {string} 以字符串返回的第三个Div，也就是footer
 **/
function renderDynamicDiv3(): string {
  return element("footer",
    ['class="footer"'],
    element("div",
      ['class="footer-div"'],
      "Powered by" +
      element("a",
        ['class="label"', 'href="https://github.com/AHA1GE/cf-worker-dir-remasterd"', 'target="_blank"', 'rel="noopener"'],
        element('i',
          ['class="github-icon"'],
          element('svg',
            ['xmlns="http://www.w3.org/2000/svg"',
              'width="1em"',
              'height="1em"',
              'fill="currentColor"',
              'viewBox="0 0 16 16"'],
            headElement('path',
              ['d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"']
            )
          )
        ) +
        "&nbspCWD-re"
      ) +
      "&nbsp&nbsp © Based on" +
      element("a",
        ['class="label"', 'href="https://github.com/AHA1GE/cf-worker-dir-remasterd"', 'target="_blank"', 'rel="noopener"'],
        element('i',
          ['class="mit-icon"'],
          element('svg',
            ['xmlns="http://www.w3.org/2000/svg"',
              'width="1em"',
              'height="1em"',
              'fill="currentColor"',
              'viewBox="0 0 640 512"'],
            headElement('path',
              ['d="M384 32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H398.4c-5.2 25.8-22.9 47.1-46.4 57.3V448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 128c-17.7 0-32-14.3-32-32s14.3-32 32-32H288V153.3c-23.5-10.3-41.2-31.6-46.4-57.3H128c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288H584.4L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320H199.3L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z"']
            )
          )
        ) +
        "&nbspMIT License")));
}

/**
 * 渲染广告 div 的函数
 * @returns {string} 以字符串返回的广告Div
 **/
function renderSeller(): string {
  const item = (type: string, content: string) =>
    element(
      "div",
      ['class="item"'],
      element("i", [`class="${type} icon"`], "") +
      element("div", ['class="content"'], content)
    );
  var title = element(
    "h1",
    ['class="ui yellow dividing header"'],
    element("i", ['class="gem outline icon"'], "") +
    element("div", ['class="content"'], config.sell_info.domain + " 正在出售")
  );
  var action = element(
    "div",
    ['class="actions"'],
    element(
      "div",
      ['class="ui basic cancel inverted button"'],
      element("i", ['class="reply icon"'], "") + "返回"
    )
  );

  var contact = config.sell_info.contact
    .map((list) => {
      return item(list.type, list.content);
    })
    .join("");
  var column = element(
    "div",
    ['class="column"'],
    element(
      "h3",
      ['class="ui center aligned icon inverted header"'],
      element(
        "i",
        ['class="circular envelope open outline grey inverted icon"'],
        ""
      ) + "联系我"
    ) + element("div", ['class="ui relaxed celled large list"'], contact)
  );
  var price = element(
    "div",
    ['class="column"'],
    element(
      "div",
      ['class="ui large yellow statistic"'],
      element(
        "div",
        ['class="value"'],
        element("i", [`class="${config.sell_info.mon_unit} icon"`], "") +
        config.sell_info.price
      )
    )
  );
  var content = element(
    "div",
    ['class="content"'],
    element(
      "div",
      ['class="ui basic segment"'],
      element(
        "div",
        ['class="ui two column stackable center aligned grid"'],
        element("div", ['class="ui inverted vertical divider"'], "感兴趣？") +
        element("div", ['class="middle aligned row"'], price + column)
      )
    )
  );

  return element(
    "div",
    ['id="seller"', 'class="ui basic modal"'],
    title + content + action
  );
}

const localCSS = `
<style>
    html {
        font-size: 15px;
        font-family: Arial, Helvetica, sans-serif;
    }

    body {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        margin: 0px;
        padding: 0px;
        font-size: 1rem;
        color: white;
        height: 100vh;
        background-image: linear-gradient(215deg,
                rgba(73, 145, 64, 0.99),
                rgba(58, 158, 158, 0.99),
                rgba(59, 82, 146, 0.99),
                rgba(150, 59, 142, 0.99),
                rgba(153, 55, 55, 0.99),
                rgba(168, 103, 50, 0.99),
                rgba(139, 153, 46, 0.99));
        background-size: 400%;
        animation: backGroundMove 60s ease infinite;
    }

    header.header {
        width: 100%;
        text-align: center;
        margin-top: 0rem;
        margin-left: 0rem;
        margin-right: 0rem;
        margin-bottom: 1rem;
        padding-top: 0rem;
        padding-left: 0rem;
        padding-right: 0rem;
        padding-bottom: 0rem;
    }

    header.header>div.hitoko {
        margin-top: 2rem;
        margin-left: 0rem;
        margin-right: 0rem;
        margin-bottom: 2rem;
        padding-top: 1rem;
        padding-left: 0rem;
        padding-right: 0rem;
        padding-bottom: 1rem;
        text-align: center;
        font-size: 1rem;
        padding: 0.2rem;
    }

    header.header>div.hitoko>p {
        margin: 0px;
        padding: 0px;
    }

    header.header>div.hitoko>p:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    header.header>div.head-container {
        text-align: center;
        display: block;
        width: auto !important;
        margin-left: 1rem !important;
        margin-right: 1rem !important;
    }

    header.header>div.head-container>div.title-container>h1.title-div {
        margin-top: 0rem;
        margin-left: 0rem;
        margin-right: 0rem;
        margin-bottom: 1rem;
        padding-top: 0rem;
        padding-left: 0rem;
        padding-right: 0rem;
        padding-bottom: 0rem;
        display: inline-table;
    }

    header.header>div.head-container>div.title-container>h1.title-div>i.glob-icon {
        display: table-cell;
    }

    header.header>div.head-container>div.title-container>h1.title-div>div.title {
        display: table-cell;
        font-size: 2rem;
        font-weight: bold;
        margin-top: 0rem;
        margin-left: 0rem;
        margin-right: 0rem;
        margin-bottom: 0rem;
        padding-top: 0rem;
        padding-left: 0rem;
        padding-right: 0rem;
        padding-bottom: 0rem;
        color: rgb(255, 255, 255);
        text-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    }

    header.header>div.head-container>div.title-container>h1.title-div>div.title>div.sub-title {
        font-size: 0.95rem;
        font-weight: normal;
        padding-left: 3rem;
        color: rgba(196, 196, 196, 0.9);
    }

    header.header>div.head-container>div.title-container>label.search-engine-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 0rem;
        padding-top: 0rem;
        padding-bottom: 0rem;
        padding-right: 0rem;
        margin-top: 0rem;
        margin-left: 0rem;
        margin-right: 0rem;
        margin-bottom: 0rem;
    }

    header.header>div.head-container>div.title-container>label.search-engine-container>div.search-engine-top-left-icon-container {
        position: relative;
        float: left;
        top: 0;
        left: 1.6rem;
        vertical-align: middle;
        z-index: 2;
    }

    header.header>div.head-container>div.title-container>label.search-engine-container>div.search-engine-top-left-icon-container>img.search-engine-favicon-top-left-float {
        display: inline;
        width: 3rem;
        height: 3rem;
        clip-path: circle(50%);
    }

    header.header>div.head-container>div.title-container>label.search-engine-container>input#searchinput {
        flex: 1 0 auto;
        position: relative;
        float: left;
        top: 0rem;
        left: -2rem;
        width: 100% !important;
        max-width: 40rem !important;
        vertical-align: middle;
        overflow: visible;
        z-index: 1;
        text-align: left;
        font-size: 1.3rem;
        padding-left: 4rem;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        padding-right: 4rem;
        margin-top: 0rem;
        margin-left: 0rem;
        margin-right: 0rem;
        margin-bottom: 0rem;
        line-height: 1.3rem;
        border-top: solid 0rem rgba(0, 0, 0, 0);
        border-left: solid 0rem rgba(0, 0, 0, 0);
        border-right: solid 0rem rgba(0, 0, 0, 0);
        border-bottom: solid 0rem rgba(0, 0, 0, 0);
        border-radius: 0.8rem;
        background: rgba(255, 255, 255, 0.9);
        color: rgb(0, 0, 0);
        outline: solid 0rem rgba(0, 0, 0, 0);
        box-shadow: inset 0.1rem 0.1rem 1rem 0rem rgba(0, 0, 0, 0.5),
            -0.1rem -0.1rem 2rem 0rem rgba(255, 255, 255, 0.1)
    }

    header.header>div.head-container>div.title-container>label.search-engine-container>i.search-engine-button {
        position: relative;
        float: right;
        top: 0;
        right: 5.5rem;
        vertical-align: middle;
        z-index: 2;
        color: black;
        width: 2rem;
        height: 2rem;
        margin: 0.1rem;
        padding: 0.1rem;
    }

    header.header>div.head-container>div.title-container>label.search-engine-container>i.search-engine-button:hover {
        cursor: pointer;
        color: rgb(124, 124, 124);
        transition: all 0.1s !important;
    }

    header.header>div.head-container>div.title-container>div.search-engine-switch-menu {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 0rem;
        padding-top: 0rem;
        padding-bottom: 0rem;
        padding-right: 0rem;
        margin-top: 0rem;
        margin-left: 0rem;
        margin-right: 0rem;
        margin-bottom: 0rem;
    }

    header.header>div.head-container>div.title-container>div.search-engine-switch-menu>a.item:hover {
        cursor: pointer;
        letter-spacing: 0.3rem;
        transition: all 0.1s ease-in-out !important;
    }

    header.header>div.head-container>div.title-container>div.search-engine-switch-menu>a.item {
        flex: 0 0 auto;
        user-select: none;
        padding-left: 1.5rem;
        padding-top: .6rem;
        padding-bottom: 1rem;
        padding-right: 1.5rem;
        margin-top: 0rem;
        margin-left: -0px;
        margin-right: -0px;
        margin-bottom: 1.5rem;
        border-top-left-radius: 0rem;
        border-top-right-radius: 0rem;
        border-bottom-right-radius: 0.8rem;
        border-bottom-left-radius: 0.8rem;
        border-left: 0px solid transparent;
        border-right: 0px solid transparent;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        border-top: none;
        background-color: rgba(255, 255, 255, 0.05);
        box-shadow: 0rem 1rem 2rem 0rem rgba(0, 0, 0, 0.2);
        letter-spacing: 0.1rem;
        backdrop-filter: blur(1rem);
    }

    header.header>div.head-container>div.title-container>div.search-engine-switch-menu>a.item::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
        transform: skewX(45deg) translateX(0);

    }

    header.header>div.head-container>div.title-container>div.search-engine-switch-menu>a.active {
        background-color: rgba(255, 255, 255, 0.3);
        letter-spacing: 0.3rem;
    }

    div.scrollable {
        width: 100%;
        margin-top: 0rem;
        margin-left: 0.1rem;
        margin-right: 0.1rem;
        margin-bottom: 0rem;
        padding-top: 0rem;
        padding-left: 0rem;
        padding-right: 0rem;
        padding-bottom: 0rem;
        overflow-y: auto;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }

    div.scrollable>main.main {
        width: 100%;
        margin-top: 1rem;
        margin-bottom: 5rem;
    }

    div.scrollable>main.main>div.quicklink-div {
        margin-left: 5%;
        margin-right: 5%;
    }

    div.scrollable>main.main>div.quicklink-div>div.quicklink {
        margin-top: 1rem;
        margin-left: 0rem;
        margin-right: 0rem;
        margin-bottom: 1rem;
        padding-top: 0rem;
        padding-left: 0rem;
        padding-right: 0rem;
        padding-bottom: 0rem;
    }

    div.scrollable>main.main>div.quicklink-div>div.quicklink>h2.horizontal-divider {
        font-size: 1.8rem;
        font-weight: normal;
        color: rgb(250, 250, 250);
        margin-top: 2.5rem;
        margin-left: 0rem;
        margin-right: 0rem;
        margin-bottom: 0.8rem;
        padding-top: 0rem;
        padding-left: 0rem;
        padding-right: 0rem;
        padding-bottom: 0rem;
        position: relative;
        display: flex;
        align-items: center;
    }

    div.scrollable>main.main>div.quicklink-div>div.quicklink>h2.horizontal-divider:before,
    div.scrollable>main.main>div.quicklink-div>div.quicklink>h2.horizontal-divider:after {
        content: "";
        flex-grow: 1;
        height: 2px;
        margin: 0rem 1rem;
        background-color: rgba(200, 200, 200, 0.9);
    }

    div.scrollable>main.main>div.quicklink-div>div.quicklink>h2.horizontal-divider>i.quicklink-icon {
        margin-top: 0rem;
        margin-left: 0rem;
        margin-right: 1rem;
        margin-bottom: 0rem;
        padding-top: 0rem;
        padding-left: 0rem;
        padding-right: 0rem;
        padding-bottom: 0rem;
    }

    div.scrollable>main.main>div.quicklink-div>div.quicklink>div.four-stackable-cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    div.scrollable>main.main>div.quicklink-div>div.quicklink>div.four-stackable-cards>a.card:visited {
        color: white;
        text-decoration: none;
    }

    div.scrollable>main.main>div.quicklink-div>div.quicklink>div.four-stackable-cards>a.card {
        color: white;
        text-decoration: none;
        flex-basis: calc(20%);
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-left: .6rem;
        margin-right: .6rem;
        padding: 0rem;
        border: none;
        border-radius: 1rem;
        background: rgba(0, 0, 0, 0.01);
        box-shadow: 1rem 1rem 2rem 0rem rgba(255, 255, 255, 0.2),
            -1rem -1rem 2rem 0rem rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(2rem);
    }

    div.scrollable>main.main>div.quicklink-div>div.quicklink>div.four-stackable-cards>a.card:hover {
        box-shadow: 1rem 1rem 2rem 0rem rgba(255, 255, 255, 0.2),
            -1rem -1rem 2rem 0rem rgba(0, 0, 0, 0.2),
            inset 1rem 1rem 1rem 0rem rgba(255, 255, 255, 0.05),
            inset -1rem -1rem 1rem 0rem rgba(200, 200, 200, 0.05);
        transition: all 0.2s ease-out !important;
        backdrop-filter: blur(10rem);
    }

    div.scrollable>main.main>div.quicklink-div>div.quicklink>div.four-stackable-cards>a.card>div.content {
        margin: 0rem;
        padding: 1rem;
    }

    div.scrollable>main.main>div.quicklink-div>div.quicklink>div.four-stackable-cards>a.card>div.content>img.card-favicon-top-left-float {
        width: 3rem;
        height: 3rem;
        margin-right: 1em;
        margin-bottom: 1em;
        clip-path: circle(50%);
        position: relative;
        float: left;
        vertical-align: middle;
    }

    div.scrollable>main.main>div.quicklink-div>div.quicklink>div.four-stackable-cards>a.card>div.content>div.header {
        font-size: 1rem;
        color: rgba(240, 255, 255, 1);
    }

    div.scrollable>main.main>div.quicklink-div>div.quicklink>div.four-stackable-cards>a.card>div.content>div.meta {
        font-size: 0.9rem;
        color: rgba(240, 255, 255, 0.6);
    }

    footer.footer {
        color: rgb(201, 201, 201);
        position: fixed;
        display: flex;
        align-items: end;
        justify-content: center;
        bottom: 0;
        left: 0;
        height: 2.5rem;
        width: 100%;
        margin: 0rem;
        padding-bottom: 0.5rem;
        text-align: center;
        font-size: 0, 85rem;
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.99), rgba(255, 255, 255, 0));
    }

    footer.footer>div.footer-div>a.label {
        color: rgb(201, 201, 201);
        background-image: linear-gradient(to top, rgba(255, 255, 255, 0.01), rgba(0, 0, 0, 0.6));
        border-radius: 0.2rem;
        text-decoration: none;
        padding: 0.3rem 0.5rem 0rem 0.4rem;
    }

    footer.footer>div.footer-div>a.label:visited {
        color: rgb(201, 201, 201);
        text-decoration: none;
    }

    @keyframes backGroundMove {
        0% {
            background-position: 0% 0%;
        }

        50% {
            background-position: 100% 100%;
        }

        100% {
            background-position: 0% 0%;
        }
    }
</style>

<style>
    /* 通用样式 */
    .prevent-select {
        /* Safari */
        -webkit-user-select: none;
        /* Firefox */
        -moz-user-select: none;
        /* IE10+/Edge */
        -ms-user-select: none;
        /* Standard syntax */
        user-select: none;
    }

    .svg-icon {
        width: 1em;
        height: 1em;
    }

    * {
        box-sizing: border-box;
        transition: all 0.1s ease-in-out;
    }
</style>

<style>
    /* 手机端样式表 mobile css */
    @media screen and (max-width: 767px) {

        /* 手机竖屏 mobile potriat */

        div.scrollable>main.main>div.quicklink-div>div.quicklink>div.four-stackable-cards {
            flex-direction: column;
            padding-left: 5%;
            padding-right: 5%;
        }

        .card {
            flex-basis: calc(100% - 3rem);
        }

        .card>.content {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

        }

        .card>.content>.header {
            flex-basis: 25%;
            margin: .5rem;
        }

        .card>.content>.meta {
            flex-basis: 50%;
            margin: .5rem;
        }

        header.header>div.head-container>div.title-container>label.search-engine-container>i.search-engine-button {
            display: none;
        }

        header.header>div.head-container>div.title-container>div.search-engine-switch-menu>a.item {
            padding: 0.5rem 0.5rem 0.5rem 0.5rem;
            margin: 0;
        }

        header.header>div.head-container>div.title-container>div.search-engine-switch-menu>a.item::before {
            display: none;
        }
    }

    @media screen and (max-height: 480px) {

        /* 手机横屏 mobile landscape */
        body {
            flex-direction: row;
        }

        div.scrollable>main.main>div.quicklink-div>div.quicklink>div.four-stackable-cards {
            flex-direction: column;
            padding-left: 5%;
            padding-right: 5%;
        }

        .card {
            flex-basis: calc(100% - 3rem);
        }

        .card>.content {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

        }

        .card>.content>.header {
            flex-basis: 25%;
            margin: .5rem;
        }

        .card>.content>.meta {
            flex-basis: 50%;
            margin: .5rem;
        }

        header.header>div.head-container>div.title-container>label.search-engine-container>i.search-engine-button {
            display: none;
        }

        header.header>div.head-container>div.title-container>div.search-engine-switch-menu>a.item {
            padding: 0.5rem 0.5rem 0.5rem 0.5rem;
            margin: 0;
        }

        header.header>div.head-container>div.title-container>div.search-engine-switch-menu>a.item::before {
            display: none;
        }

    }
</style>

<style>
    /* 滚动条样式 scroll bar css */
    /* Set the width of the scrollbar */
    body ::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 8px;
    }

    /* Set the background color of the scrollbar track to transparent */
    body ::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 0;
    }

    /* Set the color and style of the scrollbar handle */
    body ::-webkit-scrollbar-thumb {
        cursor: pointer;
        border-radius: 5px;
        background: rgba(0, 0, 0, .25);
        -webkit-transition: color .2s ease;
        transition: color .2s ease;
    }

    /* Set the color of the scrollbar handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background-color: #a8a8a8;
    }

    /* Set the width and color of the scrollbar */
    * {
        scrollbar-width: thin;
        scrollbar-color: #c3c3c3 transparent;
    }

    /* Set the color of the scrollbar handle on hover */
    *::-moz-scrollbar-thumb:hover {
        background-color: #a8a8a8;
    }

    /* Set the width and color of the scrollbar */
    * {
        scrollbar-width: thin;
        scrollbar-color: #c3c3c3 transparent;
        -ms-overflow-style: -ms-autohiding-scrollbar;
    }

    /* Set the color of the scrollbar handle on hover */
    *::-webkit-scrollbar-thumb:hover,
    *::-moz-scrollbar-thumb:hover {
        background-color: #a8a8a8;
    }
</style>
`