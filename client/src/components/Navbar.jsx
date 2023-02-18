export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Improvement Center
      </a>
      <ul>
        <li>
          <a href="/features">Features</a>
        </li>

        <li>
          <a href="/about">About</a>
        </li>

        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      {/* Dark theme 
        User profile icon
        Search bar */}
    </nav>
  );
}
