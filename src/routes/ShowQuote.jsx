import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './ShowQuote.css'

class ShowQuote extends Component {
  render() {
    const id = this.props.match.params.id
    const { language, allQuotes, password } = this.props
    const quote = allQuotes.find(q => q._id === id)
    if (!quote) return null

    const author = quote.autor
    const editLink = `/edit-quote/${id}`
    const authorLink = `/author/${author}`

    return (
      <main className="single-quote">
        <h1>
          {quote[language]} &nbsp;
          {password && <Link to={editLink}><span className="edit-icon">&#9998;</span></Link>}
        </h1>
        <h3> — <Link className="no-link" to={authorLink}>{author}</Link></h3>
      </main>
    )
  }
}

export default ShowQuote
