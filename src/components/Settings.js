const Settings = ({ setTheme }) => {
  return (
    <div>
      <button onClick={() => setTheme("default")}>Default color theme</button>
      <button onClick={() => setTheme("alt")}>Alternative</button>
    </div>
  );
};

export default Settings;
