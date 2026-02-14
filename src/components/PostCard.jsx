import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-400/40">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-cyan-300">
        {post.category}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-white">
        <Link to={`/posts/${post.slug}`} className="hover:text-cyan-300">
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{post.excerpt}</p>
      <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
        <span>{post.date}</span>
        <Link
          to={`/posts/${post.slug}`}
          className="rounded-full border border-slate-700 px-3 py-1 transition hover:border-cyan-300 hover:text-cyan-300"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}

export default PostCard;
