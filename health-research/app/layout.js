import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SNG Regenic — Regenerative Medicine",
  description:
    "Innovative biomedical technology and research services for regenerative medicine.",
};

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors px-3 py-2 rounded-md hover:bg-zinc-100"
    >
      {children}
    </Link>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-zinc-900`}
      >
        <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-violet-600 to-blue-600 text-white font-bold">S</span>
              <span className="font-semibold tracking-tight">SNG Regenic</span>
            </Link>
            <nav className="hidden md:flex items-center">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/products">Products</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/research">R&D</NavLink>
              <NavLink href="/news-events">News & Events</NavLink>
            </nav>
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden sm:inline-flex h-9 items-center rounded-md bg-gradient-to-r from-violet-600 to-blue-600 px-4 text-sm font-medium text-white shadow hover:shadow-md"
              >
                Get Started
              </Link>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-20 border-t border-zinc-200/80 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-violet-600 to-blue-600 text-white font-bold">S</span>
                <span className="font-semibold">SNG Regenic</span>
              </div>
              <p className="mt-3 text-sm text-zinc-600">
                Pioneering regenerative medicine with hybrid fabrication, biomaterials, and AI.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold text-zinc-900">Navigation</div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                <li><Link href="/products" className="hover:text-zinc-900">Products</Link></li>
                <li><Link href="/services" className="hover:text-zinc-900">Services</Link></li>
                <li><Link href="/research" className="hover:text-zinc-900">R&D</Link></li>
                <li><Link href="/news-events" className="hover:text-zinc-900">News & Events</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-zinc-900">Research Areas</div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                <li>Neurosciences</li>
                <li>3D Bioprinting & Scaffolding</li>
                <li>Neural Tissue Culture</li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-zinc-900">Contact</div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                <li>hello@sngregenic.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Bengaluru, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-200/80">
            <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-zinc-500 flex items-center justify-between">
              <span>© {new Date().getFullYear()} SNG Regenic. All rights reserved.</span>
              <span className="hidden sm:inline">Privacy • Terms • Cookie Policy</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
