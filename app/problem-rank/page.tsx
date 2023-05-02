import CustomizedTables from "@/components/shared/MaterialTable";

export default function ProblemRank() {
  return(
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <div className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>

          {/* {features.map(({ title, description, demo, large }) => ( */}
              <CustomizedTables />
          {/* ))} */}
        </div>
      </div>
    </>
  );
};