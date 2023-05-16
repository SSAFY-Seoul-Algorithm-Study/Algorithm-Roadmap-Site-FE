import ProblemTable from "@/components/home/problem-table";

export default function ProblemRanking() {
  const dummy: {
    [key: number]: {
      problem_no: number;
      title: string;
      category: string[];
      solved_cnt: number;
    };
  } = {
    1: {
      problem_no: 5644,
      title: "Coalescing Continents",
      category: ["DFS"],
      solved_cnt: 13,
    },
    2: {
      problem_no: 1263,
      title: "시간 관리",
      category: ["Brute Force", "DP"],
      solved_cnt: 163,
    },
    3: {
      problem_no: 13156,
      title: "Selling CPUs",
      category: ["BFS", "DP"],
      solved_cnt: 123,
    },
    4: {
      problem_no: 19193,
      title: "Lines",
      category: ["Greedy", "Segment Tree"],
      solved_cnt: 113,
    },
  };

  const sortedData = Object.values(dummy).sort(
    (a, b) => b.solved_cnt - a.solved_cnt,
  );

  return (
    <>
      <div className="col-start-1 col-end-7 h-96 flex-col justify-around overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md ">
        <div className="relative animate-fade-up overflow-x-auto">
          <h2
            className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            {/* <Balancer> */}
            오늘의 문제
            {/* </Balancer> */}
          </h2>
          <br />
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  문제 번호
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">문제 제목</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">분류</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">푼 사람 수</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((dummy) => (
                <ProblemTable key={dummy.problem_no} data={dummy} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
