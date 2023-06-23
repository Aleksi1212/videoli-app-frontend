interface MediaTypes {
    video: string;
    waterMark: string;
}

interface WaterMarkStyleValues {
    value: number;
    max: number;
    header: string;
}

interface WaterMarkStyleTypes {
    xPos: WaterMarkStyleValues;
    yPos: WaterMarkStyleValues;
    size: WaterMarkStyleValues;
    opacity: WaterMarkStyleValues;
    rotation: WaterMarkStyleValues;
}

interface AuthContent {
    title: string;
    content: string;
    contentStyles: string;
}
