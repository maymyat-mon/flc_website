import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/flc-logo.jpg"
            alt="FLC Education logo"
            width={44}
            height={44}
            className="rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9d8455]">
              FLC Education
            </p>
            <p className="text-xs text-slate-500">Future Learning Center</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
