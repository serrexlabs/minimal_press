---
title: "Dark Mode Support"
description: "Learn about the built-in dark mode functionality"
date: 2024-01-15
tags: ["features", "dark-mode", "theming"]
author: "Blog Author"
---

# Dark Mode Support

The minimal blog theme comes with built-in dark mode support that automatically adapts to your system preferences.

## How It Works

The dark mode implementation uses:

- CSS custom properties for theming
- LocalStorage for preference persistence
- System preference detection
- Smooth transitions between themes

## Manual Toggle

Users can manually toggle between light and dark modes using the theme toggle button in the sidebar.

## Customization

You can customize the dark mode colors by modifying the CSS variables:

```css
.dark {
  --bg: #1a1a1a;
  --text: #ffffff;
  --accent: #007acc;
}
```

## Accessibility

The dark mode implementation follows accessibility best practices:
- High contrast ratios
- Reduced motion support
- Proper focus indicators