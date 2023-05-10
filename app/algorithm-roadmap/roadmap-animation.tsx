'use client'

import { setModalAttribute, useDemoModal } from "@/components/home/demo-modal";
import useCanvas from "@/components/shared/useCanvas";
import { RefObject } from "react";
import { WaveGroup } from "./roadmap-animation/wavegroup"
import { RoadmapLayout } from "./roadmap-layout"

type RoadmapAnimationProps = {
    canvasWidth: number;
    canvasHeight: number;
};

const RoadmapAnimation: React.FC<RoadmapAnimationProps> = ({
    canvasWidth, canvasHeight
}) => {

    let orbs: WaveGroup[] = [];
    let diameter: number = 150;
    let ratio: number = 0.7;

    for(let lay of RoadmapLayout) {

        orbs.push(new WaveGroup(lay.category, lay.startX, lay.startY, diameter, ratio, lay.colors));
    }

    function animate(ctx: CanvasRenderingContext2D) {

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        for(let orb of orbs) {

            orb.draw(ctx);
            ctx.textAlign = "center";
            ctx.font = "30px normal";
            ctx.strokeText(orb.name, orb.centerX, orb.centerY);
        }
    }
    
    let radius: number = diameter / 2;
    const { DemoModal, setShowDemoModal } = useDemoModal();
    const detectClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {

        const curX = event.nativeEvent.offsetX;
        const curY = event.nativeEvent.offsetY;
        console.log(curX, " / ", curY);
        for(let lay of RoadmapLayout) {

            // if(curX >= lay.startX && curX <= lay.startX + diameter && curY >= lay.startY && curY <= lay.startY + diameter) {
            if(Math.sqrt(Math.pow(lay.startX - curX + radius, 2) + Math.pow(lay.startY - curY + radius, 2)) <= radius) {

                setModalAttribute(lay.category, lay.content, lay.image);
                setShowDemoModal(true);
            }
        }
    }
    
    const canvasRef: RefObject<HTMLCanvasElement> = useCanvas(canvasWidth, canvasHeight, animate);
    return (
        <>
            <canvas id="roadmap-canvas" ref={canvasRef} onClick={detectClick} />
            <DemoModal />
        </>
    );
}

export default RoadmapAnimation;