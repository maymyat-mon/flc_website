"use client";

import { useState } from "react";
import type { SchoolClass } from "@/data/site-data";

type Tab = "details" | "materials" | "payment";

export function ClassDetailTabs({ item }: { item: SchoolClass }) {
  const [activeTab, setActiveTab] = useState<Tab>("details");

  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
      <div className="mb-5 flex border-b border-slate-700 text-sm">
        <button
          type="button"
          onClick={() => setActiveTab("details")}
          className={`px-3 py-2 ${
            activeTab === "details"
              ? "border-b-2 border-blue-400 text-blue-300"
              : "text-slate-400"
          }`}
        >
          Class Details
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("materials")}
          className={`px-3 py-2 ${
            activeTab === "materials"
              ? "border-b-2 border-blue-400 text-blue-300"
              : "text-slate-400"
          }`}
        >
          Materials
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("payment")}
          className={`px-3 py-2 ${
            activeTab === "payment"
              ? "border-b-2 border-blue-400 text-blue-300"
              : "text-slate-400"
          }`}
        >
          Payment
        </button>
      </div>

      {activeTab === "details" ? (
        <div className="space-y-4">
          <p className="text-slate-200">{item.description}</p>
          <ul className="space-y-2 text-slate-200">
            {item.outcomes.map((outcome) => (
              <li key={outcome}>✓ {outcome}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {activeTab === "materials" ? (
        <div className="space-y-3 text-slate-300">
          <p className="text-lg font-semibold text-slate-100">No Materials</p>
          <p>No materials have been added to this class yet.</p>
        </div>
      ) : null}

      {activeTab === "payment" ? (
        <div className="space-y-4">
          <p className="text-slate-200">
            Transfer your fee to one of the accounts below and send payment
            screenshot to admin.
          </p>
          <div className="space-y-3">
            {item.paymentOptions.map((payment) => (
              <div
                key={payment.provider + payment.accountNumber}
                className="rounded-xl border border-slate-700 bg-slate-800 p-4"
              >
                <p className="font-semibold text-emerald-300">
                  {payment.provider}
                </p>
                <p className="text-sm text-slate-400">{payment.accountName}</p>
                <p className="text-xl font-semibold text-white">
                  {payment.accountNumber}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
