import type { NextPage } from 'next'
import Head from 'next/head'
import { CreditCardInput, SquarePaymentsForm } from 'react-square-web-payments-sdk'
import { TokenResult} from '@square/web-sdk'
import styles from '../styles/Home.module.css';

// card number: 4111 1111 1111 1111
// expiration date: any future date
// cvv: 111
// zip code: 94103

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SquarePaymentsForm
        applicationId='sandbox-sq0idb-cxN-liE0_QARd6Yqi5lSOg'
        locationId='LPM3K07P4B4VW'
        cardTokenizeResponseReceived={async (token: TokenResult, buyer) => {
          const response = await fetch('/api/pay', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ sourceId: token.token })
          })
          alert(JSON.stringify(await response.json(), null, 2))
        }}
        >
          <CreditCardInput />
        </SquarePaymentsForm>
     
      </main>

     
    </div>
  )
}

export default Home
