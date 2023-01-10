import React from 'react';

//import './App.scss';

import Chapter2Less8 from './components/chapter2Less8';


const adjectivesArr = [
  "абсолютный",
  "адский",
  "азартный",
  "активный",
  "ангельский",
  "астрономический",
  "баснословный",
  "безбожный",
  "безбрежный",
  "безвозвратный",
  "безграничный",
  "бездонный",
  "бездушный",
  "безжалостный",
  "замечательно",
  "замечательный",
  "записной",
  "запредельный",
  "заядлый",
  "звериный",
  "зверский",
  "зеленый",
  "злой",
  "злостный",
  "значительный",
  "неоспоримый",
  "неотразимый",
  "неоценимый",
  "непередаваемый"
];

const nounsArr = [
  "лгун",
  "день",
  "конь",
  "олень",
  "человек",
  "программист",
  "ребёнок",
  "конец",
  "город",
  "дурак"
];


function App() {

  //chapter2Less8
  const [phrasesArr, setPhrasesArr] = React.useState([]);

  const onClickGenPhrase = () => {
    const currentAdj1 = adjectivesArr[(Math.floor(Math.random() * adjectivesArr.length))];
    const currentAdj2 = adjectivesArr[(Math.floor(Math.random() * adjectivesArr.length))];
    const currentNoun = nounsArr[(Math.floor(Math.random() * nounsArr.length))];
    const currentPhrase = `${currentAdj1} ${currentAdj2} ${currentNoun}`;
    setPhrasesArr((prev) => [...prev, currentPhrase]);
  }

  const clearPhrases = () => {
    setPhrasesArr([]);
  }

  

  return (
    <div className="App">
      <Chapter2Less8 phrasesArr={phrasesArr} genPhrase={onClickGenPhrase} clearPhrases={clearPhrases}></Chapter2Less8>
    </div>
  );
}

export default App;
















//App в виде функционального компонента. ДЗ к Base09
// import React from "react";
// import Base09Func from './components/base09';

// class App extends React.Component {
//   render () {
//     function montoToStr(num) {
//       return num > 12 || num < 1
//         ? null
//         : 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(',')[
//             num - 1
//           ];
//     }

//     const current = new Date(2021, 5, 22);
//     const date = `Дата регистрации: ${current.getDate()} ${montoToStr(current.getMonth())} ${current.getFullYear()}`;
      
//     return (
//       <div className="App">
//         <Base09Func name="Вася Пупкин" registredAt={date}></Base09Func>
//       </div>
//     );  
//   };
// } 

// export default App;
