export function onRequest(context) {
 console.log("adv log");
  return new Response(JSON.stringify(context.params.catchall) + "hello for adv.php")
}
