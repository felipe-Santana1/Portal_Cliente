import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get('isAuthenticated')?.value === 'true';
  const isAuthPage = request.nextUrl.pathname.startsWith('/auth');
  const isHomePage = request.nextUrl.pathname === '/';

  // Se está na home e não está autenticado, redirecionar para login
  if (isHomePage && !isAuthenticated) {
    return NextResponse.redirect(new URL('/auth/sign-in', request.url));
  }

  // Se está na home e está autenticado, redirecionar para calendar
  if (isHomePage && isAuthenticated) {
    return NextResponse.redirect(new URL('/calendar', request.url));
  }

  // Se não está autenticado e não está na página de auth, redirecionar para login
  if (!isAuthenticated && !isAuthPage) {
    return NextResponse.redirect(new URL('/auth/sign-in', request.url));
  }

  // Se está autenticado e tenta acessar página de auth, redirecionar para calendar
  if (isAuthenticated && isAuthPage) {
    return NextResponse.redirect(new URL('/calendar', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images).*)'],
};
