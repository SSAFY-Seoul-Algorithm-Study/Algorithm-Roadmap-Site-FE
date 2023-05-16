import DailyProblemTable from "./daily-problem-table";

export default function ProblemRanking() {
  return (
    <>
      <div className="my-10 grid w-full max-w-screen-xl grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0 ">
        <DailyProblemTable />
      </div>
    </>
  );
}
