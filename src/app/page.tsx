"use client";

import { useState } from "react";

type FileKey = "readme" | "about" | "projects" | "contact" | "internship";

const files: { key: FileKey; name: string }[] = [
  { key: "readme", name: "readme.md" },
  { key: "about", name: "about.tsx" },
  { key: "projects", name: "projects.tsx" },
  { key: "contact", name: "contact.tsx" },
];

const experienceFiles: { key: FileKey; name: string }[] = [
  { key: "internship", name: "internship.md" },
];

const allFiles = [...files, ...experienceFiles];

function ReadmeContent() {
  return (
    <div className="max-w-2xl space-y-4 text-sm leading-7">
      <h1 className="text-xl font-bold text-[#4ec9b0]"># Gavin Singleton</h1>
      <p>Software engineer — Houston, TX</p>
      <p className="text-[#6a9955]">
        {"// currently: application developer (T-SQL / C#), turning external data into usable info for internal apps"}
      </p>
      <p>
        Open <span className="text-[#dcdcaa]">about.tsx</span>,{" "}
        <span className="text-[#dcdcaa]">projects.tsx</span>, or{" "}
        <span className="text-[#dcdcaa]">contact.tsx</span> in the sidebar to
        learn more.
      </p>
    </div>
  );
}

function AboutContent() {
  return (
    <pre className="max-w-2xl whitespace-pre-wrap text-sm leading-7">
      <span className="text-[#6a9955]">{"// about.tsx"}</span>
      {"\n"}
      <span className="text-[#c586c0]">export const</span>{" "}
      <span className="text-[#9cdcfe]">about</span> = {"{"}
      {"\n"}
      {"  "}
      <span className="text-[#9cdcfe]">name</span>:{" "}
      <span className="text-[#ce9178]">&quot;Gavin Singleton&quot;</span>,
      {"\n"}
      {"  "}
      <span className="text-[#9cdcfe]">location</span>:{" "}
      <span className="text-[#ce9178]">&quot;Houston, TX&quot;</span>,{"\n"}
      {"  "}
      <span className="text-[#9cdcfe]">role</span>:{" "}
      <span className="text-[#ce9178]">&quot;Application Developer&quot;</span>
      ,{"\n"}
      {"  "}
      <span className="text-[#9cdcfe]">stack</span>: [
      <span className="text-[#ce9178]">&quot;T-SQL&quot;</span>,{" "}
      <span className="text-[#ce9178]">&quot;C#&quot;</span>,{" "}
      <span className="text-[#ce9178]">&quot;.NET&quot;</span>,{" "}
      <span className="text-[#ce9178]">&quot;Azure&quot;</span>,{" "}
      <span className="text-[#ce9178]">&quot;SQL Server&quot;</span>],{"\n"}
      {"  "}
      <span className="text-[#9cdcfe]">focus</span>:{" "}
      <span className="text-[#ce9178]">
        &quot;data engineering in Houston&apos;s energy sector&quot;
      </span>
      ,{"\n"}
      {"};"}
    </pre>
  );
}

function ProjectsContent() {
  return (
    <pre className="max-w-2xl whitespace-pre-wrap text-sm leading-7">
      <span className="text-[#6a9955]">{"// projects.tsx"}</span>
      {"\n"}
      <span className="text-[#6a9955]">
        {"// nothing published here yet — check back soon."}
      </span>
    </pre>
  );
}

function ContactContent() {
  return (
    <pre className="max-w-2xl whitespace-pre-wrap text-sm leading-7">
      <span className="text-[#6a9955]">{"// contact.tsx"}</span>
      {"\n"}
      <span className="text-[#c586c0]">export const</span>{" "}
      <span className="text-[#9cdcfe]">contact</span> = {"{"}
      {"\n"}
      {"  "}
      <span className="text-[#9cdcfe]">github</span>:{" "}
      <a
        href="https://github.com/ccallisto"
        className="text-[#ce9178] underline"
      >
        &quot;github.com/ccallisto&quot;
      </a>
      ,{"\n"}
      {"};"}
    </pre>
  );
}

function InternshipContent() {
  return (
    <div className="max-w-2xl space-y-4 text-sm leading-7">
      <h1 className="text-xl font-bold text-[#4ec9b0]"># Energy Internship</h1>
      <p>IT Analyst — energy sector</p>
      <p className="text-[#6a9955]">
        {"// hands-on analyst work on-site at a natural gas plant"}
      </p>
      <div className="flex h-40 w-64 items-center justify-center rounded border border-dashed border-[#3c3c3c] text-center text-xs text-[#6a9955]">
        {"[ photo: on-site at the plant — drop into /public and swap in ]"}
      </div>
    </div>
  );
}

const content: Record<FileKey, () => React.JSX.Element> = {
  readme: ReadmeContent,
  about: AboutContent,
  projects: ProjectsContent,
  contact: ContactContent,
  internship: InternshipContent,
};

export default function Home() {
  const [active, setActive] = useState<FileKey>("readme");
  const ActiveContent = content[active];

  return (
    <main className="flex min-h-0 flex-1 flex-col bg-[#1e1e1e] font-mono text-[#d4d4d4]">
      <div className="flex h-9 shrink-0 items-center gap-2 border-b border-[#2d2d2d] bg-[#323233] px-4">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-xs text-[#8a8a8a]">
          gavin-singleton — portfolio
        </span>
      </div>

      <div className="flex min-h-0 flex-1">
        <div className="w-52 shrink-0 border-r border-[#2d2d2d] bg-[#252526] py-3">
          <div className="px-4 pb-2 text-xs font-semibold tracking-wide text-[#8a8a8a]">
            EXPLORER
          </div>
          <div className="px-3 pb-1 text-xs text-[#cccccc]">▾ portfolio</div>
          <div>
            {files.map((file) => (
              <button
                key={file.key}
                onClick={() => setActive(file.key)}
                className={`block w-full px-6 py-1 text-left text-sm ${
                  active === file.key
                    ? "bg-[#37373d] text-white"
                    : "text-[#cccccc] hover:bg-[#2a2d2e]"
                }`}
              >
                {file.name}
              </button>
            ))}
          </div>
          <div className="px-3 pb-1 pt-2 text-xs text-[#cccccc]">
            ▾ experience
          </div>
          <div>
            {experienceFiles.map((file) => (
              <button
                key={file.key}
                onClick={() => setActive(file.key)}
                className={`block w-full px-9 py-1 text-left text-sm ${
                  active === file.key
                    ? "bg-[#37373d] text-white"
                    : "text-[#cccccc] hover:bg-[#2a2d2e]"
                }`}
              >
                {file.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex h-9 shrink-0 border-b border-[#2d2d2d] bg-[#252526]">
            {allFiles.map((file) => (
              <button
                key={file.key}
                onClick={() => setActive(file.key)}
                className={`flex items-center gap-2 border-r border-[#2d2d2d] px-4 text-sm ${
                  active === file.key
                    ? "bg-[#1e1e1e] text-white"
                    : "text-[#8a8a8a] hover:bg-[#2a2d2e]"
                }`}
              >
                {file.name}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-auto p-6">
            <ActiveContent />
          </div>

          <div className="h-32 shrink-0 overflow-auto border-t border-[#2d2d2d] bg-[#1e1e1e] p-3 text-xs">
            <div className="mb-1 text-[#8a8a8a]">TERMINAL</div>
            <div className="text-[#d4d4d4]">
              <span className="text-[#4ec9b0]">gavin@portfolio</span>
              <span className="text-[#d4d4d4]"> ~ % </span>
              <span>cat {allFiles.find((f) => f.key === active)?.name}</span>
            </div>
            <div className="mt-1 inline-block h-3.5 w-2 animate-pulse bg-[#d4d4d4]" />
          </div>
        </div>
      </div>
    </main>
  );
}
