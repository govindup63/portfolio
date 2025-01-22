import Hyperspeed from "@/components/ui/hyperspeed";
export default function Home() {

  return (
    <main className="relative min-h-screen">
        <div className="fixed inset-0 z-0 blur-md">
          <Hyperspeed />
        </div>
      <div className="flex min-h-screen flex-col items-center justify-center gap-8 relative z-10">
        <h1 className="text-4xl font-bold tracking-tight text-foreground/80 animate-pulse">
          Work in progress
        </h1>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/govind-pandey-1611081b6/"
            target="_blank"
            rel="noopener noreferrer" 
            className="p-3 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-foreground/80"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="https://github.com/govindup63"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-foreground/80"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>
      <footer className="absolute bottom-0 w-full py-4 text-center text-foreground/60 text-sm">
        © {new Date().getFullYear()} All rights reserved. Govind Pandey
      </footer>
    </main>
  );
}
