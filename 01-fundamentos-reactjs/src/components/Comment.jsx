import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
	return (
		<div className={styles.comment}>
			<img src="https://avatars.githubusercontent.com/u/30497608?v=4" />

			<div className={styles.commentBox}>

				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Mattheus Adhonnay</strong>
							<time title='04 de Maio às 09:20:30' dateTime='2023-04-05 09:20:30'>Cerca de 1h atrás</time>
						</div>

						<button title='Deletar comentário'>
							<Trash size={24} />
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
	);
}