import "./App.css";
import Header from "./components/header";
import { useState } from "react";

// function HeaderInput({ newName, setNewName }) {
//   return (
//     <div className="header_input_container">
//       <form>
//         <span>
//           <label for="name">Name</label>
//           <input
//             id="name"
//             type="text"
//             value={newName}
//             onChange={(e) => setNewName(e.target.value)}
//           ></input>
//         </span>
//         <span>
//           <label for="title">Title</label>
//           <input id="title" type="text"></input>
//         </span>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

function App() {
  const [newName, setNewName] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newInfo, setNewInfo] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    setNewInfo(() => {
      return { name: newName, title: newTitle };
    });
    setNewName("");
    setNewTitle("");
  }

  return (
    <>
      <div className="header_input_container">
        <form onSubmit={handleSubmit}>
          <span>
            <label for="name">Name</label>
            <input
              id="name"
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Full Name"
            ></input>
          </span>
          <span>
            <label for="title">Title</label>
            <input
              id="title"
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            ></input>
          </span>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Header info={newInfo} />
      <div className="main_body_container">
        <div className="personal_details_container">
          <img className="profile_img"></img>
          <h3 className="pesonal--title">Personal Details</h3>
        </div>
        <div className="description_container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="experience_container">
          <div className="education_container"></div>
          <div className="work_container"></div>
        </div>
      </div>
    </>
  );
}

export default App;
