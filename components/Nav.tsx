'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { social } from '@config';
import { Menu, Moon, Sun, X } from 'react-feather';
import IconLogo from './svgs/IconLogo';

import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
} from '@icons-pack/react-simple-icons';

import { notFound, usePathname } from 'next/navigation';

const validPaths = ['/', '/about', '/projects', '/contact', '/resources'];

const Nav = () => {
  const pathname = usePathname();
  const [offsetY, setOffSetY] = useState(0);
  const [darkTheme, setDarkTheme] = useState<boolean | null>(null);

  if (!validPaths.includes(pathname)) {
    notFound();
  }

  const navBackdrop = useRef<HTMLDivElement>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleScroll = () => {
    setOffSetY(window.pageYOffset);
  };

  useEffect(() => {
    // SET THEME BASED ON PREVIOUS CHOICE
    const themePref = window.localStorage.getItem('dark-theme');

    themePref && (themePref === 'true' || themePref === 'false')
      ? setDarkTheme(JSON.parse(themePref))
      : window.localStorage.setItem('dark-theme', JSON.stringify(darkTheme));

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkTheme)
      window?.document?.querySelector(':root')?.classList?.add('dark');
    else window?.document?.querySelector(':root')?.classList.remove('dark');

    window.localStorage.setItem('dark-theme', JSON.stringify(darkTheme));
  }, [darkTheme]);

  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`z-30 fixed top-0 w-full h-20 grid grid-cols-[1fr,auto,1fr] items-center px-8 border-b-gray-300 dark:border-b-gray-700 ${
          offsetY > 80
            ? `bg-gray-50/20 dark:bg-gray-700/20 border-b backdrop-blur-sm`
            : `bg-transparent border-b !border-b-transparent`
        } transition-colors duration-200 `}
      >
        <div className="md:hidden">
          <button
            type="button"
            className="p-2.5 rounded-2xl flex items-center font-light tracking-wide mr-2 dark:bg-transparent border-2 border-transparent focus:border-gray-800 dark:focus:border-gray-100 outline-none"
            onClick={() => {
              setIsNavOpen(true);
            }}
          >
            <Menu
              className="icon text-gray-900 dark:text-white"
              strokeWidth={2.5}
            />
          </button>
        </div>

        {validPaths.includes(pathname) ? (
          <ul className="hidden md:flex md:items-center gap-1">
            <li>
              <Link
                href={`/`}
                className={`nav_link ${pathname === '/' ? 'active' : ''}`}
              >
                <span className="material-symbols-rounded">house</span>
                <span className="slide_hide hm">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href={`/about`}
                className={`nav_link ${pathname === '/about' ? 'active' : ''}`}
              >
                <span className="material-symbols-rounded">badge</span>
                <span className="slide_hide ab">About</span>
              </Link>
            </li>
            <li>
              <Link
                href={`/projects`}
                className={`nav_link ${
                  pathname === '/projects' ? 'active' : ''
                }`}
              >
                <span className="material-symbols-rounded">
                  social_leaderboard
                </span>
                <span className="slide_hide pj">Projects</span>
              </Link>
            </li>
            <li>
              <Link
                href={`/contact`}
                className={`nav_link ${
                  pathname === '/contact' ? 'active' : ''
                }`}
              >
                <span className="material-symbols-rounded">deskphone</span>
                <span className="slide_hide co">Contact</span>
              </Link>
            </li>
            <li>
              <a
                href={`//blog.sarojkumar.dev`}
                target={`_blank`}
                rel="noreferrer noopener"
                className={`nav_link`}
              >
                <span className="material-symbols-rounded">draw</span>
                <span className="slide_hide bl">Blog</span>
              </a>
            </li>
            <li>
              <Link
                href={`/resources`}
                className={`nav_link ${
                  pathname.startsWith('/resources') ? 'active' : ''
                }`}
              >
                <span className="material-symbols-rounded">
                  tips_and_updates
                </span>
                <span className="slide_hide rs">Resources</span>
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="hidden md:flex md:items-center gap-1">
            <li>
              <a
                href={`/`}
                className={`nav_link ${pathname === '/' ? 'active' : ''}`}
              >
                <span className="material-symbols-rounded">house</span>
                <span className="slide_hide hm">Home</span>
              </a>
            </li>
            <li>
              <a
                href={`/about`}
                className={`nav_link ${pathname === '/about' ? 'active' : ''}`}
              >
                <span className="material-symbols-rounded">badge</span>
                <span className="slide_hide ab">About</span>
              </a>
            </li>
            <li>
              <a
                href={`/projects`}
                className={`nav_link ${
                  pathname === '/projects' ? 'active' : ''
                }`}
              >
                <span className="material-symbols-rounded">
                  social_leaderboard
                </span>
                <span className="slide_hide pj">Projects</span>
              </a>
            </li>
            <li>
              <a
                href={`/contact`}
                className={`nav_link ${
                  pathname === '/contact' ? 'active' : ''
                }`}
              >
                <span className="material-symbols-rounded">deskphone</span>
                <span className="slide_hide co">Contact</span>
              </a>
            </li>
            <li>
              <a
                href={`//blog.sarojkumar.dev`}
                target={`_blank`}
                rel="noreferrer noopener"
                className={`nav_link`}
              >
                <span className="material-symbols-rounded">draw</span>
                <span className="slide_hide bl">Blog</span>
              </a>
            </li>
            <li>
              <a
                href={`/resources`}
                className={`nav_link ${
                  pathname.startsWith('/resources') ? 'active' : ''
                }`}
              >
                <span className="material-symbols-rounded">
                  tips_and_updates
                </span>
                <span className="slide_hide rs">Resources</span>
              </a>
            </li>
          </ul>
        )}

        <IconLogo className="mx-4 w-12 h-12 logo" />

        <ul className="justify-self-end flex items-center gap-4">
          <li className="hidden md:inline-block">
            <a
              href={`https://instagram.com/${social.instagram}`}
              target={`_blank`}
              rel={`noreferrer noopener`}
              className="nav_icon_link"
            >
              <SiInstagram className="w-5 h-5" />
            </a>
          </li>
          <li className="hidden md:inline-block">
            <a
              href={`https://github.com/${social.github}`}
              target={`_blank`}
              rel={`noreferrer noopener`}
              className="nav_icon_link"
            >
              <SiGithub className="w-5 h-5" />
            </a>
          </li>
          <li className="hidden md:inline-block">
            <a
              href={`https://www.linkedin.com/in/${social.linkedin}`}
              target={`_blank`}
              rel={`noreferrer noopener`}
              className="nav_icon_link"
            >
              <SiLinkedin className="w-5 h-5" />
            </a>
          </li>
          <li>
            <button
              type="button"
              className="slide_button !rounded-2xl"
              onClick={() => {
                setDarkTheme((t) => !t);
              }}
              title={darkTheme ? 'Switch to Light' : 'Switch to Dark'}
            >
              <Sun className={`icon ${darkTheme ? `` : `hidden`}`} />
              <Moon className={`icon ${darkTheme ? `hidden` : ``}`} />
              <span className="slide_hide">{darkTheme ? 'Light' : 'Dark'}</span>
            </button>
          </li>
        </ul>
      </nav>
      {/* ---------------------- */}
      {/* --- For Mobile Nav --- */}
      <div
        ref={navBackdrop}
        className={`z-40 fixed top-0 left-0 h-full backdrop-blur-sm md:w-0 overflow-hidden ${
          isNavOpen ? 'w-full' : 'w-0'
        }`}
        onClick={(e) => {
          if (e.target === navBackdrop.current) setIsNavOpen(false);
        }}
      >
        <aside
          className={`max-w-full md:w-0 h-full bg-white dark:bg-gray-700 shadow-md transition-[width] duration-200 overflow-hidden ${
            isNavOpen ? 'w-56' : 'w-0'
          }`}
        >
          <div className="p-4 flex justify-end items-center border-b border-b-gray-200 dark:border-b-gray-600">
            <button
              type="button"
              className="p-1 rounded-xl flex items-center font-light tracking-wide dark:bg-transparent border-2 border-transparent focus:border-gray-500 dark:focus:border-gray-400 outline-none"
              onClick={() => {
                setIsNavOpen(false);
              }}
            >
              <X
                className="text-gray-500 dark:text-gray-400"
                strokeWidth={2.5}
              />
            </button>
          </div>
          <div>
            {validPaths.includes(pathname) ? (
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href={`/`}
                    className={`mobile_nav_link ${
                      pathname === '/' ? 'active' : ''
                    }`}
                    tabIndex={isNavOpen ? 0 : -1}
                  >
                    <span className="material-symbols-rounded">house</span>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/about`}
                    className={`mobile_nav_link ${
                      pathname === '/about' ? 'active' : ''
                    }`}
                    tabIndex={isNavOpen ? 0 : -1}
                  >
                    <span className="material-symbols-rounded">badge</span>
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/projects`}
                    className={`mobile_nav_link ${
                      pathname === '/projects' ? 'active' : ''
                    }`}
                    tabIndex={isNavOpen ? 0 : -1}
                  >
                    <span className="material-symbols-rounded">
                      social_leaderboard
                    </span>
                    <span>Projects</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/contact`}
                    className={`mobile_nav_link ${
                      pathname === '/contact' ? 'active' : ''
                    }`}
                    tabIndex={isNavOpen ? 0 : -1}
                  >
                    <span className="material-symbols-rounded">deskphone</span>
                    <span>Contact</span>
                  </Link>
                </li>
                <li>
                  <a
                    href={`//blog.sarojkumar.dev`}
                    target={`_blank`}
                    rel="noreferrer noopener"
                    className={`mobile_nav_link`}
                    tabIndex={isNavOpen ? 0 : -1}
                  >
                    <span className="material-symbols-rounded">draw</span>
                    <span>Blog</span>
                  </a>
                </li>
                <li>
                  <Link
                    href={`/resources`}
                    className={`mobile_nav_link ${
                      pathname.startsWith('/resources') ? 'active' : ''
                    }`}
                    tabIndex={isNavOpen ? 0 : -1}
                  >
                    <span className="material-symbols-rounded">
                      tips_and_updates
                    </span>
                    <span>Resources</span>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href={`/`}
                    className={`mobile_nav_link ${
                      pathname === '/' ? 'active' : ''
                    }`}
                    tabIndex={isNavOpen ? 0 : -1}
                  >
                    <span className="material-symbols-rounded">house</span>
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`/about`}
                    className={`mobile_nav_link ${
                      pathname === '/about' ? 'active' : ''
                    }`}
                    tabIndex={isNavOpen ? 0 : -1}
                  >
                    <span className="material-symbols-rounded">badge</span>
                    <span>About</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`/projects`}
                    className={`mobile_nav_link ${
                      pathname === '/projects' ? 'active' : ''
                    }`}
                    tabIndex={isNavOpen ? 0 : -1}
                  >
                    <span className="material-symbols-rounded">
                      social_leaderboard
                    </span>
                    <span>Projects</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`/contact`}
                    className={`mobile_nav_link ${
                      pathname === '/contact' ? 'active' : ''
                    }`}
                    tabIndex={isNavOpen ? 0 : -1}
                  >
                    <span className="material-symbols-rounded">deskphone</span>
                    <span>Contact</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`//blog.sarojkumar.dev`}
                    target={`_blank`}
                    rel="noreferrer noopener"
                    className={`mobile_nav_link`}
                    tabIndex={isNavOpen ? 0 : -1}
                  >
                    <span className="material-symbols-rounded">draw</span>
                    <span>Blog</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`/resources`}
                    className={`mobile_nav_link ${
                      pathname.startsWith('/resources') ? 'active' : ''
                    }`}
                    tabIndex={isNavOpen ? 0 : -1}
                  >
                    <span className="material-symbols-rounded">
                      tips_and_updates
                    </span>
                    <span>Resources</span>
                  </a>
                </li>
              </ul>
            )}
          </div>
        </aside>
      </div>
    </>
  );
};

export default Nav;
