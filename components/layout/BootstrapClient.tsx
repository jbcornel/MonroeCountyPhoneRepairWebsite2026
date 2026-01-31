'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // Enables navbar collapse, dropdowns, modals, etc.
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null;
}
