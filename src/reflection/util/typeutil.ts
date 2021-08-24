export namespace typeutil {
  export type assertEqual<T, Expected> = [T] extends [Expected]
    ? [Expected] extends [T]
      ? true
      : false
    : false;

  export type depromisify<T> = T extends Promise<infer U> ? depromisify<U> : T;
  export type identity<T> = T;
  export type flatten<T> = identity<{[k in keyof T]: T[k]}>;
  export type tupleOf<T> = [T, ...T[]] | [];
  export type writeable<T> = {-readonly [P in keyof T]: T[P]};

  export type nonNeverKeys<T> = {
    [k in keyof T]: [T[k]] extends [never] ? never : k;
  }[keyof T];

  export type stripNever<T> = identity<
    {
      [k in nonNeverKeys<T>]: k extends keyof T ? T[k] : never;
    }
  >;
}
