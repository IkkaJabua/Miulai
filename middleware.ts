
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicRoutes = ['/signin', '/signup'];


export default async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const cookie = request.cookies.get('token')

    const token = cookie?.value;
    const pathIsPublic = publicRoutes.includes(path);


    if (pathIsPublic && token) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (!token && !pathIsPublic) {
        return NextResponse.redirect(new URL('/signin', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!api|static|.*\\..*|_next).*)"
        // '/((?!api|_next/static|images|icons|searchIcon|_next/image|.\.png$).)',
    ],
};