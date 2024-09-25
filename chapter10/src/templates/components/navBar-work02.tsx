'use client';

import { NavLinks } from './navLinks';
import { NavSearch } from './navSearch';

export const Navbar = () => {
  console.log('This is navBar');
  return (
    <div className="m-4">
      <NavLinks />
      <NavSearch />
    </div>
  );
};
