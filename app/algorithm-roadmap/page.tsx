import Script from "next/script";

export default function AlgorithmRoadmap() {

    return(
        <div className="my-10 grid w-full max-w-screen-xl grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0 ">
            <Script type="module" src="js/app.js" />
        </div>
    );
}