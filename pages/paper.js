// @flow

import React from 'react'
import Markdown from 'react-markdown'
import { withRouter } from 'next/router'

import Layout from '../components/Layout'

export default withRouter((props) => (
  <Layout>
   <h1>{props.router.query.title}</h1>
   <div className="markdown">
     <Markdown source={`
        This is our blog post.
        Yes. We can have a [link](/link).
        And we can have a title as well.

        ### This is a title

        And here's the content.
     `}/>
   </div>
  </Layout>
))