export type stringInfo = {
    lowercase: string,
    uppercase: string,
    characters: string[],
    length: number,
    extraInfo: Object
}

type LoggerService = (arg: string) => void;

export function calculateComplexity(stringInfo: stringInfo) {
    return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}

export function toUpperCaseWithCb(arg: string, callback: LoggerService) {
    if(!arg) {
        callback('Invalid argument!');
        return;
    }
    callback(`Called function ${arg}`);
    return arg.toUpperCase();
}