import React from "react";
import { connect } from "react-redux";
import styles from "./CardDetails.module.scss";

const CardDetails = props => {
  const card = props.card;
  return (
    <div className={styles.container}>
      {card ? (
        <div className={styles.imageDisplayed}>
          <h1>{card.name}</h1>
          <a href={card.imageUrl} target="_blank">
            <img src={card.imageUrl} alt={card.name} />
          </a>
          <div className={styles.dataContainer}>
            <span>Type:</span>
            <p>{card.type}</p>
            <span>Mana cost:</span> <p>{card.manaCost}</p>
            <span>CMC:</span> <p>{card.cmc}</p>
            <span>Rules text:</span> <p>{card.text}</p>
            <span>Original text:</span> <p>{card.originalText}</p>
            <span>Flavour text:</span>{" "}
            <p className={styles.flavour}>{card.flavor}</p>
            <span>Printings:</span>{" "}
            <p className={styles.printContainer}>
              {card.printings.map(set => {
                return (
                  <span key={set} className={styles.printings}>
                    {set}
                  </span>
                );
              })}
            </p>
            <span>Artist:</span> <p>{card.artist}</p>
            <span>Legality:</span>{" "}
            <p>
              {card.legalities.map(legal => {
                return (
                  <span key={legal.format} className={styles.legalities}>
                    - {legal.format} -
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      ) : (
        <div className={styles.noImage}>
          <h1>No results to display</h1>
          <p>Please go back to search</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const card = state.search.results.filter(card => card.id === ownProps.id)[0];
  return {
    card
  };
};

export default connect(mapStateToProps)(CardDetails);
