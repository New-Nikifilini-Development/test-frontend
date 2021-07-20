
declare module '*.svg' {
  const content: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & { title?: string; className?: string }
      >
  export default content
}