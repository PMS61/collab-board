import { colorToCss } from "@/lib/utils";
import { RectangleLayer } from "@/types/canvas";

interface RectangleProps {
    id: string;
    onPointerDown: (e:React.PointerEvent, layerId:string) => void;
    selectionColor?: string;
    layer: RectangleLayer;
}

export const Rectangle = ({id,onPointerDown,selectionColor,layer}:RectangleProps) => {
    const { x, y, width, height,fill } = layer;
    return (
        <rect className="drop-shadow-md" onPointerDown={(e) => onPointerDown(e,id)}
        style = {{transform: `translate(${x}px, ${y}px)`}}
        x={0} y={0} width={width} height={height} fill={fill ? colorToCss(fill): "#000"} strokeWidth={1} stroke={selectionColor || "transparent"}
    />
    );
}