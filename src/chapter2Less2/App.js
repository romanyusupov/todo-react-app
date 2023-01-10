import React from "react";

import Chapter2Less2 from "./components/chapter2Less2";

function App() {
  //base09
//   function montoToStr(num) {
//     return num > 12 || num < 1
//       ? null
//       : "январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь".split(
//           ","
//         )[num - 1];
//   }
//   const current = new Date(2021, 5, 22);
//   const date = `Дата регистрации: ${current.getDate()} ${montoToStr(
//     current.getMonth()
//   )} ${current.getFullYear()}`;

//   //chapter2Less8
//   const [phrasesArr, setPhrasesArr] = React.useState([]);

//   const onClickGenPhrase = () => {
//     const currentAdj1 =
//       adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)];
//     const currentAdj2 =
//       adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)];
//     const currentNoun = nounsArr[Math.floor(Math.random() * nounsArr.length)];
//     const currentPhrase = `${currentAdj1} ${currentAdj2} ${currentNoun}`;
//     setPhrasesArr((prev) => [...prev, currentPhrase]);
//   };

//   const clearPhrases = () => {
//     setPhrasesArr([]);
//   };

  return (
    <div className="App">
      <Chapter2Less2></Chapter2Less2>
    </div>
  );
}

export default App;