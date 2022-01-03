import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TalkBoradThreadMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class TalkBoradThread {
  readonly id: string;
  readonly title?: string;
  readonly memo?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TalkBoradThread, TalkBoradThreadMetaData>);
  static copyOf(source: TalkBoradThread, mutator: (draft: MutableModel<TalkBoradThread, TalkBoradThreadMetaData>) => MutableModel<TalkBoradThread, TalkBoradThreadMetaData> | void): TalkBoradThread;
}