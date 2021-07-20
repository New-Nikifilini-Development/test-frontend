declare namespace StylesMStylNamespace {
  export interface IStylesMStyl {
    alien: string;
    day: string;
    head: string;
    selected: string;
    today: string;
    week: string;
    weekdays: string;
    wrapper: string;
  }
}

declare const StylesMStylModule: StylesMStylNamespace.IStylesMStyl & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesMStylNamespace.IStylesMStyl;
};

export = StylesMStylModule;
