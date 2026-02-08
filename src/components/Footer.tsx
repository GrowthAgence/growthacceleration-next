import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#1E1E1E] border-t border-[#FAFAFA]/5 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Growth Acceleration"
                width={160}
                height={36}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-[#A9A9A9] text-sm">
              Formations IA pour entrepreneurs et managers.
            </p>
          </div>

          <div>
            <h4 className="text-[#FAFAFA] font-mono text-sm mb-4">Formations</h4>
            <ul className="space-y-2 text-[#A9A9A9] text-sm">
              <li><Link href="/claude-code" className="hover:text-[#E07A5F]">Claude Code</Link></li>
              <li><Link href="/geo" className="hover:text-[#E07A5F]">GEO</Link></li>
              <li><Link href="/agents-ai" className="hover:text-[#E07A5F]">Agents.AI</Link></li>
              <li><Link href="/automations" className="hover:text-[#E07A5F]">Automations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FAFAFA] font-mono text-sm mb-4">Ressources</h4>
            <ul className="space-y-2 text-[#A9A9A9] text-sm">
              <li><Link href="/ressources" className="hover:text-[#E07A5F]">Ressources</Link></li>
              <li><Link href="/formation-intelligence-artificielle" className="hover:text-[#E07A5F]">Toutes les formations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FAFAFA] font-mono text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-[#A9A9A9] text-sm">
              <li>231 rue Saint-Honore</li>
              <li>75001 Paris</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#FAFAFA]/5 text-center text-[#A9A9A9] text-xs font-mono">
          &copy; {new Date().getFullYear()} Growth Acceleration. Tous droits reserves.
        </div>
      </div>
    </footer>
  );
}
