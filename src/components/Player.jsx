import { useState } from 'react';
import EditButton from './EditButton';
export default function ({initialName, symbol, isActive, onChangeName}){
    const [playerName, setPlayerName] = useState(initialName);
const [ isEditing, setIsEditing ] = useState(false);

function handleEditClick() {
  setIsEditing((isEditing) => {
    if (isEditing) {
      onChangeName(symbol, playerName);
    }

    return !isEditing;
  });
}


function handleChange(inputEvent) {
setPlayerName(inputEvent.target.value);
}
    return (
    <li className={ isActive ? 'active' : undefined}>
            <span className="player">
              {!isEditing && <span className="player-name">{playerName}</span>}
              {isEditing ? (<input type="text" required value={playerName} onChange={handleChange}/>) : null}
              {/*onChange trigger su ogni modifica fatta a input, che sia un pulsante o un incolla */}
              <span className="player-symbol">{symbol}</span>
            </span>
        <EditButton  onClick={handleEditClick}>{!isEditing ? 'Edit' : 'Save'}</EditButton>
          {/*(isEditing ? false : true) con questa ternaria stiamo dicendo che se IsEditing è vera passiamo false
           altrimenti passiamo true . Nella arrow ci sta la versione semplificata che inverte il valore*/}
          </li>
    );
}