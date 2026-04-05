function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-white">
      {/* Top-right live site link */}
      <nav className="absolute top-6 right-6">
        <a
          href="https://dyse-ai.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-700 hover:text-orange-900 font-semibold text-sm transition-colors underline decoration-orange-400/50 hover:decoration-orange-600"
        >
          Live Site →
        </a>
      </nav>

      {/* Center content */}
      <main className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-5xl font-bold text-orange-800 mb-2 tracking-tight">Dyse</h1>
        <p className="text-orange-600/70 text-lg mb-12">Download the desktop app</p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl w-full justify-center">
          <DownloadButton
            os="Linux"
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
              </svg>
            }
            href="#"
          />
          <DownloadButton
            os="macOS"
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.8-1.31.05-2.3-1.29-3.14-2.5-1.72-2.49-3.04-7.06-1.28-10.12 1.14-1.98 3.19-2.66 5.19-2.64 1.53.03 2.97 1.04 3.9 1.04.92 0 2.65-1.28 4.47-1.09 4.77.48 5.72 3.87 5.77 3.9-.02.01-3.47 2.1-3.47 5.67 0 4.61 3.82 6.28 3.91 6.31-.01.02-.62 2.14-2.04 4.21zM15.5 5.3c.7-.85 1.16-2.04 1.04-3.23-1.01.04-2.23.67-2.93 1.52-.67.79-1.23 2.07-1.08 3.22 1.19.09 2.26-.66 2.97-1.51z"/>
              </svg>
            }
            href="#"
          />
          <DownloadButton
            os="Windows"
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4h-13.05m-10.95 11.554l9.75 1.35V12.45H0m10.949 11.702L24 24V12.451h-13.05v11.7"/>
              </svg>
            }
            href="#"
          />
        </div>
      </main>
    </div>
  );
}

function DownloadButton({ os, icon, href }: { os: string; icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm border border-orange-200 rounded-xl text-orange-800 font-semibold shadow-lg shadow-orange-100/50 hover:bg-orange-100/80 hover:border-orange-300 hover:shadow-orange-200/50 transition-all duration-200 min-w-[180px] justify-center"
    >
      {icon}
      <span>Download for {os}</span>
    </a>
  );
}

export default App;
