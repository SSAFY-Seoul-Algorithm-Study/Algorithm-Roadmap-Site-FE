import { RefObject, useEffect, useRef } from "react";

export default function useCanvas(
    canvasWidth: number,
    canvasHeight: number,
    animate: (ctx: CanvasRenderingContext2D) => void) {

    const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);

    useEffect(() => {

        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        function setCanvas() {

            const devicePixelRatio = window.devicePixelRatio ?? 1;

            if(canvas && ctx) {
                
                canvas.style.width = canvasWidth + 'px';
                canvas.style.height = canvasHeight + 'px';

                canvas.width = canvasWidth * devicePixelRatio;
                canvas.height = canvasHeight * devicePixelRatio;

                ctx.scale(devicePixelRatio, devicePixelRatio);
            }
        };
        setCanvas();

        let requestId: number;
        function requestAnimation() {

            requestId = window.requestAnimationFrame(requestAnimation);

            if(ctx) animate(ctx);
        };

        requestAnimation();

        return function() {
            
            window.cancelAnimationFrame(requestId);
        }

    }, [canvasWidth, canvasHeight, animate]);

    return canvasRef;
};