"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center text-white font-bold text-xl">
                T
              </div>

              <span className="sm:text-2xl font-bold text-emerald-900">
                Tifa Tour <span className="text-amber-500">Lampung</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-gray-600 text-sm hover:text-emerald-800 transition font-medium"
              >
                Home
              </Link>

              <a
                href="#tentang"
                className="text-gray-600 text-sm hover:text-emerald-800 transition font-medium"
              >
                Tentang
              </a>

              <a
                href="#layanan"
                className="text-gray-600 text-sm hover:text-emerald-800 transition font-medium"
              >
                Layanan
              </a>

              <a
                href="#keunggulan"
                className="text-gray-600 text-sm hover:text-emerald-800 transition font-medium"
              >
                Keunggulan
              </a>

              <a
                href="https://wa.me/6285273497925"
                className="bg-amber-500 hover:bg-amber-600 text-sm text-white px-6 py-2.5 rounded-full font-semibold transition"
              >
                Hubungi Kami
              </a>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-[60]"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-[280px] bg-white z-50 md:hidden shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-emerald-800 rounded-full flex items-center justify-center text-white font-bold text-xl">
              T
            </div>

            <div>
              <h2 className="font-bold text-emerald-900 text-lg">Tifa Tour</h2>

              <p className="text-sm text-amber-500">Travel Umroh Amanah</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-6 gap-5">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-emerald-800 transition font-medium"
          >
            Home
          </Link>

          <a
            href="#tentang"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-emerald-800 transition font-medium"
          >
            Tentang
          </a>

          <a
            href="#layanan"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-emerald-800 transition font-medium"
          >
            Layanan
          </a>

          <a
            href="#keunggulan"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-emerald-800 transition font-medium"
          >
            Keunggulan
          </a>

          <a
            href="https://wa.me/6285273497925"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-amber-500 hover:bg-amber-600 text-white text-center px-6 py-3 rounded-full font-semibold transition"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </>
  );
}
