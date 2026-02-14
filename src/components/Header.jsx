import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <Link to="/" className="text-lg font-semibold tracking-tight text-white">
          SIerリーマンのリアル
        </Link>
        <nav className="flex items-center gap-5 text-sm text-slate-300">
          <NavLink to="/" className="transition hover:text-cyan-300">
            ホーム
          </NavLink>
          <NavLink to="/" className="transition hover:text-cyan-300">
            記事一覧
          </NavLink>
          <NavLink to="/" className="transition hover:text-cyan-300">
            自己紹介
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
