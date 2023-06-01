'use client';

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";

export default function NavBar({ session }: { session: Session | null }) {

  // const { data: session } = useSession();
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="Precedent logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>Algorithm Rating Site</p>
          </Link>
          
          <Link href="/problem-rank" className="flex items-center font-display text-2xl">
            <p>문제 랭킹</p>
          </Link>
          <Link href="/daily-problem" className="flex items-center font-display text-2xl">
            <p>오늘의 추천 문제</p>
          </Link>
          <Link href="/algorithm-roadmap" className="flex items-center font-display text-2xl">
            <p>알고리즘 로드맵</p>
          </Link>
          <Link href="/algorithm-contest" className="flex items-center font-display text-2xl">
            <p>문제 평가</p>
          </Link>

          <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
                <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={() => {
                  history.pushState(null, '', location.pathname);
                  setShowSignInModal(true);
                }}
              >
                로그인
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
