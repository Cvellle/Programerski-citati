import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AllQuotes from '../routes/AllQuotes'
import Author from '../routes/Author'
import EditQuote from '../routes/EditQuote'
import ShowQuote from '../routes/ShowQuote'
import RandomQuote from '../routes/RandomQuote'
import Login from '../routes/Login'
import Profile from '../routes/Profile'
import Auth from '../routes/Auth'

const Router = () => (
  <Switch>
    <Route path='/add-quote' component={EditQuote} />
    <Route path='/edit-quote/:id' component={EditQuote} />
    <Route path='/quote/:id' component={ShowQuote} />
    <Route path='/login' component={Login} />
    <Route path='/profile' component={Profile} />
    <Route path='/auth/:service/:token' render={Auth} />
    <Route path='/author/:name' component={Author} />
    <Route path='/all-quotes' render={() => <AllQuotes/>} />
    <Route path='/' component={RandomQuote} />
  </Switch>
)

export default Router
