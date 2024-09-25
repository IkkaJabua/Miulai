import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";


const publicRoutes = ['/signin', '/signup']

export default async function middleware(req: NextRequest) {
    // NextResponse.redirect('/')
    // console.log(cookies().get('token'));
    // console.log('ddd');

    const token = cookies().get('token');
    const path = req.nextUrl.pathname
    
    const pathIsPublic = publicRoutes.includes(path)

    if(/*path === '/signin'*/ pathIsPublic && token) { 
      return  NextResponse.redirect(new URL('/', req.url))
    }

    if(!token && !pathIsPublic /*path !== '/signin'*/) {
      
        return NextResponse.redirect(new URL('/signin', req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|image|icon|.png$).*)'],
} 