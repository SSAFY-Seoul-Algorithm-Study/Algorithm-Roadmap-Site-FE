import RoadmapAnimation from "./roadmap-animation";

export default function AlgorithmRoadmap() {

    return(
        <div className="animate-fade-up z-0 my-10 grid w-full max-w-screen-xl grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
            <RoadmapAnimation
                canvasWidth={1280}
                canvasHeight={5000}
            />
        </div>
    );
}