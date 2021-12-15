/* About.js contains instructions to using the app. It receives the theme as props*/

const About = ({ theme }) => {
  return (
    <div className={theme === "alt" ? "alt-about" : "About"}>
      <h2>How to use:</h2>
      <p>
        Start by adding a new task by pressing the "Add new" button. <br /> A
        modal will open, where you can add the name, tag and description <br />
        for the said task. Then just add the new todo. After adding todos, you
        can filter them by tags
        <br />
        rearrange them by dragging, mark as done, edit or delete. There is also
        <br /> a search bar that works realtime. It searches matches in the name{" "}
        <br /> of the todo.
      </p>
    </div>
  );
};

export default About;
