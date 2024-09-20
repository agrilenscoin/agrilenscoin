import Image from "next/image";

import LOGO from "./images/logo.jpg";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          src={LOGO}
          alt="Agrilens Plates & Cups"
          width={384}
          height={110}
          priority
        />
        <div className="flex gap-4 items-center flex-col">
          <a
            className="rounded-full border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/assets/certificates/TNPCBCertificate2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tamil Nadu Pollution Control Board Certificate
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/assets/certificates/CPCBCertificate2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Central Pollution Control Board Certificate
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        &copy; 2024 Agrilens Plates &amp; Cups
      </footer>
    </div>
  );
}
