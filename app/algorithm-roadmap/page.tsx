import Image from "next/image";

export default function AlgorithmRoadmap() {

    return(
        <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
            <Image
                src="/TempRoadmap.png"
                alt="임시 로드맵"
                width="1000"
                height="1000"
                className="mr-2 rounded-sm"
            ></Image>
        </div>
    );
}