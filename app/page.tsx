import WeeklyRanking from "@/components/home/weeklyRanking";
import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import Baekjoon from "@/components/shared/icons/baekjoon";

export default async function Home() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/SSAFY-Seoul-Algorithm-Study/Algorithm-Roadmap-Site-FE",
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every 60 seconds
      next: { revalidate: 60 },
    },
  ).then((res) => res.json());

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          {/* <Balancer> */}
              알고리즘 <br/> 학습을 위한 <br/>
              로드맵을 <br/> 만나보세요!
          {/* </Balancer> */}
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            즐거운 알고리즘 학습을 시작해볼까요?
          </Balancer>
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://www.acmicpc.net/group/16681"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Baekjoon />
            <p>
              <span className="hidden sm:inline-block">알고리즘 스터디 백준 그룹</span>
            </p>
          </a>
          <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href="https://github.com/SSAFY-Seoul-Algorithm-Study/Algorithm-Roadmap-Site-FE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>
              <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
              <span className="font-semibold">{nFormatter(stars)}</span>
            </p>
          </a>
        </div>
        <hr className="animate-fade-up h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0 ">
        <WeeklyRanking></WeeklyRanking>
      </div>
    </>
  );
}
