import { Kalam } from "next/font/google";
import ContentEditable,{ContentEditableEvent} from "react-contenteditable";

import { cn,colorToCss, getContrastingTextColor } from "@/lib/utils";
import { NoteLayer } from "@/types/canvas";
import { useMutation } from "@/liveblocks.config";
import { he } from "date-fns/locale";

const font = Kalam({
    subsets: ["latin"],
    weight: ["400"]
});

const calculateFontSize = (width:number,height:number) => {
    const maxFontSize = 100;
    const scaleFactor = 0.15;
    const fontSizeBasedOnWidth = width * scaleFactor;
    const fontSizeBasedOnHeight = height * scaleFactor;

    return Math.min(fontSizeBasedOnWidth,fontSizeBasedOnHeight,maxFontSize);
}

interface NoteProps {
    id: string;
    layer: NoteLayer;
    onPointerDown: (e: React.PointerEvent, layerId: string) => void;
    selectionColor?: string;

    
}

export const Note = ({ id, layer, onPointerDown, selectionColor }: NoteProps) => {
    const { x, y, fill,value,width,height } = layer;
    const updateValue = useMutation(({ storage },newValue:string,) => {
        const liveLayers = storage.get("layers");
        liveLayers.get(id)?.set("value", newValue);

    },[]);

    const handleContentChange = (e:ContentEditableEvent) => {
        updateValue(e.target.value);
    }

    return (
        <foreignObject
        x={x}
        y={y}
        width={width}
        height={height}
        onPointerDown={(e) => onPointerDown(e, id)}
        className="drop-shadow-md"
        style={{outline:selectionColor ? `1px solid ${selectionColor}` : "none",
        backgroundColor:fill ? colorToCss(fill): "#000",
        }}>
            <ContentEditable
            html={value || "Text"}
            onChange={handleContentChange}
            className={cn("h-full w-full flex items-center justify-center text-center outline-none",font.className)}
            style={{ fontSize:calculateFontSize(width,height),color:fill ? getContrastingTextColor(fill) : "#000"}}
            />
        </foreignObject>
    )
}