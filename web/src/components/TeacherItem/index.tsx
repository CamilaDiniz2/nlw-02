import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem(){
    return (
<article className="teacher-item">
<header>
    <img 
      src="https://avatars1.githubusercontent.com/u/60152017?s=460&u=71d1fecfe89f0e73d3728b5135594bdf2959c333&v=4" 
      alt="Camila Diniz"/>
      <div>
          <strong>Camila Diniz</strong>
          <span>Química</span>
      </div>
</header>
<p> Texto texto texto texto texto</p>
<footer>
    <p>Preço/hora:
        <strong>R$ 20,00</strong>
    </p>
    <button type="button">
        <img src={whatsappIcon} alt="whatsapp"/>
        Entrar em contato
    </button>
</footer>
</article>
    )
}

export default TeacherItem;