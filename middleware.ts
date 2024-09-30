import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const publicRoutes = ['/signin', '/signup', '/']; 

export default async function middleware(req: NextRequest) {
    const token = cookies().get('token');
    const path = req.nextUrl.pathname; 
    const pathIsPublic = publicRoutes.includes(path); 
    console.log({ token, path, pathIsPublic });

    if (pathIsPublic && token) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    if (!token && !pathIsPublic) {
        return NextResponse.redirect(new URL('/signup', req.url));
    }

    return NextResponse.next();
}
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|image|icon|.png$).*)'],
};
