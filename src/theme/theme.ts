import {
    defaultColor,
    defaultSpacing,
    defaultRadius,
    defaultRounded,
    defaultFontSize,
    defaultFontFamily,
    defaultDimensions,
    defaultBoxShadow,
    ColorType,
    BoxShadowType,
    DimensionsType,
    SpacingType,
    FontSizeType,
} from './defaults';

export type DefaultThemeType = {
    readonly color: ColorType;
    readonly padding: SpacingType;
    readonly margin: SpacingType;
    readonly radius: string;
    readonly rounded: string;
    readonly font: {
        readonly size: FontSizeType;
        readonly family: string;
    };
    readonly height: DimensionsType;
    readonly width: DimensionsType;
    readonly boxShadow: BoxShadowType;
};
export const theme: DefaultThemeType = {
    color: defaultColor,
    padding: defaultSpacing,
    margin: defaultSpacing,
    radius: defaultRadius,
    rounded: defaultRounded,
    font: {
        size: defaultFontSize,
        family: defaultFontFamily,
    },
    height: defaultDimensions,
    width: defaultDimensions,
    boxShadow: defaultBoxShadow,
};

export type ThemeType<T = undefined> = DefaultThemeType & { custom: T };
