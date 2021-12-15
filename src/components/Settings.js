/* Settings.js has the settings of the app which are basically just selecting the color theme.
The Settings component receives the theme and the setTheme props, that allow the component to switch the state
so that theme changes. */

const Settings = ({ setTheme, theme }) => {
  return (
    <div className={theme === "alt" ? "alt-settings" : "Settings"}>
      <h2>Change color theme: </h2>

      <button
        style={{
          background:
            theme === "alt"
              ? "linear-gradient(#fae06e, #976b39)"
              : "linear-gradient(#e264e6, #9198e5)",
        }}
        onClick={() => setTheme("default")}
      >
        Cool Pastel
      </button>
      <button
        style={{
          background:
            theme === "alt"
              ? "linear-gradient(#fae06e, #976b39)"
              : "linear-gradient(#e264e6, #9198e5)",
        }}
        onClick={() => setTheme("alt")}
      >
        Gold
      </button>
    </div>
  );
};

export default Settings;
