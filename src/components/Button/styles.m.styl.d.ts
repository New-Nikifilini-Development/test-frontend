declare namespace StylesMStylNamespace {
  export interface IStylesMStyl {
    brandButton: string;
    disabled: string;
    greenButton: string;
    iconOnly: string;
    outline: string;
    purpleButton: string;
    redButton: string;
    resting: string;
    small: string;
    yellowButton: string;
  }
}

declare const StylesMStylModule: StylesMStylNamespace.IStylesMStyl & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesMStylNamespace.IStylesMStyl;
};

export = StylesMStylModule;
