import React from "react";
import "./Card.css";

function Card({
  company,
  logo,
  position,
  new: newFlag,
  featured: featuredFlag,
  postedAt,
  contract,
  location,
  role,
  level,
  languages,
  tools,
  handleCategory,
}) {
  return (
    <article className="card">
      <div className="logo-container">
        <img className="logo" src={logo} alt="company logo" />
      </div>
      <div className="info">
        <header className="info-header">
          <h3 className="info-title">{company}</h3>
          <div className="info-flag" data-visible={newFlag}>
            new!
          </div>
          <div
            className="info-flag info-flag--black"
            data-visible={featuredFlag}
          >
            featured
          </div>
        </header>
        <b>{position}</b>
        <div className="job">
          <span className="job-item">{postedAt}</span>
          <span className="job-item">{contract}</span>
          <span className="job-item">{location}</span>
        </div>
      </div>

      <div className="chips">
        {[role, level, ...languages, ...tools].map((chip) => {
          return (
            <button
              type="button"
              className="chip"
              key={chip}
              onClick={() => handleCategory(chip)}
            >
              {chip}
            </button>
          );
        })}
      </div>
    </article>
  );
}

export default Card;
