declare namespace StylesMStylNamespace {
  export interface IStylesMStyl {
    blue: string;
    green: string;
    grey: string;
    red: string;
    tag: string;
  }
}

declare const StylesMStylModule: StylesMStylNamespace.IStylesMStyl & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesMStylNamespace.IStylesMStyl;
};

export = StylesMStylModule;
