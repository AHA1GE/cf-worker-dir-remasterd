// 处理请求的函数
const handler: ExportedHandler = {
  async fetch(request: Request, env: any) {
    //从环境变量中获取favicon获取器
    const getter = env.faviconGetter;
    // 构造 HTML 页面
    const html_FINAL = renderHTML(getter);
    return new Response(html_FINAL, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};

export default handler;
/**
 * 生成 HTML 页面的函数
 * @param getter  用于获取favicon的api链接
 * @returns {string}  以字符串返回的页面
 * @description 该函数会生成一个 HTML 页面。
 **/
function renderHTML(getter: string): string {
  const staticHTML: string = generateStaticHTML();
  const dynamicJS: string = generateDynamicJS();
  const dynamicCSS: string = generateDynamicCSS();
  let html = staticHTML.replace('<script src="/dynamic.js"></script>', `<script>${dynamicJS}</script>`);
  html = html.replace('<style src="/dynamic.css"></style>', `<style>${dynamicCSS}</style>`);
  return html;
}
// 生成 HTML 静态部分的函数
function generateStaticHTML(): string {
  return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Ahai's Index</title>
        </head>
        <body>
          <header id="top-part-of-html"></header>
          <main id="main-part-of-html"></main>
          <footer><div class="footer">Powered by<a class="ui label" href="https://github.com/AHA1GE/cf-worker-dir-remasterd" target="_blank" rel="noopener"><i class="github icon"></i>Cf-Worker-Dir</a> © Based on<a class="ui label"><i class="balance scale icon"></i>MIT License</a></div></footer>
  
          <script src="/dynamic.js"></script>
          <style src="/dynamic.css></style>
        </body>
      </html>
    `;
}

// 生成用于更新动态 div 的 JavaScript 的函数
function generateDynamicJS() {
  // 存储用于更新动态 div 的 JavaScript 的静态部分的常数
  const staticJS = `window.addEventListener('load', () => {
        const topPartOfHtml = document.getElementById('top-part-of-html');
        const mainPartOfHtml = document.getElementById('main-part-of-html');
  
        topPartOfHtml.textContent = 'This is the first dynamic div.';
        mainPartOfHtml.textContent = 'This is the second dynamic div.';
      });
      `
  const dynamicJS1 = ``;
  const dynamicJS2 = ``;
  return staticJS.replace(`'This is the first dynamic div.'`, dynamicJS1).replace(`'This is the second dynamic div.'`, dynamicJS2);
}

//生成用于更新动态 css 的函数
function generateDynamicCSS() {
  return `
  `
}


