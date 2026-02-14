function PostCard({ post }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-400/40">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-cyan-300">
        {post.category}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-white">{post.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{post.excerpt}</p>
      <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
        <span>{post.date}</span>
        <button
          type="button"
          className="rounded-full border border-slate-700 px-3 py-1 transition hover:border-cyan-300 hover:text-cyan-300"
        >
          Read More
        </button>
      </div>
    </article>
  );
}

export default PostCard;
