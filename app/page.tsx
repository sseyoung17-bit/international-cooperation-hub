export default function Home() {
  return (
    <main style={{ margin: 0, width: '100%', height: '100dvh', overflow: 'hidden' }}>
      <iframe
        src="/legacy/index.html"
        title="MOIS International Cooperation Dashboard"
        style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
      />
    </main>
  );
}
