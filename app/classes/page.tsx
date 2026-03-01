import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { classes } from "@/data/site-data";

export default function ClassesPage() {
  const ongoingClasses = classes.filter((item) => item.status === "ongoing");
  const upcomingClasses = classes.filter((item) => item.status === "upcoming");

  return (
    <main className="min-h-screen bg-[#f6f1e3] text-slate-800">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9d8455]">
          Class Center
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Ongoing and Upcoming Classes
        </h1>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Browse available classes, check class details, and join directly from
          each class page.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <h2 className="text-2xl font-bold text-slate-900">Ongoing</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {ongoingClasses.map((item) => (
            <article
              key={item.slug}
              className="rounded-2xl border border-[#dfd2b5] bg-white p-5 shadow-sm"
            >
              <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                Ongoing
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{item.schedule}</p>
              <p className="mt-1 text-sm text-slate-600">
                {item.duration} • {item.fee}
              </p>
              <Link
                href={`/classes/${item.slug}`}
                className="mt-4 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                View Details
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14">
        <h2 className="text-2xl font-bold text-slate-900">Upcoming</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {upcomingClasses.map((item) => (
            <article
              key={item.slug}
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
              <div className="p-5">
                <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                  Upcoming • {item.startDate}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.schedule}</p>
                <p className="mt-1 text-sm text-slate-600">{item.fee}</p>
                <Link
                  href={`/classes/${item.slug}`}
                  className="mt-4 inline-flex rounded-full bg-[#9d8455] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#816c43]"
                >
                  Join Class
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
