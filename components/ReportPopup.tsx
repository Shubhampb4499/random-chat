"use client";

import { useState } from "react";

type Props = {
  onClose: () => void;
  onSubmit: (reason: string) => void;
};

export default function ReportPopup({
  onClose,
  onSubmit,
}: Props) {
  const [reason, setReason] = useState("");

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">

      <div className="bg-gray-900 p-6 rounded-2xl w-[400px] text-white">

        <h2 className="text-2xl font-bold mb-5">
          🚩 Report User
        </h2>

        <div className="space-y-3">

          {[
            "Sexual Content",
            "Harassment",
            "Spam",
            "Hate Speech",
            "Other",
          ].map((item) => (
            <label
              key={item}
              className="flex items-center gap-3"
            >
              <input
                type="radio"
                name="report"
                value={item}
                onChange={(e) => setReason(e.target.value)}
              />

              {item}
            </label>
          ))}

        </div>

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="bg-gray-700 px-4 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            disabled={!reason}
            onClick={() => onSubmit(reason)}
            className="bg-red-600 px-4 py-2 rounded-lg disabled:bg-gray-500"
          >
            Submit
          </button>

        </div>

      </div>

    </div>
  );
}