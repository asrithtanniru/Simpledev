import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-4 border-t border-gray-300 bg-background text-foreground text-center">
      <div className="max-w-3xl mx-auto px-2">
        <Link href="https://github.com/asrithtanniru" className="bold mx-2">Github</Link> |
        <Link href="https://twitter.com/asrithtanniru" className=" mx-2">Twitter</Link>|
        <Link href="https://linkedin.com/in/asrithtanniru" className=" mx-2">Linkedin</Link>
      </div>
    </footer>
  );
}
