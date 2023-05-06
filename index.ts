//声明 FetchEvent 和 Response 类型
// declare global {
//   interface FetchEvent extends Event {
//     request: Request;
//     respondWith(response: Promise<Response> | Response): void;
//   }
// }

// 生成 HTML 静态部分的函数
function generateStaticHTML() {
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
          <div id="top-part-of-html"></div>
          <div id="main-part-of-html"></div>
          <footer><div class="footer">Powered by<a class="ui label" href="https://github.com/AHA1GE/cf-worker-dir-remasterd" target="_blank" rel="noopener"><i class="github icon"></i>Cf-Worker-Dir</a> © Based on<a class="ui label"><i class="balance scale icon"></i>MIT License</a></div></footer>
  
          <script src="/dynamic.js"></script>
          <style></style>
        </body>
      </html>
    `;
  }
  
  // 生成用于更新动态 div 的 JavaScript 的函数
  function generateDynamicJS() {
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
  async function handleRequest(event : FetchEvent) {
    // 构造 HTML 页面
    const staticHTML = generateStaticHTML();
    const dynamicJS = generateDynamicJS();
    const html = staticHTML.replace('<script src="/dynamic.js"></script>', `<script>${dynamicJS}</script>`);
  
    const response = new Response(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    });
    event.respondWith(response);
  }
  
  addEventListener('fetch', (event) => {
    handleRequest(event);
  });
  