export default function DashboardPage() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {[
        ["My Konfessions", "Posts you have created"],
        ["Saved Threads", "Bookmarks and revisit list"],
        ["Reports", "Your report history"],
        ["Avenues", "Followed lounges and activity"],
      ].map(([title, text]) => (
        <div key={title} className="panel p-6">
          <h2 className="text-xl font-black">{
