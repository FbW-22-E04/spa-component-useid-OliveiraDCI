import { useId } from "react";

import "./App.css";

function App() {
  const id1 = useId();
  const id2 = useId();
  const id3 = useId();
  return (
    <div className="App">
      <form className="form" action="submit">
        <label htmlFor={id1}>
          First Name <input type="text" name="first-name" id={id1} />
        </label>
        <label htmlFor={id2}>
          Last Name <input type="text" name="last-name" id={id2} />
        </label>
        <label htmlFor={id3}>
          Email <input type="email" name="email" id={id3} />
        </label>
      </form>
    </div>
  );
}

export default App;
