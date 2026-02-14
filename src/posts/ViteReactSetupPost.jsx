function ViteReactSetupPost() {
  return (
    <>
      <p>
        Vite + React の初期セットアップでは、Node のバージョンと開発コマンドの整備を最初に固めるのが最短です。
      </p>
      <p className="mt-4">
        具体的には `.nvmrc` と `package.json` の `engines` を合わせて、ローカル開発環境のズレを防ぐのが重要です。
      </p>
      <h2 className="mt-8 text-2xl font-bold text-white">最初にやること</h2>
      <ul className="mt-3 list-disc space-y-2 pl-6">
        <li>Node バージョンの固定</li>
        <li>Lint / Format の導入</li>
        <li>ルーティングとページ骨組みの用意</li>
      </ul>
    </>
  );
}

export default ViteReactSetupPost;

