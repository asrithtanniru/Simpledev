import Link from "next/link";
import { socialLinks } from "../data/data";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-4 border-t border-gray-300 bg-background text-foreground text-center">
      <div className="max-w-3xl mx-auto px-4">
        {socialLinks.map((link, index) => (
          <span key={link.name}>
            <Link href={link.url} className="bold mx-2">{link.name}</Link>
            {index < socialLinks.length - 1 && " | "}
          </span>
        ))}
      </div>
    </footer>
  );
}
