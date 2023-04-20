"use client"
import AutoHeightImage from "@/components/shared/auto-height-image";

export default function AlgorithmRoadmap() {

    return(
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
            {/* <Image
                src="/TempRoadmap.png"
                alt="임시 로드맵"
                layout="fill"
                className="flex items-center font-display text-2xl"
            ></Image> */}
            <AutoHeightImage src="/TempRoadmap.png" alt="임시이미지" />
        </div>
    );
}