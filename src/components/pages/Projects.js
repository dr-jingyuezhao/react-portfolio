import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
import Project from './Project';
import projects from '../projects.json';

function Projects(props) {
  return (
    <div>
      <h1>Projects Page</h1>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
        mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
        porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
        semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed
        rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      <Link to="project1" role="button" className="btn btn-link">
        Project 1
      </Link>
      <Link to="project2" role="button" className="btn btn-link">
        Project 2
      </Link>
      <Link to="project3" role="button" className="btn btn-link">
        Project 3
      </Link>
      <Link to="project4" role="button" className="btn btn-link">
        Project 4
      </Link>
      <Link to="project5" role="button" className="btn btn-link">
        Project 5
      </Link>
      <Link to="project6" role="button" className="btn btn-link">
        Project 6
      </Link>

      {/* add friend card from class activity 2.7 */}
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>

      <Routes>
        <Route path="learn" element={<Learn />} />
      </Routes>
    </div>
  );
}

export default Projects;
