export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    console.log(url);
    if (url.pathname.startsWith('/adv')) {
      // TODO: Add your custom /api/* logic here.
      return new Response('Ok');
    }
    // Otherwise, serve the static assets.
    // Without this, the Worker will error and no assets will be served.
    return env.ASSETS.fetch(request);
  },
}
