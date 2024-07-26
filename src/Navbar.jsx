import NavItem from "./NavItem";

function Navbar({ links }) {
  return (
    <nav className="bg-slate-600 p-2 mb-8 rounded-md">
      <ul className="flex flex-wrap justify-center gap-2">
        {links.map(({ href, item }) => (
          <NavItem key={item} href={href} item={item} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
