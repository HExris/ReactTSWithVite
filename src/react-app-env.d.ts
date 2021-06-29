/// <reference types="react-scripts" />
declare module "*.tsx" {
  const content: { [className: string]: string };
  export default content;
}