import PostCard from '../components/PostCard';
import { posts } from '../data/posts';

function HomePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12">
      <section className="mb-10">
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">最近の記事</h1>
        <p className="mt-4 max-w-2xl text-slate-300">SIerリーマンのリアルな日常に興味があれば是非。</p>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </main>
  );
}

export default HomePage;

