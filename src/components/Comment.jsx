import { Trash, ThumbsUp } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/60106864?v=4" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Antonio Carlos</strong>
            <time title='17 de Julho às 12:00' dateTime='2022-07-17 12:01:00'>Publicado há 1h</time>
          </div>

          <button title='Deletar comnetário'>
            <Trash size={20}/>
          </button>
        </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
    
  )
}