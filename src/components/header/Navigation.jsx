import React from 'react'
import Github from './Github'
import {Link} from 'react-router-dom'
import translate from '../../shared/translate'
import './Navigation.css'

const Navigation = ({language, setLang, token}) => (
  <header>
    <Github repoUrl="https://github.com/skolakoda/programming-quotes" />
    <nav>
      <Link to="/" replace={true}>Random</Link>
      <Link to="/all-quotes">{translate('ALL_QUOTES')}</Link>
      {token && <Link to="/add-quote">{translate('ADD_QUOTE')}</Link>}
      <Link to="/login">{translate(token ? 'PROFILE' : 'LOGIN')}</Link>
      <div>
        <button
          onClick={() => setLang('en')}
          className={language === 'en' ? 'active' : ''}>ENG</button>
        <button
          onClick={() => setLang('sr')}
          className={language === 'sr' ? 'active' : ''}>SRB</button>
      </div>
    </nav>
  </header>
)

export default Navigation
