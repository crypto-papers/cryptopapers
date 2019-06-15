// @flow

import React from 'react';
import Link from 'next/link';

import Layout from 'components/Layout/Layout';

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' },
  ];
}

type Props = {
  post: {
    id: string,
    title: string,
  },
};

const PostLink = ({ post }: Props) => (
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
    <h2>My Blog</h2>
    <code>Test code item</code>
    <ul>
      {getPosts().map(post => (
        <PostLink key={post.id} post={post} />
      ))}
    </ul>
    <h4>Subheader</h4>
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
      literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
      going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
      from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by
      Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
      The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.
    </p>
    <p>
      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32
      and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their exact original
      form, accompanied by English versions from the 1914 translation by H. Rackham.
    </p>
  </Layout>
);

export default Page;
