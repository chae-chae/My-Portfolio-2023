import { Link } from "gatsby";
import React, { ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
  title: string;
}

export default function Layout({ children, title }: ILayoutProps) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-me">About Me</Link>
          </li>
          <li>
            <Link to="https://github.com/chae-chae">Github</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{title}</h1>
        {children}
      </main>
    </div>
  );
}
