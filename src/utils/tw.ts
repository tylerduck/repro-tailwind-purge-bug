/**
 * passthrough template string function to get intellisense on tailwind class strings
 * @param style tailwind class strings
 * @returns class strings exactly as they were passed in
 * @example const someStyle = tw`flex space-between`;
 */
const tw = (style: TemplateStringsArray): string => style[0];
export default tw;
