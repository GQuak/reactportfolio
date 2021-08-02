import React from "react";

const styles = {
  img: {
    height: 150,
  },
  card: {
    width: "20rem",
    margin: 20,
  },
};

function Project(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-xs-12 col-sm-10">
          <hr />
          <div className="card-container" id="portfolio">
            <h1 className="header">Portfolio</h1>
            <hr />
            <div className="row">
              {props.projects.map((project) => (
                <div className="col-sm-4" key={project.id}>
                  <div className="card" style={styles.card}>
                    <img
                      src={project.image}
                      style={styles.img}
                      className="card-img-top"
                      alt={project.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{project.name}</h5>
                      <p className="card-text">{project.description}</p>
                      <div className="row">
                        <div className="col-6">
                          <a
                            href={project.deployed}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary"
                            id="btn-see-app"
                          >
                            See the app
                          </a>
                        </div>
                        <div className="col-6">
                          <a
                            href={project.repo}
                            className="btn btn-primary"
                            id="btn-see-repo"
                          >
                            View the repo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Project;
