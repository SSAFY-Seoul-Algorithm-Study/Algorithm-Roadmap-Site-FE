'use client';

import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import type { NextPage, NextPageContext } from "next";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

interface FormValue {
  id: string;
  password: string;
}

const LoginPage: NextPage = () => {
  const router = useRouter();

  // register : 폼들의 유효성을 확인하는 메소드
  // handleSubmit : 폼을 제출하기 위한 함수
  // watch : 실시간으로 입력폼에 적힌 값을 확인하는 옵션 (keyUp event가 일어날때마다 e.target.value를 확인하는 기능)
  // formState : 전체 양식 상태에 대한 정보
  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm<FormValue>({ mode: "onBlur" });

  const useSubmitHandler: SubmitHandler<FormValue> = async (data: {
    id: string;
    password: string;
  }) => {
    const loginId = data.id;
    const loginPassword = data.password;

    try {
      const res = await signIn("credentials", {
        redirect: false,
        loginId,
        loginPassword,
      });

      if (res?.error) return res.error;

      history.go();

    } catch (error) {
      console.error("Error occured : ", error);
    }
  };

  return (
    <div className="w-full max-w-screen-xl md:grid-cols-1 xl:px-0">
      <div
        className={`relative col-span-1 overflow-hidden rounded-xl bg-white md:col-span-2`}
      >
        <div className="flex items-center justify-center">
          <div className="mt-8 flex flex-col">
            <form onSubmit={handleSubmit(useSubmitHandler)}>
              <input
                className={`block w-full rounded-full`}
                type="text"
                placeholder="아이디를 입력하세요."
                {...register("id", {
                  required: "아이디를 입력하세요 ㅡㅡ",
                  pattern: {
                    value: /^[A-za-z0-9가-힣]{3,10}$/,
                    message: "아이디는 3-10자여야만 합니다.",
                  },
                })}
              />
              <br />
              <input
                className={`block w-full flex-grow rounded-full`}
                type="password"
                placeholder="비밀번호를 입력하세요."
                {...register("password", {
                  required: "비밀번호를 입력하세요.",
                  pattern: {
                    value:
                      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,16}$/,
                    message:
                      "비밀번호는 최소 1개의 알파벳, 1개의 숫자, 1개의 특수문자를 포함하는 8-16자여야만 합니다.",
                  },
                })}
              />
              <div className="flex flex-row">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-8 flex w-1/3 justify-center rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                >
                  로그인
                </button>
              </div>
            </form>
            <div className="mt-4 flex justify-center">
              <Link href="/" className=" m-4 w-40 text-center ">
                회원정보 찾기
              </Link>
              <Link href="/" className=" m-4 w-40 text-center ">
                회원가입
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
