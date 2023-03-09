import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Achieve-Mints Metadata Server</title>
      </Head>
      <main>
        <div>
          <p>
            Hi, how did you end up here? You probably want to view NFT metadata at /api/[tokenid]
          </p>
        </div>
      </main>
    </>
  )
}
