import {
  BaseColumn,
  GetLengthArguments,
  GetTextArguments,
  GetTextResult,
  ItemHighlight,
  fn,
} from "../deps.ts";

export type Params = Record<never, never>;

export class Column extends BaseColumn<Params> {
  getLength({}: GetLengthArguments<Params>): number | Promise<number> {
    return 5;
  }
  async getText(
    args: GetTextArguments<Params>,
  ): Promise<GetTextResult> {
    let icon: string;
    let iconLength: number;
    let padding: string;
    const highlights: ItemHighlight[] = [];
    switch (args.item.word) {
      // for ascii
      case "0":
        icon = "AA";
        iconLength = await fn.strlen(args.denops, icon);
        padding = "-".repeat(5 - iconLength);
        highlights.push({
          name: "Icon",
          hl_group: "Search",
          col: args.startCol,
          width: iconLength,
        });
        console.log(icon, iconLength, padding);
        break;
      // for unicode
      case "1":
        icon = "🦕";
        iconLength = await fn.strlen(args.denops, icon);
        padding = "-".repeat(5 - iconLength);
        highlights.push({
          name: "Icon",
          hl_group: "Search",
          col: args.startCol,
          width: iconLength,
        });
        console.log(icon, iconLength, padding);
        break;
      // for nerdfont
      case "2":
        icon = "";
        iconLength = await fn.strlen(args.denops, icon);
        padding = "-".repeat(5 - iconLength);
        highlights.push({
          name: "Icon",
          hl_group: "Search",
          col: args.startCol,
          width: iconLength,
        });
        console.log(icon, iconLength, padding);
        break;
      // for 漢字
      case "deno.lock":
        icon = "亀";
        iconLength = await fn.strlen(args.denops, icon);
        padding = "-".repeat(5 - iconLength);
        highlights.push({
          name: "Icon",
          hl_group: "Search",
          col: args.startCol,
          width: iconLength,
        });
        console.log(icon, iconLength, padding);
        break;
      default:
        icon = "  ";
        iconLength = await fn.strlen(args.denops, icon);
        padding = "-".repeat(5 - iconLength);
        console.log(icon, iconLength, padding);
    }
    return Promise.resolve({
      text: icon + padding,
      highlights: highlights,
    });
  }
  params(): Params {
    return {};
  }
}
