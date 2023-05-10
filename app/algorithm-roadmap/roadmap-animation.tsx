'use client'

import { setModalAttribute, useDemoModal } from "@/components/home/demo-modal";
import useCanvas from "@/components/shared/useCanvas";
import { RefObject } from "react";
import { WaveGroup } from "./roadmap-animation/wavegroup"
import { LineRelation, RoadmapLayout } from "./roadmap-layout"

type RoadmapAnimationProps = {
    canvasWidth: number;
    canvasHeight: number;
};

const RoadmapAnimation: React.FC<RoadmapAnimationProps> = ({
    canvasWidth, canvasHeight
}) => {

    let orbs: WaveGroup[] = [];
    
    for(let lay of RoadmapLayout) {
        
        let ratio: number = 0.7;
        orbs.push(new WaveGroup(lay.category, lay.startX, lay.startY, lay.radius * 2, ratio, lay.colors));
    }

    function animate(ctx: CanvasRenderingContext2D) {

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        for(let orb of orbs) {

            orb.draw(ctx);
            let size = (orb.stageSize * 0.7) / (orb.name.length);
            ctx.font = size + "px normal";
            ctx.textAlign = "center";
            ctx.lineWidth = 2;
            ctx.strokeText(orb.name, orb.centerX, orb.centerY);

        }

        //화살표 긋기
        // for(let arrow of LineRelation) {
            
        //     arrowDrawing(ctx, 0, orbs[arrow[0]].centerY, orbs[arrow[1]].centerX, orbs[arrow[1]].centerY, 'blue');
        // }
    }
    
    function arrowDrawing(ctx: CanvasRenderingContext2D, sx: number, sy: number, ex: number, ey: number, color: string) {
        if (ctx != null) {

            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.moveTo(sx, sy);
            ctx.lineTo(ex, ey);
            ctx.stroke();

            var aWidth = 5;
            var aLength = 12;
            var dx = ex - sx;
            var dy = ey - sy;
            var angle = Math.atan2(dy, dx);
            var length = Math.sqrt(dx * dx + dy * dy);
            ctx.closePath();

            //두점 선긋기
            ctx.beginPath();
            ctx.translate(sx, sy);
            ctx.rotate(angle);
            ctx.fillStyle = color;

            //화살표 모양 만들기
            ctx.moveTo(length - aLength, -aWidth);
            ctx.lineTo(length, 0);
            ctx.lineTo(length - aLength, aWidth);

            ctx.fill();
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.closePath();
        }
    }

    const { DemoModal, setShowDemoModal } = useDemoModal();
    const detectClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {

        const curX = event.nativeEvent.offsetX;
        const curY = event.nativeEvent.offsetY;
        
        for(let lay of RoadmapLayout) {

            if(Math.sqrt(Math.pow(lay.startX - curX + lay.radius, 2) + Math.pow(lay.startY - curY + lay.radius, 2)) <= lay.radius) {

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