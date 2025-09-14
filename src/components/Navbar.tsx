import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GraduationCap, Building2, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from './ThemeProvider';

interface NavbarProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated, setIsAuthenticated }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/alumni');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`bg-background border-b border-border sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-md' : 'shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'h-12' : 'h-16'
        }`}>
          {/* Logo */}
          <Link to="/alumni" className="flex items-center space-x-3 group">
            <div className="relative">
              <GraduationCap className={`text-primary group-hover:text-primary/80 transition-all duration-300 ${
                isScrolled ? 'h-6 w-6' : 'h-8 w-8'
              }`} />
              <Building2 className={`text-muted-foreground absolute -top-1 -right-1 transition-all duration-300 ${
                isScrolled ? 'h-2 w-2' : 'h-3 w-3'
              }`} />
            </div>
            <div>
              <span className={`font-bold text-foreground transition-all duration-300 ${
                isScrolled ? 'text-lg' : 'text-xl'
              }`}>
                NEXUS
              </span>
              <div className={`text-muted-foreground -mt-1 transition-all duration-300 ${
                isScrolled ? 'text-xs hidden' : 'text-xs'
              }`}>Alumni Network</div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-1">
            <Link 
              to="/alumni" 
              className={`rounded-lg transition-all duration-300 ${
                isScrolled ? 'px-2 py-1 text-xs' : 'px-3 py-1.5 text-sm'
              } ${
                isActive('/alumni') 
                  ? 'bg-blue-accent text-white' 
                  : 'text-muted-foreground hover:text-blue-accent-text hover:bg-blue-accent-bg'
              }`}
            >
              Alumni Directory
            </Link>
            <Link 
              to="/jobs" 
              className={`rounded-lg transition-all duration-300 ${
                isScrolled ? 'px-2 py-1 text-xs' : 'px-3 py-1.5 text-sm'
              } ${
                isActive('/jobs') 
                  ? 'bg-blue-accent text-white' 
                  : 'text-muted-foreground hover:text-blue-accent-text hover:bg-blue-accent-bg'
              }`}
            >
              Job Board
            </Link>
            <Link 
              to="/events" 
              className={`rounded-lg transition-all duration-300 ${
                isScrolled ? 'px-2 py-1 text-xs' : 'px-3 py-1.5 text-sm'
              } ${
                isActive('/events') 
                  ? 'bg-blue-accent text-white' 
                  : 'text-muted-foreground hover:text-blue-accent-text hover:bg-blue-accent-bg'
              }`}
            >
              Events
            </Link>
            <Link 
              to="/campaigns" 
              className={`rounded-lg transition-all duration-300 ${
                isScrolled ? 'px-2 py-1 text-xs' : 'px-3 py-1.5 text-sm'
              } ${
                isActive('/campaigns') 
                  ? 'bg-blue-accent text-white' 
                  : 'text-muted-foreground hover:text-blue-accent-text hover:bg-blue-accent-bg'
              }`}
            >
              Campaigns
            </Link>
          </div>

          {/* Theme Toggle and Auth Buttons */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <Button
              onClick={toggleTheme}
              variant="outline"
              size="sm"
              className={`border-border hover:bg-accent transition-all duration-300 ${
                isScrolled ? 'h-8 w-8 p-0' : 'h-9 w-9 p-0'
              }`}
            >
              {theme === 'light' ? (
                <Moon className={`transition-all duration-300 ${isScrolled ? 'h-3 w-3' : 'h-4 w-4'}`} />
              ) : (
                <Sun className={`transition-all duration-300 ${isScrolled ? 'h-3 w-3' : 'h-4 w-4'}`} />
              )}
            </Button>
            {isAuthenticated ? (
              <Button 
                onClick={handleLogout} 
                variant="outline"
                className={`transition-all duration-300 ${
                  isScrolled ? 'text-xs px-2 py-1' : 'text-sm px-3 py-1.5'
                }`}
              >
                Logout
              </Button>
            ) : (
              <>
                <Link to="/login">
                  <Button 
                    variant="outline"
                    className={`transition-all duration-300 ${
                      isScrolled ? 'text-xs px-2 py-1' : 'text-sm px-3 py-1.5'
                    }`}
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className={`bg-blue-accent hover:bg-blue-accent/90 text-white border-0 transition-all duration-300 ${
                    isScrolled ? 'text-xs px-2 py-1' : 'text-sm px-3 py-1.5'
                  }`}>
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;