const sitemap = require('nextjs-sitemap-generator');
const fs = require('fs');
const path = require('path');

sitemap({
  baseUrl: 'https://sarojkumar.dev',
  pagesDirectory: path.resolve(__dirname, '../out/'),
  targetDirectory: path.resolve(__dirname, '../out/'),
  ignoredExtensions: [
    'js',
    'map',
    'json',
    'xml',
    'png',
    'jpg',
    'jpeg',
    'svg',
    'txt',
  ],
  ignoredPaths: [
    '_next',
    'assets',
    'blog_assets',
    'project',
    '404',
    'favicon',
    'index',
  ],
  extraPaths: ['/'],
  allowFileExtensions: false,
});
