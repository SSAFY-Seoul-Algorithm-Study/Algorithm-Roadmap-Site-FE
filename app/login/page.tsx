'use client';

import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import type { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import Balancer from "react-wrap-balancer"

interface FormValue {

    id: string;
    password: string;
}

const LoginPage: NextPage = () => {
    
    // register : 폼들의 유효성을 확인하는 메소드
    // handleSubmit : 폼을 제출하기 위한 함수
    // watch : 실시간으로 입력폼에 적힌 값을 확인하는 옵션 (keyUp event가 일어날때마다 e.target.value를 확인하는 기능)
    // formState : 전체 양식 상태에 대한 정보
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<FormValue>({ mode: 'onTouched' });
    const router = useRouter();

    const useSubmitHandler: SubmitHandler<FormValue> = async (data: {
        id: string;
        password: string;
    }) => {

        const loginId = data.id;
        const loginPassword = data.password;

        console.log("test", loginId, loginPassword)

        try {
            const res = await signIn("credentials", {
                
                redirect: false,
                loginId,
                loginPassword,
            });

            if(res?.error)
                return res.error;

            router.back();

        } catch (error) {

            console.error("Error occured : ", error)
        }
    };

    return (

        <div className="flex justify-center my-10 w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-1 xl:px-0">
            <div className={`w-3/4 relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md md:col-span-2`}>
                <div className="mt-12 mx-auto max-w-md text-center">
                    <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal mb-4">
                        <Balancer>로그인</Balancer>
                    </h2>
                    <div className="prose-sm -mt-2 leading-normal text-gray-500 md:prose" />
                </div>
                <div className="flex h-60 items-center justify-center">
                    <div className="flex mt-8 flex-col w-1/3 ">
                        <form onSubmit={handleSubmit(useSubmitHandler)}>
                            <input
                                className={`rounded-full block w-full flex-grow`}
                                type="text"
                                placeholder="아이디를 입력하세요."
                                {...register("id", {
                                    required: "아이디를 입력하세요",
                                    pattern: {
                                        value: /^[A-za-z0-9가-힣]{3,10}$/,
                                        message: "아이디는 3-10자여야만 합니다."
                                    },
                                })}
                            />
                            <br />
                            <input
                                className={`rounded-full block w-full flex-grow`}
                                type="password"
                                placeholder="비밀번호를 입력하세요."
                                {...register("password", {
                                    required: "비밀번호를 입력하세요.",
                                    pattern: {
                                        value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,16}$/,
                                        message: "비밀번호는 최소 1개의 알파벳, 1개의 숫자, 1개의 특수문자를 포함하는 8-16자여야만 합니다."
                                    }
                                })}
                            />
                            <button type="submit" disabled={isSubmitting} className="mt-8 rounded-full border w-full  border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black">
                                로그인
                            </button>
                        </form>
                        <div className="flex mt-4 justify-center">
                            <Link href="/" className=" w-40 m-4 text-center ">
                                회원정보 찾기
                            </Link>
                            <Link href="/" className=" w-40 m-4 text-center ">
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
