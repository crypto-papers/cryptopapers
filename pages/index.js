// @flow

import React from 'react';
import Link from 'next/link';

import Featured from 'components/Featured/Featured';
import Layout from 'components/Layout/Layout';
import ResultsGrid from 'components/ResultsGrid/ResultsGrid';

import { mockPost, mockResults } from '../mockdata/mockdata';

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' },
  ];
}

/**
 * Post information used to dynamically set link to post.
 * @typedef PostLinkProps
 * @type {Object}
 * @property {Object} post - Post information
 * @property {string} post.id - The post id
 * @property {string} post.title - The post title
 */
type PostLinkProps = {
  post: {
    id: string,
    title: string,
  },
};

const PostLink = ({ post }: PostLinkProps) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }
    `}</style>
  </li>
);

const Page = () => (
  <Layout>
    <h2>Featured Paper:</h2>
    <Featured paperData={mockPost} />
    <h2 style={{ marginBottom: '0' }}>Latest Uploads:</h2>
    <ResultsGrid results={mockResults} />
    <ul>
      {getPosts().map(post => (
        <PostLink key={post.id} post={post} />
      ))}
    </ul>
  </Layout>
);

export default Page;
