// Just an example. Not needed for this app
import { NextResponse } from "next/server";

export function middleware(request) {
  //console.log(request);
  return NextResponse.next();
}

// Set up filters for the request
export const config = {
  matcher: "/news",
};
