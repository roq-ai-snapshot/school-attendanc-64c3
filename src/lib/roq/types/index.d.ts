/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model leave
 *
 */
export type leave = $Result.DefaultSelection<Prisma.$leavePayload>;
/**
 * Model school
 *
 */
export type school = $Result.DefaultSelection<Prisma.$schoolPayload>;
/**
 * Model staff
 *
 */
export type staff = $Result.DefaultSelection<Prisma.$staffPayload>;
/**
 * Model student
 *
 */
export type student = $Result.DefaultSelection<Prisma.$studentPayload>;
/**
 * Model teacher
 *
 */
export type teacher = $Result.DefaultSelection<Prisma.$teacherPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Leaves
 * const leaves = await prisma.leave.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Leaves
   * const leaves = await prisma.leave.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.leave`: Exposes CRUD operations for the **leave** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Leaves
   * const leaves = await prisma.leave.findMany()
   * ```
   */
  get leave(): Prisma.leaveDelegate<ExtArgs>;

  /**
   * `prisma.school`: Exposes CRUD operations for the **school** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Schools
   * const schools = await prisma.school.findMany()
   * ```
   */
  get school(): Prisma.schoolDelegate<ExtArgs>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **staff** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Staff
   * const staff = await prisma.staff.findMany()
   * ```
   */
  get staff(): Prisma.staffDelegate<ExtArgs>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **student** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
   * ```
   */
  get student(): Prisma.studentDelegate<ExtArgs>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **teacher** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Teachers
   * const teachers = await prisma.teacher.findMany()
   * ```
   */
  get teacher(): Prisma.teacherDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    leave: 'leave';
    school: 'school';
    staff: 'staff';
    student: 'student';
    teacher: 'teacher';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'leave' | 'school' | 'staff' | 'student' | 'teacher' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      leave: {
        payload: Prisma.$leavePayload<ExtArgs>;
        fields: Prisma.leaveFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.leaveFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$leavePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.leaveFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$leavePayload>;
          };
          findFirst: {
            args: Prisma.leaveFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$leavePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.leaveFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$leavePayload>;
          };
          findMany: {
            args: Prisma.leaveFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$leavePayload>[];
          };
          create: {
            args: Prisma.leaveCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$leavePayload>;
          };
          createMany: {
            args: Prisma.leaveCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.leaveDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$leavePayload>;
          };
          update: {
            args: Prisma.leaveUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$leavePayload>;
          };
          deleteMany: {
            args: Prisma.leaveDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.leaveUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.leaveUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$leavePayload>;
          };
          aggregate: {
            args: Prisma.LeaveAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLeave>;
          };
          groupBy: {
            args: Prisma.leaveGroupByArgs<ExtArgs>;
            result: $Utils.Optional<LeaveGroupByOutputType>[];
          };
          count: {
            args: Prisma.leaveCountArgs<ExtArgs>;
            result: $Utils.Optional<LeaveCountAggregateOutputType> | number;
          };
        };
      };
      school: {
        payload: Prisma.$schoolPayload<ExtArgs>;
        fields: Prisma.schoolFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.schoolFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.schoolFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          findFirst: {
            args: Prisma.schoolFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.schoolFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          findMany: {
            args: Prisma.schoolFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>[];
          };
          create: {
            args: Prisma.schoolCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          createMany: {
            args: Prisma.schoolCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.schoolDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          update: {
            args: Prisma.schoolUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          deleteMany: {
            args: Prisma.schoolDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.schoolUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.schoolUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSchool>;
          };
          groupBy: {
            args: Prisma.schoolGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SchoolGroupByOutputType>[];
          };
          count: {
            args: Prisma.schoolCountArgs<ExtArgs>;
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number;
          };
        };
      };
      staff: {
        payload: Prisma.$staffPayload<ExtArgs>;
        fields: Prisma.staffFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.staffFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staffPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.staffFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staffPayload>;
          };
          findFirst: {
            args: Prisma.staffFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staffPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.staffFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staffPayload>;
          };
          findMany: {
            args: Prisma.staffFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staffPayload>[];
          };
          create: {
            args: Prisma.staffCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staffPayload>;
          };
          createMany: {
            args: Prisma.staffCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.staffDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staffPayload>;
          };
          update: {
            args: Prisma.staffUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staffPayload>;
          };
          deleteMany: {
            args: Prisma.staffDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.staffUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.staffUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$staffPayload>;
          };
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateStaff>;
          };
          groupBy: {
            args: Prisma.staffGroupByArgs<ExtArgs>;
            result: $Utils.Optional<StaffGroupByOutputType>[];
          };
          count: {
            args: Prisma.staffCountArgs<ExtArgs>;
            result: $Utils.Optional<StaffCountAggregateOutputType> | number;
          };
        };
      };
      student: {
        payload: Prisma.$studentPayload<ExtArgs>;
        fields: Prisma.studentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.studentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.studentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>;
          };
          findFirst: {
            args: Prisma.studentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.studentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>;
          };
          findMany: {
            args: Prisma.studentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[];
          };
          create: {
            args: Prisma.studentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>;
          };
          createMany: {
            args: Prisma.studentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.studentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>;
          };
          update: {
            args: Prisma.studentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>;
          };
          deleteMany: {
            args: Prisma.studentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.studentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.studentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>;
          };
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateStudent>;
          };
          groupBy: {
            args: Prisma.studentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<StudentGroupByOutputType>[];
          };
          count: {
            args: Prisma.studentCountArgs<ExtArgs>;
            result: $Utils.Optional<StudentCountAggregateOutputType> | number;
          };
        };
      };
      teacher: {
        payload: Prisma.$teacherPayload<ExtArgs>;
        fields: Prisma.teacherFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.teacherFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.teacherFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>;
          };
          findFirst: {
            args: Prisma.teacherFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.teacherFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>;
          };
          findMany: {
            args: Prisma.teacherFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>[];
          };
          create: {
            args: Prisma.teacherCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>;
          };
          createMany: {
            args: Prisma.teacherCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.teacherDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>;
          };
          update: {
            args: Prisma.teacherUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>;
          };
          deleteMany: {
            args: Prisma.teacherDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.teacherUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.teacherUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>;
          };
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTeacher>;
          };
          groupBy: {
            args: Prisma.teacherGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TeacherGroupByOutputType>[];
          };
          count: {
            args: Prisma.teacherCountArgs<ExtArgs>;
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    staff: number;
    student: number;
    teacher: number;
  };

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | SchoolCountOutputTypeCountStaffArgs;
    student?: boolean | SchoolCountOutputTypeCountStudentArgs;
    teacher?: boolean | SchoolCountOutputTypeCountTeacherArgs;
  };

  // Custom InputTypes

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: staffWhereInput;
    };

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountStudentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: studentWhereInput;
  };

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountTeacherArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: teacherWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    leave: number;
    school: number;
    staff: number;
    student: number;
    teacher: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leave?: boolean | UserCountOutputTypeCountLeaveArgs;
    school?: boolean | UserCountOutputTypeCountSchoolArgs;
    staff?: boolean | UserCountOutputTypeCountStaffArgs;
    student?: boolean | UserCountOutputTypeCountStudentArgs;
    teacher?: boolean | UserCountOutputTypeCountTeacherArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeaveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leaveWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSchoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: schoolWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staffWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: studentWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: teacherWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model leave
   */

  export type AggregateLeave = {
    _count: LeaveCountAggregateOutputType | null;
    _min: LeaveMinAggregateOutputType | null;
    _max: LeaveMaxAggregateOutputType | null;
  };

  export type LeaveMinAggregateOutputType = {
    id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    reason: string | null;
    status: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type LeaveMaxAggregateOutputType = {
    id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    reason: string | null;
    status: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type LeaveCountAggregateOutputType = {
    id: number;
    start_date: number;
    end_date: number;
    reason: number;
    status: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type LeaveMinAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    reason?: true;
    status?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type LeaveMaxAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    reason?: true;
    status?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type LeaveCountAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    reason?: true;
    status?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type LeaveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leave to aggregate.
     */
    where?: leaveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of leaves to fetch.
     */
    orderBy?: leaveOrderByWithRelationInput | leaveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: leaveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` leaves from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` leaves.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned leaves
     **/
    _count?: true | LeaveCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LeaveMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LeaveMaxAggregateInputType;
  };

  export type GetLeaveAggregateType<T extends LeaveAggregateArgs> = {
    [P in keyof T & keyof AggregateLeave]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeave[P]>
      : GetScalarType<T[P], AggregateLeave[P]>;
  };

  export type leaveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leaveWhereInput;
    orderBy?: leaveOrderByWithAggregationInput | leaveOrderByWithAggregationInput[];
    by: LeaveScalarFieldEnum[] | LeaveScalarFieldEnum;
    having?: leaveScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LeaveCountAggregateInputType | true;
    _min?: LeaveMinAggregateInputType;
    _max?: LeaveMaxAggregateInputType;
  };

  export type LeaveGroupByOutputType = {
    id: string;
    start_date: Date | null;
    end_date: Date | null;
    reason: string | null;
    status: string | null;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: LeaveCountAggregateOutputType | null;
    _min: LeaveMinAggregateOutputType | null;
    _max: LeaveMaxAggregateOutputType | null;
  };

  type GetLeaveGroupByPayload<T extends leaveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaveGroupByOutputType, T['by']> & {
        [P in keyof T & keyof LeaveGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], LeaveGroupByOutputType[P]>
          : GetScalarType<T[P], LeaveGroupByOutputType[P]>;
      }
    >
  >;

  export type leaveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      reason?: boolean;
      status?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['leave']
  >;

  export type leaveSelectScalar = {
    id?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    reason?: boolean;
    status?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type leaveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $leavePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'leave';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        start_date: Date | null;
        end_date: Date | null;
        reason: string | null;
        status: string | null;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['leave']
    >;
    composites: {};
  };

  type leaveGetPayload<S extends boolean | null | undefined | leaveDefaultArgs> = $Result.GetResult<
    Prisma.$leavePayload,
    S
  >;

  type leaveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    leaveFindManyArgs,
    'select' | 'include'
  > & {
    select?: LeaveCountAggregateInputType | true;
  };

  export interface leaveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['leave']; meta: { name: 'leave' } };
    /**
     * Find zero or one Leave that matches the filter.
     * @param {leaveFindUniqueArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends leaveFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, leaveFindUniqueArgs<ExtArgs>>,
    ): Prisma__leaveClient<$Result.GetResult<Prisma.$leavePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Leave that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {leaveFindUniqueOrThrowArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends leaveFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, leaveFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__leaveClient<$Result.GetResult<Prisma.$leavePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Leave that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leaveFindFirstArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends leaveFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, leaveFindFirstArgs<ExtArgs>>,
    ): Prisma__leaveClient<$Result.GetResult<Prisma.$leavePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Leave that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leaveFindFirstOrThrowArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends leaveFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, leaveFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__leaveClient<$Result.GetResult<Prisma.$leavePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Leaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leaveFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leaves
     * const leaves = await prisma.leave.findMany()
     *
     * // Get first 10 Leaves
     * const leaves = await prisma.leave.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const leaveWithIdOnly = await prisma.leave.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends leaveFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, leaveFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leavePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Leave.
     * @param {leaveCreateArgs} args - Arguments to create a Leave.
     * @example
     * // Create one Leave
     * const Leave = await prisma.leave.create({
     *   data: {
     *     // ... data to create a Leave
     *   }
     * })
     *
     **/
    create<T extends leaveCreateArgs<ExtArgs>>(
      args: SelectSubset<T, leaveCreateArgs<ExtArgs>>,
    ): Prisma__leaveClient<$Result.GetResult<Prisma.$leavePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Leaves.
     *     @param {leaveCreateManyArgs} args - Arguments to create many Leaves.
     *     @example
     *     // Create many Leaves
     *     const leave = await prisma.leave.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends leaveCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, leaveCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Leave.
     * @param {leaveDeleteArgs} args - Arguments to delete one Leave.
     * @example
     * // Delete one Leave
     * const Leave = await prisma.leave.delete({
     *   where: {
     *     // ... filter to delete one Leave
     *   }
     * })
     *
     **/
    delete<T extends leaveDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, leaveDeleteArgs<ExtArgs>>,
    ): Prisma__leaveClient<$Result.GetResult<Prisma.$leavePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Leave.
     * @param {leaveUpdateArgs} args - Arguments to update one Leave.
     * @example
     * // Update one Leave
     * const leave = await prisma.leave.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends leaveUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, leaveUpdateArgs<ExtArgs>>,
    ): Prisma__leaveClient<$Result.GetResult<Prisma.$leavePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Leaves.
     * @param {leaveDeleteManyArgs} args - Arguments to filter Leaves to delete.
     * @example
     * // Delete a few Leaves
     * const { count } = await prisma.leave.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends leaveDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, leaveDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leaveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leaves
     * const leave = await prisma.leave.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends leaveUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, leaveUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Leave.
     * @param {leaveUpsertArgs} args - Arguments to update or create a Leave.
     * @example
     * // Update or create a Leave
     * const leave = await prisma.leave.upsert({
     *   create: {
     *     // ... data to create a Leave
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leave we want to update
     *   }
     * })
     **/
    upsert<T extends leaveUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, leaveUpsertArgs<ExtArgs>>,
    ): Prisma__leaveClient<$Result.GetResult<Prisma.$leavePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leaveCountArgs} args - Arguments to filter Leaves to count.
     * @example
     * // Count the number of Leaves
     * const count = await prisma.leave.count({
     *   where: {
     *     // ... the filter for the Leaves we want to count
     *   }
     * })
     **/
    count<T extends leaveCountArgs>(
      args?: Subset<T, leaveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaveCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Leave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends LeaveAggregateArgs>(
      args: Subset<T, LeaveAggregateArgs>,
    ): Prisma.PrismaPromise<GetLeaveAggregateType<T>>;

    /**
     * Group by Leave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leaveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends leaveGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: leaveGroupByArgs['orderBy'] }
        : { orderBy?: leaveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, leaveGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetLeaveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the leave model
     */
    readonly fields: leaveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for leave.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__leaveClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the leave model
   */
  interface leaveFieldRefs {
    readonly id: FieldRef<'leave', 'String'>;
    readonly start_date: FieldRef<'leave', 'DateTime'>;
    readonly end_date: FieldRef<'leave', 'DateTime'>;
    readonly reason: FieldRef<'leave', 'String'>;
    readonly status: FieldRef<'leave', 'String'>;
    readonly user_id: FieldRef<'leave', 'String'>;
    readonly created_at: FieldRef<'leave', 'DateTime'>;
    readonly updated_at: FieldRef<'leave', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * leave findUnique
   */
  export type leaveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave
     */
    select?: leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: leaveInclude<ExtArgs> | null;
    /**
     * Filter, which leave to fetch.
     */
    where: leaveWhereUniqueInput;
  };

  /**
   * leave findUniqueOrThrow
   */
  export type leaveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave
     */
    select?: leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: leaveInclude<ExtArgs> | null;
    /**
     * Filter, which leave to fetch.
     */
    where: leaveWhereUniqueInput;
  };

  /**
   * leave findFirst
   */
  export type leaveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave
     */
    select?: leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: leaveInclude<ExtArgs> | null;
    /**
     * Filter, which leave to fetch.
     */
    where?: leaveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of leaves to fetch.
     */
    orderBy?: leaveOrderByWithRelationInput | leaveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for leaves.
     */
    cursor?: leaveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` leaves from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` leaves.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of leaves.
     */
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[];
  };

  /**
   * leave findFirstOrThrow
   */
  export type leaveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave
     */
    select?: leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: leaveInclude<ExtArgs> | null;
    /**
     * Filter, which leave to fetch.
     */
    where?: leaveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of leaves to fetch.
     */
    orderBy?: leaveOrderByWithRelationInput | leaveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for leaves.
     */
    cursor?: leaveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` leaves from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` leaves.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of leaves.
     */
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[];
  };

  /**
   * leave findMany
   */
  export type leaveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave
     */
    select?: leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: leaveInclude<ExtArgs> | null;
    /**
     * Filter, which leaves to fetch.
     */
    where?: leaveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of leaves to fetch.
     */
    orderBy?: leaveOrderByWithRelationInput | leaveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing leaves.
     */
    cursor?: leaveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` leaves from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` leaves.
     */
    skip?: number;
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[];
  };

  /**
   * leave create
   */
  export type leaveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave
     */
    select?: leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: leaveInclude<ExtArgs> | null;
    /**
     * The data needed to create a leave.
     */
    data: XOR<leaveCreateInput, leaveUncheckedCreateInput>;
  };

  /**
   * leave createMany
   */
  export type leaveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many leaves.
     */
    data: leaveCreateManyInput | leaveCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * leave update
   */
  export type leaveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave
     */
    select?: leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: leaveInclude<ExtArgs> | null;
    /**
     * The data needed to update a leave.
     */
    data: XOR<leaveUpdateInput, leaveUncheckedUpdateInput>;
    /**
     * Choose, which leave to update.
     */
    where: leaveWhereUniqueInput;
  };

  /**
   * leave updateMany
   */
  export type leaveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update leaves.
     */
    data: XOR<leaveUpdateManyMutationInput, leaveUncheckedUpdateManyInput>;
    /**
     * Filter which leaves to update
     */
    where?: leaveWhereInput;
  };

  /**
   * leave upsert
   */
  export type leaveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave
     */
    select?: leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: leaveInclude<ExtArgs> | null;
    /**
     * The filter to search for the leave to update in case it exists.
     */
    where: leaveWhereUniqueInput;
    /**
     * In case the leave found by the `where` argument doesn't exist, create a new leave with this data.
     */
    create: XOR<leaveCreateInput, leaveUncheckedCreateInput>;
    /**
     * In case the leave was found with the provided `where` argument, update it with this data.
     */
    update: XOR<leaveUpdateInput, leaveUncheckedUpdateInput>;
  };

  /**
   * leave delete
   */
  export type leaveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave
     */
    select?: leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: leaveInclude<ExtArgs> | null;
    /**
     * Filter which leave to delete.
     */
    where: leaveWhereUniqueInput;
  };

  /**
   * leave deleteMany
   */
  export type leaveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leaves to delete
     */
    where?: leaveWhereInput;
  };

  /**
   * leave without action
   */
  export type leaveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave
     */
    select?: leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: leaveInclude<ExtArgs> | null;
  };

  /**
   * Model school
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null;
    _min: SchoolMinAggregateOutputType | null;
    _max: SchoolMaxAggregateOutputType | null;
  };

  export type SchoolMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type SchoolMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type SchoolCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    city: number;
    state: number;
    zip: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type SchoolMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type SchoolMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type SchoolCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which school to aggregate.
     */
    where?: schoolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolOrderByWithRelationInput | schoolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: schoolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned schools
     **/
    _count?: true | SchoolCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SchoolMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SchoolMaxAggregateInputType;
  };

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
    [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>;
  };

  export type schoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: schoolWhereInput;
    orderBy?: schoolOrderByWithAggregationInput | schoolOrderByWithAggregationInput[];
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum;
    having?: schoolScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SchoolCountAggregateInputType | true;
    _min?: SchoolMinAggregateInputType;
    _max?: SchoolMaxAggregateInputType;
  };

  export type SchoolGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: SchoolCountAggregateOutputType | null;
    _min: SchoolMinAggregateOutputType | null;
    _max: SchoolMaxAggregateOutputType | null;
  };

  type GetSchoolGroupByPayload<T extends schoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> & {
        [P in keyof T & keyof SchoolGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
          : GetScalarType<T[P], SchoolGroupByOutputType[P]>;
      }
    >
  >;

  export type schoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      address?: boolean;
      city?: boolean;
      state?: boolean;
      zip?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      staff?: boolean | school$staffArgs<ExtArgs>;
      student?: boolean | school$studentArgs<ExtArgs>;
      teacher?: boolean | school$teacherArgs<ExtArgs>;
      _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['school']
  >;

  export type schoolSelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    zip?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type schoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    staff?: boolean | school$staffArgs<ExtArgs>;
    student?: boolean | school$studentArgs<ExtArgs>;
    teacher?: boolean | school$teacherArgs<ExtArgs>;
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $schoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'school';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      staff: Prisma.$staffPayload<ExtArgs>[];
      student: Prisma.$studentPayload<ExtArgs>[];
      teacher: Prisma.$teacherPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        zip: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['school']
    >;
    composites: {};
  };

  type schoolGetPayload<S extends boolean | null | undefined | schoolDefaultArgs> = $Result.GetResult<
    Prisma.$schoolPayload,
    S
  >;

  type schoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    schoolFindManyArgs,
    'select' | 'include'
  > & {
    select?: SchoolCountAggregateInputType | true;
  };

  export interface schoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['school']; meta: { name: 'school' } };
    /**
     * Find zero or one School that matches the filter.
     * @param {schoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends schoolFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, schoolFindUniqueArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one School that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {schoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends schoolFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends schoolFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolFindFirstArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends schoolFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     *
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends schoolFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a School.
     * @param {schoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     *
     **/
    create<T extends schoolCreateArgs<ExtArgs>>(
      args: SelectSubset<T, schoolCreateArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Schools.
     *     @param {schoolCreateManyArgs} args - Arguments to create many Schools.
     *     @example
     *     // Create many Schools
     *     const school = await prisma.school.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends schoolCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a School.
     * @param {schoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     *
     **/
    delete<T extends schoolDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, schoolDeleteArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one School.
     * @param {schoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends schoolUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, schoolUpdateArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Schools.
     * @param {schoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends schoolDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends schoolUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, schoolUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one School.
     * @param {schoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     **/
    upsert<T extends schoolUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, schoolUpsertArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
     **/
    count<T extends schoolCountArgs>(
      args?: Subset<T, schoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SchoolAggregateArgs>(
      args: Subset<T, SchoolAggregateArgs>,
    ): Prisma.PrismaPromise<GetSchoolAggregateType<T>>;

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends schoolGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: schoolGroupByArgs['orderBy'] }
        : { orderBy?: schoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, schoolGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the school model
     */
    readonly fields: schoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for school.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__schoolClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    staff<T extends school$staffArgs<ExtArgs> = {}>(
      args?: Subset<T, school$staffArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, 'findMany'> | Null>;

    student<T extends school$studentArgs<ExtArgs> = {}>(
      args?: Subset<T, school$studentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findMany'> | Null>;

    teacher<T extends school$teacherArgs<ExtArgs> = {}>(
      args?: Subset<T, school$teacherArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the school model
   */
  interface schoolFieldRefs {
    readonly id: FieldRef<'school', 'String'>;
    readonly description: FieldRef<'school', 'String'>;
    readonly address: FieldRef<'school', 'String'>;
    readonly city: FieldRef<'school', 'String'>;
    readonly state: FieldRef<'school', 'String'>;
    readonly zip: FieldRef<'school', 'String'>;
    readonly name: FieldRef<'school', 'String'>;
    readonly created_at: FieldRef<'school', 'DateTime'>;
    readonly updated_at: FieldRef<'school', 'DateTime'>;
    readonly user_id: FieldRef<'school', 'String'>;
    readonly tenant_id: FieldRef<'school', 'String'>;
  }

  // Custom InputTypes

  /**
   * school findUnique
   */
  export type schoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter, which school to fetch.
     */
    where: schoolWhereUniqueInput;
  };

  /**
   * school findUniqueOrThrow
   */
  export type schoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter, which school to fetch.
     */
    where: schoolWhereUniqueInput;
  };

  /**
   * school findFirst
   */
  export type schoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter, which school to fetch.
     */
    where?: schoolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolOrderByWithRelationInput | schoolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for schools.
     */
    cursor?: schoolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[];
  };

  /**
   * school findFirstOrThrow
   */
  export type schoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter, which school to fetch.
     */
    where?: schoolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolOrderByWithRelationInput | schoolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for schools.
     */
    cursor?: schoolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[];
  };

  /**
   * school findMany
   */
  export type schoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter, which schools to fetch.
     */
    where?: schoolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolOrderByWithRelationInput | schoolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing schools.
     */
    cursor?: schoolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schools.
     */
    skip?: number;
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[];
  };

  /**
   * school create
   */
  export type schoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * The data needed to create a school.
     */
    data: XOR<schoolCreateInput, schoolUncheckedCreateInput>;
  };

  /**
   * school createMany
   */
  export type schoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many schools.
     */
    data: schoolCreateManyInput | schoolCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * school update
   */
  export type schoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * The data needed to update a school.
     */
    data: XOR<schoolUpdateInput, schoolUncheckedUpdateInput>;
    /**
     * Choose, which school to update.
     */
    where: schoolWhereUniqueInput;
  };

  /**
   * school updateMany
   */
  export type schoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update schools.
     */
    data: XOR<schoolUpdateManyMutationInput, schoolUncheckedUpdateManyInput>;
    /**
     * Filter which schools to update
     */
    where?: schoolWhereInput;
  };

  /**
   * school upsert
   */
  export type schoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * The filter to search for the school to update in case it exists.
     */
    where: schoolWhereUniqueInput;
    /**
     * In case the school found by the `where` argument doesn't exist, create a new school with this data.
     */
    create: XOR<schoolCreateInput, schoolUncheckedCreateInput>;
    /**
     * In case the school was found with the provided `where` argument, update it with this data.
     */
    update: XOR<schoolUpdateInput, schoolUncheckedUpdateInput>;
  };

  /**
   * school delete
   */
  export type schoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter which school to delete.
     */
    where: schoolWhereUniqueInput;
  };

  /**
   * school deleteMany
   */
  export type schoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schools to delete
     */
    where?: schoolWhereInput;
  };

  /**
   * school.staff
   */
  export type school$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staffInclude<ExtArgs> | null;
    where?: staffWhereInput;
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[];
    cursor?: staffWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[];
  };

  /**
   * school.student
   */
  export type school$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    where?: studentWhereInput;
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[];
    cursor?: studentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[];
  };

  /**
   * school.teacher
   */
  export type school$teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    where?: teacherWhereInput;
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[];
    cursor?: teacherWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[];
  };

  /**
   * school without action
   */
  export type schoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
  };

  /**
   * Model staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null;
    _min: StaffMinAggregateOutputType | null;
    _max: StaffMaxAggregateOutputType | null;
  };

  export type StaffMinAggregateOutputType = {
    id: string | null;
    hire_date: Date | null;
    position: string | null;
    department: string | null;
    user_id: string | null;
    school_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type StaffMaxAggregateOutputType = {
    id: string | null;
    hire_date: Date | null;
    position: string | null;
    department: string | null;
    user_id: string | null;
    school_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type StaffCountAggregateOutputType = {
    id: number;
    hire_date: number;
    position: number;
    department: number;
    user_id: number;
    school_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type StaffMinAggregateInputType = {
    id?: true;
    hire_date?: true;
    position?: true;
    department?: true;
    user_id?: true;
    school_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type StaffMaxAggregateInputType = {
    id?: true;
    hire_date?: true;
    position?: true;
    department?: true;
    user_id?: true;
    school_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type StaffCountAggregateInputType = {
    id?: true;
    hire_date?: true;
    position?: true;
    department?: true;
    user_id?: true;
    school_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff to aggregate.
     */
    where?: staffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: staffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` staff from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` staff.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned staff
     **/
    _count?: true | StaffCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: StaffMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: StaffMaxAggregateInputType;
  };

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
    [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>;
  };

  export type staffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staffWhereInput;
    orderBy?: staffOrderByWithAggregationInput | staffOrderByWithAggregationInput[];
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum;
    having?: staffScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StaffCountAggregateInputType | true;
    _min?: StaffMinAggregateInputType;
    _max?: StaffMaxAggregateInputType;
  };

  export type StaffGroupByOutputType = {
    id: string;
    hire_date: Date | null;
    position: string | null;
    department: string | null;
    user_id: string;
    school_id: string;
    created_at: Date;
    updated_at: Date;
    _count: StaffCountAggregateOutputType | null;
    _min: StaffMinAggregateOutputType | null;
    _max: StaffMaxAggregateOutputType | null;
  };

  type GetStaffGroupByPayload<T extends staffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> & {
        [P in keyof T & keyof StaffGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
          : GetScalarType<T[P], StaffGroupByOutputType[P]>;
      }
    >
  >;

  export type staffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      hire_date?: boolean;
      position?: boolean;
      department?: boolean;
      user_id?: boolean;
      school_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      school?: boolean | schoolDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['staff']
  >;

  export type staffSelectScalar = {
    id?: boolean;
    hire_date?: boolean;
    position?: boolean;
    department?: boolean;
    user_id?: boolean;
    school_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type staffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | schoolDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $staffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'staff';
    objects: {
      school: Prisma.$schoolPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        hire_date: Date | null;
        position: string | null;
        department: string | null;
        user_id: string;
        school_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['staff']
    >;
    composites: {};
  };

  type staffGetPayload<S extends boolean | null | undefined | staffDefaultArgs> = $Result.GetResult<
    Prisma.$staffPayload,
    S
  >;

  type staffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    staffFindManyArgs,
    'select' | 'include'
  > & {
    select?: StaffCountAggregateInputType | true;
  };

  export interface staffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['staff']; meta: { name: 'staff' } };
    /**
     * Find zero or one Staff that matches the filter.
     * @param {staffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends staffFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, staffFindUniqueArgs<ExtArgs>>,
    ): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Staff that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {staffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends staffFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, staffFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends staffFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, staffFindFirstArgs<ExtArgs>>,
    ): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends staffFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, staffFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     *
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const staffWithIdOnly = await prisma.staff.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends staffFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, staffFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Staff.
     * @param {staffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     *
     **/
    create<T extends staffCreateArgs<ExtArgs>>(
      args: SelectSubset<T, staffCreateArgs<ExtArgs>>,
    ): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Staff.
     *     @param {staffCreateManyArgs} args - Arguments to create many Staff.
     *     @example
     *     // Create many Staff
     *     const staff = await prisma.staff.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends staffCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, staffCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Staff.
     * @param {staffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     *
     **/
    delete<T extends staffDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, staffDeleteArgs<ExtArgs>>,
    ): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Staff.
     * @param {staffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends staffUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, staffUpdateArgs<ExtArgs>>,
    ): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Staff.
     * @param {staffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends staffDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, staffDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends staffUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, staffUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Staff.
     * @param {staffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     **/
    upsert<T extends staffUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, staffUpsertArgs<ExtArgs>>,
    ): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
     **/
    count<T extends staffCountArgs>(
      args?: Subset<T, staffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends StaffAggregateArgs>(
      args: Subset<T, StaffAggregateArgs>,
    ): Prisma.PrismaPromise<GetStaffAggregateType<T>>;

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends staffGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: staffGroupByArgs['orderBy'] }
        : { orderBy?: staffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, staffGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the staff model
     */
    readonly fields: staffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__staffClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    school<T extends schoolDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, schoolDefaultArgs<ExtArgs>>,
    ): Prisma__schoolClient<
      $Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the staff model
   */
  interface staffFieldRefs {
    readonly id: FieldRef<'staff', 'String'>;
    readonly hire_date: FieldRef<'staff', 'DateTime'>;
    readonly position: FieldRef<'staff', 'String'>;
    readonly department: FieldRef<'staff', 'String'>;
    readonly user_id: FieldRef<'staff', 'String'>;
    readonly school_id: FieldRef<'staff', 'String'>;
    readonly created_at: FieldRef<'staff', 'DateTime'>;
    readonly updated_at: FieldRef<'staff', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * staff findUnique
   */
  export type staffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staffInclude<ExtArgs> | null;
    /**
     * Filter, which staff to fetch.
     */
    where: staffWhereUniqueInput;
  };

  /**
   * staff findUniqueOrThrow
   */
  export type staffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staffInclude<ExtArgs> | null;
    /**
     * Filter, which staff to fetch.
     */
    where: staffWhereUniqueInput;
  };

  /**
   * staff findFirst
   */
  export type staffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staffInclude<ExtArgs> | null;
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for staff.
     */
    cursor?: staffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` staff from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` staff.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[];
  };

  /**
   * staff findFirstOrThrow
   */
  export type staffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staffInclude<ExtArgs> | null;
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for staff.
     */
    cursor?: staffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` staff from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` staff.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[];
  };

  /**
   * staff findMany
   */
  export type staffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staffInclude<ExtArgs> | null;
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing staff.
     */
    cursor?: staffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` staff from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` staff.
     */
    skip?: number;
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[];
  };

  /**
   * staff create
   */
  export type staffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staffInclude<ExtArgs> | null;
    /**
     * The data needed to create a staff.
     */
    data: XOR<staffCreateInput, staffUncheckedCreateInput>;
  };

  /**
   * staff createMany
   */
  export type staffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many staff.
     */
    data: staffCreateManyInput | staffCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * staff update
   */
  export type staffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staffInclude<ExtArgs> | null;
    /**
     * The data needed to update a staff.
     */
    data: XOR<staffUpdateInput, staffUncheckedUpdateInput>;
    /**
     * Choose, which staff to update.
     */
    where: staffWhereUniqueInput;
  };

  /**
   * staff updateMany
   */
  export type staffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update staff.
     */
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyInput>;
    /**
     * Filter which staff to update
     */
    where?: staffWhereInput;
  };

  /**
   * staff upsert
   */
  export type staffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staffInclude<ExtArgs> | null;
    /**
     * The filter to search for the staff to update in case it exists.
     */
    where: staffWhereUniqueInput;
    /**
     * In case the staff found by the `where` argument doesn't exist, create a new staff with this data.
     */
    create: XOR<staffCreateInput, staffUncheckedCreateInput>;
    /**
     * In case the staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<staffUpdateInput, staffUncheckedUpdateInput>;
  };

  /**
   * staff delete
   */
  export type staffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staffInclude<ExtArgs> | null;
    /**
     * Filter which staff to delete.
     */
    where: staffWhereUniqueInput;
  };

  /**
   * staff deleteMany
   */
  export type staffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff to delete
     */
    where?: staffWhereInput;
  };

  /**
   * staff without action
   */
  export type staffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staffInclude<ExtArgs> | null;
  };

  /**
   * Model student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null;
    _avg: StudentAvgAggregateOutputType | null;
    _sum: StudentSumAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
  };

  export type StudentAvgAggregateOutputType = {
    grade_level: number | null;
  };

  export type StudentSumAggregateOutputType = {
    grade_level: number | null;
  };

  export type StudentMinAggregateOutputType = {
    id: string | null;
    enrollment_date: Date | null;
    grade_level: number | null;
    class: string | null;
    section: string | null;
    user_id: string | null;
    school_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type StudentMaxAggregateOutputType = {
    id: string | null;
    enrollment_date: Date | null;
    grade_level: number | null;
    class: string | null;
    section: string | null;
    user_id: string | null;
    school_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type StudentCountAggregateOutputType = {
    id: number;
    enrollment_date: number;
    grade_level: number;
    class: number;
    section: number;
    user_id: number;
    school_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type StudentAvgAggregateInputType = {
    grade_level?: true;
  };

  export type StudentSumAggregateInputType = {
    grade_level?: true;
  };

  export type StudentMinAggregateInputType = {
    id?: true;
    enrollment_date?: true;
    grade_level?: true;
    class?: true;
    section?: true;
    user_id?: true;
    school_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type StudentMaxAggregateInputType = {
    id?: true;
    enrollment_date?: true;
    grade_level?: true;
    class?: true;
    section?: true;
    user_id?: true;
    school_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type StudentCountAggregateInputType = {
    id?: true;
    enrollment_date?: true;
    grade_level?: true;
    class?: true;
    section?: true;
    user_id?: true;
    school_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student to aggregate.
     */
    where?: studentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: studentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned students
     **/
    _count?: true | StudentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: StudentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: StudentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: StudentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: StudentMaxAggregateInputType;
  };

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
    [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>;
  };

  export type studentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentWhereInput;
    orderBy?: studentOrderByWithAggregationInput | studentOrderByWithAggregationInput[];
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum;
    having?: studentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentCountAggregateInputType | true;
    _avg?: StudentAvgAggregateInputType;
    _sum?: StudentSumAggregateInputType;
    _min?: StudentMinAggregateInputType;
    _max?: StudentMaxAggregateInputType;
  };

  export type StudentGroupByOutputType = {
    id: string;
    enrollment_date: Date | null;
    grade_level: number | null;
    class: string | null;
    section: string | null;
    user_id: string;
    school_id: string;
    created_at: Date;
    updated_at: Date;
    _count: StudentCountAggregateOutputType | null;
    _avg: StudentAvgAggregateOutputType | null;
    _sum: StudentSumAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
  };

  type GetStudentGroupByPayload<T extends studentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof StudentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
          : GetScalarType<T[P], StudentGroupByOutputType[P]>;
      }
    >
  >;

  export type studentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      enrollment_date?: boolean;
      grade_level?: boolean;
      class?: boolean;
      section?: boolean;
      user_id?: boolean;
      school_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      school?: boolean | schoolDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['student']
  >;

  export type studentSelectScalar = {
    id?: boolean;
    enrollment_date?: boolean;
    grade_level?: boolean;
    class?: boolean;
    section?: boolean;
    user_id?: boolean;
    school_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type studentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | schoolDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $studentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'student';
    objects: {
      school: Prisma.$schoolPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        enrollment_date: Date | null;
        grade_level: number | null;
        class: string | null;
        section: string | null;
        user_id: string;
        school_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['student']
    >;
    composites: {};
  };

  type studentGetPayload<S extends boolean | null | undefined | studentDefaultArgs> = $Result.GetResult<
    Prisma.$studentPayload,
    S
  >;

  type studentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    studentFindManyArgs,
    'select' | 'include'
  > & {
    select?: StudentCountAggregateInputType | true;
  };

  export interface studentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['student']; meta: { name: 'student' } };
    /**
     * Find zero or one Student that matches the filter.
     * @param {studentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends studentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, studentFindUniqueArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Student that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {studentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends studentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, studentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__studentClient<
      $Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends studentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, studentFindFirstArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends studentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, studentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     *
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends studentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, studentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Student.
     * @param {studentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     *
     **/
    create<T extends studentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, studentCreateArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Students.
     *     @param {studentCreateManyArgs} args - Arguments to create many Students.
     *     @example
     *     // Create many Students
     *     const student = await prisma.student.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends studentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, studentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Student.
     * @param {studentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     *
     **/
    delete<T extends studentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, studentDeleteArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Student.
     * @param {studentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends studentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, studentUpdateArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Students.
     * @param {studentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends studentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, studentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends studentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, studentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Student.
     * @param {studentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     **/
    upsert<T extends studentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, studentUpsertArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
     **/
    count<T extends studentCountArgs>(
      args?: Subset<T, studentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends StudentAggregateArgs>(
      args: Subset<T, StudentAggregateArgs>,
    ): Prisma.PrismaPromise<GetStudentAggregateType<T>>;

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends studentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studentGroupByArgs['orderBy'] }
        : { orderBy?: studentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, studentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the student model
     */
    readonly fields: studentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    school<T extends schoolDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, schoolDefaultArgs<ExtArgs>>,
    ): Prisma__schoolClient<
      $Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the student model
   */
  interface studentFieldRefs {
    readonly id: FieldRef<'student', 'String'>;
    readonly enrollment_date: FieldRef<'student', 'DateTime'>;
    readonly grade_level: FieldRef<'student', 'Int'>;
    readonly class: FieldRef<'student', 'String'>;
    readonly section: FieldRef<'student', 'String'>;
    readonly user_id: FieldRef<'student', 'String'>;
    readonly school_id: FieldRef<'student', 'String'>;
    readonly created_at: FieldRef<'student', 'DateTime'>;
    readonly updated_at: FieldRef<'student', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * student findUnique
   */
  export type studentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput;
  };

  /**
   * student findUniqueOrThrow
   */
  export type studentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput;
  };

  /**
   * student findFirst
   */
  export type studentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[];
  };

  /**
   * student findFirstOrThrow
   */
  export type studentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[];
  };

  /**
   * student findMany
   */
  export type studentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * Filter, which students to fetch.
     */
    where?: studentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing students.
     */
    cursor?: studentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` students.
     */
    skip?: number;
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[];
  };

  /**
   * student create
   */
  export type studentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * The data needed to create a student.
     */
    data: XOR<studentCreateInput, studentUncheckedCreateInput>;
  };

  /**
   * student createMany
   */
  export type studentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many students.
     */
    data: studentCreateManyInput | studentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * student update
   */
  export type studentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * The data needed to update a student.
     */
    data: XOR<studentUpdateInput, studentUncheckedUpdateInput>;
    /**
     * Choose, which student to update.
     */
    where: studentWhereUniqueInput;
  };

  /**
   * student updateMany
   */
  export type studentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update students.
     */
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyInput>;
    /**
     * Filter which students to update
     */
    where?: studentWhereInput;
  };

  /**
   * student upsert
   */
  export type studentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * The filter to search for the student to update in case it exists.
     */
    where: studentWhereUniqueInput;
    /**
     * In case the student found by the `where` argument doesn't exist, create a new student with this data.
     */
    create: XOR<studentCreateInput, studentUncheckedCreateInput>;
    /**
     * In case the student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentUpdateInput, studentUncheckedUpdateInput>;
  };

  /**
   * student delete
   */
  export type studentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * Filter which student to delete.
     */
    where: studentWhereUniqueInput;
  };

  /**
   * student deleteMany
   */
  export type studentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to delete
     */
    where?: studentWhereInput;
  };

  /**
   * student without action
   */
  export type studentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
  };

  /**
   * Model teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null;
    _min: TeacherMinAggregateOutputType | null;
    _max: TeacherMaxAggregateOutputType | null;
  };

  export type TeacherMinAggregateOutputType = {
    id: string | null;
    hire_date: Date | null;
    subject: string | null;
    class: string | null;
    section: string | null;
    user_id: string | null;
    school_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TeacherMaxAggregateOutputType = {
    id: string | null;
    hire_date: Date | null;
    subject: string | null;
    class: string | null;
    section: string | null;
    user_id: string | null;
    school_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TeacherCountAggregateOutputType = {
    id: number;
    hire_date: number;
    subject: number;
    class: number;
    section: number;
    user_id: number;
    school_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TeacherMinAggregateInputType = {
    id?: true;
    hire_date?: true;
    subject?: true;
    class?: true;
    section?: true;
    user_id?: true;
    school_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TeacherMaxAggregateInputType = {
    id?: true;
    hire_date?: true;
    subject?: true;
    class?: true;
    section?: true;
    user_id?: true;
    school_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TeacherCountAggregateInputType = {
    id?: true;
    hire_date?: true;
    subject?: true;
    class?: true;
    section?: true;
    user_id?: true;
    school_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teacher to aggregate.
     */
    where?: teacherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: teacherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teachers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned teachers
     **/
    _count?: true | TeacherCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TeacherMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TeacherMaxAggregateInputType;
  };

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
    [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>;
  };

  export type teacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teacherWhereInput;
    orderBy?: teacherOrderByWithAggregationInput | teacherOrderByWithAggregationInput[];
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum;
    having?: teacherScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeacherCountAggregateInputType | true;
    _min?: TeacherMinAggregateInputType;
    _max?: TeacherMaxAggregateInputType;
  };

  export type TeacherGroupByOutputType = {
    id: string;
    hire_date: Date | null;
    subject: string | null;
    class: string | null;
    section: string | null;
    user_id: string;
    school_id: string;
    created_at: Date;
    updated_at: Date;
    _count: TeacherCountAggregateOutputType | null;
    _min: TeacherMinAggregateOutputType | null;
    _max: TeacherMaxAggregateOutputType | null;
  };

  type GetTeacherGroupByPayload<T extends teacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TeacherGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
          : GetScalarType<T[P], TeacherGroupByOutputType[P]>;
      }
    >
  >;

  export type teacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      hire_date?: boolean;
      subject?: boolean;
      class?: boolean;
      section?: boolean;
      user_id?: boolean;
      school_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      school?: boolean | schoolDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['teacher']
  >;

  export type teacherSelectScalar = {
    id?: boolean;
    hire_date?: boolean;
    subject?: boolean;
    class?: boolean;
    section?: boolean;
    user_id?: boolean;
    school_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type teacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | schoolDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $teacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'teacher';
    objects: {
      school: Prisma.$schoolPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        hire_date: Date | null;
        subject: string | null;
        class: string | null;
        section: string | null;
        user_id: string;
        school_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['teacher']
    >;
    composites: {};
  };

  type teacherGetPayload<S extends boolean | null | undefined | teacherDefaultArgs> = $Result.GetResult<
    Prisma.$teacherPayload,
    S
  >;

  type teacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    teacherFindManyArgs,
    'select' | 'include'
  > & {
    select?: TeacherCountAggregateInputType | true;
  };

  export interface teacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['teacher']; meta: { name: 'teacher' } };
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {teacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends teacherFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, teacherFindUniqueArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Teacher that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {teacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends teacherFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__teacherClient<
      $Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends teacherFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherFindFirstArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends teacherFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     *
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends teacherFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Teacher.
     * @param {teacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     *
     **/
    create<T extends teacherCreateArgs<ExtArgs>>(
      args: SelectSubset<T, teacherCreateArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Teachers.
     *     @param {teacherCreateManyArgs} args - Arguments to create many Teachers.
     *     @example
     *     // Create many Teachers
     *     const teacher = await prisma.teacher.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends teacherCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Teacher.
     * @param {teacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     *
     **/
    delete<T extends teacherDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, teacherDeleteArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Teacher.
     * @param {teacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends teacherUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, teacherUpdateArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Teachers.
     * @param {teacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends teacherDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends teacherUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, teacherUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Teacher.
     * @param {teacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     **/
    upsert<T extends teacherUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, teacherUpsertArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
     **/
    count<T extends teacherCountArgs>(
      args?: Subset<T, teacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TeacherAggregateArgs>(
      args: Subset<T, TeacherAggregateArgs>,
    ): Prisma.PrismaPromise<GetTeacherAggregateType<T>>;

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends teacherGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teacherGroupByArgs['orderBy'] }
        : { orderBy?: teacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, teacherGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the teacher model
     */
    readonly fields: teacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teacherClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    school<T extends schoolDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, schoolDefaultArgs<ExtArgs>>,
    ): Prisma__schoolClient<
      $Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the teacher model
   */
  interface teacherFieldRefs {
    readonly id: FieldRef<'teacher', 'String'>;
    readonly hire_date: FieldRef<'teacher', 'DateTime'>;
    readonly subject: FieldRef<'teacher', 'String'>;
    readonly class: FieldRef<'teacher', 'String'>;
    readonly section: FieldRef<'teacher', 'String'>;
    readonly user_id: FieldRef<'teacher', 'String'>;
    readonly school_id: FieldRef<'teacher', 'String'>;
    readonly created_at: FieldRef<'teacher', 'DateTime'>;
    readonly updated_at: FieldRef<'teacher', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * teacher findUnique
   */
  export type teacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * Filter, which teacher to fetch.
     */
    where: teacherWhereUniqueInput;
  };

  /**
   * teacher findUniqueOrThrow
   */
  export type teacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * Filter, which teacher to fetch.
     */
    where: teacherWhereUniqueInput;
  };

  /**
   * teacher findFirst
   */
  export type teacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * Filter, which teacher to fetch.
     */
    where?: teacherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teachers.
     */
    cursor?: teacherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teachers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[];
  };

  /**
   * teacher findFirstOrThrow
   */
  export type teacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * Filter, which teacher to fetch.
     */
    where?: teacherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teachers.
     */
    cursor?: teacherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teachers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[];
  };

  /**
   * teacher findMany
   */
  export type teacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * Filter, which teachers to fetch.
     */
    where?: teacherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing teachers.
     */
    cursor?: teacherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teachers.
     */
    skip?: number;
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[];
  };

  /**
   * teacher create
   */
  export type teacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * The data needed to create a teacher.
     */
    data: XOR<teacherCreateInput, teacherUncheckedCreateInput>;
  };

  /**
   * teacher createMany
   */
  export type teacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teachers.
     */
    data: teacherCreateManyInput | teacherCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * teacher update
   */
  export type teacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * The data needed to update a teacher.
     */
    data: XOR<teacherUpdateInput, teacherUncheckedUpdateInput>;
    /**
     * Choose, which teacher to update.
     */
    where: teacherWhereUniqueInput;
  };

  /**
   * teacher updateMany
   */
  export type teacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teachers.
     */
    data: XOR<teacherUpdateManyMutationInput, teacherUncheckedUpdateManyInput>;
    /**
     * Filter which teachers to update
     */
    where?: teacherWhereInput;
  };

  /**
   * teacher upsert
   */
  export type teacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * The filter to search for the teacher to update in case it exists.
     */
    where: teacherWhereUniqueInput;
    /**
     * In case the teacher found by the `where` argument doesn't exist, create a new teacher with this data.
     */
    create: XOR<teacherCreateInput, teacherUncheckedCreateInput>;
    /**
     * In case the teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teacherUpdateInput, teacherUncheckedUpdateInput>;
  };

  /**
   * teacher delete
   */
  export type teacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * Filter which teacher to delete.
     */
    where: teacherWhereUniqueInput;
  };

  /**
   * teacher deleteMany
   */
  export type teacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teachers to delete
     */
    where?: teacherWhereInput;
  };

  /**
   * teacher without action
   */
  export type teacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      leave?: boolean | user$leaveArgs<ExtArgs>;
      school?: boolean | user$schoolArgs<ExtArgs>;
      staff?: boolean | user$staffArgs<ExtArgs>;
      student?: boolean | user$studentArgs<ExtArgs>;
      teacher?: boolean | user$teacherArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leave?: boolean | user$leaveArgs<ExtArgs>;
    school?: boolean | user$schoolArgs<ExtArgs>;
    staff?: boolean | user$staffArgs<ExtArgs>;
    student?: boolean | user$studentArgs<ExtArgs>;
    teacher?: boolean | user$teacherArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      leave: Prisma.$leavePayload<ExtArgs>[];
      school: Prisma.$schoolPayload<ExtArgs>[];
      staff: Prisma.$staffPayload<ExtArgs>[];
      student: Prisma.$studentPayload<ExtArgs>[];
      teacher: Prisma.$teacherPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    leave<T extends user$leaveArgs<ExtArgs> = {}>(
      args?: Subset<T, user$leaveArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leavePayload<ExtArgs>, T, 'findMany'> | Null>;

    school<T extends user$schoolArgs<ExtArgs> = {}>(
      args?: Subset<T, user$schoolArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findMany'> | Null>;

    staff<T extends user$staffArgs<ExtArgs> = {}>(
      args?: Subset<T, user$staffArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, 'findMany'> | Null>;

    student<T extends user$studentArgs<ExtArgs> = {}>(
      args?: Subset<T, user$studentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findMany'> | Null>;

    teacher<T extends user$teacherArgs<ExtArgs> = {}>(
      args?: Subset<T, user$teacherArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.leave
   */
  export type user$leaveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave
     */
    select?: leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: leaveInclude<ExtArgs> | null;
    where?: leaveWhereInput;
    orderBy?: leaveOrderByWithRelationInput | leaveOrderByWithRelationInput[];
    cursor?: leaveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[];
  };

  /**
   * user.school
   */
  export type user$schoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    where?: schoolWhereInput;
    orderBy?: schoolOrderByWithRelationInput | schoolOrderByWithRelationInput[];
    cursor?: schoolWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[];
  };

  /**
   * user.staff
   */
  export type user$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: staffInclude<ExtArgs> | null;
    where?: staffWhereInput;
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[];
    cursor?: staffWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[];
  };

  /**
   * user.student
   */
  export type user$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    where?: studentWhereInput;
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[];
    cursor?: studentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[];
  };

  /**
   * user.teacher
   */
  export type user$teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    where?: teacherWhereInput;
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[];
    cursor?: teacherWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const LeaveScalarFieldEnum: {
    id: 'id';
    start_date: 'start_date';
    end_date: 'end_date';
    reason: 'reason';
    status: 'status';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type LeaveScalarFieldEnum = (typeof LeaveScalarFieldEnum)[keyof typeof LeaveScalarFieldEnum];

  export const SchoolScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    city: 'city';
    state: 'state';
    zip: 'zip';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum];

  export const StaffScalarFieldEnum: {
    id: 'id';
    hire_date: 'hire_date';
    position: 'position';
    department: 'department';
    user_id: 'user_id';
    school_id: 'school_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum];

  export const StudentScalarFieldEnum: {
    id: 'id';
    enrollment_date: 'enrollment_date';
    grade_level: 'grade_level';
    class: 'class';
    section: 'section';
    user_id: 'user_id';
    school_id: 'school_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum];

  export const TeacherScalarFieldEnum: {
    id: 'id';
    hire_date: 'hire_date';
    subject: 'subject';
    class: 'class';
    section: 'section';
    user_id: 'user_id';
    school_id: 'school_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type leaveWhereInput = {
    AND?: leaveWhereInput | leaveWhereInput[];
    OR?: leaveWhereInput[];
    NOT?: leaveWhereInput | leaveWhereInput[];
    id?: UuidFilter<'leave'> | string;
    start_date?: DateTimeNullableFilter<'leave'> | Date | string | null;
    end_date?: DateTimeNullableFilter<'leave'> | Date | string | null;
    reason?: StringNullableFilter<'leave'> | string | null;
    status?: StringNullableFilter<'leave'> | string | null;
    user_id?: UuidFilter<'leave'> | string;
    created_at?: DateTimeFilter<'leave'> | Date | string;
    updated_at?: DateTimeFilter<'leave'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type leaveOrderByWithRelationInput = {
    id?: SortOrder;
    start_date?: SortOrderInput | SortOrder;
    end_date?: SortOrderInput | SortOrder;
    reason?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type leaveWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: leaveWhereInput | leaveWhereInput[];
      OR?: leaveWhereInput[];
      NOT?: leaveWhereInput | leaveWhereInput[];
      start_date?: DateTimeNullableFilter<'leave'> | Date | string | null;
      end_date?: DateTimeNullableFilter<'leave'> | Date | string | null;
      reason?: StringNullableFilter<'leave'> | string | null;
      status?: StringNullableFilter<'leave'> | string | null;
      user_id?: UuidFilter<'leave'> | string;
      created_at?: DateTimeFilter<'leave'> | Date | string;
      updated_at?: DateTimeFilter<'leave'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type leaveOrderByWithAggregationInput = {
    id?: SortOrder;
    start_date?: SortOrderInput | SortOrder;
    end_date?: SortOrderInput | SortOrder;
    reason?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: leaveCountOrderByAggregateInput;
    _max?: leaveMaxOrderByAggregateInput;
    _min?: leaveMinOrderByAggregateInput;
  };

  export type leaveScalarWhereWithAggregatesInput = {
    AND?: leaveScalarWhereWithAggregatesInput | leaveScalarWhereWithAggregatesInput[];
    OR?: leaveScalarWhereWithAggregatesInput[];
    NOT?: leaveScalarWhereWithAggregatesInput | leaveScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'leave'> | string;
    start_date?: DateTimeNullableWithAggregatesFilter<'leave'> | Date | string | null;
    end_date?: DateTimeNullableWithAggregatesFilter<'leave'> | Date | string | null;
    reason?: StringNullableWithAggregatesFilter<'leave'> | string | null;
    status?: StringNullableWithAggregatesFilter<'leave'> | string | null;
    user_id?: UuidWithAggregatesFilter<'leave'> | string;
    created_at?: DateTimeWithAggregatesFilter<'leave'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'leave'> | Date | string;
  };

  export type schoolWhereInput = {
    AND?: schoolWhereInput | schoolWhereInput[];
    OR?: schoolWhereInput[];
    NOT?: schoolWhereInput | schoolWhereInput[];
    id?: UuidFilter<'school'> | string;
    description?: StringNullableFilter<'school'> | string | null;
    address?: StringNullableFilter<'school'> | string | null;
    city?: StringNullableFilter<'school'> | string | null;
    state?: StringNullableFilter<'school'> | string | null;
    zip?: StringNullableFilter<'school'> | string | null;
    name?: StringFilter<'school'> | string;
    created_at?: DateTimeFilter<'school'> | Date | string;
    updated_at?: DateTimeFilter<'school'> | Date | string;
    user_id?: UuidFilter<'school'> | string;
    tenant_id?: StringFilter<'school'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    staff?: StaffListRelationFilter;
    student?: StudentListRelationFilter;
    teacher?: TeacherListRelationFilter;
  };

  export type schoolOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    staff?: staffOrderByRelationAggregateInput;
    student?: studentOrderByRelationAggregateInput;
    teacher?: teacherOrderByRelationAggregateInput;
  };

  export type schoolWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: schoolWhereInput | schoolWhereInput[];
      OR?: schoolWhereInput[];
      NOT?: schoolWhereInput | schoolWhereInput[];
      description?: StringNullableFilter<'school'> | string | null;
      address?: StringNullableFilter<'school'> | string | null;
      city?: StringNullableFilter<'school'> | string | null;
      state?: StringNullableFilter<'school'> | string | null;
      zip?: StringNullableFilter<'school'> | string | null;
      name?: StringFilter<'school'> | string;
      created_at?: DateTimeFilter<'school'> | Date | string;
      updated_at?: DateTimeFilter<'school'> | Date | string;
      user_id?: UuidFilter<'school'> | string;
      tenant_id?: StringFilter<'school'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      staff?: StaffListRelationFilter;
      student?: StudentListRelationFilter;
      teacher?: TeacherListRelationFilter;
    },
    'id'
  >;

  export type schoolOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: schoolCountOrderByAggregateInput;
    _max?: schoolMaxOrderByAggregateInput;
    _min?: schoolMinOrderByAggregateInput;
  };

  export type schoolScalarWhereWithAggregatesInput = {
    AND?: schoolScalarWhereWithAggregatesInput | schoolScalarWhereWithAggregatesInput[];
    OR?: schoolScalarWhereWithAggregatesInput[];
    NOT?: schoolScalarWhereWithAggregatesInput | schoolScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'school'> | string;
    description?: StringNullableWithAggregatesFilter<'school'> | string | null;
    address?: StringNullableWithAggregatesFilter<'school'> | string | null;
    city?: StringNullableWithAggregatesFilter<'school'> | string | null;
    state?: StringNullableWithAggregatesFilter<'school'> | string | null;
    zip?: StringNullableWithAggregatesFilter<'school'> | string | null;
    name?: StringWithAggregatesFilter<'school'> | string;
    created_at?: DateTimeWithAggregatesFilter<'school'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'school'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'school'> | string;
    tenant_id?: StringWithAggregatesFilter<'school'> | string;
  };

  export type staffWhereInput = {
    AND?: staffWhereInput | staffWhereInput[];
    OR?: staffWhereInput[];
    NOT?: staffWhereInput | staffWhereInput[];
    id?: UuidFilter<'staff'> | string;
    hire_date?: DateTimeNullableFilter<'staff'> | Date | string | null;
    position?: StringNullableFilter<'staff'> | string | null;
    department?: StringNullableFilter<'staff'> | string | null;
    user_id?: UuidFilter<'staff'> | string;
    school_id?: UuidFilter<'staff'> | string;
    created_at?: DateTimeFilter<'staff'> | Date | string;
    updated_at?: DateTimeFilter<'staff'> | Date | string;
    school?: XOR<SchoolRelationFilter, schoolWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type staffOrderByWithRelationInput = {
    id?: SortOrder;
    hire_date?: SortOrderInput | SortOrder;
    position?: SortOrderInput | SortOrder;
    department?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    school?: schoolOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type staffWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: staffWhereInput | staffWhereInput[];
      OR?: staffWhereInput[];
      NOT?: staffWhereInput | staffWhereInput[];
      hire_date?: DateTimeNullableFilter<'staff'> | Date | string | null;
      position?: StringNullableFilter<'staff'> | string | null;
      department?: StringNullableFilter<'staff'> | string | null;
      user_id?: UuidFilter<'staff'> | string;
      school_id?: UuidFilter<'staff'> | string;
      created_at?: DateTimeFilter<'staff'> | Date | string;
      updated_at?: DateTimeFilter<'staff'> | Date | string;
      school?: XOR<SchoolRelationFilter, schoolWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type staffOrderByWithAggregationInput = {
    id?: SortOrder;
    hire_date?: SortOrderInput | SortOrder;
    position?: SortOrderInput | SortOrder;
    department?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: staffCountOrderByAggregateInput;
    _max?: staffMaxOrderByAggregateInput;
    _min?: staffMinOrderByAggregateInput;
  };

  export type staffScalarWhereWithAggregatesInput = {
    AND?: staffScalarWhereWithAggregatesInput | staffScalarWhereWithAggregatesInput[];
    OR?: staffScalarWhereWithAggregatesInput[];
    NOT?: staffScalarWhereWithAggregatesInput | staffScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'staff'> | string;
    hire_date?: DateTimeNullableWithAggregatesFilter<'staff'> | Date | string | null;
    position?: StringNullableWithAggregatesFilter<'staff'> | string | null;
    department?: StringNullableWithAggregatesFilter<'staff'> | string | null;
    user_id?: UuidWithAggregatesFilter<'staff'> | string;
    school_id?: UuidWithAggregatesFilter<'staff'> | string;
    created_at?: DateTimeWithAggregatesFilter<'staff'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'staff'> | Date | string;
  };

  export type studentWhereInput = {
    AND?: studentWhereInput | studentWhereInput[];
    OR?: studentWhereInput[];
    NOT?: studentWhereInput | studentWhereInput[];
    id?: UuidFilter<'student'> | string;
    enrollment_date?: DateTimeNullableFilter<'student'> | Date | string | null;
    grade_level?: IntNullableFilter<'student'> | number | null;
    class?: StringNullableFilter<'student'> | string | null;
    section?: StringNullableFilter<'student'> | string | null;
    user_id?: UuidFilter<'student'> | string;
    school_id?: UuidFilter<'student'> | string;
    created_at?: DateTimeFilter<'student'> | Date | string;
    updated_at?: DateTimeFilter<'student'> | Date | string;
    school?: XOR<SchoolRelationFilter, schoolWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type studentOrderByWithRelationInput = {
    id?: SortOrder;
    enrollment_date?: SortOrderInput | SortOrder;
    grade_level?: SortOrderInput | SortOrder;
    class?: SortOrderInput | SortOrder;
    section?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    school?: schoolOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type studentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: studentWhereInput | studentWhereInput[];
      OR?: studentWhereInput[];
      NOT?: studentWhereInput | studentWhereInput[];
      enrollment_date?: DateTimeNullableFilter<'student'> | Date | string | null;
      grade_level?: IntNullableFilter<'student'> | number | null;
      class?: StringNullableFilter<'student'> | string | null;
      section?: StringNullableFilter<'student'> | string | null;
      user_id?: UuidFilter<'student'> | string;
      school_id?: UuidFilter<'student'> | string;
      created_at?: DateTimeFilter<'student'> | Date | string;
      updated_at?: DateTimeFilter<'student'> | Date | string;
      school?: XOR<SchoolRelationFilter, schoolWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type studentOrderByWithAggregationInput = {
    id?: SortOrder;
    enrollment_date?: SortOrderInput | SortOrder;
    grade_level?: SortOrderInput | SortOrder;
    class?: SortOrderInput | SortOrder;
    section?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: studentCountOrderByAggregateInput;
    _avg?: studentAvgOrderByAggregateInput;
    _max?: studentMaxOrderByAggregateInput;
    _min?: studentMinOrderByAggregateInput;
    _sum?: studentSumOrderByAggregateInput;
  };

  export type studentScalarWhereWithAggregatesInput = {
    AND?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[];
    OR?: studentScalarWhereWithAggregatesInput[];
    NOT?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'student'> | string;
    enrollment_date?: DateTimeNullableWithAggregatesFilter<'student'> | Date | string | null;
    grade_level?: IntNullableWithAggregatesFilter<'student'> | number | null;
    class?: StringNullableWithAggregatesFilter<'student'> | string | null;
    section?: StringNullableWithAggregatesFilter<'student'> | string | null;
    user_id?: UuidWithAggregatesFilter<'student'> | string;
    school_id?: UuidWithAggregatesFilter<'student'> | string;
    created_at?: DateTimeWithAggregatesFilter<'student'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'student'> | Date | string;
  };

  export type teacherWhereInput = {
    AND?: teacherWhereInput | teacherWhereInput[];
    OR?: teacherWhereInput[];
    NOT?: teacherWhereInput | teacherWhereInput[];
    id?: UuidFilter<'teacher'> | string;
    hire_date?: DateTimeNullableFilter<'teacher'> | Date | string | null;
    subject?: StringNullableFilter<'teacher'> | string | null;
    class?: StringNullableFilter<'teacher'> | string | null;
    section?: StringNullableFilter<'teacher'> | string | null;
    user_id?: UuidFilter<'teacher'> | string;
    school_id?: UuidFilter<'teacher'> | string;
    created_at?: DateTimeFilter<'teacher'> | Date | string;
    updated_at?: DateTimeFilter<'teacher'> | Date | string;
    school?: XOR<SchoolRelationFilter, schoolWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type teacherOrderByWithRelationInput = {
    id?: SortOrder;
    hire_date?: SortOrderInput | SortOrder;
    subject?: SortOrderInput | SortOrder;
    class?: SortOrderInput | SortOrder;
    section?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    school?: schoolOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type teacherWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: teacherWhereInput | teacherWhereInput[];
      OR?: teacherWhereInput[];
      NOT?: teacherWhereInput | teacherWhereInput[];
      hire_date?: DateTimeNullableFilter<'teacher'> | Date | string | null;
      subject?: StringNullableFilter<'teacher'> | string | null;
      class?: StringNullableFilter<'teacher'> | string | null;
      section?: StringNullableFilter<'teacher'> | string | null;
      user_id?: UuidFilter<'teacher'> | string;
      school_id?: UuidFilter<'teacher'> | string;
      created_at?: DateTimeFilter<'teacher'> | Date | string;
      updated_at?: DateTimeFilter<'teacher'> | Date | string;
      school?: XOR<SchoolRelationFilter, schoolWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type teacherOrderByWithAggregationInput = {
    id?: SortOrder;
    hire_date?: SortOrderInput | SortOrder;
    subject?: SortOrderInput | SortOrder;
    class?: SortOrderInput | SortOrder;
    section?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: teacherCountOrderByAggregateInput;
    _max?: teacherMaxOrderByAggregateInput;
    _min?: teacherMinOrderByAggregateInput;
  };

  export type teacherScalarWhereWithAggregatesInput = {
    AND?: teacherScalarWhereWithAggregatesInput | teacherScalarWhereWithAggregatesInput[];
    OR?: teacherScalarWhereWithAggregatesInput[];
    NOT?: teacherScalarWhereWithAggregatesInput | teacherScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'teacher'> | string;
    hire_date?: DateTimeNullableWithAggregatesFilter<'teacher'> | Date | string | null;
    subject?: StringNullableWithAggregatesFilter<'teacher'> | string | null;
    class?: StringNullableWithAggregatesFilter<'teacher'> | string | null;
    section?: StringNullableWithAggregatesFilter<'teacher'> | string | null;
    user_id?: UuidWithAggregatesFilter<'teacher'> | string;
    school_id?: UuidWithAggregatesFilter<'teacher'> | string;
    created_at?: DateTimeWithAggregatesFilter<'teacher'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'teacher'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    leave?: LeaveListRelationFilter;
    school?: SchoolListRelationFilter;
    staff?: StaffListRelationFilter;
    student?: StudentListRelationFilter;
    teacher?: TeacherListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    leave?: leaveOrderByRelationAggregateInput;
    school?: schoolOrderByRelationAggregateInput;
    staff?: staffOrderByRelationAggregateInput;
    student?: studentOrderByRelationAggregateInput;
    teacher?: teacherOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      leave?: LeaveListRelationFilter;
      school?: SchoolListRelationFilter;
      staff?: StaffListRelationFilter;
      student?: StudentListRelationFilter;
      teacher?: TeacherListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type leaveCreateInput = {
    id?: string;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    reason?: string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutLeaveInput;
  };

  export type leaveUncheckedCreateInput = {
    id?: string;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    reason?: string | null;
    status?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type leaveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutLeaveNestedInput;
  };

  export type leaveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type leaveCreateManyInput = {
    id?: string;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    reason?: string | null;
    status?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type leaveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type leaveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type schoolCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutSchoolInput;
    staff?: staffCreateNestedManyWithoutSchoolInput;
    student?: studentCreateNestedManyWithoutSchoolInput;
    teacher?: teacherCreateNestedManyWithoutSchoolInput;
  };

  export type schoolUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    staff?: staffUncheckedCreateNestedManyWithoutSchoolInput;
    student?: studentUncheckedCreateNestedManyWithoutSchoolInput;
    teacher?: teacherUncheckedCreateNestedManyWithoutSchoolInput;
  };

  export type schoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutSchoolNestedInput;
    staff?: staffUpdateManyWithoutSchoolNestedInput;
    student?: studentUpdateManyWithoutSchoolNestedInput;
    teacher?: teacherUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    staff?: staffUncheckedUpdateManyWithoutSchoolNestedInput;
    student?: studentUncheckedUpdateManyWithoutSchoolNestedInput;
    teacher?: teacherUncheckedUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type schoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type schoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type staffCreateInput = {
    id?: string;
    hire_date?: Date | string | null;
    position?: string | null;
    department?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    school: schoolCreateNestedOneWithoutStaffInput;
    user: userCreateNestedOneWithoutStaffInput;
  };

  export type staffUncheckedCreateInput = {
    id?: string;
    hire_date?: Date | string | null;
    position?: string | null;
    department?: string | null;
    user_id: string;
    school_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type staffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: NullableStringFieldUpdateOperationsInput | string | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    school?: schoolUpdateOneRequiredWithoutStaffNestedInput;
    user?: userUpdateOneRequiredWithoutStaffNestedInput;
  };

  export type staffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: NullableStringFieldUpdateOperationsInput | string | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type staffCreateManyInput = {
    id?: string;
    hire_date?: Date | string | null;
    position?: string | null;
    department?: string | null;
    user_id: string;
    school_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type staffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: NullableStringFieldUpdateOperationsInput | string | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type staffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: NullableStringFieldUpdateOperationsInput | string | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type studentCreateInput = {
    id?: string;
    enrollment_date?: Date | string | null;
    grade_level?: number | null;
    class?: string | null;
    section?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    school: schoolCreateNestedOneWithoutStudentInput;
    user: userCreateNestedOneWithoutStudentInput;
  };

  export type studentUncheckedCreateInput = {
    id?: string;
    enrollment_date?: Date | string | null;
    grade_level?: number | null;
    class?: string | null;
    section?: string | null;
    user_id: string;
    school_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type studentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    class?: NullableStringFieldUpdateOperationsInput | string | null;
    section?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    school?: schoolUpdateOneRequiredWithoutStudentNestedInput;
    user?: userUpdateOneRequiredWithoutStudentNestedInput;
  };

  export type studentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    class?: NullableStringFieldUpdateOperationsInput | string | null;
    section?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type studentCreateManyInput = {
    id?: string;
    enrollment_date?: Date | string | null;
    grade_level?: number | null;
    class?: string | null;
    section?: string | null;
    user_id: string;
    school_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type studentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    class?: NullableStringFieldUpdateOperationsInput | string | null;
    section?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type studentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    class?: NullableStringFieldUpdateOperationsInput | string | null;
    section?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teacherCreateInput = {
    id?: string;
    hire_date?: Date | string | null;
    subject?: string | null;
    class?: string | null;
    section?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    school: schoolCreateNestedOneWithoutTeacherInput;
    user: userCreateNestedOneWithoutTeacherInput;
  };

  export type teacherUncheckedCreateInput = {
    id?: string;
    hire_date?: Date | string | null;
    subject?: string | null;
    class?: string | null;
    section?: string | null;
    user_id: string;
    school_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teacherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subject?: NullableStringFieldUpdateOperationsInput | string | null;
    class?: NullableStringFieldUpdateOperationsInput | string | null;
    section?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    school?: schoolUpdateOneRequiredWithoutTeacherNestedInput;
    user?: userUpdateOneRequiredWithoutTeacherNestedInput;
  };

  export type teacherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subject?: NullableStringFieldUpdateOperationsInput | string | null;
    class?: NullableStringFieldUpdateOperationsInput | string | null;
    section?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teacherCreateManyInput = {
    id?: string;
    hire_date?: Date | string | null;
    subject?: string | null;
    class?: string | null;
    section?: string | null;
    user_id: string;
    school_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teacherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subject?: NullableStringFieldUpdateOperationsInput | string | null;
    class?: NullableStringFieldUpdateOperationsInput | string | null;
    section?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teacherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subject?: NullableStringFieldUpdateOperationsInput | string | null;
    class?: NullableStringFieldUpdateOperationsInput | string | null;
    section?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    leave?: leaveCreateNestedManyWithoutUserInput;
    school?: schoolCreateNestedManyWithoutUserInput;
    staff?: staffCreateNestedManyWithoutUserInput;
    student?: studentCreateNestedManyWithoutUserInput;
    teacher?: teacherCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    leave?: leaveUncheckedCreateNestedManyWithoutUserInput;
    school?: schoolUncheckedCreateNestedManyWithoutUserInput;
    staff?: staffUncheckedCreateNestedManyWithoutUserInput;
    student?: studentUncheckedCreateNestedManyWithoutUserInput;
    teacher?: teacherUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    leave?: leaveUpdateManyWithoutUserNestedInput;
    school?: schoolUpdateManyWithoutUserNestedInput;
    staff?: staffUpdateManyWithoutUserNestedInput;
    student?: studentUpdateManyWithoutUserNestedInput;
    teacher?: teacherUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    leave?: leaveUncheckedUpdateManyWithoutUserNestedInput;
    school?: schoolUncheckedUpdateManyWithoutUserNestedInput;
    staff?: staffUncheckedUpdateManyWithoutUserNestedInput;
    student?: studentUncheckedUpdateManyWithoutUserNestedInput;
    teacher?: teacherUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type leaveCountOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    reason?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type leaveMaxOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    reason?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type leaveMinOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    reason?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StaffListRelationFilter = {
    every?: staffWhereInput;
    some?: staffWhereInput;
    none?: staffWhereInput;
  };

  export type StudentListRelationFilter = {
    every?: studentWhereInput;
    some?: studentWhereInput;
    none?: studentWhereInput;
  };

  export type TeacherListRelationFilter = {
    every?: teacherWhereInput;
    some?: teacherWhereInput;
    none?: teacherWhereInput;
  };

  export type staffOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type studentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type teacherOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type schoolCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type schoolMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type schoolMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type SchoolRelationFilter = {
    is?: schoolWhereInput;
    isNot?: schoolWhereInput;
  };

  export type staffCountOrderByAggregateInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    position?: SortOrder;
    department?: SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type staffMaxOrderByAggregateInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    position?: SortOrder;
    department?: SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type staffMinOrderByAggregateInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    position?: SortOrder;
    department?: SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type studentCountOrderByAggregateInput = {
    id?: SortOrder;
    enrollment_date?: SortOrder;
    grade_level?: SortOrder;
    class?: SortOrder;
    section?: SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type studentAvgOrderByAggregateInput = {
    grade_level?: SortOrder;
  };

  export type studentMaxOrderByAggregateInput = {
    id?: SortOrder;
    enrollment_date?: SortOrder;
    grade_level?: SortOrder;
    class?: SortOrder;
    section?: SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type studentMinOrderByAggregateInput = {
    id?: SortOrder;
    enrollment_date?: SortOrder;
    grade_level?: SortOrder;
    class?: SortOrder;
    section?: SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type studentSumOrderByAggregateInput = {
    grade_level?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type teacherCountOrderByAggregateInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    subject?: SortOrder;
    class?: SortOrder;
    section?: SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type teacherMaxOrderByAggregateInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    subject?: SortOrder;
    class?: SortOrder;
    section?: SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type teacherMinOrderByAggregateInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    subject?: SortOrder;
    class?: SortOrder;
    section?: SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type LeaveListRelationFilter = {
    every?: leaveWhereInput;
    some?: leaveWhereInput;
    none?: leaveWhereInput;
  };

  export type SchoolListRelationFilter = {
    every?: schoolWhereInput;
    some?: schoolWhereInput;
    none?: schoolWhereInput;
  };

  export type leaveOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type schoolOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutLeaveInput = {
    create?: XOR<userCreateWithoutLeaveInput, userUncheckedCreateWithoutLeaveInput>;
    connectOrCreate?: userCreateOrConnectWithoutLeaveInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutLeaveNestedInput = {
    create?: XOR<userCreateWithoutLeaveInput, userUncheckedCreateWithoutLeaveInput>;
    connectOrCreate?: userCreateOrConnectWithoutLeaveInput;
    upsert?: userUpsertWithoutLeaveInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutLeaveInput, userUpdateWithoutLeaveInput>,
      userUncheckedUpdateWithoutLeaveInput
    >;
  };

  export type userCreateNestedOneWithoutSchoolInput = {
    create?: XOR<userCreateWithoutSchoolInput, userUncheckedCreateWithoutSchoolInput>;
    connectOrCreate?: userCreateOrConnectWithoutSchoolInput;
    connect?: userWhereUniqueInput;
  };

  export type staffCreateNestedManyWithoutSchoolInput = {
    create?:
      | XOR<staffCreateWithoutSchoolInput, staffUncheckedCreateWithoutSchoolInput>
      | staffCreateWithoutSchoolInput[]
      | staffUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: staffCreateOrConnectWithoutSchoolInput | staffCreateOrConnectWithoutSchoolInput[];
    createMany?: staffCreateManySchoolInputEnvelope;
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[];
  };

  export type studentCreateNestedManyWithoutSchoolInput = {
    create?:
      | XOR<studentCreateWithoutSchoolInput, studentUncheckedCreateWithoutSchoolInput>
      | studentCreateWithoutSchoolInput[]
      | studentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: studentCreateOrConnectWithoutSchoolInput | studentCreateOrConnectWithoutSchoolInput[];
    createMany?: studentCreateManySchoolInputEnvelope;
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
  };

  export type teacherCreateNestedManyWithoutSchoolInput = {
    create?:
      | XOR<teacherCreateWithoutSchoolInput, teacherUncheckedCreateWithoutSchoolInput>
      | teacherCreateWithoutSchoolInput[]
      | teacherUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: teacherCreateOrConnectWithoutSchoolInput | teacherCreateOrConnectWithoutSchoolInput[];
    createMany?: teacherCreateManySchoolInputEnvelope;
    connect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
  };

  export type staffUncheckedCreateNestedManyWithoutSchoolInput = {
    create?:
      | XOR<staffCreateWithoutSchoolInput, staffUncheckedCreateWithoutSchoolInput>
      | staffCreateWithoutSchoolInput[]
      | staffUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: staffCreateOrConnectWithoutSchoolInput | staffCreateOrConnectWithoutSchoolInput[];
    createMany?: staffCreateManySchoolInputEnvelope;
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[];
  };

  export type studentUncheckedCreateNestedManyWithoutSchoolInput = {
    create?:
      | XOR<studentCreateWithoutSchoolInput, studentUncheckedCreateWithoutSchoolInput>
      | studentCreateWithoutSchoolInput[]
      | studentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: studentCreateOrConnectWithoutSchoolInput | studentCreateOrConnectWithoutSchoolInput[];
    createMany?: studentCreateManySchoolInputEnvelope;
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
  };

  export type teacherUncheckedCreateNestedManyWithoutSchoolInput = {
    create?:
      | XOR<teacherCreateWithoutSchoolInput, teacherUncheckedCreateWithoutSchoolInput>
      | teacherCreateWithoutSchoolInput[]
      | teacherUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: teacherCreateOrConnectWithoutSchoolInput | teacherCreateOrConnectWithoutSchoolInput[];
    createMany?: teacherCreateManySchoolInputEnvelope;
    connect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
  };

  export type userUpdateOneRequiredWithoutSchoolNestedInput = {
    create?: XOR<userCreateWithoutSchoolInput, userUncheckedCreateWithoutSchoolInput>;
    connectOrCreate?: userCreateOrConnectWithoutSchoolInput;
    upsert?: userUpsertWithoutSchoolInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutSchoolInput, userUpdateWithoutSchoolInput>,
      userUncheckedUpdateWithoutSchoolInput
    >;
  };

  export type staffUpdateManyWithoutSchoolNestedInput = {
    create?:
      | XOR<staffCreateWithoutSchoolInput, staffUncheckedCreateWithoutSchoolInput>
      | staffCreateWithoutSchoolInput[]
      | staffUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: staffCreateOrConnectWithoutSchoolInput | staffCreateOrConnectWithoutSchoolInput[];
    upsert?: staffUpsertWithWhereUniqueWithoutSchoolInput | staffUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: staffCreateManySchoolInputEnvelope;
    set?: staffWhereUniqueInput | staffWhereUniqueInput[];
    disconnect?: staffWhereUniqueInput | staffWhereUniqueInput[];
    delete?: staffWhereUniqueInput | staffWhereUniqueInput[];
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[];
    update?: staffUpdateWithWhereUniqueWithoutSchoolInput | staffUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: staffUpdateManyWithWhereWithoutSchoolInput | staffUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: staffScalarWhereInput | staffScalarWhereInput[];
  };

  export type studentUpdateManyWithoutSchoolNestedInput = {
    create?:
      | XOR<studentCreateWithoutSchoolInput, studentUncheckedCreateWithoutSchoolInput>
      | studentCreateWithoutSchoolInput[]
      | studentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: studentCreateOrConnectWithoutSchoolInput | studentCreateOrConnectWithoutSchoolInput[];
    upsert?: studentUpsertWithWhereUniqueWithoutSchoolInput | studentUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: studentCreateManySchoolInputEnvelope;
    set?: studentWhereUniqueInput | studentWhereUniqueInput[];
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[];
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    update?: studentUpdateWithWhereUniqueWithoutSchoolInput | studentUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: studentUpdateManyWithWhereWithoutSchoolInput | studentUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[];
  };

  export type teacherUpdateManyWithoutSchoolNestedInput = {
    create?:
      | XOR<teacherCreateWithoutSchoolInput, teacherUncheckedCreateWithoutSchoolInput>
      | teacherCreateWithoutSchoolInput[]
      | teacherUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: teacherCreateOrConnectWithoutSchoolInput | teacherCreateOrConnectWithoutSchoolInput[];
    upsert?: teacherUpsertWithWhereUniqueWithoutSchoolInput | teacherUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: teacherCreateManySchoolInputEnvelope;
    set?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    disconnect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    delete?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    connect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    update?: teacherUpdateWithWhereUniqueWithoutSchoolInput | teacherUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: teacherUpdateManyWithWhereWithoutSchoolInput | teacherUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: teacherScalarWhereInput | teacherScalarWhereInput[];
  };

  export type staffUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?:
      | XOR<staffCreateWithoutSchoolInput, staffUncheckedCreateWithoutSchoolInput>
      | staffCreateWithoutSchoolInput[]
      | staffUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: staffCreateOrConnectWithoutSchoolInput | staffCreateOrConnectWithoutSchoolInput[];
    upsert?: staffUpsertWithWhereUniqueWithoutSchoolInput | staffUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: staffCreateManySchoolInputEnvelope;
    set?: staffWhereUniqueInput | staffWhereUniqueInput[];
    disconnect?: staffWhereUniqueInput | staffWhereUniqueInput[];
    delete?: staffWhereUniqueInput | staffWhereUniqueInput[];
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[];
    update?: staffUpdateWithWhereUniqueWithoutSchoolInput | staffUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: staffUpdateManyWithWhereWithoutSchoolInput | staffUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: staffScalarWhereInput | staffScalarWhereInput[];
  };

  export type studentUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?:
      | XOR<studentCreateWithoutSchoolInput, studentUncheckedCreateWithoutSchoolInput>
      | studentCreateWithoutSchoolInput[]
      | studentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: studentCreateOrConnectWithoutSchoolInput | studentCreateOrConnectWithoutSchoolInput[];
    upsert?: studentUpsertWithWhereUniqueWithoutSchoolInput | studentUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: studentCreateManySchoolInputEnvelope;
    set?: studentWhereUniqueInput | studentWhereUniqueInput[];
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[];
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    update?: studentUpdateWithWhereUniqueWithoutSchoolInput | studentUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: studentUpdateManyWithWhereWithoutSchoolInput | studentUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[];
  };

  export type teacherUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?:
      | XOR<teacherCreateWithoutSchoolInput, teacherUncheckedCreateWithoutSchoolInput>
      | teacherCreateWithoutSchoolInput[]
      | teacherUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: teacherCreateOrConnectWithoutSchoolInput | teacherCreateOrConnectWithoutSchoolInput[];
    upsert?: teacherUpsertWithWhereUniqueWithoutSchoolInput | teacherUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: teacherCreateManySchoolInputEnvelope;
    set?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    disconnect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    delete?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    connect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    update?: teacherUpdateWithWhereUniqueWithoutSchoolInput | teacherUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: teacherUpdateManyWithWhereWithoutSchoolInput | teacherUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: teacherScalarWhereInput | teacherScalarWhereInput[];
  };

  export type schoolCreateNestedOneWithoutStaffInput = {
    create?: XOR<schoolCreateWithoutStaffInput, schoolUncheckedCreateWithoutStaffInput>;
    connectOrCreate?: schoolCreateOrConnectWithoutStaffInput;
    connect?: schoolWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutStaffInput = {
    create?: XOR<userCreateWithoutStaffInput, userUncheckedCreateWithoutStaffInput>;
    connectOrCreate?: userCreateOrConnectWithoutStaffInput;
    connect?: userWhereUniqueInput;
  };

  export type schoolUpdateOneRequiredWithoutStaffNestedInput = {
    create?: XOR<schoolCreateWithoutStaffInput, schoolUncheckedCreateWithoutStaffInput>;
    connectOrCreate?: schoolCreateOrConnectWithoutStaffInput;
    upsert?: schoolUpsertWithoutStaffInput;
    connect?: schoolWhereUniqueInput;
    update?: XOR<
      XOR<schoolUpdateToOneWithWhereWithoutStaffInput, schoolUpdateWithoutStaffInput>,
      schoolUncheckedUpdateWithoutStaffInput
    >;
  };

  export type userUpdateOneRequiredWithoutStaffNestedInput = {
    create?: XOR<userCreateWithoutStaffInput, userUncheckedCreateWithoutStaffInput>;
    connectOrCreate?: userCreateOrConnectWithoutStaffInput;
    upsert?: userUpsertWithoutStaffInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutStaffInput, userUpdateWithoutStaffInput>,
      userUncheckedUpdateWithoutStaffInput
    >;
  };

  export type schoolCreateNestedOneWithoutStudentInput = {
    create?: XOR<schoolCreateWithoutStudentInput, schoolUncheckedCreateWithoutStudentInput>;
    connectOrCreate?: schoolCreateOrConnectWithoutStudentInput;
    connect?: schoolWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutStudentInput = {
    create?: XOR<userCreateWithoutStudentInput, userUncheckedCreateWithoutStudentInput>;
    connectOrCreate?: userCreateOrConnectWithoutStudentInput;
    connect?: userWhereUniqueInput;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type schoolUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<schoolCreateWithoutStudentInput, schoolUncheckedCreateWithoutStudentInput>;
    connectOrCreate?: schoolCreateOrConnectWithoutStudentInput;
    upsert?: schoolUpsertWithoutStudentInput;
    connect?: schoolWhereUniqueInput;
    update?: XOR<
      XOR<schoolUpdateToOneWithWhereWithoutStudentInput, schoolUpdateWithoutStudentInput>,
      schoolUncheckedUpdateWithoutStudentInput
    >;
  };

  export type userUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<userCreateWithoutStudentInput, userUncheckedCreateWithoutStudentInput>;
    connectOrCreate?: userCreateOrConnectWithoutStudentInput;
    upsert?: userUpsertWithoutStudentInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutStudentInput, userUpdateWithoutStudentInput>,
      userUncheckedUpdateWithoutStudentInput
    >;
  };

  export type schoolCreateNestedOneWithoutTeacherInput = {
    create?: XOR<schoolCreateWithoutTeacherInput, schoolUncheckedCreateWithoutTeacherInput>;
    connectOrCreate?: schoolCreateOrConnectWithoutTeacherInput;
    connect?: schoolWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutTeacherInput = {
    create?: XOR<userCreateWithoutTeacherInput, userUncheckedCreateWithoutTeacherInput>;
    connectOrCreate?: userCreateOrConnectWithoutTeacherInput;
    connect?: userWhereUniqueInput;
  };

  export type schoolUpdateOneRequiredWithoutTeacherNestedInput = {
    create?: XOR<schoolCreateWithoutTeacherInput, schoolUncheckedCreateWithoutTeacherInput>;
    connectOrCreate?: schoolCreateOrConnectWithoutTeacherInput;
    upsert?: schoolUpsertWithoutTeacherInput;
    connect?: schoolWhereUniqueInput;
    update?: XOR<
      XOR<schoolUpdateToOneWithWhereWithoutTeacherInput, schoolUpdateWithoutTeacherInput>,
      schoolUncheckedUpdateWithoutTeacherInput
    >;
  };

  export type userUpdateOneRequiredWithoutTeacherNestedInput = {
    create?: XOR<userCreateWithoutTeacherInput, userUncheckedCreateWithoutTeacherInput>;
    connectOrCreate?: userCreateOrConnectWithoutTeacherInput;
    upsert?: userUpsertWithoutTeacherInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutTeacherInput, userUpdateWithoutTeacherInput>,
      userUncheckedUpdateWithoutTeacherInput
    >;
  };

  export type leaveCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<leaveCreateWithoutUserInput, leaveUncheckedCreateWithoutUserInput>
      | leaveCreateWithoutUserInput[]
      | leaveUncheckedCreateWithoutUserInput[];
    connectOrCreate?: leaveCreateOrConnectWithoutUserInput | leaveCreateOrConnectWithoutUserInput[];
    createMany?: leaveCreateManyUserInputEnvelope;
    connect?: leaveWhereUniqueInput | leaveWhereUniqueInput[];
  };

  export type schoolCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>
      | schoolCreateWithoutUserInput[]
      | schoolUncheckedCreateWithoutUserInput[];
    connectOrCreate?: schoolCreateOrConnectWithoutUserInput | schoolCreateOrConnectWithoutUserInput[];
    createMany?: schoolCreateManyUserInputEnvelope;
    connect?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
  };

  export type staffCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<staffCreateWithoutUserInput, staffUncheckedCreateWithoutUserInput>
      | staffCreateWithoutUserInput[]
      | staffUncheckedCreateWithoutUserInput[];
    connectOrCreate?: staffCreateOrConnectWithoutUserInput | staffCreateOrConnectWithoutUserInput[];
    createMany?: staffCreateManyUserInputEnvelope;
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[];
  };

  export type studentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<studentCreateWithoutUserInput, studentUncheckedCreateWithoutUserInput>
      | studentCreateWithoutUserInput[]
      | studentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: studentCreateOrConnectWithoutUserInput | studentCreateOrConnectWithoutUserInput[];
    createMany?: studentCreateManyUserInputEnvelope;
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
  };

  export type teacherCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<teacherCreateWithoutUserInput, teacherUncheckedCreateWithoutUserInput>
      | teacherCreateWithoutUserInput[]
      | teacherUncheckedCreateWithoutUserInput[];
    connectOrCreate?: teacherCreateOrConnectWithoutUserInput | teacherCreateOrConnectWithoutUserInput[];
    createMany?: teacherCreateManyUserInputEnvelope;
    connect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
  };

  export type leaveUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<leaveCreateWithoutUserInput, leaveUncheckedCreateWithoutUserInput>
      | leaveCreateWithoutUserInput[]
      | leaveUncheckedCreateWithoutUserInput[];
    connectOrCreate?: leaveCreateOrConnectWithoutUserInput | leaveCreateOrConnectWithoutUserInput[];
    createMany?: leaveCreateManyUserInputEnvelope;
    connect?: leaveWhereUniqueInput | leaveWhereUniqueInput[];
  };

  export type schoolUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>
      | schoolCreateWithoutUserInput[]
      | schoolUncheckedCreateWithoutUserInput[];
    connectOrCreate?: schoolCreateOrConnectWithoutUserInput | schoolCreateOrConnectWithoutUserInput[];
    createMany?: schoolCreateManyUserInputEnvelope;
    connect?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
  };

  export type staffUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<staffCreateWithoutUserInput, staffUncheckedCreateWithoutUserInput>
      | staffCreateWithoutUserInput[]
      | staffUncheckedCreateWithoutUserInput[];
    connectOrCreate?: staffCreateOrConnectWithoutUserInput | staffCreateOrConnectWithoutUserInput[];
    createMany?: staffCreateManyUserInputEnvelope;
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[];
  };

  export type studentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<studentCreateWithoutUserInput, studentUncheckedCreateWithoutUserInput>
      | studentCreateWithoutUserInput[]
      | studentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: studentCreateOrConnectWithoutUserInput | studentCreateOrConnectWithoutUserInput[];
    createMany?: studentCreateManyUserInputEnvelope;
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
  };

  export type teacherUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<teacherCreateWithoutUserInput, teacherUncheckedCreateWithoutUserInput>
      | teacherCreateWithoutUserInput[]
      | teacherUncheckedCreateWithoutUserInput[];
    connectOrCreate?: teacherCreateOrConnectWithoutUserInput | teacherCreateOrConnectWithoutUserInput[];
    createMany?: teacherCreateManyUserInputEnvelope;
    connect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
  };

  export type leaveUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<leaveCreateWithoutUserInput, leaveUncheckedCreateWithoutUserInput>
      | leaveCreateWithoutUserInput[]
      | leaveUncheckedCreateWithoutUserInput[];
    connectOrCreate?: leaveCreateOrConnectWithoutUserInput | leaveCreateOrConnectWithoutUserInput[];
    upsert?: leaveUpsertWithWhereUniqueWithoutUserInput | leaveUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: leaveCreateManyUserInputEnvelope;
    set?: leaveWhereUniqueInput | leaveWhereUniqueInput[];
    disconnect?: leaveWhereUniqueInput | leaveWhereUniqueInput[];
    delete?: leaveWhereUniqueInput | leaveWhereUniqueInput[];
    connect?: leaveWhereUniqueInput | leaveWhereUniqueInput[];
    update?: leaveUpdateWithWhereUniqueWithoutUserInput | leaveUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: leaveUpdateManyWithWhereWithoutUserInput | leaveUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: leaveScalarWhereInput | leaveScalarWhereInput[];
  };

  export type schoolUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>
      | schoolCreateWithoutUserInput[]
      | schoolUncheckedCreateWithoutUserInput[];
    connectOrCreate?: schoolCreateOrConnectWithoutUserInput | schoolCreateOrConnectWithoutUserInput[];
    upsert?: schoolUpsertWithWhereUniqueWithoutUserInput | schoolUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: schoolCreateManyUserInputEnvelope;
    set?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    disconnect?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    delete?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    connect?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    update?: schoolUpdateWithWhereUniqueWithoutUserInput | schoolUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: schoolUpdateManyWithWhereWithoutUserInput | schoolUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: schoolScalarWhereInput | schoolScalarWhereInput[];
  };

  export type staffUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<staffCreateWithoutUserInput, staffUncheckedCreateWithoutUserInput>
      | staffCreateWithoutUserInput[]
      | staffUncheckedCreateWithoutUserInput[];
    connectOrCreate?: staffCreateOrConnectWithoutUserInput | staffCreateOrConnectWithoutUserInput[];
    upsert?: staffUpsertWithWhereUniqueWithoutUserInput | staffUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: staffCreateManyUserInputEnvelope;
    set?: staffWhereUniqueInput | staffWhereUniqueInput[];
    disconnect?: staffWhereUniqueInput | staffWhereUniqueInput[];
    delete?: staffWhereUniqueInput | staffWhereUniqueInput[];
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[];
    update?: staffUpdateWithWhereUniqueWithoutUserInput | staffUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: staffUpdateManyWithWhereWithoutUserInput | staffUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: staffScalarWhereInput | staffScalarWhereInput[];
  };

  export type studentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<studentCreateWithoutUserInput, studentUncheckedCreateWithoutUserInput>
      | studentCreateWithoutUserInput[]
      | studentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: studentCreateOrConnectWithoutUserInput | studentCreateOrConnectWithoutUserInput[];
    upsert?: studentUpsertWithWhereUniqueWithoutUserInput | studentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: studentCreateManyUserInputEnvelope;
    set?: studentWhereUniqueInput | studentWhereUniqueInput[];
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[];
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    update?: studentUpdateWithWhereUniqueWithoutUserInput | studentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: studentUpdateManyWithWhereWithoutUserInput | studentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[];
  };

  export type teacherUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<teacherCreateWithoutUserInput, teacherUncheckedCreateWithoutUserInput>
      | teacherCreateWithoutUserInput[]
      | teacherUncheckedCreateWithoutUserInput[];
    connectOrCreate?: teacherCreateOrConnectWithoutUserInput | teacherCreateOrConnectWithoutUserInput[];
    upsert?: teacherUpsertWithWhereUniqueWithoutUserInput | teacherUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: teacherCreateManyUserInputEnvelope;
    set?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    disconnect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    delete?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    connect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    update?: teacherUpdateWithWhereUniqueWithoutUserInput | teacherUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: teacherUpdateManyWithWhereWithoutUserInput | teacherUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: teacherScalarWhereInput | teacherScalarWhereInput[];
  };

  export type leaveUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<leaveCreateWithoutUserInput, leaveUncheckedCreateWithoutUserInput>
      | leaveCreateWithoutUserInput[]
      | leaveUncheckedCreateWithoutUserInput[];
    connectOrCreate?: leaveCreateOrConnectWithoutUserInput | leaveCreateOrConnectWithoutUserInput[];
    upsert?: leaveUpsertWithWhereUniqueWithoutUserInput | leaveUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: leaveCreateManyUserInputEnvelope;
    set?: leaveWhereUniqueInput | leaveWhereUniqueInput[];
    disconnect?: leaveWhereUniqueInput | leaveWhereUniqueInput[];
    delete?: leaveWhereUniqueInput | leaveWhereUniqueInput[];
    connect?: leaveWhereUniqueInput | leaveWhereUniqueInput[];
    update?: leaveUpdateWithWhereUniqueWithoutUserInput | leaveUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: leaveUpdateManyWithWhereWithoutUserInput | leaveUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: leaveScalarWhereInput | leaveScalarWhereInput[];
  };

  export type schoolUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>
      | schoolCreateWithoutUserInput[]
      | schoolUncheckedCreateWithoutUserInput[];
    connectOrCreate?: schoolCreateOrConnectWithoutUserInput | schoolCreateOrConnectWithoutUserInput[];
    upsert?: schoolUpsertWithWhereUniqueWithoutUserInput | schoolUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: schoolCreateManyUserInputEnvelope;
    set?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    disconnect?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    delete?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    connect?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    update?: schoolUpdateWithWhereUniqueWithoutUserInput | schoolUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: schoolUpdateManyWithWhereWithoutUserInput | schoolUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: schoolScalarWhereInput | schoolScalarWhereInput[];
  };

  export type staffUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<staffCreateWithoutUserInput, staffUncheckedCreateWithoutUserInput>
      | staffCreateWithoutUserInput[]
      | staffUncheckedCreateWithoutUserInput[];
    connectOrCreate?: staffCreateOrConnectWithoutUserInput | staffCreateOrConnectWithoutUserInput[];
    upsert?: staffUpsertWithWhereUniqueWithoutUserInput | staffUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: staffCreateManyUserInputEnvelope;
    set?: staffWhereUniqueInput | staffWhereUniqueInput[];
    disconnect?: staffWhereUniqueInput | staffWhereUniqueInput[];
    delete?: staffWhereUniqueInput | staffWhereUniqueInput[];
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[];
    update?: staffUpdateWithWhereUniqueWithoutUserInput | staffUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: staffUpdateManyWithWhereWithoutUserInput | staffUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: staffScalarWhereInput | staffScalarWhereInput[];
  };

  export type studentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<studentCreateWithoutUserInput, studentUncheckedCreateWithoutUserInput>
      | studentCreateWithoutUserInput[]
      | studentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: studentCreateOrConnectWithoutUserInput | studentCreateOrConnectWithoutUserInput[];
    upsert?: studentUpsertWithWhereUniqueWithoutUserInput | studentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: studentCreateManyUserInputEnvelope;
    set?: studentWhereUniqueInput | studentWhereUniqueInput[];
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[];
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    update?: studentUpdateWithWhereUniqueWithoutUserInput | studentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: studentUpdateManyWithWhereWithoutUserInput | studentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[];
  };

  export type teacherUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<teacherCreateWithoutUserInput, teacherUncheckedCreateWithoutUserInput>
      | teacherCreateWithoutUserInput[]
      | teacherUncheckedCreateWithoutUserInput[];
    connectOrCreate?: teacherCreateOrConnectWithoutUserInput | teacherCreateOrConnectWithoutUserInput[];
    upsert?: teacherUpsertWithWhereUniqueWithoutUserInput | teacherUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: teacherCreateManyUserInputEnvelope;
    set?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    disconnect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    delete?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    connect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    update?: teacherUpdateWithWhereUniqueWithoutUserInput | teacherUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: teacherUpdateManyWithWhereWithoutUserInput | teacherUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: teacherScalarWhereInput | teacherScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type userCreateWithoutLeaveInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    school?: schoolCreateNestedManyWithoutUserInput;
    staff?: staffCreateNestedManyWithoutUserInput;
    student?: studentCreateNestedManyWithoutUserInput;
    teacher?: teacherCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutLeaveInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    school?: schoolUncheckedCreateNestedManyWithoutUserInput;
    staff?: staffUncheckedCreateNestedManyWithoutUserInput;
    student?: studentUncheckedCreateNestedManyWithoutUserInput;
    teacher?: teacherUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutLeaveInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutLeaveInput, userUncheckedCreateWithoutLeaveInput>;
  };

  export type userUpsertWithoutLeaveInput = {
    update: XOR<userUpdateWithoutLeaveInput, userUncheckedUpdateWithoutLeaveInput>;
    create: XOR<userCreateWithoutLeaveInput, userUncheckedCreateWithoutLeaveInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutLeaveInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutLeaveInput, userUncheckedUpdateWithoutLeaveInput>;
  };

  export type userUpdateWithoutLeaveInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    school?: schoolUpdateManyWithoutUserNestedInput;
    staff?: staffUpdateManyWithoutUserNestedInput;
    student?: studentUpdateManyWithoutUserNestedInput;
    teacher?: teacherUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutLeaveInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    school?: schoolUncheckedUpdateManyWithoutUserNestedInput;
    staff?: staffUncheckedUpdateManyWithoutUserNestedInput;
    student?: studentUncheckedUpdateManyWithoutUserNestedInput;
    teacher?: teacherUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutSchoolInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    leave?: leaveCreateNestedManyWithoutUserInput;
    staff?: staffCreateNestedManyWithoutUserInput;
    student?: studentCreateNestedManyWithoutUserInput;
    teacher?: teacherCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutSchoolInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    leave?: leaveUncheckedCreateNestedManyWithoutUserInput;
    staff?: staffUncheckedCreateNestedManyWithoutUserInput;
    student?: studentUncheckedCreateNestedManyWithoutUserInput;
    teacher?: teacherUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutSchoolInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutSchoolInput, userUncheckedCreateWithoutSchoolInput>;
  };

  export type staffCreateWithoutSchoolInput = {
    id?: string;
    hire_date?: Date | string | null;
    position?: string | null;
    department?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutStaffInput;
  };

  export type staffUncheckedCreateWithoutSchoolInput = {
    id?: string;
    hire_date?: Date | string | null;
    position?: string | null;
    department?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type staffCreateOrConnectWithoutSchoolInput = {
    where: staffWhereUniqueInput;
    create: XOR<staffCreateWithoutSchoolInput, staffUncheckedCreateWithoutSchoolInput>;
  };

  export type staffCreateManySchoolInputEnvelope = {
    data: staffCreateManySchoolInput | staffCreateManySchoolInput[];
    skipDuplicates?: boolean;
  };

  export type studentCreateWithoutSchoolInput = {
    id?: string;
    enrollment_date?: Date | string | null;
    grade_level?: number | null;
    class?: string | null;
    section?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutStudentInput;
  };

  export type studentUncheckedCreateWithoutSchoolInput = {
    id?: string;
    enrollment_date?: Date | string | null;
    grade_level?: number | null;
    class?: string | null;
    section?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type studentCreateOrConnectWithoutSchoolInput = {
    where: studentWhereUniqueInput;
    create: XOR<studentCreateWithoutSchoolInput, studentUncheckedCreateWithoutSchoolInput>;
  };

  export type studentCreateManySchoolInputEnvelope = {
    data: studentCreateManySchoolInput | studentCreateManySchoolInput[];
    skipDuplicates?: boolean;
  };

  export type teacherCreateWithoutSchoolInput = {
    id?: string;
    hire_date?: Date | string | null;
    subject?: string | null;
    class?: string | null;
    section?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutTeacherInput;
  };

  export type teacherUncheckedCreateWithoutSchoolInput = {
    id?: string;
    hire_date?: Date | string | null;
    subject?: string | null;
    class?: string | null;
    section?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teacherCreateOrConnectWithoutSchoolInput = {
    where: teacherWhereUniqueInput;
    create: XOR<teacherCreateWithoutSchoolInput, teacherUncheckedCreateWithoutSchoolInput>;
  };

  export type teacherCreateManySchoolInputEnvelope = {
    data: teacherCreateManySchoolInput | teacherCreateManySchoolInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutSchoolInput = {
    update: XOR<userUpdateWithoutSchoolInput, userUncheckedUpdateWithoutSchoolInput>;
    create: XOR<userCreateWithoutSchoolInput, userUncheckedCreateWithoutSchoolInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutSchoolInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutSchoolInput, userUncheckedUpdateWithoutSchoolInput>;
  };

  export type userUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    leave?: leaveUpdateManyWithoutUserNestedInput;
    staff?: staffUpdateManyWithoutUserNestedInput;
    student?: studentUpdateManyWithoutUserNestedInput;
    teacher?: teacherUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    leave?: leaveUncheckedUpdateManyWithoutUserNestedInput;
    staff?: staffUncheckedUpdateManyWithoutUserNestedInput;
    student?: studentUncheckedUpdateManyWithoutUserNestedInput;
    teacher?: teacherUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type staffUpsertWithWhereUniqueWithoutSchoolInput = {
    where: staffWhereUniqueInput;
    update: XOR<staffUpdateWithoutSchoolInput, staffUncheckedUpdateWithoutSchoolInput>;
    create: XOR<staffCreateWithoutSchoolInput, staffUncheckedCreateWithoutSchoolInput>;
  };

  export type staffUpdateWithWhereUniqueWithoutSchoolInput = {
    where: staffWhereUniqueInput;
    data: XOR<staffUpdateWithoutSchoolInput, staffUncheckedUpdateWithoutSchoolInput>;
  };

  export type staffUpdateManyWithWhereWithoutSchoolInput = {
    where: staffScalarWhereInput;
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyWithoutSchoolInput>;
  };

  export type staffScalarWhereInput = {
    AND?: staffScalarWhereInput | staffScalarWhereInput[];
    OR?: staffScalarWhereInput[];
    NOT?: staffScalarWhereInput | staffScalarWhereInput[];
    id?: UuidFilter<'staff'> | string;
    hire_date?: DateTimeNullableFilter<'staff'> | Date | string | null;
    position?: StringNullableFilter<'staff'> | string | null;
    department?: StringNullableFilter<'staff'> | string | null;
    user_id?: UuidFilter<'staff'> | string;
    school_id?: UuidFilter<'staff'> | string;
    created_at?: DateTimeFilter<'staff'> | Date | string;
    updated_at?: DateTimeFilter<'staff'> | Date | string;
  };

  export type studentUpsertWithWhereUniqueWithoutSchoolInput = {
    where: studentWhereUniqueInput;
    update: XOR<studentUpdateWithoutSchoolInput, studentUncheckedUpdateWithoutSchoolInput>;
    create: XOR<studentCreateWithoutSchoolInput, studentUncheckedCreateWithoutSchoolInput>;
  };

  export type studentUpdateWithWhereUniqueWithoutSchoolInput = {
    where: studentWhereUniqueInput;
    data: XOR<studentUpdateWithoutSchoolInput, studentUncheckedUpdateWithoutSchoolInput>;
  };

  export type studentUpdateManyWithWhereWithoutSchoolInput = {
    where: studentScalarWhereInput;
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyWithoutSchoolInput>;
  };

  export type studentScalarWhereInput = {
    AND?: studentScalarWhereInput | studentScalarWhereInput[];
    OR?: studentScalarWhereInput[];
    NOT?: studentScalarWhereInput | studentScalarWhereInput[];
    id?: UuidFilter<'student'> | string;
    enrollment_date?: DateTimeNullableFilter<'student'> | Date | string | null;
    grade_level?: IntNullableFilter<'student'> | number | null;
    class?: StringNullableFilter<'student'> | string | null;
    section?: StringNullableFilter<'student'> | string | null;
    user_id?: UuidFilter<'student'> | string;
    school_id?: UuidFilter<'student'> | string;
    created_at?: DateTimeFilter<'student'> | Date | string;
    updated_at?: DateTimeFilter<'student'> | Date | string;
  };

  export type teacherUpsertWithWhereUniqueWithoutSchoolInput = {
    where: teacherWhereUniqueInput;
    update: XOR<teacherUpdateWithoutSchoolInput, teacherUncheckedUpdateWithoutSchoolInput>;
    create: XOR<teacherCreateWithoutSchoolInput, teacherUncheckedCreateWithoutSchoolInput>;
  };

  export type teacherUpdateWithWhereUniqueWithoutSchoolInput = {
    where: teacherWhereUniqueInput;
    data: XOR<teacherUpdateWithoutSchoolInput, teacherUncheckedUpdateWithoutSchoolInput>;
  };

  export type teacherUpdateManyWithWhereWithoutSchoolInput = {
    where: teacherScalarWhereInput;
    data: XOR<teacherUpdateManyMutationInput, teacherUncheckedUpdateManyWithoutSchoolInput>;
  };

  export type teacherScalarWhereInput = {
    AND?: teacherScalarWhereInput | teacherScalarWhereInput[];
    OR?: teacherScalarWhereInput[];
    NOT?: teacherScalarWhereInput | teacherScalarWhereInput[];
    id?: UuidFilter<'teacher'> | string;
    hire_date?: DateTimeNullableFilter<'teacher'> | Date | string | null;
    subject?: StringNullableFilter<'teacher'> | string | null;
    class?: StringNullableFilter<'teacher'> | string | null;
    section?: StringNullableFilter<'teacher'> | string | null;
    user_id?: UuidFilter<'teacher'> | string;
    school_id?: UuidFilter<'teacher'> | string;
    created_at?: DateTimeFilter<'teacher'> | Date | string;
    updated_at?: DateTimeFilter<'teacher'> | Date | string;
  };

  export type schoolCreateWithoutStaffInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutSchoolInput;
    student?: studentCreateNestedManyWithoutSchoolInput;
    teacher?: teacherCreateNestedManyWithoutSchoolInput;
  };

  export type schoolUncheckedCreateWithoutStaffInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    student?: studentUncheckedCreateNestedManyWithoutSchoolInput;
    teacher?: teacherUncheckedCreateNestedManyWithoutSchoolInput;
  };

  export type schoolCreateOrConnectWithoutStaffInput = {
    where: schoolWhereUniqueInput;
    create: XOR<schoolCreateWithoutStaffInput, schoolUncheckedCreateWithoutStaffInput>;
  };

  export type userCreateWithoutStaffInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    leave?: leaveCreateNestedManyWithoutUserInput;
    school?: schoolCreateNestedManyWithoutUserInput;
    student?: studentCreateNestedManyWithoutUserInput;
    teacher?: teacherCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutStaffInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    leave?: leaveUncheckedCreateNestedManyWithoutUserInput;
    school?: schoolUncheckedCreateNestedManyWithoutUserInput;
    student?: studentUncheckedCreateNestedManyWithoutUserInput;
    teacher?: teacherUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutStaffInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutStaffInput, userUncheckedCreateWithoutStaffInput>;
  };

  export type schoolUpsertWithoutStaffInput = {
    update: XOR<schoolUpdateWithoutStaffInput, schoolUncheckedUpdateWithoutStaffInput>;
    create: XOR<schoolCreateWithoutStaffInput, schoolUncheckedCreateWithoutStaffInput>;
    where?: schoolWhereInput;
  };

  export type schoolUpdateToOneWithWhereWithoutStaffInput = {
    where?: schoolWhereInput;
    data: XOR<schoolUpdateWithoutStaffInput, schoolUncheckedUpdateWithoutStaffInput>;
  };

  export type schoolUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutSchoolNestedInput;
    student?: studentUpdateManyWithoutSchoolNestedInput;
    teacher?: teacherUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    student?: studentUncheckedUpdateManyWithoutSchoolNestedInput;
    teacher?: teacherUncheckedUpdateManyWithoutSchoolNestedInput;
  };

  export type userUpsertWithoutStaffInput = {
    update: XOR<userUpdateWithoutStaffInput, userUncheckedUpdateWithoutStaffInput>;
    create: XOR<userCreateWithoutStaffInput, userUncheckedCreateWithoutStaffInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutStaffInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutStaffInput, userUncheckedUpdateWithoutStaffInput>;
  };

  export type userUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    leave?: leaveUpdateManyWithoutUserNestedInput;
    school?: schoolUpdateManyWithoutUserNestedInput;
    student?: studentUpdateManyWithoutUserNestedInput;
    teacher?: teacherUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    leave?: leaveUncheckedUpdateManyWithoutUserNestedInput;
    school?: schoolUncheckedUpdateManyWithoutUserNestedInput;
    student?: studentUncheckedUpdateManyWithoutUserNestedInput;
    teacher?: teacherUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type schoolCreateWithoutStudentInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutSchoolInput;
    staff?: staffCreateNestedManyWithoutSchoolInput;
    teacher?: teacherCreateNestedManyWithoutSchoolInput;
  };

  export type schoolUncheckedCreateWithoutStudentInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    staff?: staffUncheckedCreateNestedManyWithoutSchoolInput;
    teacher?: teacherUncheckedCreateNestedManyWithoutSchoolInput;
  };

  export type schoolCreateOrConnectWithoutStudentInput = {
    where: schoolWhereUniqueInput;
    create: XOR<schoolCreateWithoutStudentInput, schoolUncheckedCreateWithoutStudentInput>;
  };

  export type userCreateWithoutStudentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    leave?: leaveCreateNestedManyWithoutUserInput;
    school?: schoolCreateNestedManyWithoutUserInput;
    staff?: staffCreateNestedManyWithoutUserInput;
    teacher?: teacherCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutStudentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    leave?: leaveUncheckedCreateNestedManyWithoutUserInput;
    school?: schoolUncheckedCreateNestedManyWithoutUserInput;
    staff?: staffUncheckedCreateNestedManyWithoutUserInput;
    teacher?: teacherUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutStudentInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutStudentInput, userUncheckedCreateWithoutStudentInput>;
  };

  export type schoolUpsertWithoutStudentInput = {
    update: XOR<schoolUpdateWithoutStudentInput, schoolUncheckedUpdateWithoutStudentInput>;
    create: XOR<schoolCreateWithoutStudentInput, schoolUncheckedCreateWithoutStudentInput>;
    where?: schoolWhereInput;
  };

  export type schoolUpdateToOneWithWhereWithoutStudentInput = {
    where?: schoolWhereInput;
    data: XOR<schoolUpdateWithoutStudentInput, schoolUncheckedUpdateWithoutStudentInput>;
  };

  export type schoolUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutSchoolNestedInput;
    staff?: staffUpdateManyWithoutSchoolNestedInput;
    teacher?: teacherUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    staff?: staffUncheckedUpdateManyWithoutSchoolNestedInput;
    teacher?: teacherUncheckedUpdateManyWithoutSchoolNestedInput;
  };

  export type userUpsertWithoutStudentInput = {
    update: XOR<userUpdateWithoutStudentInput, userUncheckedUpdateWithoutStudentInput>;
    create: XOR<userCreateWithoutStudentInput, userUncheckedCreateWithoutStudentInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutStudentInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutStudentInput, userUncheckedUpdateWithoutStudentInput>;
  };

  export type userUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    leave?: leaveUpdateManyWithoutUserNestedInput;
    school?: schoolUpdateManyWithoutUserNestedInput;
    staff?: staffUpdateManyWithoutUserNestedInput;
    teacher?: teacherUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    leave?: leaveUncheckedUpdateManyWithoutUserNestedInput;
    school?: schoolUncheckedUpdateManyWithoutUserNestedInput;
    staff?: staffUncheckedUpdateManyWithoutUserNestedInput;
    teacher?: teacherUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type schoolCreateWithoutTeacherInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutSchoolInput;
    staff?: staffCreateNestedManyWithoutSchoolInput;
    student?: studentCreateNestedManyWithoutSchoolInput;
  };

  export type schoolUncheckedCreateWithoutTeacherInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    staff?: staffUncheckedCreateNestedManyWithoutSchoolInput;
    student?: studentUncheckedCreateNestedManyWithoutSchoolInput;
  };

  export type schoolCreateOrConnectWithoutTeacherInput = {
    where: schoolWhereUniqueInput;
    create: XOR<schoolCreateWithoutTeacherInput, schoolUncheckedCreateWithoutTeacherInput>;
  };

  export type userCreateWithoutTeacherInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    leave?: leaveCreateNestedManyWithoutUserInput;
    school?: schoolCreateNestedManyWithoutUserInput;
    staff?: staffCreateNestedManyWithoutUserInput;
    student?: studentCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutTeacherInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    leave?: leaveUncheckedCreateNestedManyWithoutUserInput;
    school?: schoolUncheckedCreateNestedManyWithoutUserInput;
    staff?: staffUncheckedCreateNestedManyWithoutUserInput;
    student?: studentUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutTeacherInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutTeacherInput, userUncheckedCreateWithoutTeacherInput>;
  };

  export type schoolUpsertWithoutTeacherInput = {
    update: XOR<schoolUpdateWithoutTeacherInput, schoolUncheckedUpdateWithoutTeacherInput>;
    create: XOR<schoolCreateWithoutTeacherInput, schoolUncheckedCreateWithoutTeacherInput>;
    where?: schoolWhereInput;
  };

  export type schoolUpdateToOneWithWhereWithoutTeacherInput = {
    where?: schoolWhereInput;
    data: XOR<schoolUpdateWithoutTeacherInput, schoolUncheckedUpdateWithoutTeacherInput>;
  };

  export type schoolUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutSchoolNestedInput;
    staff?: staffUpdateManyWithoutSchoolNestedInput;
    student?: studentUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    staff?: staffUncheckedUpdateManyWithoutSchoolNestedInput;
    student?: studentUncheckedUpdateManyWithoutSchoolNestedInput;
  };

  export type userUpsertWithoutTeacherInput = {
    update: XOR<userUpdateWithoutTeacherInput, userUncheckedUpdateWithoutTeacherInput>;
    create: XOR<userCreateWithoutTeacherInput, userUncheckedCreateWithoutTeacherInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutTeacherInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutTeacherInput, userUncheckedUpdateWithoutTeacherInput>;
  };

  export type userUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    leave?: leaveUpdateManyWithoutUserNestedInput;
    school?: schoolUpdateManyWithoutUserNestedInput;
    staff?: staffUpdateManyWithoutUserNestedInput;
    student?: studentUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    leave?: leaveUncheckedUpdateManyWithoutUserNestedInput;
    school?: schoolUncheckedUpdateManyWithoutUserNestedInput;
    staff?: staffUncheckedUpdateManyWithoutUserNestedInput;
    student?: studentUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type leaveCreateWithoutUserInput = {
    id?: string;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    reason?: string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type leaveUncheckedCreateWithoutUserInput = {
    id?: string;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    reason?: string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type leaveCreateOrConnectWithoutUserInput = {
    where: leaveWhereUniqueInput;
    create: XOR<leaveCreateWithoutUserInput, leaveUncheckedCreateWithoutUserInput>;
  };

  export type leaveCreateManyUserInputEnvelope = {
    data: leaveCreateManyUserInput | leaveCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type schoolCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    staff?: staffCreateNestedManyWithoutSchoolInput;
    student?: studentCreateNestedManyWithoutSchoolInput;
    teacher?: teacherCreateNestedManyWithoutSchoolInput;
  };

  export type schoolUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    staff?: staffUncheckedCreateNestedManyWithoutSchoolInput;
    student?: studentUncheckedCreateNestedManyWithoutSchoolInput;
    teacher?: teacherUncheckedCreateNestedManyWithoutSchoolInput;
  };

  export type schoolCreateOrConnectWithoutUserInput = {
    where: schoolWhereUniqueInput;
    create: XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>;
  };

  export type schoolCreateManyUserInputEnvelope = {
    data: schoolCreateManyUserInput | schoolCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type staffCreateWithoutUserInput = {
    id?: string;
    hire_date?: Date | string | null;
    position?: string | null;
    department?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    school: schoolCreateNestedOneWithoutStaffInput;
  };

  export type staffUncheckedCreateWithoutUserInput = {
    id?: string;
    hire_date?: Date | string | null;
    position?: string | null;
    department?: string | null;
    school_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type staffCreateOrConnectWithoutUserInput = {
    where: staffWhereUniqueInput;
    create: XOR<staffCreateWithoutUserInput, staffUncheckedCreateWithoutUserInput>;
  };

  export type staffCreateManyUserInputEnvelope = {
    data: staffCreateManyUserInput | staffCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type studentCreateWithoutUserInput = {
    id?: string;
    enrollment_date?: Date | string | null;
    grade_level?: number | null;
    class?: string | null;
    section?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    school: schoolCreateNestedOneWithoutStudentInput;
  };

  export type studentUncheckedCreateWithoutUserInput = {
    id?: string;
    enrollment_date?: Date | string | null;
    grade_level?: number | null;
    class?: string | null;
    section?: string | null;
    school_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type studentCreateOrConnectWithoutUserInput = {
    where: studentWhereUniqueInput;
    create: XOR<studentCreateWithoutUserInput, studentUncheckedCreateWithoutUserInput>;
  };

  export type studentCreateManyUserInputEnvelope = {
    data: studentCreateManyUserInput | studentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type teacherCreateWithoutUserInput = {
    id?: string;
    hire_date?: Date | string | null;
    subject?: string | null;
    class?: string | null;
    section?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    school: schoolCreateNestedOneWithoutTeacherInput;
  };

  export type teacherUncheckedCreateWithoutUserInput = {
    id?: string;
    hire_date?: Date | string | null;
    subject?: string | null;
    class?: string | null;
    section?: string | null;
    school_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teacherCreateOrConnectWithoutUserInput = {
    where: teacherWhereUniqueInput;
    create: XOR<teacherCreateWithoutUserInput, teacherUncheckedCreateWithoutUserInput>;
  };

  export type teacherCreateManyUserInputEnvelope = {
    data: teacherCreateManyUserInput | teacherCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type leaveUpsertWithWhereUniqueWithoutUserInput = {
    where: leaveWhereUniqueInput;
    update: XOR<leaveUpdateWithoutUserInput, leaveUncheckedUpdateWithoutUserInput>;
    create: XOR<leaveCreateWithoutUserInput, leaveUncheckedCreateWithoutUserInput>;
  };

  export type leaveUpdateWithWhereUniqueWithoutUserInput = {
    where: leaveWhereUniqueInput;
    data: XOR<leaveUpdateWithoutUserInput, leaveUncheckedUpdateWithoutUserInput>;
  };

  export type leaveUpdateManyWithWhereWithoutUserInput = {
    where: leaveScalarWhereInput;
    data: XOR<leaveUpdateManyMutationInput, leaveUncheckedUpdateManyWithoutUserInput>;
  };

  export type leaveScalarWhereInput = {
    AND?: leaveScalarWhereInput | leaveScalarWhereInput[];
    OR?: leaveScalarWhereInput[];
    NOT?: leaveScalarWhereInput | leaveScalarWhereInput[];
    id?: UuidFilter<'leave'> | string;
    start_date?: DateTimeNullableFilter<'leave'> | Date | string | null;
    end_date?: DateTimeNullableFilter<'leave'> | Date | string | null;
    reason?: StringNullableFilter<'leave'> | string | null;
    status?: StringNullableFilter<'leave'> | string | null;
    user_id?: UuidFilter<'leave'> | string;
    created_at?: DateTimeFilter<'leave'> | Date | string;
    updated_at?: DateTimeFilter<'leave'> | Date | string;
  };

  export type schoolUpsertWithWhereUniqueWithoutUserInput = {
    where: schoolWhereUniqueInput;
    update: XOR<schoolUpdateWithoutUserInput, schoolUncheckedUpdateWithoutUserInput>;
    create: XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>;
  };

  export type schoolUpdateWithWhereUniqueWithoutUserInput = {
    where: schoolWhereUniqueInput;
    data: XOR<schoolUpdateWithoutUserInput, schoolUncheckedUpdateWithoutUserInput>;
  };

  export type schoolUpdateManyWithWhereWithoutUserInput = {
    where: schoolScalarWhereInput;
    data: XOR<schoolUpdateManyMutationInput, schoolUncheckedUpdateManyWithoutUserInput>;
  };

  export type schoolScalarWhereInput = {
    AND?: schoolScalarWhereInput | schoolScalarWhereInput[];
    OR?: schoolScalarWhereInput[];
    NOT?: schoolScalarWhereInput | schoolScalarWhereInput[];
    id?: UuidFilter<'school'> | string;
    description?: StringNullableFilter<'school'> | string | null;
    address?: StringNullableFilter<'school'> | string | null;
    city?: StringNullableFilter<'school'> | string | null;
    state?: StringNullableFilter<'school'> | string | null;
    zip?: StringNullableFilter<'school'> | string | null;
    name?: StringFilter<'school'> | string;
    created_at?: DateTimeFilter<'school'> | Date | string;
    updated_at?: DateTimeFilter<'school'> | Date | string;
    user_id?: UuidFilter<'school'> | string;
    tenant_id?: StringFilter<'school'> | string;
  };

  export type staffUpsertWithWhereUniqueWithoutUserInput = {
    where: staffWhereUniqueInput;
    update: XOR<staffUpdateWithoutUserInput, staffUncheckedUpdateWithoutUserInput>;
    create: XOR<staffCreateWithoutUserInput, staffUncheckedCreateWithoutUserInput>;
  };

  export type staffUpdateWithWhereUniqueWithoutUserInput = {
    where: staffWhereUniqueInput;
    data: XOR<staffUpdateWithoutUserInput, staffUncheckedUpdateWithoutUserInput>;
  };

  export type staffUpdateManyWithWhereWithoutUserInput = {
    where: staffScalarWhereInput;
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyWithoutUserInput>;
  };

  export type studentUpsertWithWhereUniqueWithoutUserInput = {
    where: studentWhereUniqueInput;
    update: XOR<studentUpdateWithoutUserInput, studentUncheckedUpdateWithoutUserInput>;
    create: XOR<studentCreateWithoutUserInput, studentUncheckedCreateWithoutUserInput>;
  };

  export type studentUpdateWithWhereUniqueWithoutUserInput = {
    where: studentWhereUniqueInput;
    data: XOR<studentUpdateWithoutUserInput, studentUncheckedUpdateWithoutUserInput>;
  };

  export type studentUpdateManyWithWhereWithoutUserInput = {
    where: studentScalarWhereInput;
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyWithoutUserInput>;
  };

  export type teacherUpsertWithWhereUniqueWithoutUserInput = {
    where: teacherWhereUniqueInput;
    update: XOR<teacherUpdateWithoutUserInput, teacherUncheckedUpdateWithoutUserInput>;
    create: XOR<teacherCreateWithoutUserInput, teacherUncheckedCreateWithoutUserInput>;
  };

  export type teacherUpdateWithWhereUniqueWithoutUserInput = {
    where: teacherWhereUniqueInput;
    data: XOR<teacherUpdateWithoutUserInput, teacherUncheckedUpdateWithoutUserInput>;
  };

  export type teacherUpdateManyWithWhereWithoutUserInput = {
    where: teacherScalarWhereInput;
    data: XOR<teacherUpdateManyMutationInput, teacherUncheckedUpdateManyWithoutUserInput>;
  };

  export type staffCreateManySchoolInput = {
    id?: string;
    hire_date?: Date | string | null;
    position?: string | null;
    department?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type studentCreateManySchoolInput = {
    id?: string;
    enrollment_date?: Date | string | null;
    grade_level?: number | null;
    class?: string | null;
    section?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teacherCreateManySchoolInput = {
    id?: string;
    hire_date?: Date | string | null;
    subject?: string | null;
    class?: string | null;
    section?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type staffUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: NullableStringFieldUpdateOperationsInput | string | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutStaffNestedInput;
  };

  export type staffUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: NullableStringFieldUpdateOperationsInput | string | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type staffUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: NullableStringFieldUpdateOperationsInput | string | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type studentUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    class?: NullableStringFieldUpdateOperationsInput | string | null;
    section?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutStudentNestedInput;
  };

  export type studentUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    class?: NullableStringFieldUpdateOperationsInput | string | null;
    section?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type studentUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    class?: NullableStringFieldUpdateOperationsInput | string | null;
    section?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teacherUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subject?: NullableStringFieldUpdateOperationsInput | string | null;
    class?: NullableStringFieldUpdateOperationsInput | string | null;
    section?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutTeacherNestedInput;
  };

  export type teacherUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subject?: NullableStringFieldUpdateOperationsInput | string | null;
    class?: NullableStringFieldUpdateOperationsInput | string | null;
    section?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teacherUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subject?: NullableStringFieldUpdateOperationsInput | string | null;
    class?: NullableStringFieldUpdateOperationsInput | string | null;
    section?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type leaveCreateManyUserInput = {
    id?: string;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    reason?: string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type schoolCreateManyUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type staffCreateManyUserInput = {
    id?: string;
    hire_date?: Date | string | null;
    position?: string | null;
    department?: string | null;
    school_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type studentCreateManyUserInput = {
    id?: string;
    enrollment_date?: Date | string | null;
    grade_level?: number | null;
    class?: string | null;
    section?: string | null;
    school_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teacherCreateManyUserInput = {
    id?: string;
    hire_date?: Date | string | null;
    subject?: string | null;
    class?: string | null;
    section?: string | null;
    school_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type leaveUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type leaveUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type leaveUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type schoolUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    staff?: staffUpdateManyWithoutSchoolNestedInput;
    student?: studentUpdateManyWithoutSchoolNestedInput;
    teacher?: teacherUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    staff?: staffUncheckedUpdateManyWithoutSchoolNestedInput;
    student?: studentUncheckedUpdateManyWithoutSchoolNestedInput;
    teacher?: teacherUncheckedUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type staffUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: NullableStringFieldUpdateOperationsInput | string | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    school?: schoolUpdateOneRequiredWithoutStaffNestedInput;
  };

  export type staffUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: NullableStringFieldUpdateOperationsInput | string | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    school_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type staffUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    position?: NullableStringFieldUpdateOperationsInput | string | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    school_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type studentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    class?: NullableStringFieldUpdateOperationsInput | string | null;
    section?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    school?: schoolUpdateOneRequiredWithoutStudentNestedInput;
  };

  export type studentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    class?: NullableStringFieldUpdateOperationsInput | string | null;
    section?: NullableStringFieldUpdateOperationsInput | string | null;
    school_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type studentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null;
    class?: NullableStringFieldUpdateOperationsInput | string | null;
    section?: NullableStringFieldUpdateOperationsInput | string | null;
    school_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teacherUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subject?: NullableStringFieldUpdateOperationsInput | string | null;
    class?: NullableStringFieldUpdateOperationsInput | string | null;
    section?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    school?: schoolUpdateOneRequiredWithoutTeacherNestedInput;
  };

  export type teacherUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subject?: NullableStringFieldUpdateOperationsInput | string | null;
    class?: NullableStringFieldUpdateOperationsInput | string | null;
    section?: NullableStringFieldUpdateOperationsInput | string | null;
    school_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teacherUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subject?: NullableStringFieldUpdateOperationsInput | string | null;
    class?: NullableStringFieldUpdateOperationsInput | string | null;
    section?: NullableStringFieldUpdateOperationsInput | string | null;
    school_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use SchoolCountOutputTypeDefaultArgs instead
   */
  export type SchoolCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    SchoolCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use leaveDefaultArgs instead
   */
  export type leaveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = leaveDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use schoolDefaultArgs instead
   */
  export type schoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    schoolDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use staffDefaultArgs instead
   */
  export type staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = staffDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use studentDefaultArgs instead
   */
  export type studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    studentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use teacherDefaultArgs instead
   */
  export type teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    teacherDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
