import Header from './components/Header';
import PostCard from './components/PostCard';

const posts = [
  {
    id: 1,
    title: 'Vite + React でブログを立ち上げるまで',
    excerpt: 'セットアップ時に詰まりやすいポイントと、最初に整えるべき開発環境をまとめました。',
    category: 'Setup',
    date: '2026-02-14',
  },
  {
    id: 2,
    title: 'Tailwind CSS を導入して最初に決めること',
    excerpt:
      'デザイントークンとレイアウト方針を先に決めると、あとからスタイルが崩れにくくなります。',
    category: 'Frontend',
    date: '2026-02-13',
  },
  {
    id: 3,
    title: '個人ブログの情報設計メモ',
    excerpt: '記事、タグ、カテゴリ、プロフィールをどう分離して管理するかを実例付きで整理します。',
    category: 'Architecture',
    date: '2026-02-12',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <main className="mx-auto w-full max-w-5xl px-6 py-12">
        <section className="mb-10">
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            最近の記事
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            SIerリーマンのリアルな日常に興味があれば是非。
          </p>
        </section>

        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
