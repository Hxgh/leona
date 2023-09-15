declare module '*.less' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.mjs';

declare module '@/*';

declare module '*.vue' {
  import { defineComponent } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

declare module '*.json' {
  const jsonValue: {
    ['name']: unknown;
  };
  export default jsonValue;
}
