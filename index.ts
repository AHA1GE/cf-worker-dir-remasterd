// 使用常量存储的网页自定义设置，在这里修改网页的标题、副标题、logo、搜索引擎等。
const config = {

  // 配置来源选项
  useLocal_CONFIG: true, //use this config or not
  useLocal_HEAD: true, //use local dynamicHeads or not
  useLocal_JS: true, //use local dynamic.js or not
  useLocal_CSS: true, //use local dynamic.css or not
  remoteURI: "", //remote resources URI
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
const handler: ExportedHandler = {
  async fetch(request: Request, env: any) {
    //尝试从环境变量中获取配置
    try {
      if (!convertToBoolean(env.useLocal_CONFIG)) {
        config.useLocal_CONFIG = env.useLocal_CONFIG;
      }
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
      if ((!convertToBoolean(env.useLocal_CONFIG)) && (!env.remoteURI)) { throw new Error("No remote resources URI found."); }
    } catch (e) { console.log(e); }

    // 构造 HTML 页面
    const html_FINAL = renderHTML();
    return new Response(html_FINAL, { headers: { "content-type": "text/html;charset=UTF-8", }, });
  },
};
export default handler;

/**
 * 生成 HTML 页面的函数
 * @returns {string}  以字符串返回的页面
 * @description 该函数会生成一个 HTML 页面。
 **/
function renderHTML(): string {
  const staticHTML: string = generateStaticHTML();
  const dynamicHead: string = generateDynamicHead();
  const dynamicJS: string = generateDynamicJS();
  const dynamicCSS: string = generateDynamicCSS();
  let html = staticHTML.replace('<head src="/dynamicHeads.html"></head>', `${dynamicHead}`).replace('<script src="/dynamic.js"></script>', `${dynamicJS}`).replace('<style src="/dynamic.css"></style>', `${dynamicCSS}`);
  html = html
  return html;
}
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
 * 生成 HTML 静态部分的函数
 * @returns {string}  以字符串返回的静态部分的页面
 **/
function generateStaticHTML(): string {
  return `
      <!DOCTYPE html>
      <html lang="en">
        <head src="/dynamicHeads.html"></head>
        <body>
          <header id="top-part-of-html"></header>
          <main id="main-part-of-html"></main>
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
function generateDynamicHead(): string {
  return `
  `
}

/**
 * 生成用于更新动态 div 的 JavaScript 的函数
 * @returns {string} 以字符串返回的 JavaScript
 */
function generateDynamicJS(): string {
  // 存储用于更新动态 div 的 JavaScript 的静态部分的常数
  const staticJS = `window.addEventListener('load', () => {
        const topPartOfHtml = document.getElementById('top-part-of-html');
        const mainPartOfHtml = document.getElementById('main-part-of-html');
  
        topPartOfHtml.textContent = 'This is the first dynamic div.';
        mainPartOfHtml.textContent = 'This is the second dynamic div.';
      });
      `
  if (config.useLocal_CONFIG && config.useLocal_JS) {//如果使用本地资源返回用于替换动态div的js
    const dynamicDiv1 = renderDynamicDiv1();
    const dynamicDiv2 = renderDynamicDiv2();
    const pageJS = `<script src="https://v1.hitokoto.cn/?encode=js&amp;select=%23hitokoto" defer=""></script>
      <script>
          $('#sengine a').on('click', function (e) {
              $('#sengine a.active').toggleClass('active');
              $(e.target).toggleClass('active');
              $('#search-fav').attr('src', $(e.target).data('url').match(/https{0,1}:\/\/\S+\//)[0] + '/favicon.ico');
          });
          $('.search').on('click', function (e) {
              var url = $('#sengine a.active').data('url');
              url = url.replace(/\$s/, $('#searchinput').val());
              window.open(url);
          });
          /* 鼠标聚焦时，回车事件 */
          $("#searchinput").bind("keypress", function () {
              if (event.keyCode == 13) {
                  // 触发需要调用的方法
                  $(".search").click();
              }
          });
          $('#menubtn').on('click', function (e) {
              $('#seller').modal('show');
          });
      </script>`
    return staticJS.replace(`'This is the first dynamic div.'`, dynamicDiv1).replace(`'This is the second dynamic div.'`, dynamicDiv2) + pageJS;
  }
  else {//如果使用远程资源返回远程js
    const remoteJS = `<script src="remote.js" defer=""></script>`
    return remoteJS.replace(`remote.js`, config.remoteURI + "/index.js");
  }
}

/**
 * 生成 css 的函数
 * @returns {string} 以字符串返回的 css
 */
function generateDynamicCSS(): string {
  if (config.useLocal_CONFIG && config.useLocal_CSS) {//如果使用本地资源返回css
    return localCSS
  }
  else {
    const remoteCSS = `<style></style>`
    return remoteCSS; //use generateDynamicHead() to link to remote css
  }
}

function renderDynamicDiv1(): string {
  return element("", [""], "")
}
function renderDynamicDiv2(): string {
  return element("", [""], "")
}

const localCSS = ``