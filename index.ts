//声明 FetchEvent 和 Response 类型
// declare global {
//   interface FetchEvent extends Event {
//     request: Request;
//     respondWith(response: Promise<Response> | Response): void;
//   }
// }

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
          <style></style>
        </body>
      </html>
    `;
}

// 生成用于更新动态 div 的 JavaScript 的函数
function generateDynamicJS(): string {
  return `
      window.addEventListener('load', () => {
        const topPartOfHtml = document.getElementById('top-part-of-html');
        const mainPartOfHtml = document.getElementById('main-part-of-html');
  
        topPartOfHtml.textContent = 'This is the first dynamic div.';
        mainPartOfHtml.textContent = 'This is the second dynamic div.';
      });
    `;
}

// 处理请求的函数
const handler: ExportedHandler = {
  async fetch(request: Request) {
    // 构造 HTML 页面
    const staticHTML: string = generateStaticHTML();
    const dynamicJS: string = generateDynamicJS();
    const html: string = staticHTML.replace('<script src="/dynamic.js"></script>', `<script>${dynamicJS}</script>`);

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};

export default handler;