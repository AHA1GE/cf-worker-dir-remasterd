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
    {
      name: "Bing",
      template: "https://www.bing.com/search?q=$s",
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
      icon: "hdd outline",
      quickLinkList: [
        {
          url: "https://qnap.ahaigege.com",
          name: "NAS proxied",
          desc: "NAS proxied by CF",
        },
        {
          url: "https://nas.ahaigege.com",
          name: "NAS",
          desc: "Redir to NAS",
        },
        {
          url: "https://gpt.ahaigege.com",
          name: "GPT",
          desc: "online GPT demo",
        },
        {
          url: "https://dweet.io/follow/zeropi",
          name: "0Pi",
          desc: "zero pi sbc info.",
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
      icon: "code",
      quickLinkList: [
        {
          url: "https://github.com/",
          name: "Github",
          desc: "The world's largest code manage platform",
        },
        {
          url: "https://www.w3schools.com/",
          name: "W3schools",
          desc: "Front-end basic tutorial",
        },
        {
          url: "https://www.csdn.net",
          name: "CSDN",
          desc: "Chinese technology blog",
        },
        {
          url: "https://www.runoob.com/",
          name: "RUNOOB",
          desc: "Basic programing tutorial",
        },
      ],
    },
    {
      name: "Academic",
      icon: "graduation cap",
      quickLinkList: [
        {
          url: "https://scholar.google.com/",
          name: "Google Scholar",
          desc: "Academic search",
        },
        {
          url: "https://www.cnki.net/",
          name: "知网",
          desc: "Knowledge Infrastructure",
        },
        {
          url: "https://v2ex.com/",
          name: "V2EX",
          desc: "Chat room",
        },
        {
          url: "https://www.researchgate.net/",
          name: "Research Gate",
          desc: "Publish search",
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
  const dynamicDiv1 = renderDynamicDiv1();
  const dynamicDiv2 = renderDynamicDiv2();
  const dynamicJS: string = generateDynamicJS();
  const dynamicCSS: string = generateDynamicCSS();
  let html = staticHTML.replace('<head src="/dynamicHeads.html"></head>', `${dynamicHead}`).replace('<header></header>', `${dynamicDiv1}`).replace('<main></main>', `${dynamicDiv2}`).replace('<script src="/dynamic.js"></script>', `${dynamicJS}`).replace('<style src="/dynamic.css"></style>', `${dynamicCSS}`);
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
          <footer><div class="footer">Powered by<a class="ui label" href="https://github.com/AHA1GE/cf-worker-dir-remasterd" target="_blank" rel="noopener"><i class="github icon"></i>Cf-Worker-Dir-remastered</a> © Based on<a class="ui label"><i class="balance scale icon"></i>MIT License</a></div></footer>
          <script src="/dynamic.js"></script>
          <style src="/dynamic.css></style>
        </body>
      </html>
    `;
}

/**
 * 生成head的函数
 * @returns {string} 以字符串返回的head
 */
async function generateDynamicHead(): Promise<string> {
  const headList: string[] = [
    headElement("meta", ["charset=\"UTF-8\""]),
    headElement("meta", ["name=\"description\" content=\"AHAI Navigation\""]),
    headElement("meta", ["name=\"keywords\" content=\"AHAI, AHAIGEGE, Navigation, AHAI Navigation\""]),
    headElement("meta", ["name=\"viewport\" content=\"width=device-width, initial-scale=1.0\""]),
    headElement("meta", ["http-equiv=\"X-UA-Compatible\" content=\"ie=edge\""]),
    element("title", [], `${config.title} - ${config.subtitle}`),
    headElement("link", ["rel=\"apple-touch-icon\"", "sizes=\"180x180\"", "href=\"/apple-touch-icon.png\""]),
    headElement("link", ["rel=\"icon\"", "href=\"https://ysun.site/images/favicon.ico\""]),
  ]
  if (!config.useLocal_CSS) {
    const remoteCSSURI: string = `${config.remoteURI}index.css`;
    headList.push(headElement("link", [`href="${remoteCSSURI}"`, "rel=\"stylesheet\""]),);
  }
  else {
    headList.push(headElement("link", ["href=\"https://cdn.jsdelivr.net/gh/chenkerun2000/cf-worker-dir@0.1.10.1/style.css\"", "rel=\"stylesheet\""]),);
    headList.push(element("script", ["src=\"https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js\""], ""),);
    headList.push(headElement("link", ["href=\"https://cdn.jsdelivr.net/npm/semantic-superhero-ui-css@1.0.10/semantic.min.css\"", "rel=\"stylesheet\""]),);
    headList.push(element("script", ["src=\"https://cdn.jsdelivr.net/npm/semantic-superhero-ui-css@1.0.10/semantic.min.js\""], ""),);
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
    // 存储用于更新动态 div 的 JavaScript 的静态部分的常数
    const pageJS = `
      <script src="https://v1.hitokoto.cn/?encode=js&amp;select=%23hitokoto" defer=""></script>
      <script>
        $("#sengine a").on("click", function (e) {
          $("#sengine a.active").toggleClass("active");
          $(e.target).toggleClass("active");
          $("#search-fav").attr(
            "src",
            "${config.faviconGetter}"+$(e.target)
              .data("url")
              .match(`+ /https{0,1}:\/\/\S+\// + `)[0]
          );
        });
        $(".search").on("click", function (e) {
          var url = $("#sengine a.active").data("url");
          url = url.replace(`+ /\$s/ + `, $("#searchinput").val());
          window.open(url);
        });
        $("#searchinput").bind("keypress", function () {
          if (event.keyCode == 13) {
            $(".search").click();
          }
        });
        $("#menubtn").on("click", function (e) {
          $("#seller").modal("show");
        });
      </script>
      `
    return pageJS;
  }
  else {//如果使用远程资源返回远程js
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

  var nav = element(
    "div",
    ['class="ui large secondary inverted menu"'],
    element("div", ['class="item"'], element("p", ['id="hitokoto"'], "条条大路通罗马"))
  );
  var title = element(
    "h1",
    ['class="ui inverted header"'],
    element("i", [`class="${config.logo_icon} icon"`], "") +
    element(
      "div",
      ['class="content"'],
      config.title + element("div", ['class="sub header"'], config.subtitle)
    )
  );
  var menu = element(
    "div",
    [
      'id="sengine"',
      'class="ui bottom attached tabular inverted secondary menu"',
    ],
    element("div", ['class="header item"'], "&nbsp;") +
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
  var input = element(
    "label",
    ['class="ui left corner labeled right icon fluid large input"'],
    element(
      "div",
      ['class="ui left corner label"'],
      element(
        "img",
        [
          'id="search-fav"',
          'class="left floated avatar ui image"',
          `src="${config.faviconGetter + config.search_engine[0].template.match(/https{0,1}:\/\/\S+\//)[0]}"`,
          'alt="logo"',
        ],
        ""
      )
    ) +
    element(
      "input",
      [
        'id="searchinput"',
        'type="search"',
        'placeholder="Search"',
        'autocomplete="off"',
      ],
      ""
    ) +
    element("i", ['class="inverted circular search link icon"'], "")
  );
  return element(
    "header",
    [],
    element(
      "div",
      [
        'id="head"',
        'class="ui inverted vertical masthead center aligned segment"',
      ],
      (config.hitokoto
        ? element("div", ['id="nav"', 'class="ui container"'], nav)
        : "") +
      element(
        "div",
        ['id="title"', 'class="ui text container"'],
        title +
        (config.search ? input + menu : "") +
        `${config.selling_ads
          ? '<div><a id="menubtn" class="red ui icon inverted button"><i class="heart icon"></i> 喜欢此域名 </a></div>'
          : ""
        }`
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
      const card = (url: string, name: string, desc: string) =>
        element(
          "a",
          ['class="card"', `href=${url}`, 'target="_blank"', 'rel="noopener"'],
          element(
            "div",
            ['class="content"'],
            element(
              "img",
              [
                'class="left floated avatar ui image" alt="logo"',
                `src="${config.faviconGetter}${url}"`,
              ],
              ""
            ) +
            element("div", ['class="header"'], name) +
            element("div", ['class="meta"'], desc)
          )
        );
      const divider = element(
        "h2",
        ['class="ui horizontal divider header"'],
        element("i", [`class="${item.icon} icon"`], "") + item.name
      );

      var content = element(
        "div",
        ['class="ui four stackable cards"'],
        item.quickLinkList
          .map((link) => {
            return card(link.url, link.name, link.desc);
          })
          .join("")
      );

      return element("div", ['class="ui basic segment"'], divider + content);
    })
    .join("");
  const sellerDiv = config.selling_ads ? renderSeller() : "";
  return element("main", [], element("div", ['class="ui container"'], main)) + sellerDiv;
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

const localCSS = ``