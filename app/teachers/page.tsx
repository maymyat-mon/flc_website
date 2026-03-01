import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { defaultSiteContent } from "@/data/site-content";

export default function TeachersPage() {
  const content = defaultSiteContent;

  return (
    <main className="min-h-screen bg-[#f6f1e3] text-slate-800">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9d8455]">
          Faculty
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Teacher Profiles
        </h1>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Our teachers bring strong teaching practice, practical communication
          methods, and personal support for each learner.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="grid gap-6 md:grid-cols-3">
          {content.teachers.map((teacher) => (
            <article
              key={teacher.name}
              className="overflow-hidden rounded-2xl border border-[#dfd2b5] bg-white shadow-sm"
            >
              <div className="relative h-72">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-slate-900">
                  {teacher.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-[#9d8455]">
                  {teacher.role}
                </p>
                <p className="mt-3 leading-7 text-slate-600">{teacher.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
