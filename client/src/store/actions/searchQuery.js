const mtg = require("mtgsdk");

const queryStarted = () => {
  console.log("query started");
  return {
    type: "QUERY_STARTED"
  };
};

const addQueryResult = res => {
  console.log("query success", res);
  return {
    type: "ADD_QUERY_RESULTS",
    payload: {
      ...res
    }
  };
};

const queryError = err => {
  return {
    type: "QUERY_ERROR",
    payload: {
      err
    }
  };
};

export const searchQuery = query => {
  return dispatch => {
    dispatch(queryStarted());
    const colors = query.colors.filter(color => color !== "noOtherColor");
    mtg.card
      .where({
        name: `${query.cardName}`,
        colors: `${colors}`,
        rarity: `${query.rarity}`,
        types: `${query.type}`,
        subtypes: `${query.subType}`,
        cmc: `${query.cmc}`
      })
      .then(res => {
        const cb = o => o.name;
        return {
          results: [
            ...res
              .filter(card => {
                if (
                  card.colors.every(c => colors.includes(c)) === false &&
                  query.colors.includes("noOtherColor")
                ) {
                  return null;
                } else {
                  return card;
                }
              })
              .sort((a, b) => {
                let A = a.name.toUpperCase();
                let B = b.name.toUpperCase();
                if (A < B) {
                  return -1;
                }
                if (A > B) {
                  return 1;
                } else {
                  return 0;
                }
              })
              .filter(card => {
                if (query.colorless === true && card.colors.length > 0) {
                  return null;
                } else {
                  return card;
                }
              })
              .filter(card => {
                if (card.imageUrl !== undefined) {
                  return card;
                } else {
                  return null;
                }
              })
              .reduce((map, item) => {
                const key = cb(item);

                map.has(key) || map.set(key, item);

                return map;
              }, new Map())
              .values()
          ]
        };
      })
      .then(res => {
        dispatch(addQueryResult(res));
      })
      .catch(err => {
        console.log("err", err);
        dispatch(queryError(err));
      });
  };
};
