import "./navbar.scss";
export default function Navbar() {
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Estate-Exchange</span>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/agents">Agents</a>
      </div>
      <div className="right">
        <a href="/">Sign In</a>
        <a href="/" className='register'>Sign up</a>
      </div>
    </nav>
  );
}
