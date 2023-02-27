import Head from 'next/head';
import styles from '../../../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </nav>

      <div className="container">
        <div className="slider">
          <ul>
            <li>
              <a href="#">Item 1</a>
            </li>
            <li>
              <a href="#">Item 2</a>
            </li>
            <li>
              <a href="#">Item 3</a>
            </li>
            <li>
              <a href="#">Item 4</a>
            </li>
            <li>
              <a href="#">Item 5</a>
            </li>
          </ul>
        </div>

        <div className="content">
          <h1>Welcome to the Dashboard</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod mi sed lacus fermentum, vitae tristique nulla sodales.
            Suspendisse scelerisque lobortis velit, quis tempor orci auctor
            eget. Sed aliquet lorem a odio tempus aliquet. Nam non enim non nibh
            dictum pretium ut id mauris. Nunc varius sed odio a lacinia. Sed id
            tristique sapien. Donec euismod vestibulum nunc ut sagittis.
          </p>
        </div>
      </div>
    </>
  );
}
