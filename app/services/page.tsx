import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { defaultSiteContent } from "@/data/site-content";

export default function ServicesPage() {
  const content = defaultSiteContent;

  return (
    <main className="min-h-screen bg-[#f6f1e3] text-slate-800">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9d8455]">
          Programs
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          English Services
        </h1>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          We provide focused English programs for each learner stage, from
          general communication to academic preparation and early-age learning.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="grid gap-6 md:grid-cols-3">
          {content.services.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-[#dfd2b5] bg-white shadow-sm"
            >
              <div className="relative h-44">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
