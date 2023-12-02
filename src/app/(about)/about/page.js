import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";

export const metadata = {
  title: "About Me",
  description: `Here are some details about myself.`,
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <div className="mt-8 mx-5 sm:mx-10 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
        <h2 className="font-semibold text-lg md:text-2xl">
          Have a project in mind?{" "}
          <Link href="/contact" className="underline underline-offset-2">
            Reach out to me 📞
          </Link>{" "}
          and let's make it happen.
        </h2>
      </div>
    </>
  );
}
