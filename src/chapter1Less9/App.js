import React from "react";

import "./index.css";

import Base09 from "./components/chapter1Less9";

function App() {
  //base09
  function montoToStr(num) {
    return num > 12 || num < 1
      ? null
      : "январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь".split(
          ","
        )[num - 1];
  }
  const current = new Date(2021, 5, 22);
  const date = `Дата регистрации: ${current.getDate()} ${montoToStr(
    current.getMonth()
  )} ${current.getFullYear()}`;

  return (
    <div className="App">
      <Base09 name="Вася Пупкин" registredAt={date}></Base09>
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
