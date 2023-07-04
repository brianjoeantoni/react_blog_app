import React from "react";
import Feed from "./Feed";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const Home = () => {
  const { searchResults, fetchError, isLoading } = useContext(DataContext);
  const msg = `${fetchError} \nPlease run: "npx json-server -p 3500 -w data/db.json" on VSCode`;


  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading posts...</p> }
      {!isLoading && fetchError && <p className="statusMsg" style={{color: "red"}}>{msg}</p> }
      {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults}/> : <p className="statusMsg">No posts to display.</p> )}
    </main>
  );
};

export default Home;
