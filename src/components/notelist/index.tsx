"use client";
import { useNotes } from "@crossbell/indexer";
import { Avatar } from "@/components/avatar";
import React from "react";

export default function NoteList() {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useNotes();
  const list = data?.pages.flatMap((page) => page.list) ?? [];

  return (
    <>
      {list.map((note) => (
        <div
          key={note.noteId}
          className="flex w-full py-3 px-3 border-b border-gray/20 bg-hover cursor-pointer flex-row"
        >
          <div className="flex relative">
            <div>
              <div
                className="mantine-Avatar-root bg-coolgray-100 mantine-pvtns3"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="mantine-01uoievau-dropdown"
                id="mantine-01uoievau-target"
              >
                {/* <img
                  className="mantine-9rx0rd mantine-Avatar-image"
                  src={}
                  alt="Avatar"
                ></img> */}
                <Avatar
                  size={48}
                  characterId={note.characterId}
                  character={note.character}
                />
              </div>
            </div>
          </div>
          <div className="mantine-1nfmmxz"></div>
          <div className="flex-grow overflow-hidden">
            <div className="flex flex-wrap items-baseline">
              <a
                className="mantine-Text-root mantine-8fis2h"
                target="_blank"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="mantine-m9za6kv7v-dropdown"
                id="mantine-m9za6kv7v-target"
                href="/@sulaimon-waliu-asipit-5250"
              >
                Sulaimon waliu asipit
              </a>
              <div className="mantine-zsx3ki"></div>
              <a
                className="mantine-Text-root mantine-ea78kp"
                target="_blank"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="mantine-60v8xyp9v-dropdown"
                id="mantine-60v8xyp9v-target"
                href="/@sulaimon-waliu-asipit-5250"
              >
                @sulaimon-waliu-asipit-5250
              </a>
              <div className="mantine-Text-root mx-1 mantine-pxgsdt">·</div>
              <a
                className="mantine-Text-root mantine-pxgsdt"
                href="/notes/47344-471"
              >
                3 minutes ago
              </a>
            </div>
            <div>
              <div className="relative">
                <article className="markdown-renderer overflow-hidden transition-all-200 break-all max-h-500px">
                  <p
                    className="mantine-Text-root my-2 break-words leading-1.25rem mantine-1otxe1w"
                    style={{
                      wordBreak: "break-word",
                    }}
                  >
                    <span>@SkyNity_io</span>
                    <span>@Giveaway_HQ</span>
                    <span>@Lilbueze09</span> @lilznation
                  </p>
                </article>
              </div>
            </div>
            <div>
              <div className="flex flex-row justify-between items-center">
                <div>
                  <div className="max-w-10em inline mr-2">
                    <a target="_blank" href="https://xsync.app">
                      <div
                        className="mantine-Badge-root transition-shadow hover:shadow-sm active:scale-95 transition cursor-pointer mantine-w52hf8"
                        style={{
                          color: "rgb(255, 255, 255)",
                        }}
                      >
                        <span className="mantine-1t45alw mantine-Badge-inner">
                          xSync
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="max-w-10em inline mr-2">
                    <a
                      target="_blank"
                      href="https://twitter.com/slimsuwa/status/1681374350027440128"
                    >
                      <div
                        className="mantine-Badge-root transition-shadow hover:shadow-sm active:scale-95 transition cursor-pointer mantine-1lne4cd"
                        style={{
                          color: "rgb(255, 255, 255)",
                        }}
                      >
                        <span className="mantine-1t45alw mantine-Badge-inner">
                          Twitter
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <a
                  className="mantine-Badge-root cursor-pointer hover:shadow-sm active:scale-95 transition text-black mantine-at5zt4"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://scan.crossbell.io/tx/0xda85cfd7e5328622fd78db195d21a282660b090c10f3048dc1e621674048d5f8"
                >
                  <span className="mantine-1t45alw mantine-Badge-inner">
                    #47344-471
                  </span>
                </a>
              </div>
            </div>
            <div className="mantine-15hacub"></div>
            <div className="flex items-center justify-between">
              <div className="flex items-center group cursor-pointer">
                <div className="relative">
                  <div className="absolute rounded-100% top-0 bottom-0 left-0 right-0 scale-150 group-hover:bg-blue/10"></div>
                  <div className="mantine-Text-root transition text-dimmed i-csb:comment group-hover:text-blue mantine-189fjyo"></div>
                </div>
                <div className="mantine-1osd0wn"></div>
                <div className="mantine-Text-root text-dimmed group-hover:text-blue mantine-58hq26">
                  0
                </div>
              </div>
              <div className="flex items-center group cursor-pointer">
                <div className="relative">
                  <div className="absolute rounded-100% top-0 bottom-0 left-0 right-0 scale-150 group-hover:bg-red/10"></div>
                  <div className="mantine-Text-root transition text-dimmed i-csb:like group-hover:text-red mantine-189fjyo"></div>
                </div>
                <div className="mantine-1osd0wn"></div>
                <div className="mantine-Text-root text-dimmed group-hover:text-red mantine-58hq26">
                  0
                </div>
              </div>
              <div className="flex items-center group cursor-pointer">
                <div className="relative">
                  <div className="absolute rounded-100% top-0 bottom-0 left-0 right-0 scale-150 group-hover:bg-yellow/10"></div>
                  <div className="mantine-Text-root transition text-dimmed i-csb:mint group-hover:text-yellow mantine-189fjyo"></div>
                </div>
                <div className="mantine-1osd0wn"></div>
                <div className="mantine-Text-root text-dimmed group-hover:text-yellow mantine-58hq26">
                  0
                </div>
              </div>
              <div className="flex items-center group cursor-pointer">
                <div className="relative">
                  <div className="absolute rounded-100% top-0 bottom-0 left-0 right-0 scale-150 group-hover:bg-green/10"></div>
                  <div className="mantine-Text-root transition text-dimmed i-csb:share group-hover:text-green mantine-189fjyo"></div>
                </div>
                <div className="mantine-1osd0wn"></div>
                <div className="mantine-Text-root text-dimmed group-hover:text-green mantine-58hq26"></div>
              </div>
              <div className="flex items-center"></div>
            </div>
          </div>
        </div>
      ))}
      {/* {list.map((note) => (
        <GroupedFeedNote
          note={note}
          key={`${note.characterId}-${note.noteId}`}
          collapsible
        />
      ))} */}
      {/* {isLoading &&
        Array(10)
          .fill(0)
          .map((_, i) => <NoteSkeleton key={i} />)} */}

      {/* <LoadMore
        onLoadMore={() => fetchNextPage()}
        hasNextPage={Boolean(hasNextPage)}
        isLoading={isFetchingNextPage}
      >
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <NoteSkeleton key={i} />
          ))}
      </LoadMore> */}
    </>
  );
}
