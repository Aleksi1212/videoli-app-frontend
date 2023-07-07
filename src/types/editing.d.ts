interface MediaType {
    video: string;
    waterMark: string;
}

interface WaterMarkStyleValueType {
    value: number;
    max: number;
    header: string;
}
interface WaterMarkStyleType {
    xPos: WaterMarkStyleValueType;
    yPos: WaterMarkStyleValueType;
    size: WaterMarkStyleValueType;
    opacity: WaterMarkStyleValueType;
    rotation: WaterMarkStyleValueType;
}
