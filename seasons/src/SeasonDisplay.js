import React from 'react';

const getSeason = (lat, month) => {
  if(month > 2 && month < 9){
    // summer months
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat < 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = props => {  
  // helper variable
  const season = getSeason(props.lat, new Date().getMonth());
  const text = season === "winter" ? "Burr, it is chilly!" : "ooof, it's is hot!";;

  return (
    <div>
      { text }
    </div>  
    );
};

export default SeasonDisplay;