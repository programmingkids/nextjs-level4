import Link from 'next/link';

export const NavLinks = () => {
  console.log('This is navLinks');
  return (
    <>
      <Link href="/red" className="m-4 text-indigo-500 underline">
        Red
      </Link>
      <Link href="/blue" className="m-4 text-indigo-500 underline">
        Blue
      </Link>
    </>
  );
};
