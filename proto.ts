import type {
  Root,
  Type,
  Field,
  Service,
  Message,
  Method,
  ReflectionObject,
  IParserResult
} from "npm:protobufjs@6.10.2";

import lib from "npm:protobufjs@6.10.2";

export { Root, Type, Field, Service, Message, Method, ReflectionObject };

export function parse(proto: string): IParserResult {
  return lib.parse(proto);
}
