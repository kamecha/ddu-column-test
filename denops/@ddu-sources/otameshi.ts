import { BaseSource, GatherArguments, Item } from "../deps.ts";

export type Params = Record<never, never>;

export class Source extends BaseSource<Params> {
  gather({}: GatherArguments<Params>): ReadableStream<Item<unknown>[]> {
    return new ReadableStream({
      start(controller) {
        const items: Item<unknown>[] = [];
        const num = 10;
        for (let i = 0; i < num; i++) {
          items.push({
            word: `${i}`,
          });
        }
        controller.enqueue(items);
        controller.close();
      },
    });
  }
  params(): Params {
    return {};
  }
}
