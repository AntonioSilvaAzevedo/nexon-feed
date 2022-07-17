import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img style={styles.avatar} src="https://avatars.githubusercontent.com/u/60106864?v=4" />
          <div className={styles.author}>
            <strong>Antonio Carlos</strong>
            <span>Web developer</span>
          </div>
        </div>

        <time title='17 de Julho às 12:00' dateTime='2022-07-17 12:01:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="#">jane.design/doctorcare</a></p>
        <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
}