'use client';

import LoginCard from "@/components/home/login-card";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import type { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";

interface FormValue {

    id: string;
    password: string;
}

const LoginPage: NextPage = () => {
    
    // register : 폼들의 유효성을 확인하는 메소드
    // handleSubmit : 폼을 제출하기 위한 함수
    // watch : 실시간으로 입력폼에 적힌 값을 확인하는 옵션 (keyUp event가 일어날때마다 e.target.value를 확인하는 기능)
    // formState : 전체 양식 상태에 대한 정보
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<FormValue>({ mode: 'onChange' });

    const useSubmitHandler: SubmitHandler<FormValue> = (data) => {
        const router = useRouter();
        const loginId = data.id;
        const base64Pw = Buffer.from(data.password, 'base64');
        const newLoginReq = {
            id: loginId,
            password: base64Pw,
        };
        console.log("test", newLoginReq)

        try {

        } catch (error) {

        }
    };

    const features = {
        title: "로그인",
        content: <div className="flex mt-8 flex-col w-1/3 ">
            <form onSubmit={handleSubmit(useSubmitHandler)}>
                <input
                    type="text"
                    {...register("id"), {
                        required: "아이디를 입력하세요",
                        pattern: {
                            value: /^[A-za-z0-9가-힣]{3,10}$/,
                            message: "아이디는 3-10자여야만 합니다."
                        }
                    }}
                    placeholder="아이디를 입력하세요."
                    className={`rounded-full block w-full flex-grow`}
                />
                <br></br>
                <input
                    type="password"
                    {...register("password", {
                        required: "비밀번호를 입력하세요.",
                        pattern: {
                            value: /(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*()_-+=[]{}~?:;`|/]).{8,16}$i/,
                            message: "비밀번호는 최소 1개의 알파벳, 1개의 숫자, 1개의 특수문자를 포함하는 8-16자여야만 합니다."
                        }
                    })}
                    placeholder="비밀번호를 입력하세요."
                    className={`rounded-full block w-full flex-grow`}
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
        </div>,
        large: true,
    };



    return (

        <div className="flex justify-center my-10 w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-1 xl:px-0">
            <LoginCard
                key={features.title}
                title={features.title}
                demo={features.content}
                large={features.large}
            />
        </div>



    );
};
export default LoginPage;
