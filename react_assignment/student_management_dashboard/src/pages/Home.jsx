import { useState, useEffect } from 'react';

const Welcome = ({ title, subtitle }) => (
  <div className="welcome">
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </div>
);

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored === 'dark';
  });

  useEffect(() => {
    document.body.className = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="theme-switcher">
      <button onClick={toggleTheme}>
        Switch to {isDark ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

const MotivationalQuote = () => (
  <div className="quote">
    <p>"The only way to do great work is to love what you do." - Steve Jobs</p>
  </div>
);

const Home = () => (
  <div className="home">
    <Welcome title="Welcome to Student Management Dashboard" subtitle="Manage your students efficiently" />
    <ThemeSwitcher />
    <MotivationalQuote />
  </div>
);

export default Home;