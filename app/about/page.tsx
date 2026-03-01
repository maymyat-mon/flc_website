import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { defaultSiteContent } from "@/data/site-content";

export default function AboutPage() {
  const content = defaultSiteContent;

  return (
    <main className="min-h-screen bg-[#f6f1e3] text-slate-800">
      <SiteHeader />

      <section className="mx-auto grid max-w-6xl gap-7 px-6 py-14 md:grid-cols-2">
        <article className="rounded-2xl border border-[#dfd2b5] bg-white p-7 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9d8455]">
            About School
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            {content.aboutTitle}
          </h1>
          <p className="mt-4 leading-7 text-slate-600">
            {content.aboutParagraphOne}
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            {content.aboutParagraphTwo}
          </p>
        </article>

        <div className="relative h-80 overflow-hidden rounded-2xl border border-[#dfd2b5] bg-white shadow-sm md:h-auto">
          <Image
            src="/images/viber_image_2026-03-01_11-11-27-016.jpg"
            alt="Students at FLC Education"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-7 px-6 pb-14 md:grid-cols-2">
        <article className="rounded-2xl border border-[#dfd2b5] bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Vision</h2>
          <p className="mt-4 leading-7 text-slate-600">{content.visionText}</p>
        </article>

        <article className="rounded-2xl border border-[#dfd2b5] bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Mission</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-600">
            {content.missionItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}
