import styles from './Post.module.css'

export function Post() {
	return (
		<>
			<article className={styles.post}>
				<header>
					<div className={styles.author}>
						<img className={styles.avatar} src="https://avatars.githubusercontent.com/u/30497608?v=4" />
						<div className={styles.authorInfo}>
							<strong>Mattheus Adhonnay</strong>
							<span>Web Developer</span>
						</div>
					</div>

					<time title='04 de Maio às 09:20:30' dateTime='2023-04-05 09:20:30'>Publicado há 1h</time>
				</header>

				<div className={styles.content}>
					<p>	Fala galeraa 👋	</p>
					<p>	Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
					<p>👉 <a href="#">jane.design/doctorcare</a></p>
					<p>
						<a href="">#novoprojeto</a>
						<a href=""> #nlw </a>
						<a href="">#rocketseat</a>
					</p>
				</div>

			</article>

			<article className={styles.post}>
				<header>
					<div className={styles.author}>
						<img className={styles.avatar} src="https://avatars.githubusercontent.com/u/30497608?v=4" />
						<div className={styles.authorInfo}>
							<strong>Mattheus Adhonnay</strong>
							<span>Web Developer</span>
						</div>
					</div>

					<time title='04 de Maio às 09:20:30' dateTime='2023-04-05 09:20:30'>Publicado há 1h</time>
				</header>

				<div className={styles.content}>
					<p>	Fala galeraa 👋	</p>
					<p>	Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
					<p>👉 <a href="#">jane.design/doctorcare</a></p>
					<p>
						<a href="">#novoprojeto</a>
						<a href=""> #nlw </a>
						<a href="">#rocketseat</a>
					</p>
				</div>

			</article>
		</>
	);
} 