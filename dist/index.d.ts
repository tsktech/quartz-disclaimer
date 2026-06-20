import { QuartzComponent } from '@quartz-community/types';

interface DisclaimerOptions {
    /** Custom text to display (optional, uses default if not set) */
    text?: string;
}
declare const _default: (opts?: DisclaimerOptions) => QuartzComponent;

export { _default as Disclaimer, type DisclaimerOptions };
