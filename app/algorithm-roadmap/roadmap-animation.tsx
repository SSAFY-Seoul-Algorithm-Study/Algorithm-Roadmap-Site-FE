'use client'

import useCanvas from "@/components/shared/useCanvas";
import { RefObject } from "react";
import { WaveGroup } from "./roadmap-animation/wavegroup"

type RoadmapAnimationProps = {
    canvasWidth: number;
    canvasHeight: number;
};

const RoadmapAnimation: React.FC<RoadmapAnimationProps> = ({
    canvasWidth, canvasHeight
}) => {

    function fillBackground(ctx: CanvasRenderingContext2D) {

        ctx.fillStyle = 'rgb(200, 200, 200)';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    };

    let orbs: WaveGroup[] = [];
    for(let i = 0; i <= 500; i += 100) {

        orbs.push(new WaveGroup(i, i, 100, 100, 0.5));
    }

    function animate(ctx: CanvasRenderingContext2D) {

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        fillBackground(ctx);
        for(let orb of orbs) {

            orb.draw(ctx);
        }
    }

    const canvasRef: RefObject<HTMLCanvasElement> = useCanvas(canvasWidth, canvasHeight, animate);

    return (
        <canvas ref={canvasRef} />
    );
}

export default RoadmapAnimation;