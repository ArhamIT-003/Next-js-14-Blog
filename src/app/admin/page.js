"use client";
import React from "react";
import classes from "./page.module.css";
import FetchData from "@/components/Fetchdata/FetchData";

const Admin = () => {
  const [addBlog, setAddBlog] = React.useState({
    title: "",
    desc: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.container}>
      <div className={classes.fetchedBlog}>
          <FetchData />
          <FetchData />
          <FetchData />
          <FetchData />
          <FetchData />
          <FetchData />
      </div>
      <form onClick={handleClick} className={classes.addBlog}>
        <h1>Add New Blogs</h1>
        <input
          name="title"
          type="text"
          placeholder="Add Title"
          value={addBlog.title}
          onChange={handleChange}
          className={classes.input}
        />
        <input
          name="desc"
          type="text"
          placeholder="Add Description"
          value={addBlog.desc}
          onChange={handleChange}
          className={classes.input}
        />
        <input
          type="date"
          name="date"
          value={addBlog.date}
          onChange={handleChange}
          className={classes.input}
        />
        <button>Add new blog</button>
      </form>
    </div>
  );
};

export default Admin;
