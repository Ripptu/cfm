import { Settings } from "lucide-react";

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] flex flex-col items-center justify-center text-center px-4">
      <Settings className="w-16 h-16 text-zinc-400 mb-6 animate-[spin_4s_linear_infinite]" />
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-sans">
        Wartungsarbeiten
      </h1>
      <p className="text-zinc-400 text-lg md:text-xl max-w-md mx-auto">
        Diese Website ist aufgrund von Wartungsarbeiten vorübergehend nicht erreichbar. Bitte versuchen Sie es zu einem späteren Zeitpunkt erneut.
      </p>
    </div>
  );
}
