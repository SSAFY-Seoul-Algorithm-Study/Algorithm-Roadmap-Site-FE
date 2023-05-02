export default function ProblemRanking() {

    const dummy: { [key: number]: { problem_no: number, title: string, category: string[], solved_cnt: number} } = {
        1: {
            problem_no: 13,
            title: "임시 문제 제목1",
            category: ["분류 1"],
            solved_cnt: 13,
        },
        2: {
            problem_no: 1263,
            title: "임시 문제 제목2",
            category: ["분류 2", "분류 3"],
            solved_cnt: 163,
        },
        3: {
            problem_no: 13156,
            title: "임시 문제 제목3",
            category: ["분류 1", "분류 3"],
            solved_cnt: 123,
        },
        4: {
            problem_no: 9193,
            title: "임시 문제 제목4",
            category: ["분류 4","분류 6"],
            solved_cnt: 113,
        },        
    };

    const sortedData = Object.values(dummy).sort((a, b) => b.solved_cnt - a.solved_cnt);

    const ProblemRating = ({ data }: { data: { problem_no: number, title: string, category: string[], solved_cnt: number } }) => {

        return (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={data.problem_no}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{data.problem_no}</th>
                <td className="px-6 py-4">{data.title}</td>
                <td className="px-6 py-4">{data.category.join(", ")}</td>
                <td className="px-6 py-4">{data.solved_cnt}</td>
            </tr>
        )
    }

    return (
        <>
            <div className="flex-col justify-around col-start-1 col-end-7 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md ">
                <div className="animate-fade-up relative overflow-x-auto">
                    <h2
                        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
                        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
                    >
                        {/* <Balancer> */}
                        문제 랭킹
                        {/* </Balancer> */}
                    </h2>
                    <br></br>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    문제 번호
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        문제 제목
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        분류
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        푼 사람 수
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedData.map((data) => (
                                <ProblemRating key={data.problem_no} data={data} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}