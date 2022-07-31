import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({content, onDeleteComment}) {
  function handleDeleteComment () {
    console.log('delete comment')

    onDeleteComment(content)
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/EngAlexandreD.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Antonio Carlos</strong>
            <time title='17 de Julho às 12:00' dateTime='2022-07-17 12:01:00'>Publicado há 1h</time>
          </div>

          <button onClick={handleDeleteComment} title='Deletar comnetário'>
            <Trash size={24}/>
          </button>
        </header>

          {content}
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