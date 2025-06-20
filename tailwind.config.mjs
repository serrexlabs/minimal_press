/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        'dark-bg': '#1a1a1a',
        'dark-surface': '#2d2d2d',
        'dark-card': '#363636',
        'dark-text': '#ffffff',
        'dark-text-secondary': '#b3b3b3',
        'dark-text-muted': '#808080',
        'dark-border': '#404040',
        'dark-sidebar-bg': '#242424',
        'dark-sidebar-border': '#404040',
        'dark-sidebar-hover': '#363636',
        'dark-code-bg': '#1e1e1e',
        'dark-code-border': '#404040',
        'dark-code-text': '#d4d4d4',
        
        // Light theme colors
        'light-bg': '#ffffff',
        'light-surface': '#f8f9fa',
        'light-card': '#ffffff',
        'light-text': '#333333',
        'light-text-secondary': '#666666',
        'light-text-muted': '#999999',
        'light-border': '#e1e5e9',
        'light-sidebar-bg': '#f8f9fa',
        'light-sidebar-border': '#e1e5e9',
        'light-sidebar-hover': '#e9ecef',
        'light-code-bg': '#f8f9fa',
        'light-code-border': '#e1e5e9',
        'light-code-text': '#333333',
        
        // Accent colors (same for both themes)
        'accent': '#007acc',
        'accent-hover': '#0066b3',
        'success': '#28a745',
        'warning': '#ffc107',
        'error': '#dc3545',
        
        // Code syntax colors
        'code-keyword-dark': '#569cd6',
        'code-string-dark': '#ce9178',
        'code-comment-dark': '#6a9955',
        'code-keyword-light': '#0000ff',
        'code-string-light': '#a31515',
        'code-comment-light': '#008000',
      },
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      width: {
        'sidebar': '280px',
        'toc': '200px',
      },
      maxWidth: {
        'content': '800px',
        'container': '1400px',
      },
      zIndex: {
        'sidebar': '100',
        'modal': '1000',
      },
      animation: {
        'theme-transition': 'theme-transition 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-right': 'slide-right 0.3s ease-out',
        'slide-left': 'slide-left 0.3s ease-out',
      },
      keyframes: {
        'theme-transition': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.95' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.light-text'),
            '--tw-prose-headings': theme('colors.light-text'),
            '--tw-prose-lead': theme('colors.light-text-secondary'),
            '--tw-prose-links': theme('colors.accent'),
            '--tw-prose-bold': theme('colors.light-text'),
            '--tw-prose-counters': theme('colors.light-text-muted'),
            '--tw-prose-bullets': theme('colors.light-text-muted'),
            '--tw-prose-hr': theme('colors.light-border'),
            '--tw-prose-quotes': theme('colors.light-text'),
            '--tw-prose-quote-borders': theme('colors.light-border'),
            '--tw-prose-captions': theme('colors.light-text-muted'),
            '--tw-prose-code': theme('colors.light-text'),
            '--tw-prose-pre-code': theme('colors.light-code-text'),
            '--tw-prose-pre-bg': theme('colors.light-code-bg'),
            '--tw-prose-th-borders': theme('colors.light-border'),
            '--tw-prose-td-borders': theme('colors.light-border'),
            'maxWidth': 'none',
            'code': {
              'backgroundColor': theme('colors.light-code-bg'),
              'color': theme('colors.light-code-text'),
              'padding': '0.125rem 0.25rem',
              'borderRadius': '0.25rem',
              'fontWeight': '400',
              '&::before': {
                'content': '""',
              },
              '&::after': {
                'content': '""',
              },
            },
            'pre': {
              'backgroundColor': theme('colors.light-code-bg'),
              'border': `1px solid ${theme('colors.light-code-border')}`,
              'code': {
                'backgroundColor': 'transparent',
                'padding': '0',
              },
            },
            'a': {
              'color': theme('colors.accent'),
              'textDecoration': 'none',
              'borderBottom': '1px solid transparent',
              'transition': 'all 0.2s ease',
              '&:hover': {
                'borderBottomColor': theme('colors.accent'),
              },
            },
            'h1': {
              'fontSize': theme('fontSize.4xl'),
              'fontWeight': '700',
              'lineHeight': '1.2',
            },
            'h2': {
              'fontSize': theme('fontSize.3xl'),
              'fontWeight': '600',
              'marginTop': '2rem',
              'lineHeight': '1.3',
            },
            'h3': {
              'fontSize': theme('fontSize.2xl'),
              'fontWeight': '600',
              'marginTop': '1.5rem',
            },
            'h4': {
              'fontSize': theme('fontSize.xl'),
              'fontWeight': '600',
              'marginTop': '1.25rem',
            },
          },
        },
        dark: {
          css: {
            '--tw-prose-body': theme('colors.dark-text'),
            '--tw-prose-headings': theme('colors.dark-text'),
            '--tw-prose-lead': theme('colors.dark-text-secondary'),
            '--tw-prose-links': theme('colors.accent'),
            '--tw-prose-bold': theme('colors.dark-text'),
            '--tw-prose-counters': theme('colors.dark-text-muted'),
            '--tw-prose-bullets': theme('colors.dark-text-muted'),
            '--tw-prose-hr': theme('colors.dark-border'),
            '--tw-prose-quotes': theme('colors.dark-text'),
            '--tw-prose-quote-borders': theme('colors.dark-border'),
            '--tw-prose-captions': theme('colors.dark-text-muted'),
            '--tw-prose-code': theme('colors.dark-text'),
            '--tw-prose-pre-code': theme('colors.dark-code-text'),
            '--tw-prose-pre-bg': theme('colors.dark-code-bg'),
            '--tw-prose-th-borders': theme('colors.dark-border'),
            '--tw-prose-td-borders': theme('colors.dark-border'),
            'code': {
              'backgroundColor': theme('colors.dark-code-bg'),
              'color': theme('colors.dark-code-text'),
            },
            'pre': {
              'backgroundColor': theme('colors.dark-code-bg'),
              'border': `1px solid ${theme('colors.dark-code-border')}`,
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}