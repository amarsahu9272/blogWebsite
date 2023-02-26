import React from "react";
import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

import "./Write.css";

function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("http://localhost:5000/api/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>

    // <div className="write">
    //   <img
    //     className="writeImg"
    //     src="https://www.logicplanet.com/wp-content/uploads/2021/08/logic-planet-blog-banner.jpg"
    //     alt=""
    //   />
    //   <form className="writeForm">
    //     <div className="writeFormGroup">
    //       <label htmlFor="fileInput">
    //         <i className="writeIcon fas fa-plus"></i>
    //       </label>
    //       <input id="fileInput" type="file" style={{ display: "none" }} />
    //       <input
    //         className="writeInput"
    //         placeholder="Title"
    //         type="text"
    //         autoFocus={true}
    //       />
    //     </div>
    //     <div className="writeFormGroup">
    //       <textarea
    //         className="writeInput writeText"
    //         placeholder="Tell your story..."
    //         type="text"
    //         autoFocus={true}
    //       />
    //     </div>
    //     <button className="writeSubmit" type="submit">
    //       Publish
    //     </button>
    //   </form>
    // </div>
  );
}

export default Write;
