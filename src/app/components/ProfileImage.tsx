"use client";

import Image from "next/image";
import useTheme from './Theme-provider'

export default function ProfileImage() {
  const { toggleTheme } = useTheme();

  return (
    <div
      className="w-36 h-36 rounded-full overflow-hidden cursor-pointer transition-transform hover:scale-105 border-2 border-foreground "
      onClick={toggleTheme}
      title="Toggle dark/light mode"
    >
      <Image
        src="/images/image.png"
        alt="Asrith Tanniru"
        width={96}
        height={96}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
}
