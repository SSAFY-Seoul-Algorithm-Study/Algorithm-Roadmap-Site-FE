export default function weeklyRanking() {

    const dummy: { [key: number]: { name: string, rating: number, problem: number } } = {
        1: {
            name: "박종호",
            rating: 100,
            problem: 10
        },
        2: {
            name: "이의찬",
            rating: 50,
            problem: 5
        },
        3: {
            name: "정재웅",
            rating: 200,
            problem: 45
        },
        4 : {
            name :"이종민",
            rating: 300,
            problem: 30
        }
    };

    const sortedData = Object.values(dummy).sort((a, b) => b.rating - a.rating);

    const PersonRating = ({ data }: { data: { name: string, rating: number, problem: number } }) => {

        return (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={data.name}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{data.name}</th>
                <td className="px-6 py-4">{data.rating}</td>
                <td className="px-6 py-4">{data.problem}</td>
            </tr>
        )
    }

    return (
        <div className="flex-col justify-around col-start-1 col-end-7 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md ">
            <div className="relative overflow-x-auto">
                <h2
                    className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
                    style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
                >
                    {/* <Balancer> */}
                    주간 랭킹
                    {/* </Balancer> */}
                </h2>
                <br></br>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                이름
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    점수
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    문제 수
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((data) => (
                            <PersonRating key={data.name} data={data} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}