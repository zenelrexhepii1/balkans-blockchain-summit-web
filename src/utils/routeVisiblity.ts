// /utils/routeVisibility.ts

// Exact routes (no dynamic segments)
const hiddenRoutes: string[] = [
    "/register",
    "/become-sponsor",
    "/sponsors",
  ];
  
  // Prefix-based routes (handles dynamic paths like /speakers/1)
  const hiddenPrefixes: string[] = [
    "/speakers",
  ];
  
  // Optional: regex patterns if you want finer control
  const hiddenPatterns: RegExp[] = [
    /^\/register\/?$/,
    /^\/become-sponsor\/?$/,
    /^\/sponsors\/?$/,
    /^\/speakers(\/.*)?$/,
  ];
  
  // Choose ONE strategy (recommended: prefixes + exact routes)
  export function isHiddenRoute(pathname: string): boolean {
    if (!pathname) return false;
  
    // normalize trailing slash
    const normalized = pathname.endsWith("/") && pathname !== "/"
      ? pathname.slice(0, -1)
      : pathname;
  
    if (hiddenRoutes.includes(normalized)) return true;
  
    if (hiddenPrefixes.some((prefix) =>
      normalized.startsWith(prefix)
    )) return true;
  
    return false;
  }