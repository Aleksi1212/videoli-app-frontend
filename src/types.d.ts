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

interface AuthContent {
    title: string;
    content: string;
    contentStyles: string;
}

type User = {
    id: string;
    name: string;
    email: string;
    profileImage: any;
};
type UserFile = {
    id: string;
    name: string;
    fileImage: any;
};

interface UserData {
    user: User;
    files: UserFile[];
}
