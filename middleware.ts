import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

// Define public routes that do not require authentication
const publicRoutes = ['/signin', '/signup', '/']; // Include '/' if you want to allow access to the home page

export default async function middleware(req: NextRequest) {
    const token = cookies().get('token'); // Retrieve the token from cookies
    const path = req.nextUrl.pathname; // Get the current path
    const pathIsPublic = publicRoutes.includes(path); // Check if the current path is public

    // Log current state for debugging
    console.log({ token, path, pathIsPublic });

    // If the path is public and the user is authenticated (token is not empty), redirect to the home page
    if (pathIsPublic && token && token.value) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    // If the user is not authenticated and tries to access a non-public route, redirect to '/signup'
    if (!token || !token.value) { // Check if token is empty or not present
        if (!pathIsPublic) {
            return NextResponse.redirect(new URL('/signup', req.url));
        }
    }

    // If none of the conditions are met, allow the request to proceed
    return NextResponse.next();
}

// Configuration for middleware to exclude API and static paths
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|image|icon|.png$).*)'],
};