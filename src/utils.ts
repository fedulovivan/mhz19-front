export function extractDeviceIdString(input: string): string {
    const ii = input.split("(")
    return ii[1].replace(")", "")
}