import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Pearson Independant Advisors</span>
              <span>Financial Planners</span>
            </h1>
            <h2>Contact Us Today</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 Pearson Independant Advisors</p>
      </footer>
    </div>
  )
}