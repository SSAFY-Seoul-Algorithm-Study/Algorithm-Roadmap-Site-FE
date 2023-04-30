'use client';

import { useState } from "react";

export default function weeklyRanking() {

    const dummy: { [key: number]: { name: string, rating: number, problem: number } } = {
        1 : {
            name: "박종호",
            rating: 100,
            problem: 10
        },
        2 : {
            name: "이의찬",
            rating: 50,
            problem: 5
        },
        3 : {
            name: "정재웅",
            rating: 200,
            problem: 45
        }
    };

    const PersonRating = ({ num }: { num: number }) => {
        const [rating, setRating] = useState(dummy[num].rating);
        const [problem, setProblem] = useState(dummy[num].problem);

        return (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {dummy[num].name}
                </th>
                <td className="px-6 py-4">
                    {problem}
                </td>
                <td className="px-6 py-4">
                    {rating}
                </td>
            </tr>
        )
    }

    return(
        <div className="flex-col justify-around col-start-1 col-end-7 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md ">
            <div className="relative overflow-x-auto">
                <h1
                className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
                style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
                >
                {/* <Balancer> */}
                    주간 랭킹
                {/* </Balancer> */}
                </h1>
                <br></br>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                이름
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    문제 수
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    점수
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <PersonRating num={3} />
                        <PersonRating num={1} />
                        <PersonRating num={2} />
                    </tbody>
                </table>
            </div>
        </div>
    );
}