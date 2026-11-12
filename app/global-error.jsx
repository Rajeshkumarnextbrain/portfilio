'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0a0e13] text-[#e1e2e9] min-h-screen flex items-center justify-center p-4 font-mono">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            Fatal Error
          </div>
          <h1 className="text-3xl font-bold tracking-tight">System Encountered a Crash</h1>
          <p className="text-gray-400 text-sm">
            A fatal error occurred in the root layout.
          </p>
          <div className="pt-2">
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded bg-[#94da32] text-[#0a0e13] font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Reset Application
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
