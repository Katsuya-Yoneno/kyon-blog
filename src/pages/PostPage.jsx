import { Link, useParams } from 'react-router-dom';
import { posts } from '../data/posts';
import VimNote1 from '../posts/VimNote1';

const postBodyBySlug = {
  'vim-note1': VimNote1,
};

function PostPage() {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="mx-auto w-full max-w-3xl px-6 py-14">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Not Found</p>
        <h1 className="mt-3 text-3xl font-bold text-white">記事が見つかりません</h1>
        <Link to="/" className="mt-6 inline-block text-cyan-300 hover:text-cyan-200">
          トップへ戻る
        </Link>
      </main>
    );
  }

  const PostBody = postBodyBySlug[post.slug];

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-14">
      <Link to="/" className="text-sm text-cyan-300 hover:text-cyan-200">
        ← 記事一覧へ
      </Link>
      <p className="mt-8 text-xs font-medium uppercase tracking-[0.16em] text-cyan-300">
        {post.category}
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">{post.title}</h1>
      <p className="mt-3 text-sm text-slate-400">{post.date}</p>

      <article className="prose prose-invert mt-10 max-w-none text-slate-200">
        <PostBody />
      </article>
    </main>
  );
}

export default PostPage;
