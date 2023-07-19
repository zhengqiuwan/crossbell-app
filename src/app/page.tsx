"use client";

import React from "react";
import { Header } from "@/components/header";
import { Connection } from "@/components/connection";
import { usePostNote } from "@crossbell/connect-kit";

export default function IndexPage() {
  const postNote = usePostNote();
  return (
    <div>
      <Header />
      <Connection />
      <button
        onClick={() => {
          postNote.mutate({
            metadata: {
              content: "Hello Word!",
              sources: ["Crossbell Dev"],
              external_urls: ["https://crossbell.io"],
              tags: ["post"],
            },
          });
        }}
      >
        Post Note
      </button>
    </div>
  );
}
