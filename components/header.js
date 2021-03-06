import Link from 'next/link'

const Header = () => (
  <header>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link
          href="/posts/[...slug]"
          as="/posts/2020/first-post/with/catch/all/routes"
        >
          <a>First Post</a>
        </Link>
      </li>
      <li>
        <Link
          href="/posts/[...slug]"
          as="/posts/2020/second-post/with/catch/all/routes"
        >
          <a>Second Post</a>
        </Link>
      </li>
    </ul>
  </header>
)

export default Header