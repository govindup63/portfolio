import Hyperspeed from "@/components/ui/hyperspeed";
export default function Home() {

  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <Hyperspeed />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center flex text-red-500">
        <h1>Hello</h1>
      </div>
    </main>
  );
}
