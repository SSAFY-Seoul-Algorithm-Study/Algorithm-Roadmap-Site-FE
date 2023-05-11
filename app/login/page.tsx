'use client'

import LoginCard from "@/components/home/login-card";
import Link from "next/link";
import axios from "axios";
import { Cookies } from "react-cookie";
import { useForm, SubmitHandler } from "react-hook-form";
import type { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";


const cookies = new Cookies();//쿠키 사용을 위해 선언

interface FormValue {
    id: string;
    password: string;
}


const Home: NextPage = () => {


    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValue>();

    const useSubmitHandler: SubmitHandler<FormValue> = (data) => {
        const router = useRouter();
        const loginId = data.id;
        const base64Pw = btoa(data.password);
        const newLoginArray = {
            id: loginId,
            password: base64Pw,
        };

        axios
            .post("/api/user", newLoginArray)
            .then((response) => {
                const { accessToken } = response.data;
                cookies.set("LoginToken", accessToken, {
                    path: "/",
                    secure: true,
                    sameSite: "none",
                });

                router.replace("/comment");
            })
            .catch((error) => {
                alert("아이디 또는 비밀번호를 확인해주세요.");
            });
    };

    const features = [
        {
            title: "로그인",
            demo: <div className="flex mt-8 flex-col w-1/3 ">

                <form onSubmit={handleSubmit(useSubmitHandler)}>



                    <input
                        type="text"
                        {...register("id")}
                        placeholder="아이디를 입력하세요."
                        className={`rounded-full block w-full flex-grow
                        `}
                    />


                    <br></br>

                    <input
                        {...register("password")} type="password"
                        placeholder="비밀번호를 입력하세요."
                        className={`rounded-full block w-full flex-grow`}
                    //   disabled={disabled}
                    />

                    <Link href="/">
                        <button
                            className="mt-8 rounded-full border w-full  border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                        >
                            로그인
                        </button>
                    </Link>
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
        },
    ];



    return (

        <div className="flex justify-center my-10 w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-1 xl:px-0">

            {features.map(({ title, demo, large }) => (
                <LoginCard
                    key={title}
                    title={title}
                    demo={demo}
                    large={large}
                />
            ))}
        </div>



    );
};
export default Home;
