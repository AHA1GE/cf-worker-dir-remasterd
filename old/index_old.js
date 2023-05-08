/**
 *  自定义网站配置
 */
const config = {
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
  lists: [
    //Url list
    {
      name: "Local",
      icon: "hdd outline",
      list: [
        {
          url: "https://qnap.ahaigege.com",
          name: "NAS proxied",
          desc: "NAS proxied by CF",
        },
        // {
        //   url: "https://nas.ahaigege.com",
        //   name: "NAS",
        //   desc: "Redir to NAS",
        // },
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
        {
          url: "https://ysun.site",
          name: "About me",
          desc: "Personal website",
        },
      ],
    },
    {
      name: "Tech",
      icon: "code",
      list: [
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
      list: [
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
const el = (tag, attrs, content) =>
  `<${tag} ${attrs.join(" ")}>${content}</${tag}>`;
/**
 *  入口
 */
export default {
  async fetch(request, env) {
    const getter = env.faviconGetter;
    const init = {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    };
    return new Response(
      renderHTML(
        renderIndex(getter),
        config.selling_ads ? renderSeller() : null
      ),
      init
    );
  },
};
/* 通过分析链接 实时获取favicon
 *  @url 需要分析的Url地址
 */
function getFavicon(getter, url) {
  const faviconUrl = getter + url;
  return faviconUrl;
}

/** Render Functions
 *  渲染模块函数
 **/

function renderIndex(getter) {
  const footer = el(
    "footer",
    [],
    el(
      "div",
      ['class="footer"'],
      "Powered by" +
        el(
          "a",
          [
            'class="ui label"',
            'href="https://github.com/chenkerun2000/cf-worker-dir"',
            'target="_blank"',
            'rel="noopener"',
          ],
          el("i", ['class="github icon"'], "") + "Cf-Worker-Dir"
        ) +
        " &copy; Based on" +
        el(
          "a",
          ['class="ui label"'],
          el("i", ['class="balance scale icon"'], "") + "MIT License"
        ) +
        " CDN/OSS by " +
        el(
          "a",
          [
            'class="ui label"',
            'href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral"',
            'target="_blank"',
            'rel="noopener"',
          ],
          el(
            "img",
            [
              'src="https://raw.githubusercontent.com/chenkerun2000/CF-Worker-Dir/master/upyun-logo.png" alt="upyun logo" height="0.5em"',
            ],
            ""
          ) + ""
        )
    )
  );
  return renderHeader() + renderMain(getter) + footer;
}

function renderHeader() {
  const item = (template, name) =>
    el("a", ['class="item"', `data-url="${template}"`], name);

  var nav = el(
    "div",
    ['class="ui large secondary inverted menu"'],
    el("div", ['class="item"'], el("p", ['id="hitokoto"'], "条条大路通罗马"))
  );
  var title = el(
    "h1",
    ['class="ui inverted header"'],
    el("i", [`class="${config.logo_icon} icon"`], "") +
      el(
        "div",
        ['class="content"'],
        config.title + el("div", ['class="sub header"'], config.subtitle)
      )
  );
  var menu = el(
    "div",
    [
      'id="sengine"',
      'class="ui bottom attached tabular inverted secondary menu"',
    ],
    el("div", ['class="header item"'], "&nbsp;") +
      config.search_engine
        .map((link, key) => {
          if (key == 0) {
            return el(
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
  var input = el(
    "label",
    ['class="ui left corner labeled right icon fluid large input"'],
    el(
      "div",
      ['class="ui left corner label"'],
      el(
        "img",
        [
          'id="search-fav"',
          'class="left floated avatar ui image"',
          'src="https://start.duckduckgo.com/favicon.ico"',
          'alt="logo"',
        ],
        ""
      )
    ) +
      el(
        "input",
        [
          'id="searchinput"',
          'type="search"',
          'placeholder="Search"',
          'autocomplete="off"',
        ],
        ""
      ) +
      el("i", ['class="inverted circular search link icon"'], "")
  );
  return el(
    "header",
    [],
    el(
      "div",
      [
        'id="head"',
        'class="ui inverted vertical masthead center aligned segment"',
      ],
      (config.hitokoto
        ? el("div", ['id="nav"', 'class="ui container"'], nav)
        : "") +
        el(
          "div",
          ['id="title"', 'class="ui text container"'],
          title +
            (config.search ? input + menu : "") +
            `${
              config.selling_ads
                ? '<div><a id="menubtn" class="red ui icon inverted button"><i class="heart icon"></i> 喜欢此域名 </a></div>'
                : ""
            }`
        )
    )
  );
}

function renderMain(getter) {
  var main = config.lists
    .map((item) => {
      const card = (url, name, desc) =>
        el(
          "a",
          ['class="card"', `href=${url}`, 'target="_blank"', 'rel="noopener"'],
          el(
            "div",
            ['class="content"'],
            el(
              "img",
              [
                'class="left floated avatar ui image" alt="logo"',
                `src=${getFavicon(getter, url)}`,
              ],
              ""
            ) +
              el("div", ['class="header"'], name) +
              el("div", ['class="meta"'], desc)
          )
        );
      const divider = el(
        "h2",
        ['class="ui horizontal divider header"'],
        el("i", [`class="${item.icon} icon"`], "") + item.name
      );

      var content = el(
        "div",
        ['class="ui four stackable cards"'],
        item.list
          .map((link) => {
            return card(link.url, link.name, link.desc);
          })
          .join("")
      );

      return el("div", ['class="ui basic segment"'], divider + content);
    })
    .join("");

  return el("main", [], el("div", ['class="ui container"'], main));
}

function renderSeller() {
  const item = (type, content) =>
    el(
      "div",
      ['class="item"'],
      el("i", [`class="${type} icon"`], "") +
        el("div", ['class="content"'], content)
    );
  var title = el(
    "h1",
    ['class="ui yellow dividing header"'],
    el("i", ['class="gem outline icon"'], "") +
      el("div", ['class="content"'], config.sell_info.domain + " 正在出售")
  );
  var action = el(
    "div",
    ['class="actions"'],
    el(
      "div",
      ['class="ui basic cancel inverted button"'],
      el("i", ['class="reply icon"'], "") + "返回"
    )
  );

  var contact = config.sell_info.contact
    .map((list) => {
      return item(list.type, list.content);
    })
    .join("");
  var column = el(
    "div",
    ['class="column"'],
    el(
      "h3",
      ['class="ui center aligned icon inverted header"'],
      el(
        "i",
        ['class="circular envelope open outline grey inverted icon"'],
        ""
      ) + "联系我"
    ) + el("div", ['class="ui relaxed celled large list"'], contact)
  );
  var price = el(
    "div",
    ['class="column"'],
    el(
      "div",
      ['class="ui large yellow statistic"'],
      el(
        "div",
        ['class="value"'],
        el("i", [`class="${config.sell_info.mon_unit} icon"`], "") +
          config.sell_info.price
      )
    )
  );
  var content = el(
    "div",
    ['class="content"'],
    el(
      "div",
      ['class="ui basic segment"'],
      el(
        "div",
        ['class="ui two column stackable center aligned grid"'],
        el("div", ['class="ui inverted vertical divider"'], "感兴趣？") +
          el("div", ['class="middle aligned row"'], price + column)
      )
    )
  );

  return el(
    "div",
    ['id="seller"', 'class="ui basic modal"'],
    title + content + action
  );
}

function renderHTML(index, seller) {
  return (
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="description" content="AHAI Navigation">
        <meta name="keywords" content="AHAI, AHAIGEGE, Navigation, AHAI Navigation">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${config.title} - ${config.subtitle}</title>
  
        <link href="https://cdn.jsdelivr.net/gh/chenkerun2000/cf-worker-dir@0.1.10.1/style.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
  
        <script src="https://cdn.jsdelivr.net/npm/semantic-superhero-ui-css@1.0.10/semantic.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-superhero-ui-css@1.0.10/semantic.min.css">
  
        <link rel="apple-touch-icon" href="https://ysun.site/images/apple-touch-icon.png" sizes="180x180">
        <link rel="icon" href="https://ysun.site/images/favicon.ico">
      </head>
      <body>
        ${index}
        ${config.selling_ads ? seller : ""}
        <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
        <script>
          $('#sengine a').on('click', function (e) {
            $('#sengine a.active').toggleClass('active');
            $(e.target).toggleClass('active');
            $('#search-fav').attr('src',$(e.target).data('url').match(` +
    /https{0,1}:\/\/\S+\// +
    `)[0] + '/favicon.ico') ;
          });
          $('.search').on('click', function (e) {
              var url = $('#sengine a.active').data('url');
              url = url.replace(` +
    /\$s/ +
    `,$('#searchinput').val());
              window.open(url);
          });
          /* 鼠标聚焦时，回车事件 */
          $("#searchinput").bind("keypress", function(){
              if (event.keyCode == 13){
              // 触发需要调用的方法
              $(".search").click();
              }
          });
          $('#menubtn').on('click', function (e) {
              $('#seller').modal('show');
          });
        </script>
      </body>
    </html>`
  );
}
