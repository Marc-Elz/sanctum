# Sanctum

A minimal example of logging in to a Vue single-page app with Laravel Sanctum (cookie-based SPA authentication).

Built to practise the authentication flow in isolation: login, logout and fetching the current user.

## Tech stack

PHP 8.4 / Laravel 13, Laravel Sanctum, Vue 3, TypeScript, Vue Router, Tailwind CSS 4, Vite, SQLite

## Getting started

Requires PHP 8.4+, Composer and Node.js.

```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
touch database/database.sqlite
php artisan migrate --seed
composer dev
```

Seeded account: `test@example.com` with password `root`.
