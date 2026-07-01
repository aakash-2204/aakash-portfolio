declare module "gsap-trial/SplitText" {
  export interface SplitTextInstance {
    chars: unknown[];
    words: unknown[];
    revert(): void;
  }

  export class SplitText implements SplitTextInstance {
    constructor(target: string | string[] | Element | Element[] | NodeListOf<Element>, vars?: Record<string, unknown>);
    chars: unknown[];
    words: unknown[];
    revert(): void;
  }
}
