import { useEffect, useState } from "react";

export default function ThemeSwitcher(){
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const savedTheme = localStorage.getItem('darkTheme');
        return savedTheme === 'true' || savedTheme === true;
    });

    useEffect(() => {
        if (isDarkTheme) {
          document.body.classList.add('dark-theme');
        } else {
          document.body.classList.remove('dark-theme');
        }
        localStorage.setItem('darkTheme', isDarkTheme);
      }, [isDarkTheme]);

    const toggleTheme = () => {
         setIsDarkTheme(prevTheme => !prevTheme);
    };

    return(
        <button className="theme-btn" onClick={toggleTheme}>
            {isDarkTheme ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
        </button>
    );
}