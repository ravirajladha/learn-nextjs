'use client'
import Link from 'next/link';
export default function Reviews1Layout({ children }) {
  return (
   <div>
     <nav>
      <ul>
        <li>
          <Link href="/reviews">
        1
          </Link>
        </li>
        <li>
          <Link href="/reviews/review-pages">
          1
          </Link>
        </li>
        <li>
          <Link href="/reviews/page-reviews">
           2
          </Link>
        </li>
        <li>
          <Link href="/contact">
            4
          </Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          background: #333;
          padding: 1rem;
        }
        ul {
          list-style: none;
          display: flex;
          justify-content: space-around;
        }
        li {
          margin: 0 1rem;
        }
        a {
          color: white;
          text-decoration: none;
        }
      `}</style>
    </nav>
    new layout1 header
    {children}
new layout footer
   </div>
  );
}
