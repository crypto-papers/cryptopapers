declare module '*.scss' {
  const content: Record<string, string>;

  export = content;
}

declare module '*.svg' {
  import type React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}
