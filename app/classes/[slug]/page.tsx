import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClassDetailTabs } from "@/components/class-detail-tabs";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { classes } from "@/data/site-data";

type Params = {
  slug: string;
};

export default async function ClassDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = classes.find((classItem) => classItem.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />

      <section className="mx-auto max-w-4xl px-6 py-12">
        <Link href="/classes" className="text-sm text-slate-300 hover:text-white">
          ← Back to classes
        </Link>

        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
          <div className="relative h-56 md:h-72">
            <Image src={item.image} alt={item.title} fill className="object-cover" />
          </div>

          <div className="space-y-5 p-6">
            <div className="flex flex-wrap items-center gap-2">
              <p className="rounded-full border border-slate-700 px-3 py-1 text-sm">
                {item.level}
              </p>
              <p
                className={`rounded-full px-3 py-1 text-sm font-semibold ${
                  item.status === "ongoing"
                    ? "bg-emerald-900/50 text-emerald-300"
                    : "bg-sky-900/50 text-sky-300"
                }`}
              >
                {item.status === "ongoing" ? "Ongoing" : "Upcoming"}
              </p>
            </div>

            <h1 className="text-3xl font-bold">{item.title}</h1>

            <div className="grid gap-3 rounded-xl border border-slate-700 bg-slate-800/70 p-4 text-sm md:grid-cols-3">
              <p>{item.startDate}</p>
              <p>{item.duration}</p>
              <p>{item.fee}</p>
              <p className="md:col-span-3">{item.schedule}</p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Enrollment</h2>
                <span className="rounded-full bg-emerald-900/50 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Available
                </span>
              </div>
              <a
                href="#join"
                className="flex justify-center rounded-xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Enroll Now
              </a>
            </div>

            <ClassDetailTabs item={item} />

            <section id="join" className="rounded-2xl border border-slate-700 p-5">
              <h2 className="text-xl font-semibold">Join This Class</h2>
              <p className="mt-2 text-slate-300">
                1) Click Enroll Now, 2) complete payment, 3) send screenshot to
                admin via Telegram or WhatsApp.
              </p>
            </section>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
