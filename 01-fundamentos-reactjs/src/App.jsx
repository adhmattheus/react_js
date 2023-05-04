import { Post } from './Post';
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

export default function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />        <main>
          <Post
            author="Mattheus Adhonnay"
            content="Vitória do Palmeiras no Equador espanta risco de susto na Libertadores"
          />
          <Post
            author="Lafera Cothito"
            content="Título do Ceará sobre o Sport nos pênaltis reforça 'maldição' dos mandantes"
          />
        </main>
      </div>
    </div>
  );
}