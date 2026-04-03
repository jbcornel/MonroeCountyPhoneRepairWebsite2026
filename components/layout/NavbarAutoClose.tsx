'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function NavbarAutoClose() {
  const pathname = usePathname();

  useEffect(() => {
    const nav = document.getElementById('mcprNav');
    if (!nav || !nav.classList.contains('show')) return;

    // Use Bootstrap's Collapse API if available, otherwise toggle class directly
    const bootstrap = (window as any).bootstrap;
    if (bootstrap?.Collapse) {
      const collapse = bootstrap.Collapse.getOrCreateInstance(nav, { toggle: false });
      collapse.hide();
    } else {
      nav.classList.remove('show');
    }
  }, [pathname]);

  return null;
}
