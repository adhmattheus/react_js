import { Post } from './Post';
import { Header } from './components/Header';
import './global.css';

export default function App() {
  return (
    <div>
      <Header />
      <Post
        author="Mattheus Adhonnay"
        content="Vitória do Palmeiras no Equador espanta risco de susto na Libertadores"
      />

      <Post
        author="Lafera Cothito"
        content="Título do Ceará sobre o Sport nos pênaltis reforça 'maldição' dos mandantes"
      />

    </div>
  )
}