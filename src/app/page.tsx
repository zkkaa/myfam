import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFDF9]">
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <p className="font-playfair text-3xl text-stone-600">
          🏡 MyFam — Coming Soon
        </p>
      </div>
    </main>
  );
}