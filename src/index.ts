export default {
  async fetch(request) {
    const url = new URL(request.url);

    switch (url.pathname) {
      case '/hello':
        return new Response('hello', {
          status: 200,
          headers: { 'Content-Type': 'text/plain' },
        });
      case '/world':
        return new Response('world', {
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
