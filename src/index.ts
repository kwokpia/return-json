export default {
  async fetch(request) {
    const url = new URL(request.url);

    // 生成一个长度为 16 字节的随机字符串（Base64 编码）
    function getRandomString() {
      const bytes = new Uint8Array(16);
      crypto.getRandomValues(bytes);
      return btoa(String.fromCharCode(...bytes));
    }

    switch (url.pathname) {
      case '/hello':
      case '/world':
        return new Response(getRandomString(), {
          status: 200,
          headers: { 'Content-Type': 'text/plain' },
        });
      default:
        return new Response('Not Found', {
          status: 404,
          headers: { 'Content-Type': 'text/plain' },
        });
    }
  },
};
