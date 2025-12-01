#!/usr/bin/env node
/**
 * Blog System Setup Verification Script
 * Run this to verify all blog system components are properly installed
 */

const fs = require('fs');
const path = require('path');

const checks = [
  {
    name: 'AuthContext.tsx',
    path: 'src/context/AuthContext.tsx',
    critical: true
  },
  {
    name: 'BlogService.ts',
    path: 'src/services/BlogService.ts',
    critical: true
  },
  {
    name: 'AdminLogin.tsx',
    path: 'src/pages/AdminLogin.tsx',
    critical: true
  },
  {
    name: 'AdminDashboard.tsx',
    path: 'src/pages/AdminDashboard.tsx',
    critical: true
  },
  {
    name: 'BlogDetail.tsx',
    path: 'src/pages/BlogDetail.tsx',
    critical: true
  },
  {
    name: 'Blog.tsx (updated)',
    path: 'src/pages/Blog.tsx',
    critical: true
  },
  {
    name: 'App.tsx (updated)',
    path: 'src/App.tsx',
    critical: true
  },
  {
    name: 'Navigation.tsx (updated)',
    path: 'src/components/Navigation.tsx',
    critical: true
  },
  {
    name: 'SitemapGenerator.ts',
    path: 'src/services/SitemapGenerator.ts',
    critical: false
  },
  {
    name: 'Sitemap (updated)',
    path: 'public/sitemap.xml',
    critical: true
  }
];

console.log('\n=== Blog System Setup Verification ===\n');

let allPassed = true;
let criticalFailed = false;

checks.forEach((check) => {
  const fullPath = path.join(__dirname, check.path);
  const exists = fs.existsSync(fullPath);
  
  const status = exists ? '✅ PASS' : '❌ FAIL';
  const type = check.critical ? '[CRITICAL]' : '[OPTIONAL]';
  
  console.log(`${status} ${type} ${check.name}`);
  
  if (!exists) {
    allPassed = false;
    if (check.critical) {
      criticalFailed = true;
    }
  }
});

console.log('\n=== Verification Summary ===\n');

if (allPassed) {
  console.log('✅ All components are properly installed!');
  console.log('\nNext steps:');
  console.log('1. Run: npm install');
  console.log('2. Run: npm run dev');
  console.log('3. Navigate to: http://localhost:8080/admin/login');
  console.log('4. Login with: anoop@atlantisinspection.com / Atlantis9$');
} else if (criticalFailed) {
  console.log('❌ Critical components are missing!');
  console.log('Please ensure all critical files are in place.');
  process.exit(1);
} else {
  console.log('⚠️  Some optional components are missing.');
  console.log('Core functionality should still work, but some features may be limited.');
}

console.log('\n=== Required Dependencies ===\n');

const dependencies = [
  'react',
  'react-router-dom',
  'framer-motion',
  'lucide-react',
  '@tanstack/react-query'
];

console.log('Verify these are in package.json:');
dependencies.forEach(dep => console.log(`  - ${dep}`));

console.log('\n=== File Structure ===\n');
console.log('src/');
console.log('├── pages/');
console.log('│   ├── Blog.tsx (UPDATED)');
console.log('│   ├── BlogDetail.tsx (NEW)');
console.log('│   ├── AdminLogin.tsx (NEW)');
console.log('│   └── AdminDashboard.tsx (NEW)');
console.log('├── services/');
console.log('│   ├── BlogService.ts (NEW)');
console.log('│   └── SitemapGenerator.ts (NEW)');
console.log('├── context/');
console.log('│   └── AuthContext.tsx (NEW)');
console.log('├── components/');
console.log('│   └── Navigation.tsx (UPDATED)');
console.log('└── App.tsx (UPDATED)');

console.log('\n');
