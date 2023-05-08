import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ content, onDeletComment }) {

	function handleDeletComment() {
		onDeletComment(content);
	}

	return (
		<div className={styles.comment}>

			<Avatar hasBorder={false} src="https://github.com/maykbrito.png" />

			<div className={styles.commentBox}>

				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Mayk Brito</strong>
							<time title='04 de Maio às 09:20:30' dateTime='2023-04-05 09:20:30'>Cerca de 1h atrás</time>
						</div>

						<button
							onClick={handleDeletComment}
							title='Deletar comentário'>
							<Trash size={24} />
						</button>
					</header>

					<p>{content}</p>
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