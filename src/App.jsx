import styles from './App.module.css'
import './global.css'

import { Header } from "./components/Header"
import {Post } from './Post';
import { Sidebar } from './components/Sidebar';

export function App() {
 return (
  <div>
    <Header />

    <div className={styles.wrapper}>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <Post 
          author='Antonio carlos'
          content='jose jose jose jose jose jose jose jose jose jose jose'
        />
        <Post 
        author='Antonio carlos'
        content='jose jose jose jose jose jose jose jose jose jose jose'
        />
      </main>
    </div>
      
  </div>
  
 )
}
