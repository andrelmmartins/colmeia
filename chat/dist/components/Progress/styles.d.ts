import { LoaderProps, SizeVariant, ThemeVariant } from './interfaces';
export declare const Loader: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, LoaderProps, never>;
export declare const getSvgPathBySize: (size: SizeVariant) => import("react/jsx-runtime").JSX.Element;
export declare const getSvgSize: (size: SizeVariant) => "24" | "32" | "16" | "56" | "72";
export declare const getColorByVariant: (variant: ThemeVariant) => "neutral.low.pure" | "feedback.helper.pure" | "core.secondary.pure" | "feedback.success.pure" | "core.highlight.pure";
export declare const LineFrame: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const LineEffect: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("./interfaces").ProgressProps & {
    effect?: "grow" | "decrease";
}, never>;
