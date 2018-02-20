import React from 'react'
import Filters from './Filters'
import Authors from './Authors'
import './Sidebar.css'

const Sidebar = ({ authorImages, authors, setPhrase, setAuthor, filterAuthors }) => (
  <aside className="sidebar">
    <div className="sidebar-inner">
      <Filters setPhrase={setPhrase} setAuthor={setAuthor} filterAuthors={filterAuthors} />
      <Authors authorImages={authorImages} authors={authors} setAuthor={setAuthor} />
    </div>
  </aside>
)

export default Sidebar