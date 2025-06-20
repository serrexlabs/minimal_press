import { getCollection, type CollectionEntry } from 'astro:content';

export interface TreeNavigationItem {
  name: string;
  href: string;
  title: string;
  date?: Date;
}

export interface TreeNavigationFolder {
  name: string;
  expanded: boolean;
  pages: TreeNavigationItem[];
}

export interface TreeNavigation {
  rootPages: TreeNavigationItem[];
  folders: TreeNavigationFolder[];
}

/**
 * Dynamically generate tree navigation from content/blog folder structure
 * Max 2 levels deep: folders -> posts
 */
export async function generateTreeNavigation(): Promise<TreeNavigation> {
  // Get all blog posts
  const blogPosts = await getCollection('blog');
  
  // Sort posts by date (newest first)
  const sortedPosts = blogPosts.sort((a, b) => 
    new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  const rootPages: TreeNavigationItem[] = [];
  const foldersMap = new Map<string, TreeNavigationItem[]>();

  // Process each post and organize by folder structure
  sortedPosts.forEach((post) => {
    const pathParts = post.slug.split('/');
    
    const navigationItem: TreeNavigationItem = {
      name: post.data.title,
      href: `/blog/${post.slug}`,
      title: post.data.title,
      date: new Date(post.data.date)
    };

    if (pathParts.length === 1) {
      // Root level post (no folder)
      rootPages.push(navigationItem);
    } else if (pathParts.length === 2) {
      // Post in a folder (max 2 levels deep)
      const folderName = pathParts[0];
      
      if (!foldersMap.has(folderName)) {
        foldersMap.set(folderName, []);
      }
      
      foldersMap.get(folderName)!.push(navigationItem);
    }
    // Ignore deeper nested paths (more than 2 levels)
  });

  // Convert folders map to array with proper folder metadata
  const folders: TreeNavigationFolder[] = Array.from(foldersMap.entries()).map(([folderName, pages]) => {
    // Sort pages within each folder by date (newest first)
    const sortedPages = pages.sort((a, b) => 
      (b.date?.getTime() || 0) - (a.date?.getTime() || 0)
    );

    return {
      name: formatFolderName(folderName),
      expanded: false, // All folders start collapsed
      pages: sortedPages
    };
  });

  // Sort folders alphabetically
  folders.sort((a, b) => a.name.localeCompare(b.name));

  return {
    rootPages,
    folders
  };
}

/**
 * Format folder name for display (capitalize, replace hyphens with spaces)
 */
function formatFolderName(folderName: string): string {
  return folderName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}


/**
 * Find the active item in the navigation tree
 */
export function findActiveNavigationItem(
  navigation: TreeNavigation, 
  currentPath: string
): { type: 'root' | 'folder', folderIndex?: number, itemIndex?: number } | null {
  // Check root pages
  const rootIndex = navigation.rootPages.findIndex(page => page.href === currentPath);
  if (rootIndex !== -1) {
    return { type: 'root', itemIndex: rootIndex };
  }

  // Check folder pages
  for (let folderIndex = 0; folderIndex < navigation.folders.length; folderIndex++) {
    const folder = navigation.folders[folderIndex];
    const itemIndex = folder.pages.findIndex(page => page.href === currentPath);
    
    if (itemIndex !== -1) {
      return { type: 'folder', folderIndex, itemIndex };
    }
  }

  return null;
}

/**
 * Get breadcrumb path for a navigation item
 */
export function getNavigationBreadcrumbs(
  navigation: TreeNavigation,
  currentPath: string
): Array<{ name: string; href: string }> {
  const breadcrumbs: Array<{ name: string; href: string }> = [
    { name: 'Home', href: '/' }
  ];

  const activeItem = findActiveNavigationItem(navigation, currentPath);
  
  if (!activeItem) {
    return breadcrumbs;
  }

  if (activeItem.type === 'root' && activeItem.itemIndex !== undefined) {
    const item = navigation.rootPages[activeItem.itemIndex];
    breadcrumbs.push({ name: item.name, href: item.href });
  } else if (activeItem.type === 'folder' && 
             activeItem.folderIndex !== undefined && 
             activeItem.itemIndex !== undefined) {
    const folder = navigation.folders[activeItem.folderIndex];
    const item = folder.pages[activeItem.itemIndex];
    
    // Add folder as intermediate breadcrumb (not clickable)
    breadcrumbs.push({ name: folder.name, href: '#' });
    breadcrumbs.push({ name: item.name, href: item.href });
  }

  return breadcrumbs;
}