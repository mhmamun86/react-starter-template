import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import useAuth from '@/hooks/useAuth';
import { toast } from 'react-toastify';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      theme === 'dark' ? 'light' : 'dark'
    );
    localStorage.setItem('theme', theme);
  }, [theme]);

  function handleSignOut() {
    logOut()
      .then(() => {
        toast.success('Log Out Successfull');
      })
      .catch(error => {
        toast.error(error.message);
      });
  }

  return (
    <nav className="navbar bg-base-200 px-6">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          React Starter V3
        </Link>
      </div>

      <div className="hidden md:flex gap-4">
        <Link to="/" className="btn btn-ghost btn-sm">
          Home
        </Link>
        <Link to="/about" className="btn btn-ghost btn-sm">
          About
        </Link>

        {user && (
          <>
            <Link to="/profile" className="btn btn-ghost btn-sm">
              Profile
            </Link>
          </>
        )}
      </div>

      <div className="flex items-center gap-3">
        <button
          className="btn btn-ghost btn-sm"
          onClick={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
        >
          {theme === 'dark' ? <FiSun /> : <FiMoon />}
        </button>

        <div className="md:hidden">
          <button className="btn btn-square" onClick={() => setOpen(!open)}>
            <FiMenu />
          </button>
        </div>

        <div className="ml-4 hidden md:flex">
          {user ? (
            <button className="btn btn-outline btn-sm" onClick={handleSignOut}>
              Sign out
            </button>
          ) : (
            <Link to="/login" className="btn btn-outline btn-sm">
              Login
            </Link>
          )}
        </div>
      </div>

      {open && (
        <div className="absolute right-4 top-16 bg-base-100 p-4 rounded-lg shadow-lg md:hidden">
          <Link to="/" className="block py-1">
            Home
          </Link>
          <Link to="/about" className="block py-1">
            About
          </Link>
          {user && (
            <Link to="/dashboard" className="block py-1">
              Dashboard
            </Link>
          )}
          {user && (
            <Link to="/profile" className="block py-1">
              Profile
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
