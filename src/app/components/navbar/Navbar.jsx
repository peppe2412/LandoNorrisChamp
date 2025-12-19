import Link from "next/link";
import Hamburger from "./hamburger/Hamburger";
import MaclarenLogo from "./maclarenLogo/MaclarenLogo";
import styles from "./css/style.module.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-200 shadow-sm">
        <div className="inline lg:hidden">
          <Hamburger></Hamburger>
        </div>
        <div className="box-link-main">
          <Link className="btn btn-ghost p-0" href={"/"}>
            <MaclarenLogo></MaclarenLogo>
          </Link>
        </div>
        <div className="flex-none lg:inline hidden">
          <ul className={`menu menu-horizontal px-1 ${styles.nav_links}`}>
            <li>
              <a href="#details">Dettagli</a>
            </li>
            <li>
              <a>Link</a>
            </li>
            <li>
              <a>Link</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
