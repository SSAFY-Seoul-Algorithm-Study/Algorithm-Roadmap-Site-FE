import Link from "next/link";

interface Problem {
  problem_no: number;
  title: string;
  category: string[];
  solved_cnt: number;
}

interface ProblemTableProps {
  data: Problem;
}

export default function ProblemTable({ data }: ProblemTableProps) {
  return (
      <tr className="border-b bg-white dark:border-gray-700" key={data.problem_no}>
        <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
          {data.problem_no}
        </th>
        <td className="px-6 py-4">
          <Link href={`https://www.acmicpc.net/problem/${data.problem_no}`}>
            {data.title}
          </Link>
        </td>
        <td className="px-6 py-4">{data.category.join(", ")}</td>
        <td className="px-6 py-4">{data.solved_cnt}</td>
      </tr>
  );
}