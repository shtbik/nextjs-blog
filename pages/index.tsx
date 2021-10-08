import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi there!</p>
        <p>
          I'm Aleks and I'm Frontend Engineer. Programming is my passion. I
          strive to keep up to date with new developments so that I can do my
          job better.
        </p>
        <h3>☎️ Contact information</h3>
        <p>
          👾 <a href='https://github.com/shtbik'>GitHub</a>
        </p>
        <p>
          🚀 <a href='https://t.me/shtbik'>Telegram</a>
        </p>
        <p>
          🔗 <a href='https://www.linkedin.com/in/shtbik'>LinkedIn</a>
        </p>

        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
