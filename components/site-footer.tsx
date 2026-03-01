import Link from "next/link";
import { defaultSiteContent } from "@/data/site-content";

export function SiteFooter() {
  const content = defaultSiteContent;

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 md:grid-cols-2 md:items-end">
        <div>
          <p className="text-lg font-semibold text-slate-900">FLC Education</p>
          <p className="mt-2 text-sm text-slate-600">
            English for General Purpose, Academic English, and Young Learners.
          </p>
        </div>
        <div className="space-y-1 text-sm text-slate-600 md:text-right">
          <p>{content.contact.address}</p>
          <p>
            {content.contact.phone} • {content.contact.email}
          </p>
          <p className="pt-1 text-xs text-slate-500">
            © {new Date().getFullYear()} FLC Education
          </p>
          <div className="pt-2">
            <Link
              href="/classes"
              className="font-medium text-[#9d8455] hover:text-[#816c43]"
            >
              View Classes
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
