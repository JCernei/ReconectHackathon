import Link from "next/link"

export default function Home() {
  return (
    <div className="container">

      <main className="main">
        <h2 className="title">
          Multi-page website using Next.js
        </h2>

        <div className="grid">
          <Link href="/redirect" >
            <a className="card">
            <h2>Home &rarr;</h2>
            </a>
          </Link>

          <Link href="/calendar" >
          <a className="card">
            <h2>Calendar &rarr;</h2>
            </a>
          </Link>

          <Link
            href="/friends">
            <a className="card">
            <h2>Friends &rarr;</h2>
            </a>
          </Link>

        </div>
      </main>
    </div>
  )
}