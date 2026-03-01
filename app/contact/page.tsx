import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { defaultSiteContent } from "@/data/site-content";

export default function ContactPage() {
  const content = defaultSiteContent;

  return (
    <main className="min-h-screen bg-[#f6f1e3] text-slate-800">
      <SiteHeader />

      <section className="mx-auto grid max-w-6xl gap-7 px-6 py-14 md:grid-cols-2">
        <article className="rounded-2xl border border-[#dfd2b5] bg-white p-7 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9d8455]">
            Contact
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Contact Us</h1>
          <p className="mt-4 leading-7 text-slate-600">
            We are happy to help you choose the right class. Contact our team
            for class schedules, fees, and enrollment support.
          </p>

          <div className="mt-6 space-y-3 text-slate-700">
            <p>
              <span className="font-semibold">Address:</span>{" "}
              {content.contact.address}
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              {content.contact.phone}
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              {content.contact.email}
            </p>
            <p>
              <span className="font-semibold">Telegram:</span>{" "}
              {content.contact.telegram}
            </p>
          </div>
        </article>

        <div className="relative h-80 overflow-hidden rounded-2xl border border-[#dfd2b5] bg-white shadow-sm md:h-auto">
          <Image
            src="/images/viber_image_2026-03-01_11-11-18-394.jpg"
            alt="FLC Education contact"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
