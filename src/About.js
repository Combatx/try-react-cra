import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1>Halaman About</h1>
      <p>
        Ini adalah halama about, untuk detail ny bisa lihat di halaman di bawah
        ini :
      </p>
      <ul>
        <li>
          <Link to="/about/team">Team</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
