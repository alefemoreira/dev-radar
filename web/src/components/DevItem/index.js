import React from 'react';
import './styles.css';

function DevItem(props) {
    const { dev } = props;
    return (
        <li className="dev-item">
            <header>
            <img src={dev.avatar_url} alt={dev.name}/>
            <div className="userinfo">
                <strong>{dev.name}</strong>
                <br></br>
                <span>{dev.techs.join(', ')}</span>
            </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil no Github</a>
        </li>
    );
}

export default DevItem;