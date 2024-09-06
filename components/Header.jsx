
export default function Header({theme}) {
  const [isDark, setIsDark] = theme

  return (
    <header className={`header-container ${isDark ? 'dark' : ''}`}>
        <div className="header-content">
            <h2>Where in the world?</h2>
            <p className="theme-changer" onClick={() =>{
              setIsDark(!isDark)
              localStorage.setItem('isDarkMode', !isDark)
            }}>
                <i className={`fa-regular fa-${isDark ? 'moon' : 'lightbulb'}`}></i> &nbsp;{isDark ? 'Dark' : 'Light'}
            </p>
        </div>
    </header>
  )
}
