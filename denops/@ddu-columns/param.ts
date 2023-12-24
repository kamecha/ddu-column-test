import {
  BaseColumn,
  GetLengthArguments,
  GetTextArguments,
  GetTextResult,
} from "../deps.ts";

export type Params = {
  text: string;
};

export class Column extends BaseColumn<Params> {
  getLength(args: GetLengthArguments<Params>): number | Promise<number> {
    return (new TextEncoder().encode(args.columnParams.text)).length;
  }
  getText(
    args: GetTextArguments<Params>,
  ): Promise<GetTextResult> {
    return Promise.resolve({
      text: args.columnParams.text,
    });
  }
  params(): Params {
    return {
      text: "Hello",
    };
  }
}
