'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BrandLogo } from '@/components/icons/BrandLogo';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Container } from '@/components/ui/Container';
import { btnPrimary } from '@/utils/styles';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/properties', label: 'Properties' },
];

const ADD_PROPERTY_HREF = '/properties/add';

const isActiveLink = (pathname: string, href: string): boolean => {
  if (href === '/') {
    return pathname === '/';
  }

  if (href === '/properties') {
    return (
      pathname === '/properties' ||
      (pathname.startsWith('/properties/') && !pathname.startsWith(ADD_PROPERTY_HREF))
    );
  }

  return pathname === href || pathname.startsWith(`${href}/`);
};

const desktopLinkClassName = (isActive: boolean): string => {
  const base =
    'text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 rounded-md px-1 py-0.5';

  return isActive
    ? `${base} text-indigo-600`
    : `${base} text-slate-600 hover:text-indigo-600`;
};

const mobileLinkClassName = (isActive: boolean): string => {
  const base =
    'block rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200';

  return isActive
    ? `${base} bg-indigo-600 text-white shadow-sm`
    : `${base} text-slate-600 hover:bg-slate-100 hover:text-slate-900`;
};

export const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <Container as="nav" className="flex items-center justify-between py-4" aria-label="Main navigation">
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-90"
          onClick={closeMobileMenu}
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm transition-all duration-200 group-hover:bg-indigo-700 group-hover:shadow-md"
            aria-hidden="true"
          >
            <BrandLogo />
          </span>
          <span className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
            Real Estate CRUD
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={desktopLinkClassName(isActiveLink(pathname, link.href))}
                aria-current={isActiveLink(pathname, link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <ButtonLink href={ADD_PROPERTY_HREF} variant="primary">
            Add Property
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl p-2.5 text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 md:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </Container>

      {isMobileMenuOpen && (
        <div id="mobile-menu" className="border-t border-slate-200/80 md:hidden">
          <Container className="space-y-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={mobileLinkClassName(isActiveLink(pathname, link.href))}
                onClick={closeMobileMenu}
                aria-current={isActiveLink(pathname, link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href={ADD_PROPERTY_HREF}
              className={`${btnPrimary} mt-2 w-full`}
              onClick={closeMobileMenu}
            >
              Add Property
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
};
