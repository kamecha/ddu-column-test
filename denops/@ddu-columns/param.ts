import {
  BaseColumn,
  GetLengthArguments,
  GetTextArguments,
  GetTextResult,
  ItemHighlight,
} from "../deps.ts";

export type Params = {
  text: string;
  highlights?: ItemHighlight[];
};

export class Column extends BaseColumn<Params> {
  getLength(args: GetLengthArguments<Params>): number | Promise<number> {
    return (new TextEncoder().encode(args.columnParams.text)).length;
  }
  getText(
    args: GetTextArguments<Params>,
  ): Promise<GetTextResult> {
    const highlights: ItemHighlight[] = args.columnParams.highlights || [];
    return Promise.resolve({
      text: args.columnParams.text,
      highlights: highlights.map((h: ItemHighlight) => {
        return {
          ...h,
          col: args.startCol,
        };
      }),
    });
  }
  params(): Params {
    return {
      text: "Hello",
    };
  }
}
