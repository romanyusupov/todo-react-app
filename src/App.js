import './App.scss';

import Base09 from './components/base09';
import Base11 from './components/base11';

function App() {
  
  //base09
  function montoToStr(num) {
    return num > 12 || num < 1
      ? null
      : 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(',')[
          num - 1
        ];
  }
  const current = new Date(2021, 5, 22);
  const date = `Дата регистрации: ${current.getDate()} ${montoToStr(current.getMonth())} ${current.getFullYear()}`;




  return (
    <div className="App">
      <Base09 name="Вася Пупкин" registredAt={date}></Base09>
      <Base11></Base11>
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

