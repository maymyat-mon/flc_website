import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { classes } from "@/data/site-data";
import { defaultSiteContent } from "@/data/site-content";

export default function Home() {
  const content = defaultSiteContent;
  const ongoingClasses = classes.filter((item) => item.status === "ongoing");
  const upcomingClasses = classes.filter((item) => item.status === "upcoming");

  return (
    <main className="min-h-screen bg-[#f6f1e3] text-slate-800">
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-35">
          <Image
            src="/images/viber_image_2026-03-01_11-11-20-672.jpg"
            alt="Students learning at FLC"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 inline-block rounded-full border border-white/30 px-3 py-1 text-sm text-slate-200">
              Future Learning Center
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              {content.heroTitle}
            </h1>
            <p className="mt-4 max-w-xl text-slate-200">
              {content.heroSubtitle}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="rounded-full bg-[#9d8455] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#846f46]"
              >
                Discover FLC
              </Link>
              <Link
                href="/classes"
                className="rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Join a Class
              </Link>
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl border border-white/20 shadow-2xl md:h-96">
            <Image
              src="/images/home_bunner.jpg"
              alt="FLC classroom"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-[#dfd2b5] bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9d8455]">
            FLC Programs
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
            Main Class, Private Group Coaching and Online Classes
          </h2>
          <p className="mt-4 text-slate-700">
            အင်္ဂလိပ်ဘာသာစကားကို ကျောင်းတက်နေရသလို အချိန်ပြည့်လေ့လာလေ့ကျင့်ချင်သူများအတွက်
            FLC Education မှ သင်တန်းအစီအစဉ်များကို အောက်ပါအတိုင်း တက်ရောက်နိုင်ပါသည်။
          </p>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-[#dfd2b5] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Main Class</h3>
            <p className="mt-3 text-slate-700">
              အတန်းတစ်တန်းကျောင်းအပ်ရုံဖြင့် Main-Class အတန်းများအားလုံး တက်ရောက်ခွင့်ရှိပြီး
              တစ်ပတ်လျှင် (၅) ရက် သင်ကြားပေးပါသည်။
            </p>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <div>
                <p className="font-semibold text-slate-900">
                  MONDAY, TUESDAY & WEDNESDAY
                </p>
                <ul className="mt-1 space-y-1">
                  <li>Section 1: 8:00 - 9:30 a.m. (A2: 4 Skills English)</li>
                  <li>Section 1: 9:30 - 11:00 a.m. (A2+: General English)</li>
                  <li>Section 2: 12:00 - 1:30 p.m. (B1: Multi-lesson English)</li>
                  <li>Section 3: 2:00 - 3:00 p.m. (Reading-oriented Class)</li>
                  <li>Section 4: 3:00 - 4:15 p.m. (Writing-oriented Class)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-900">SATURDAY & SUNDAY</p>
                <ul className="mt-1 space-y-1">
                  <li>Section 5: 8:00 - 9:30 a.m. (A2: 4 Skills English)</li>
                  <li>Section 6: 9:30 - 12:00 p.m. (B1: Practical English & Reading)</li>
                  <li>Section 7: 1:00 - 2:30 p.m. (B2: Audio-lingual English)</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 font-semibold text-[#9d8455]">
              School Fee: 80,000 MMK (2 Months), then 40,000 MMK per month
            </p>
          </article>

          <article className="rounded-2xl border border-[#dfd2b5] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">
              Private Group Coaching
            </h3>
            <p className="mt-3 text-slate-700">
              စာသင်ဝိုင်းသီးသန့်တန်းများဖြင့် သင်ကြားပေးနေပြီး Section တစ်ခုလျှင်
              အများဆုံး (၈) ဦးအထိသာ လက်ခံပါသည်။
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Language Test စစ်ဆေးပြီးမှ ကိုက်ညီသော level ဖြင့် သင်ကြားပေးပါသည်။</li>
              <li>အတန်းတက်မှန်ပါက Certification of Completion ပေးအပ်ပါသည်။</li>
              <li>Speaking, Grammar, Reading, Writing တို့ကို အခြေခံမှစ၍ လေ့ကျင့်နိုင်ပါသည်။</li>
            </ul>
            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Sections</p>
              <p>Mon/Tue/Wed: 9:30-11:00 a.m., 12:00-1:30 p.m., 3:00-4:30 p.m.</p>
              <p>Sat/Sun: 9:00-11:00 a.m., 1:00-3:00 p.m., 4:00-6:00 p.m.</p>
            </div>
            <p className="mt-4 font-semibold text-[#9d8455]">
              Fee: Entrance 10,000 MMK + 120,000 MMK (2 Months, books included)
            </p>
          </article>
        </div>

        <div className="mt-5 rounded-2xl border border-[#dfd2b5] bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Online Classes</h3>
          <p className="mt-3 text-slate-700">
            သင်တန်းကျောင်းသို့ မတက်ရောက်နိုင်သူများအတွက် Zoom Live Class ဖြင့်
            Online Classes တက်ရောက်နိုင်ပါသည်။
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">
                4 Skills English - Elementary
              </p>
              <p className="mt-1 text-sm text-slate-700">
                Saya John Win • Sat & Sun • 5:00 PM - 7:00 PM
              </p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">
                4 Skills English - Intermediate
              </p>
              <p className="mt-1 text-sm text-slate-700">
                Saya Ye&apos; • Mon, Tue & Wed • 6:00 PM - 8:00 PM
              </p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">
                Essential Grammar & Composition
              </p>
              <p className="mt-1 text-sm text-slate-700">
                Saya Nyi Nyi • Thur & Fri • 6:00 PM - 8:00 PM
              </p>
            </div>
          </div>
          <div className="mt-4 text-sm text-slate-700">
            <p>Class capacity: 40 students only.</p>
            <p>Recorded/covered lessons are shared in the Online English Group.</p>
            <p className="mt-2 font-semibold text-[#9d8455]">
              Fees: 1 class - 80,000 MMK | 2 classes - 140,000 MMK | 3 classes - 200,000 MMK
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Ongoing Classes</h2>
          <Link
            href="/classes"
            className="text-sm font-semibold text-[#9d8455] hover:text-[#816c43]"
          >
            View all classes
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
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
                View class
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-bold text-slate-900">Upcoming Classes</h2>
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
                <Link
                  href={`/classes/${item.slug}`}
                  className="mt-4 inline-flex rounded-full bg-[#9d8455] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#816c43]"
                >
                  Join class
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
