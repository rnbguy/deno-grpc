import type {
  Root,
  Type,
  Field,
  Service,
  Message,
  Method,
  ReflectionObject,
  IParserResult
} from "https://esm.sh/protobufjs@6.10.2/index.d.ts";

import protobuf from "https://esm.sh/protobufjs@6.10.2";

export { Root, Type, Field, Service, Message, Method, ReflectionObject };

export function parse(proto: string): IParserResult {
  return protobuf.parse(proto);
}
