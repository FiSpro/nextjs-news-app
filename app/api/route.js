// Just an example. Not needed for this app
export function GET(request) {
  // return Response.json();
  console.log(request);
  return new Response("Hello!");
}
