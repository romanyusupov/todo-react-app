import React from "react"
import './chapter2Less8.css';

const EmptyBlock = () => {

    return (
        <div className="block empty-block"><img src="https://res.cloudinary.com/dfnhxiq6j/image/upload/v1640354646/ghost_lztiyl.png" width="32px" height="32px" alt="Ghost" />
            <h2>Список фраз пустой</h2>
            <p>Чтобы в этом списке появилась фраза, тебе необходимо нажать на кнопку “Сгенерировать”</p>
        </div>
    )
}

const Phrase = ({phrasesArr}) => {

    return (
        <div className="list">

            {
                phrasesArr.map(item => (
                    <div key={item} className="block"><h3>{item}</h3></div>
                ))
            }

        </div>
    )    
}


const Chapter2Less8 = ({ genPhrase, clearPhrases, phrasesArr }) => {
    const [isClear, setIsclear] = React.useState(false);

    const onClickSet = (event) => {
        
        if (event.target.id === 'gen') {
            setIsclear(false);
            genPhrase();
        } else {
            setIsclear(true);
            clearPhrases();
        }
    }
    
    return (
        <div className="wrapper">
            {
                isClear ? <EmptyBlock/> : <Phrase phrasesArr={phrasesArr}/>
            }
            <button onClick={onClickSet} id='gen' className="btn btn_generate">Сгенерировать</button>
            <button onClick={onClickSet} className="btn btn_clear">Очистить</button>
        </div>
    );
}

export default Chapter2Less8;

