import React from "react";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const Footer = () => {
  const today = new Date();
  const { posts } = useContext(DataContext);

  return (
    <footer className="Footer">
      <p className="postCount">{posts.length} Blog Posts</p>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
