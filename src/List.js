import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import Buttons from "./Buttons";

function List({ people, index, setIndex }) {
  return (
    <section className="section">
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt="name" className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <Buttons index={index} setIndex={setIndex} />
      </div>
    </section>
  );
}

export default List;
