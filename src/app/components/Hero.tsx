import ProfileImage from "./ProfileImage";
import { personalInfo } from "../data/data";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl font-bold leading-snug">
            Hi, I&apos;m <span className="font-bold">{personalInfo.name}</span> 👋
          </h1>
          <p className="text-lg">{personalInfo.title}</p>
          <a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white font-medium px-4 py-2 rounded-md transition dark:bg-white dark:text-black"
          >
            Resume
          </a>

        </div>
        <div className="mt-6 md:mt-0 md:ml-8">
          <ProfileImage />
        </div>
      </div>

      <section className="mb-16 max-w-3xl">
        <h2 className="text-xl font-semibold mb-2">About</h2>
        <p className=" mb-4">{personalInfo.bio}</p>
      </section>
    </>
  );
} 
