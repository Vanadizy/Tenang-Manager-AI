
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ChatConversation
 * 
 */
export type ChatConversation = $Result.DefaultSelection<Prisma.$ChatConversationPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model Unit
 * 
 */
export type Unit = $Result.DefaultSelection<Prisma.$UnitPayload>
/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model Lease
 * 
 */
export type Lease = $Result.DefaultSelection<Prisma.$LeasePayload>
/**
 * Model RentPayment
 * 
 */
export type RentPayment = $Result.DefaultSelection<Prisma.$RentPaymentPayload>
/**
 * Model PaymentReceipt
 * 
 */
export type PaymentReceipt = $Result.DefaultSelection<Prisma.$PaymentReceiptPayload>
/**
 * Model Bill
 * 
 */
export type Bill = $Result.DefaultSelection<Prisma.$BillPayload>
/**
 * Model EmailLog
 * 
 */
export type EmailLog = $Result.DefaultSelection<Prisma.$EmailLogPayload>
/**
 * Model Setting
 * 
 */
export type Setting = $Result.DefaultSelection<Prisma.$SettingPayload>
/**
 * Model Contract
 * 
 */
export type Contract = $Result.DefaultSelection<Prisma.$ContractPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PaymentFrequency: {
  monthly: 'monthly',
  yearly: 'yearly'
};

export type PaymentFrequency = (typeof PaymentFrequency)[keyof typeof PaymentFrequency]


export const RecordStatus: {
  pending: 'pending',
  partial: 'partial',
  paid: 'paid',
  overdue: 'overdue',
  active: 'active',
  expired: 'expired',
  terminated: 'terminated'
};

export type RecordStatus = (typeof RecordStatus)[keyof typeof RecordStatus]


export const BillType: {
  water: 'water',
  electricity: 'electricity',
  other: 'other'
};

export type BillType = (typeof BillType)[keyof typeof BillType]

}

export type PaymentFrequency = $Enums.PaymentFrequency

export const PaymentFrequency: typeof $Enums.PaymentFrequency

export type RecordStatus = $Enums.RecordStatus

export const RecordStatus: typeof $Enums.RecordStatus

export type BillType = $Enums.BillType

export const BillType: typeof $Enums.BillType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatConversation`: Exposes CRUD operations for the **ChatConversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatConversations
    * const chatConversations = await prisma.chatConversation.findMany()
    * ```
    */
  get chatConversation(): Prisma.ChatConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unit`: Exposes CRUD operations for the **Unit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.unit.findMany()
    * ```
    */
  get unit(): Prisma.UnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lease`: Exposes CRUD operations for the **Lease** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leases
    * const leases = await prisma.lease.findMany()
    * ```
    */
  get lease(): Prisma.LeaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rentPayment`: Exposes CRUD operations for the **RentPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RentPayments
    * const rentPayments = await prisma.rentPayment.findMany()
    * ```
    */
  get rentPayment(): Prisma.RentPaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentReceipt`: Exposes CRUD operations for the **PaymentReceipt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentReceipts
    * const paymentReceipts = await prisma.paymentReceipt.findMany()
    * ```
    */
  get paymentReceipt(): Prisma.PaymentReceiptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bill`: Exposes CRUD operations for the **Bill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bills
    * const bills = await prisma.bill.findMany()
    * ```
    */
  get bill(): Prisma.BillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailLog`: Exposes CRUD operations for the **EmailLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailLogs
    * const emailLogs = await prisma.emailLog.findMany()
    * ```
    */
  get emailLog(): Prisma.EmailLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **Setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.SettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contract`: Exposes CRUD operations for the **Contract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contract.findMany()
    * ```
    */
  get contract(): Prisma.ContractDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ChatConversation: 'ChatConversation',
    ChatMessage: 'ChatMessage',
    Unit: 'Unit',
    Tenant: 'Tenant',
    Lease: 'Lease',
    RentPayment: 'RentPayment',
    PaymentReceipt: 'PaymentReceipt',
    Bill: 'Bill',
    EmailLog: 'EmailLog',
    Setting: 'Setting',
    Contract: 'Contract'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "chatConversation" | "chatMessage" | "unit" | "tenant" | "lease" | "rentPayment" | "paymentReceipt" | "bill" | "emailLog" | "setting" | "contract"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ChatConversation: {
        payload: Prisma.$ChatConversationPayload<ExtArgs>
        fields: Prisma.ChatConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConversationPayload>
          }
          findFirst: {
            args: Prisma.ChatConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConversationPayload>
          }
          findMany: {
            args: Prisma.ChatConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConversationPayload>[]
          }
          create: {
            args: Prisma.ChatConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConversationPayload>
          }
          createMany: {
            args: Prisma.ChatConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConversationPayload>[]
          }
          delete: {
            args: Prisma.ChatConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConversationPayload>
          }
          update: {
            args: Prisma.ChatConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConversationPayload>
          }
          deleteMany: {
            args: Prisma.ChatConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatConversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConversationPayload>[]
          }
          upsert: {
            args: Prisma.ChatConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConversationPayload>
          }
          aggregate: {
            args: Prisma.ChatConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatConversation>
          }
          groupBy: {
            args: Prisma.ChatConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatConversationCountArgs<ExtArgs>
            result: $Utils.Optional<ChatConversationCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      Unit: {
        payload: Prisma.$UnitPayload<ExtArgs>
        fields: Prisma.UnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findFirst: {
            args: Prisma.UnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findMany: {
            args: Prisma.UnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          create: {
            args: Prisma.UnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          createMany: {
            args: Prisma.UnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          delete: {
            args: Prisma.UnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          update: {
            args: Prisma.UnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          deleteMany: {
            args: Prisma.UnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          upsert: {
            args: Prisma.UnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          aggregate: {
            args: Prisma.UnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnit>
          }
          groupBy: {
            args: Prisma.UnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitCountArgs<ExtArgs>
            result: $Utils.Optional<UnitCountAggregateOutputType> | number
          }
        }
      }
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      Lease: {
        payload: Prisma.$LeasePayload<ExtArgs>
        fields: Prisma.LeaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          findFirst: {
            args: Prisma.LeaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          findMany: {
            args: Prisma.LeaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>[]
          }
          create: {
            args: Prisma.LeaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          createMany: {
            args: Prisma.LeaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>[]
          }
          delete: {
            args: Prisma.LeaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          update: {
            args: Prisma.LeaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          deleteMany: {
            args: Prisma.LeaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>[]
          }
          upsert: {
            args: Prisma.LeaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          aggregate: {
            args: Prisma.LeaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLease>
          }
          groupBy: {
            args: Prisma.LeaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaseCountArgs<ExtArgs>
            result: $Utils.Optional<LeaseCountAggregateOutputType> | number
          }
        }
      }
      RentPayment: {
        payload: Prisma.$RentPaymentPayload<ExtArgs>
        fields: Prisma.RentPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPaymentPayload>
          }
          findFirst: {
            args: Prisma.RentPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPaymentPayload>
          }
          findMany: {
            args: Prisma.RentPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPaymentPayload>[]
          }
          create: {
            args: Prisma.RentPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPaymentPayload>
          }
          createMany: {
            args: Prisma.RentPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RentPaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPaymentPayload>[]
          }
          delete: {
            args: Prisma.RentPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPaymentPayload>
          }
          update: {
            args: Prisma.RentPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPaymentPayload>
          }
          deleteMany: {
            args: Prisma.RentPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RentPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RentPaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPaymentPayload>[]
          }
          upsert: {
            args: Prisma.RentPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPaymentPayload>
          }
          aggregate: {
            args: Prisma.RentPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRentPayment>
          }
          groupBy: {
            args: Prisma.RentPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.RentPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<RentPaymentCountAggregateOutputType> | number
          }
        }
      }
      PaymentReceipt: {
        payload: Prisma.$PaymentReceiptPayload<ExtArgs>
        fields: Prisma.PaymentReceiptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentReceiptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentReceiptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentReceiptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentReceiptPayload>
          }
          findFirst: {
            args: Prisma.PaymentReceiptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentReceiptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentReceiptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentReceiptPayload>
          }
          findMany: {
            args: Prisma.PaymentReceiptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentReceiptPayload>[]
          }
          create: {
            args: Prisma.PaymentReceiptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentReceiptPayload>
          }
          createMany: {
            args: Prisma.PaymentReceiptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentReceiptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentReceiptPayload>[]
          }
          delete: {
            args: Prisma.PaymentReceiptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentReceiptPayload>
          }
          update: {
            args: Prisma.PaymentReceiptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentReceiptPayload>
          }
          deleteMany: {
            args: Prisma.PaymentReceiptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentReceiptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentReceiptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentReceiptPayload>[]
          }
          upsert: {
            args: Prisma.PaymentReceiptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentReceiptPayload>
          }
          aggregate: {
            args: Prisma.PaymentReceiptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentReceipt>
          }
          groupBy: {
            args: Prisma.PaymentReceiptGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentReceiptGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentReceiptCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentReceiptCountAggregateOutputType> | number
          }
        }
      }
      Bill: {
        payload: Prisma.$BillPayload<ExtArgs>
        fields: Prisma.BillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findFirst: {
            args: Prisma.BillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findMany: {
            args: Prisma.BillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          create: {
            args: Prisma.BillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          createMany: {
            args: Prisma.BillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          delete: {
            args: Prisma.BillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          update: {
            args: Prisma.BillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          deleteMany: {
            args: Prisma.BillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          upsert: {
            args: Prisma.BillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          aggregate: {
            args: Prisma.BillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBill>
          }
          groupBy: {
            args: Prisma.BillGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillCountArgs<ExtArgs>
            result: $Utils.Optional<BillCountAggregateOutputType> | number
          }
        }
      }
      EmailLog: {
        payload: Prisma.$EmailLogPayload<ExtArgs>
        fields: Prisma.EmailLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          findFirst: {
            args: Prisma.EmailLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          findMany: {
            args: Prisma.EmailLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>[]
          }
          create: {
            args: Prisma.EmailLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          createMany: {
            args: Prisma.EmailLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>[]
          }
          delete: {
            args: Prisma.EmailLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          update: {
            args: Prisma.EmailLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          deleteMany: {
            args: Prisma.EmailLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>[]
          }
          upsert: {
            args: Prisma.EmailLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          aggregate: {
            args: Prisma.EmailLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailLog>
          }
          groupBy: {
            args: Prisma.EmailLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailLogCountArgs<ExtArgs>
            result: $Utils.Optional<EmailLogCountAggregateOutputType> | number
          }
        }
      }
      Setting: {
        payload: Prisma.$SettingPayload<ExtArgs>
        fields: Prisma.SettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findFirst: {
            args: Prisma.SettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findMany: {
            args: Prisma.SettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          create: {
            args: Prisma.SettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          createMany: {
            args: Prisma.SettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          delete: {
            args: Prisma.SettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          update: {
            args: Prisma.SettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          deleteMany: {
            args: Prisma.SettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          upsert: {
            args: Prisma.SettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting>
          }
          groupBy: {
            args: Prisma.SettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingCountArgs<ExtArgs>
            result: $Utils.Optional<SettingCountAggregateOutputType> | number
          }
        }
      }
      Contract: {
        payload: Prisma.$ContractPayload<ExtArgs>
        fields: Prisma.ContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findFirst: {
            args: Prisma.ContractFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findMany: {
            args: Prisma.ContractFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          create: {
            args: Prisma.ContractCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          createMany: {
            args: Prisma.ContractCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          delete: {
            args: Prisma.ContractDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          update: {
            args: Prisma.ContractUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          deleteMany: {
            args: Prisma.ContractDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContractUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          upsert: {
            args: Prisma.ContractUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          aggregate: {
            args: Prisma.ContractAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContract>
          }
          groupBy: {
            args: Prisma.ContractGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractCountArgs<ExtArgs>
            result: $Utils.Optional<ContractCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    chatConversation?: ChatConversationOmit
    chatMessage?: ChatMessageOmit
    unit?: UnitOmit
    tenant?: TenantOmit
    lease?: LeaseOmit
    rentPayment?: RentPaymentOmit
    paymentReceipt?: PaymentReceiptOmit
    bill?: BillOmit
    emailLog?: EmailLogOmit
    setting?: SettingOmit
    contract?: ContractOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    emailLogs: number
    contracts: number
    settings: number
    chatMessages: number
    chatConversations: number
    units: number
    tenants: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emailLogs?: boolean | UserCountOutputTypeCountEmailLogsArgs
    contracts?: boolean | UserCountOutputTypeCountContractsArgs
    settings?: boolean | UserCountOutputTypeCountSettingsArgs
    chatMessages?: boolean | UserCountOutputTypeCountChatMessagesArgs
    chatConversations?: boolean | UserCountOutputTypeCountChatConversationsArgs
    units?: boolean | UserCountOutputTypeCountUnitsArgs
    tenants?: boolean | UserCountOutputTypeCountTenantsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmailLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatConversationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTenantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
  }


  /**
   * Count Type ChatConversationCountOutputType
   */

  export type ChatConversationCountOutputType = {
    messages: number
  }

  export type ChatConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatConversationCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatConversationCountOutputType without action
   */
  export type ChatConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConversationCountOutputType
     */
    select?: ChatConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatConversationCountOutputType without action
   */
  export type ChatConversationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Count Type UnitCountOutputType
   */

  export type UnitCountOutputType = {
    leases: number
  }

  export type UnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leases?: boolean | UnitCountOutputTypeCountLeasesArgs
  }

  // Custom InputTypes
  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitCountOutputType
     */
    select?: UnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountLeasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseWhereInput
  }


  /**
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    leases: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leases?: boolean | TenantCountOutputTypeCountLeasesArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountLeasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseWhereInput
  }


  /**
   * Count Type LeaseCountOutputType
   */

  export type LeaseCountOutputType = {
    rentPayments: number
    bills: number
    contracts: number
  }

  export type LeaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentPayments?: boolean | LeaseCountOutputTypeCountRentPaymentsArgs
    bills?: boolean | LeaseCountOutputTypeCountBillsArgs
    contracts?: boolean | LeaseCountOutputTypeCountContractsArgs
  }

  // Custom InputTypes
  /**
   * LeaseCountOutputType without action
   */
  export type LeaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseCountOutputType
     */
    select?: LeaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeaseCountOutputType without action
   */
  export type LeaseCountOutputTypeCountRentPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentPaymentWhereInput
  }

  /**
   * LeaseCountOutputType without action
   */
  export type LeaseCountOutputTypeCountBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
  }

  /**
   * LeaseCountOutputType without action
   */
  export type LeaseCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }


  /**
   * Count Type RentPaymentCountOutputType
   */

  export type RentPaymentCountOutputType = {
    receipts: number
  }

  export type RentPaymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipts?: boolean | RentPaymentCountOutputTypeCountReceiptsArgs
  }

  // Custom InputTypes
  /**
   * RentPaymentCountOutputType without action
   */
  export type RentPaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentPaymentCountOutputType
     */
    select?: RentPaymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RentPaymentCountOutputType without action
   */
  export type RentPaymentCountOutputTypeCountReceiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentReceiptWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    phone: string | null
    preferredLanguage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    phone: string | null
    preferredLanguage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    phone: number
    preferredLanguage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    phone?: true
    preferredLanguage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    phone?: true
    preferredLanguage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    phone?: true
    preferredLanguage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    phone: string | null
    preferredLanguage: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    phone?: boolean
    preferredLanguage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailLogs?: boolean | User$emailLogsArgs<ExtArgs>
    contracts?: boolean | User$contractsArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    chatConversations?: boolean | User$chatConversationsArgs<ExtArgs>
    units?: boolean | User$unitsArgs<ExtArgs>
    tenants?: boolean | User$tenantsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    phone?: boolean
    preferredLanguage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    phone?: boolean
    preferredLanguage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    phone?: boolean
    preferredLanguage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "phone" | "preferredLanguage" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emailLogs?: boolean | User$emailLogsArgs<ExtArgs>
    contracts?: boolean | User$contractsArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    chatConversations?: boolean | User$chatConversationsArgs<ExtArgs>
    units?: boolean | User$unitsArgs<ExtArgs>
    tenants?: boolean | User$tenantsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      emailLogs: Prisma.$EmailLogPayload<ExtArgs>[]
      contracts: Prisma.$ContractPayload<ExtArgs>[]
      settings: Prisma.$SettingPayload<ExtArgs>[]
      chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
      chatConversations: Prisma.$ChatConversationPayload<ExtArgs>[]
      units: Prisma.$UnitPayload<ExtArgs>[]
      tenants: Prisma.$TenantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      phone: string | null
      preferredLanguage: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emailLogs<T extends User$emailLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$emailLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contracts<T extends User$contractsArgs<ExtArgs> = {}>(args?: Subset<T, User$contractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settings<T extends User$settingsArgs<ExtArgs> = {}>(args?: Subset<T, User$settingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatMessages<T extends User$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatConversations<T extends User$chatConversationsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatConversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    units<T extends User$unitsArgs<ExtArgs> = {}>(args?: Subset<T, User$unitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tenants<T extends User$tenantsArgs<ExtArgs> = {}>(args?: Subset<T, User$tenantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly preferredLanguage: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.emailLogs
   */
  export type User$emailLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogInclude<ExtArgs> | null
    where?: EmailLogWhereInput
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    cursor?: EmailLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailLogScalarFieldEnum | EmailLogScalarFieldEnum[]
  }

  /**
   * User.contracts
   */
  export type User$contractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * User.settings
   */
  export type User$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    cursor?: SettingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * User.chatMessages
   */
  export type User$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * User.chatConversations
   */
  export type User$chatConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConversation
     */
    select?: ChatConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConversation
     */
    omit?: ChatConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConversationInclude<ExtArgs> | null
    where?: ChatConversationWhereInput
    orderBy?: ChatConversationOrderByWithRelationInput | ChatConversationOrderByWithRelationInput[]
    cursor?: ChatConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatConversationScalarFieldEnum | ChatConversationScalarFieldEnum[]
  }

  /**
   * User.units
   */
  export type User$unitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    cursor?: UnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * User.tenants
   */
  export type User$tenantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    cursor?: TenantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ChatConversation
   */

  export type AggregateChatConversation = {
    _count: ChatConversationCountAggregateOutputType | null
    _min: ChatConversationMinAggregateOutputType | null
    _max: ChatConversationMaxAggregateOutputType | null
  }

  export type ChatConversationMinAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ChatConversationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ChatConversationCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ChatConversationMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ChatConversationMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ChatConversationCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ChatConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatConversation to aggregate.
     */
    where?: ChatConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatConversations to fetch.
     */
    orderBy?: ChatConversationOrderByWithRelationInput | ChatConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatConversations
    **/
    _count?: true | ChatConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatConversationMaxAggregateInputType
  }

  export type GetChatConversationAggregateType<T extends ChatConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateChatConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatConversation[P]>
      : GetScalarType<T[P], AggregateChatConversation[P]>
  }




  export type ChatConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatConversationWhereInput
    orderBy?: ChatConversationOrderByWithAggregationInput | ChatConversationOrderByWithAggregationInput[]
    by: ChatConversationScalarFieldEnum[] | ChatConversationScalarFieldEnum
    having?: ChatConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatConversationCountAggregateInputType | true
    _min?: ChatConversationMinAggregateInputType
    _max?: ChatConversationMaxAggregateInputType
  }

  export type ChatConversationGroupByOutputType = {
    id: string
    title: string
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: ChatConversationCountAggregateOutputType | null
    _min: ChatConversationMinAggregateOutputType | null
    _max: ChatConversationMaxAggregateOutputType | null
  }

  type GetChatConversationGroupByPayload<T extends ChatConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ChatConversationGroupByOutputType[P]>
        }
      >
    >


  export type ChatConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | ChatConversation$messagesArgs<ExtArgs>
    _count?: boolean | ChatConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatConversation"]>

  export type ChatConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatConversation"]>

  export type ChatConversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatConversation"]>

  export type ChatConversationSelectScalar = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ChatConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["chatConversation"]>
  export type ChatConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | ChatConversation$messagesArgs<ExtArgs>
    _count?: boolean | ChatConversationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatConversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatConversation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["chatConversation"]>
    composites: {}
  }

  type ChatConversationGetPayload<S extends boolean | null | undefined | ChatConversationDefaultArgs> = $Result.GetResult<Prisma.$ChatConversationPayload, S>

  type ChatConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatConversationCountAggregateInputType | true
    }

  export interface ChatConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatConversation'], meta: { name: 'ChatConversation' } }
    /**
     * Find zero or one ChatConversation that matches the filter.
     * @param {ChatConversationFindUniqueArgs} args - Arguments to find a ChatConversation
     * @example
     * // Get one ChatConversation
     * const chatConversation = await prisma.chatConversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatConversationFindUniqueArgs>(args: SelectSubset<T, ChatConversationFindUniqueArgs<ExtArgs>>): Prisma__ChatConversationClient<$Result.GetResult<Prisma.$ChatConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatConversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatConversationFindUniqueOrThrowArgs} args - Arguments to find a ChatConversation
     * @example
     * // Get one ChatConversation
     * const chatConversation = await prisma.chatConversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatConversationClient<$Result.GetResult<Prisma.$ChatConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatConversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatConversationFindFirstArgs} args - Arguments to find a ChatConversation
     * @example
     * // Get one ChatConversation
     * const chatConversation = await prisma.chatConversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatConversationFindFirstArgs>(args?: SelectSubset<T, ChatConversationFindFirstArgs<ExtArgs>>): Prisma__ChatConversationClient<$Result.GetResult<Prisma.$ChatConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatConversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatConversationFindFirstOrThrowArgs} args - Arguments to find a ChatConversation
     * @example
     * // Get one ChatConversation
     * const chatConversation = await prisma.chatConversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatConversationClient<$Result.GetResult<Prisma.$ChatConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatConversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatConversations
     * const chatConversations = await prisma.chatConversation.findMany()
     * 
     * // Get first 10 ChatConversations
     * const chatConversations = await prisma.chatConversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatConversationWithIdOnly = await prisma.chatConversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatConversationFindManyArgs>(args?: SelectSubset<T, ChatConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatConversation.
     * @param {ChatConversationCreateArgs} args - Arguments to create a ChatConversation.
     * @example
     * // Create one ChatConversation
     * const ChatConversation = await prisma.chatConversation.create({
     *   data: {
     *     // ... data to create a ChatConversation
     *   }
     * })
     * 
     */
    create<T extends ChatConversationCreateArgs>(args: SelectSubset<T, ChatConversationCreateArgs<ExtArgs>>): Prisma__ChatConversationClient<$Result.GetResult<Prisma.$ChatConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatConversations.
     * @param {ChatConversationCreateManyArgs} args - Arguments to create many ChatConversations.
     * @example
     * // Create many ChatConversations
     * const chatConversation = await prisma.chatConversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatConversationCreateManyArgs>(args?: SelectSubset<T, ChatConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatConversations and returns the data saved in the database.
     * @param {ChatConversationCreateManyAndReturnArgs} args - Arguments to create many ChatConversations.
     * @example
     * // Create many ChatConversations
     * const chatConversation = await prisma.chatConversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatConversations and only return the `id`
     * const chatConversationWithIdOnly = await prisma.chatConversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatConversation.
     * @param {ChatConversationDeleteArgs} args - Arguments to delete one ChatConversation.
     * @example
     * // Delete one ChatConversation
     * const ChatConversation = await prisma.chatConversation.delete({
     *   where: {
     *     // ... filter to delete one ChatConversation
     *   }
     * })
     * 
     */
    delete<T extends ChatConversationDeleteArgs>(args: SelectSubset<T, ChatConversationDeleteArgs<ExtArgs>>): Prisma__ChatConversationClient<$Result.GetResult<Prisma.$ChatConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatConversation.
     * @param {ChatConversationUpdateArgs} args - Arguments to update one ChatConversation.
     * @example
     * // Update one ChatConversation
     * const chatConversation = await prisma.chatConversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatConversationUpdateArgs>(args: SelectSubset<T, ChatConversationUpdateArgs<ExtArgs>>): Prisma__ChatConversationClient<$Result.GetResult<Prisma.$ChatConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatConversations.
     * @param {ChatConversationDeleteManyArgs} args - Arguments to filter ChatConversations to delete.
     * @example
     * // Delete a few ChatConversations
     * const { count } = await prisma.chatConversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatConversationDeleteManyArgs>(args?: SelectSubset<T, ChatConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatConversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatConversations
     * const chatConversation = await prisma.chatConversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatConversationUpdateManyArgs>(args: SelectSubset<T, ChatConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatConversations and returns the data updated in the database.
     * @param {ChatConversationUpdateManyAndReturnArgs} args - Arguments to update many ChatConversations.
     * @example
     * // Update many ChatConversations
     * const chatConversation = await prisma.chatConversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatConversations and only return the `id`
     * const chatConversationWithIdOnly = await prisma.chatConversation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatConversationUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatConversation.
     * @param {ChatConversationUpsertArgs} args - Arguments to update or create a ChatConversation.
     * @example
     * // Update or create a ChatConversation
     * const chatConversation = await prisma.chatConversation.upsert({
     *   create: {
     *     // ... data to create a ChatConversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatConversation we want to update
     *   }
     * })
     */
    upsert<T extends ChatConversationUpsertArgs>(args: SelectSubset<T, ChatConversationUpsertArgs<ExtArgs>>): Prisma__ChatConversationClient<$Result.GetResult<Prisma.$ChatConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatConversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatConversationCountArgs} args - Arguments to filter ChatConversations to count.
     * @example
     * // Count the number of ChatConversations
     * const count = await prisma.chatConversation.count({
     *   where: {
     *     // ... the filter for the ChatConversations we want to count
     *   }
     * })
    **/
    count<T extends ChatConversationCountArgs>(
      args?: Subset<T, ChatConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatConversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatConversationAggregateArgs>(args: Subset<T, ChatConversationAggregateArgs>): Prisma.PrismaPromise<GetChatConversationAggregateType<T>>

    /**
     * Group by ChatConversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatConversationGroupByArgs} args - Group by arguments.
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
      T extends ChatConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatConversationGroupByArgs['orderBy'] }
        : { orderBy?: ChatConversationGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatConversation model
   */
  readonly fields: ChatConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatConversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends ChatConversation$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatConversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatConversation model
   */
  interface ChatConversationFieldRefs {
    readonly id: FieldRef<"ChatConversation", 'String'>
    readonly title: FieldRef<"ChatConversation", 'String'>
    readonly createdAt: FieldRef<"ChatConversation", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatConversation", 'DateTime'>
    readonly userId: FieldRef<"ChatConversation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChatConversation findUnique
   */
  export type ChatConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConversation
     */
    select?: ChatConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConversation
     */
    omit?: ChatConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConversationInclude<ExtArgs> | null
    /**
     * Filter, which ChatConversation to fetch.
     */
    where: ChatConversationWhereUniqueInput
  }

  /**
   * ChatConversation findUniqueOrThrow
   */
  export type ChatConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConversation
     */
    select?: ChatConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConversation
     */
    omit?: ChatConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConversationInclude<ExtArgs> | null
    /**
     * Filter, which ChatConversation to fetch.
     */
    where: ChatConversationWhereUniqueInput
  }

  /**
   * ChatConversation findFirst
   */
  export type ChatConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConversation
     */
    select?: ChatConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConversation
     */
    omit?: ChatConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConversationInclude<ExtArgs> | null
    /**
     * Filter, which ChatConversation to fetch.
     */
    where?: ChatConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatConversations to fetch.
     */
    orderBy?: ChatConversationOrderByWithRelationInput | ChatConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatConversations.
     */
    cursor?: ChatConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatConversations.
     */
    distinct?: ChatConversationScalarFieldEnum | ChatConversationScalarFieldEnum[]
  }

  /**
   * ChatConversation findFirstOrThrow
   */
  export type ChatConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConversation
     */
    select?: ChatConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConversation
     */
    omit?: ChatConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConversationInclude<ExtArgs> | null
    /**
     * Filter, which ChatConversation to fetch.
     */
    where?: ChatConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatConversations to fetch.
     */
    orderBy?: ChatConversationOrderByWithRelationInput | ChatConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatConversations.
     */
    cursor?: ChatConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatConversations.
     */
    distinct?: ChatConversationScalarFieldEnum | ChatConversationScalarFieldEnum[]
  }

  /**
   * ChatConversation findMany
   */
  export type ChatConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConversation
     */
    select?: ChatConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConversation
     */
    omit?: ChatConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConversationInclude<ExtArgs> | null
    /**
     * Filter, which ChatConversations to fetch.
     */
    where?: ChatConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatConversations to fetch.
     */
    orderBy?: ChatConversationOrderByWithRelationInput | ChatConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatConversations.
     */
    cursor?: ChatConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatConversations.
     */
    skip?: number
    distinct?: ChatConversationScalarFieldEnum | ChatConversationScalarFieldEnum[]
  }

  /**
   * ChatConversation create
   */
  export type ChatConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConversation
     */
    select?: ChatConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConversation
     */
    omit?: ChatConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatConversation.
     */
    data: XOR<ChatConversationCreateInput, ChatConversationUncheckedCreateInput>
  }

  /**
   * ChatConversation createMany
   */
  export type ChatConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatConversations.
     */
    data: ChatConversationCreateManyInput | ChatConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatConversation createManyAndReturn
   */
  export type ChatConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConversation
     */
    select?: ChatConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConversation
     */
    omit?: ChatConversationOmit<ExtArgs> | null
    /**
     * The data used to create many ChatConversations.
     */
    data: ChatConversationCreateManyInput | ChatConversationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConversationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatConversation update
   */
  export type ChatConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConversation
     */
    select?: ChatConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConversation
     */
    omit?: ChatConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatConversation.
     */
    data: XOR<ChatConversationUpdateInput, ChatConversationUncheckedUpdateInput>
    /**
     * Choose, which ChatConversation to update.
     */
    where: ChatConversationWhereUniqueInput
  }

  /**
   * ChatConversation updateMany
   */
  export type ChatConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatConversations.
     */
    data: XOR<ChatConversationUpdateManyMutationInput, ChatConversationUncheckedUpdateManyInput>
    /**
     * Filter which ChatConversations to update
     */
    where?: ChatConversationWhereInput
    /**
     * Limit how many ChatConversations to update.
     */
    limit?: number
  }

  /**
   * ChatConversation updateManyAndReturn
   */
  export type ChatConversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConversation
     */
    select?: ChatConversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConversation
     */
    omit?: ChatConversationOmit<ExtArgs> | null
    /**
     * The data used to update ChatConversations.
     */
    data: XOR<ChatConversationUpdateManyMutationInput, ChatConversationUncheckedUpdateManyInput>
    /**
     * Filter which ChatConversations to update
     */
    where?: ChatConversationWhereInput
    /**
     * Limit how many ChatConversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConversationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatConversation upsert
   */
  export type ChatConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConversation
     */
    select?: ChatConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConversation
     */
    omit?: ChatConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatConversation to update in case it exists.
     */
    where: ChatConversationWhereUniqueInput
    /**
     * In case the ChatConversation found by the `where` argument doesn't exist, create a new ChatConversation with this data.
     */
    create: XOR<ChatConversationCreateInput, ChatConversationUncheckedCreateInput>
    /**
     * In case the ChatConversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatConversationUpdateInput, ChatConversationUncheckedUpdateInput>
  }

  /**
   * ChatConversation delete
   */
  export type ChatConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConversation
     */
    select?: ChatConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConversation
     */
    omit?: ChatConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConversationInclude<ExtArgs> | null
    /**
     * Filter which ChatConversation to delete.
     */
    where: ChatConversationWhereUniqueInput
  }

  /**
   * ChatConversation deleteMany
   */
  export type ChatConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatConversations to delete
     */
    where?: ChatConversationWhereInput
    /**
     * Limit how many ChatConversations to delete.
     */
    limit?: number
  }

  /**
   * ChatConversation.messages
   */
  export type ChatConversation$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatConversation without action
   */
  export type ChatConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConversation
     */
    select?: ChatConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConversation
     */
    omit?: ChatConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConversationInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
    userId: string | null
    conversationId: string | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
    userId: string | null
    conversationId: string | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    role: number
    content: number
    createdAt: number
    userId: number
    conversationId: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    role?: true
    content?: true
    createdAt?: true
    userId?: true
    conversationId?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    role?: true
    content?: true
    createdAt?: true
    userId?: true
    conversationId?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    role?: true
    content?: true
    createdAt?: true
    userId?: true
    conversationId?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    role: string
    content: string
    createdAt: Date
    userId: string
    conversationId: string | null
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
    conversationId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    conversation?: boolean | ChatMessage$conversationArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
    conversationId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    conversation?: boolean | ChatMessage$conversationArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
    conversationId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    conversation?: boolean | ChatMessage$conversationArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
    conversationId?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "content" | "createdAt" | "userId" | "conversationId", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    conversation?: boolean | ChatMessage$conversationArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    conversation?: boolean | ChatMessage$conversationArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    conversation?: boolean | ChatMessage$conversationArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      conversation: Prisma.$ChatConversationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: string
      content: string
      createdAt: Date
      userId: string
      conversationId: string | null
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
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
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conversation<T extends ChatMessage$conversationArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessage$conversationArgs<ExtArgs>>): Prisma__ChatConversationClient<$Result.GetResult<Prisma.$ChatConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly role: FieldRef<"ChatMessage", 'String'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
    readonly userId: FieldRef<"ChatMessage", 'String'>
    readonly conversationId: FieldRef<"ChatMessage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage.conversation
   */
  export type ChatMessage$conversationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConversation
     */
    select?: ChatConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConversation
     */
    omit?: ChatConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConversationInclude<ExtArgs> | null
    where?: ChatConversationWhereInput
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model Unit
   */

  export type AggregateUnit = {
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  export type UnitAvgAggregateOutputType = {
    monthlyRent: Decimal | null
  }

  export type UnitSumAggregateOutputType = {
    monthlyRent: Decimal | null
  }

  export type UnitMinAggregateOutputType = {
    id: string | null
    name: string | null
    propertyName: string | null
    address: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    userId: string | null
    monthlyRent: Decimal | null
  }

  export type UnitMaxAggregateOutputType = {
    id: string | null
    name: string | null
    propertyName: string | null
    address: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    userId: string | null
    monthlyRent: Decimal | null
  }

  export type UnitCountAggregateOutputType = {
    id: number
    name: number
    propertyName: number
    address: number
    description: number
    isActive: number
    createdAt: number
    userId: number
    monthlyRent: number
    _all: number
  }


  export type UnitAvgAggregateInputType = {
    monthlyRent?: true
  }

  export type UnitSumAggregateInputType = {
    monthlyRent?: true
  }

  export type UnitMinAggregateInputType = {
    id?: true
    name?: true
    propertyName?: true
    address?: true
    description?: true
    isActive?: true
    createdAt?: true
    userId?: true
    monthlyRent?: true
  }

  export type UnitMaxAggregateInputType = {
    id?: true
    name?: true
    propertyName?: true
    address?: true
    description?: true
    isActive?: true
    createdAt?: true
    userId?: true
    monthlyRent?: true
  }

  export type UnitCountAggregateInputType = {
    id?: true
    name?: true
    propertyName?: true
    address?: true
    description?: true
    isActive?: true
    createdAt?: true
    userId?: true
    monthlyRent?: true
    _all?: true
  }

  export type UnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unit to aggregate.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Units
    **/
    _count?: true | UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitMaxAggregateInputType
  }

  export type GetUnitAggregateType<T extends UnitAggregateArgs> = {
        [P in keyof T & keyof AggregateUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnit[P]>
      : GetScalarType<T[P], AggregateUnit[P]>
  }




  export type UnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithAggregationInput | UnitOrderByWithAggregationInput[]
    by: UnitScalarFieldEnum[] | UnitScalarFieldEnum
    having?: UnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitCountAggregateInputType | true
    _avg?: UnitAvgAggregateInputType
    _sum?: UnitSumAggregateInputType
    _min?: UnitMinAggregateInputType
    _max?: UnitMaxAggregateInputType
  }

  export type UnitGroupByOutputType = {
    id: string
    name: string
    propertyName: string
    address: string | null
    description: string | null
    isActive: boolean
    createdAt: Date
    userId: string | null
    monthlyRent: Decimal | null
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  type GetUnitGroupByPayload<T extends UnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitGroupByOutputType[P]>
            : GetScalarType<T[P], UnitGroupByOutputType[P]>
        }
      >
    >


  export type UnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    propertyName?: boolean
    address?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    userId?: boolean
    monthlyRent?: boolean
    leases?: boolean | Unit$leasesArgs<ExtArgs>
    user?: boolean | Unit$userArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    propertyName?: boolean
    address?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    userId?: boolean
    monthlyRent?: boolean
    user?: boolean | Unit$userArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    propertyName?: boolean
    address?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    userId?: boolean
    monthlyRent?: boolean
    user?: boolean | Unit$userArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectScalar = {
    id?: boolean
    name?: boolean
    propertyName?: boolean
    address?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    userId?: boolean
    monthlyRent?: boolean
  }

  export type UnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "propertyName" | "address" | "description" | "isActive" | "createdAt" | "userId" | "monthlyRent", ExtArgs["result"]["unit"]>
  export type UnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leases?: boolean | Unit$leasesArgs<ExtArgs>
    user?: boolean | Unit$userArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Unit$userArgs<ExtArgs>
  }
  export type UnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Unit$userArgs<ExtArgs>
  }

  export type $UnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unit"
    objects: {
      leases: Prisma.$LeasePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      propertyName: string
      address: string | null
      description: string | null
      isActive: boolean
      createdAt: Date
      userId: string | null
      monthlyRent: Prisma.Decimal | null
    }, ExtArgs["result"]["unit"]>
    composites: {}
  }

  type UnitGetPayload<S extends boolean | null | undefined | UnitDefaultArgs> = $Result.GetResult<Prisma.$UnitPayload, S>

  type UnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitCountAggregateInputType | true
    }

  export interface UnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unit'], meta: { name: 'Unit' } }
    /**
     * Find zero or one Unit that matches the filter.
     * @param {UnitFindUniqueArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitFindUniqueArgs>(args: SelectSubset<T, UnitFindUniqueArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitFindUniqueOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitFindFirstArgs>(args?: SelectSubset<T, UnitFindFirstArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.unit.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.unit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitWithIdOnly = await prisma.unit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitFindManyArgs>(args?: SelectSubset<T, UnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unit.
     * @param {UnitCreateArgs} args - Arguments to create a Unit.
     * @example
     * // Create one Unit
     * const Unit = await prisma.unit.create({
     *   data: {
     *     // ... data to create a Unit
     *   }
     * })
     * 
     */
    create<T extends UnitCreateArgs>(args: SelectSubset<T, UnitCreateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Units.
     * @param {UnitCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitCreateManyArgs>(args?: SelectSubset<T, UnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Units and returns the data saved in the database.
     * @param {UnitCreateManyAndReturnArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Unit.
     * @param {UnitDeleteArgs} args - Arguments to delete one Unit.
     * @example
     * // Delete one Unit
     * const Unit = await prisma.unit.delete({
     *   where: {
     *     // ... filter to delete one Unit
     *   }
     * })
     * 
     */
    delete<T extends UnitDeleteArgs>(args: SelectSubset<T, UnitDeleteArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unit.
     * @param {UnitUpdateArgs} args - Arguments to update one Unit.
     * @example
     * // Update one Unit
     * const unit = await prisma.unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitUpdateArgs>(args: SelectSubset<T, UnitUpdateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Units.
     * @param {UnitDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitDeleteManyArgs>(args?: SelectSubset<T, UnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitUpdateManyArgs>(args: SelectSubset<T, UnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units and returns the data updated in the database.
     * @param {UnitUpdateManyAndReturnArgs} args - Arguments to update many Units.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UnitUpdateManyAndReturnArgs>(args: SelectSubset<T, UnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Unit.
     * @param {UnitUpsertArgs} args - Arguments to update or create a Unit.
     * @example
     * // Update or create a Unit
     * const unit = await prisma.unit.upsert({
     *   create: {
     *     // ... data to create a Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unit we want to update
     *   }
     * })
     */
    upsert<T extends UnitUpsertArgs>(args: SelectSubset<T, UnitUpsertArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.unit.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends UnitCountArgs>(
      args?: Subset<T, UnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnitAggregateArgs>(args: Subset<T, UnitAggregateArgs>): Prisma.PrismaPromise<GetUnitAggregateType<T>>

    /**
     * Group by Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitGroupByArgs} args - Group by arguments.
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
      T extends UnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitGroupByArgs['orderBy'] }
        : { orderBy?: UnitGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unit model
   */
  readonly fields: UnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leases<T extends Unit$leasesArgs<ExtArgs> = {}>(args?: Subset<T, Unit$leasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends Unit$userArgs<ExtArgs> = {}>(args?: Subset<T, Unit$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Unit model
   */
  interface UnitFieldRefs {
    readonly id: FieldRef<"Unit", 'String'>
    readonly name: FieldRef<"Unit", 'String'>
    readonly propertyName: FieldRef<"Unit", 'String'>
    readonly address: FieldRef<"Unit", 'String'>
    readonly description: FieldRef<"Unit", 'String'>
    readonly isActive: FieldRef<"Unit", 'Boolean'>
    readonly createdAt: FieldRef<"Unit", 'DateTime'>
    readonly userId: FieldRef<"Unit", 'String'>
    readonly monthlyRent: FieldRef<"Unit", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Unit findUnique
   */
  export type UnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findUniqueOrThrow
   */
  export type UnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findFirst
   */
  export type UnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findFirstOrThrow
   */
  export type UnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findMany
   */
  export type UnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Units to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit create
   */
  export type UnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to create a Unit.
     */
    data: XOR<UnitCreateInput, UnitUncheckedCreateInput>
  }

  /**
   * Unit createMany
   */
  export type UnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unit createManyAndReturn
   */
  export type UnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unit update
   */
  export type UnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to update a Unit.
     */
    data: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
    /**
     * Choose, which Unit to update.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit updateMany
   */
  export type UnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
  }

  /**
   * Unit updateManyAndReturn
   */
  export type UnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unit upsert
   */
  export type UnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The filter to search for the Unit to update in case it exists.
     */
    where: UnitWhereUniqueInput
    /**
     * In case the Unit found by the `where` argument doesn't exist, create a new Unit with this data.
     */
    create: XOR<UnitCreateInput, UnitUncheckedCreateInput>
    /**
     * In case the Unit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
  }

  /**
   * Unit delete
   */
  export type UnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter which Unit to delete.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit deleteMany
   */
  export type UnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Units to delete
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to delete.
     */
    limit?: number
  }

  /**
   * Unit.leases
   */
  export type Unit$leasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    cursor?: LeaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Unit.user
   */
  export type Unit$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Unit without action
   */
  export type UnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
  }


  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    phone: string | null
    email: string | null
    idNumber: string | null
    emergencyContact: string | null
    emergencyPhone: string | null
    notes: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    phone: string | null
    email: string | null
    idNumber: string | null
    emergencyContact: string | null
    emergencyPhone: string | null
    notes: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    fullName: number
    phone: number
    email: number
    idNumber: number
    emergencyContact: number
    emergencyPhone: number
    notes: number
    isActive: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    email?: true
    idNumber?: true
    emergencyContact?: true
    emergencyPhone?: true
    notes?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    email?: true
    idNumber?: true
    emergencyContact?: true
    emergencyPhone?: true
    notes?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    email?: true
    idNumber?: true
    emergencyContact?: true
    emergencyPhone?: true
    notes?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    fullName: string
    phone: string
    email: string | null
    idNumber: string | null
    emergencyContact: string | null
    emergencyPhone: string | null
    notes: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    userId: string | null
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    idNumber?: boolean
    emergencyContact?: boolean
    emergencyPhone?: boolean
    notes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    leases?: boolean | Tenant$leasesArgs<ExtArgs>
    user?: boolean | Tenant$userArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    idNumber?: boolean
    emergencyContact?: boolean
    emergencyPhone?: boolean
    notes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | Tenant$userArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    idNumber?: boolean
    emergencyContact?: boolean
    emergencyPhone?: boolean
    notes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | Tenant$userArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    idNumber?: boolean
    emergencyContact?: boolean
    emergencyPhone?: boolean
    notes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "phone" | "email" | "idNumber" | "emergencyContact" | "emergencyPhone" | "notes" | "isActive" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leases?: boolean | Tenant$leasesArgs<ExtArgs>
    user?: boolean | Tenant$userArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Tenant$userArgs<ExtArgs>
  }
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Tenant$userArgs<ExtArgs>
  }

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      leases: Prisma.$LeasePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      phone: string
      email: string | null
      idNumber: string | null
      emergencyContact: string | null
      emergencyPhone: string | null
      notes: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      userId: string | null
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
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
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leases<T extends Tenant$leasesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$leasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends Tenant$userArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tenant model
   */
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly fullName: FieldRef<"Tenant", 'String'>
    readonly phone: FieldRef<"Tenant", 'String'>
    readonly email: FieldRef<"Tenant", 'String'>
    readonly idNumber: FieldRef<"Tenant", 'String'>
    readonly emergencyContact: FieldRef<"Tenant", 'String'>
    readonly emergencyPhone: FieldRef<"Tenant", 'String'>
    readonly notes: FieldRef<"Tenant", 'String'>
    readonly isActive: FieldRef<"Tenant", 'Boolean'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
    readonly userId: FieldRef<"Tenant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant.leases
   */
  export type Tenant$leasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    cursor?: LeaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Tenant.user
   */
  export type Tenant$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model Lease
   */

  export type AggregateLease = {
    _count: LeaseCountAggregateOutputType | null
    _avg: LeaseAvgAggregateOutputType | null
    _sum: LeaseSumAggregateOutputType | null
    _min: LeaseMinAggregateOutputType | null
    _max: LeaseMaxAggregateOutputType | null
  }

  export type LeaseAvgAggregateOutputType = {
    rentAmount: Decimal | null
    monthlyRent: Decimal | null
    depositAmount: Decimal | null
  }

  export type LeaseSumAggregateOutputType = {
    rentAmount: Decimal | null
    monthlyRent: Decimal | null
    depositAmount: Decimal | null
  }

  export type LeaseMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    unitId: string | null
    startDate: Date | null
    endDate: Date | null
    rentAmount: Decimal | null
    monthlyRent: Decimal | null
    paymentFrequency: $Enums.PaymentFrequency | null
    depositAmount: Decimal | null
    status: $Enums.RecordStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaseMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    unitId: string | null
    startDate: Date | null
    endDate: Date | null
    rentAmount: Decimal | null
    monthlyRent: Decimal | null
    paymentFrequency: $Enums.PaymentFrequency | null
    depositAmount: Decimal | null
    status: $Enums.RecordStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaseCountAggregateOutputType = {
    id: number
    tenantId: number
    unitId: number
    startDate: number
    endDate: number
    rentAmount: number
    monthlyRent: number
    paymentFrequency: number
    depositAmount: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeaseAvgAggregateInputType = {
    rentAmount?: true
    monthlyRent?: true
    depositAmount?: true
  }

  export type LeaseSumAggregateInputType = {
    rentAmount?: true
    monthlyRent?: true
    depositAmount?: true
  }

  export type LeaseMinAggregateInputType = {
    id?: true
    tenantId?: true
    unitId?: true
    startDate?: true
    endDate?: true
    rentAmount?: true
    monthlyRent?: true
    paymentFrequency?: true
    depositAmount?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaseMaxAggregateInputType = {
    id?: true
    tenantId?: true
    unitId?: true
    startDate?: true
    endDate?: true
    rentAmount?: true
    monthlyRent?: true
    paymentFrequency?: true
    depositAmount?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaseCountAggregateInputType = {
    id?: true
    tenantId?: true
    unitId?: true
    startDate?: true
    endDate?: true
    rentAmount?: true
    monthlyRent?: true
    paymentFrequency?: true
    depositAmount?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lease to aggregate.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leases
    **/
    _count?: true | LeaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaseMaxAggregateInputType
  }

  export type GetLeaseAggregateType<T extends LeaseAggregateArgs> = {
        [P in keyof T & keyof AggregateLease]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLease[P]>
      : GetScalarType<T[P], AggregateLease[P]>
  }




  export type LeaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithAggregationInput | LeaseOrderByWithAggregationInput[]
    by: LeaseScalarFieldEnum[] | LeaseScalarFieldEnum
    having?: LeaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaseCountAggregateInputType | true
    _avg?: LeaseAvgAggregateInputType
    _sum?: LeaseSumAggregateInputType
    _min?: LeaseMinAggregateInputType
    _max?: LeaseMaxAggregateInputType
  }

  export type LeaseGroupByOutputType = {
    id: string
    tenantId: string
    unitId: string
    startDate: Date
    endDate: Date
    rentAmount: Decimal
    monthlyRent: Decimal
    paymentFrequency: $Enums.PaymentFrequency
    depositAmount: Decimal
    status: $Enums.RecordStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: LeaseCountAggregateOutputType | null
    _avg: LeaseAvgAggregateOutputType | null
    _sum: LeaseSumAggregateOutputType | null
    _min: LeaseMinAggregateOutputType | null
    _max: LeaseMaxAggregateOutputType | null
  }

  type GetLeaseGroupByPayload<T extends LeaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaseGroupByOutputType[P]>
            : GetScalarType<T[P], LeaseGroupByOutputType[P]>
        }
      >
    >


  export type LeaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    unitId?: boolean
    startDate?: boolean
    endDate?: boolean
    rentAmount?: boolean
    monthlyRent?: boolean
    paymentFrequency?: boolean
    depositAmount?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    rentPayments?: boolean | Lease$rentPaymentsArgs<ExtArgs>
    bills?: boolean | Lease$billsArgs<ExtArgs>
    contracts?: boolean | Lease$contractsArgs<ExtArgs>
    _count?: boolean | LeaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lease"]>

  export type LeaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    unitId?: boolean
    startDate?: boolean
    endDate?: boolean
    rentAmount?: boolean
    monthlyRent?: boolean
    paymentFrequency?: boolean
    depositAmount?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lease"]>

  export type LeaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    unitId?: boolean
    startDate?: boolean
    endDate?: boolean
    rentAmount?: boolean
    monthlyRent?: boolean
    paymentFrequency?: boolean
    depositAmount?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lease"]>

  export type LeaseSelectScalar = {
    id?: boolean
    tenantId?: boolean
    unitId?: boolean
    startDate?: boolean
    endDate?: boolean
    rentAmount?: boolean
    monthlyRent?: boolean
    paymentFrequency?: boolean
    depositAmount?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "unitId" | "startDate" | "endDate" | "rentAmount" | "monthlyRent" | "paymentFrequency" | "depositAmount" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["lease"]>
  export type LeaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    rentPayments?: boolean | Lease$rentPaymentsArgs<ExtArgs>
    bills?: boolean | Lease$billsArgs<ExtArgs>
    contracts?: boolean | Lease$contractsArgs<ExtArgs>
    _count?: boolean | LeaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }
  export type LeaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }

  export type $LeasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lease"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      unit: Prisma.$UnitPayload<ExtArgs>
      rentPayments: Prisma.$RentPaymentPayload<ExtArgs>[]
      bills: Prisma.$BillPayload<ExtArgs>[]
      contracts: Prisma.$ContractPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      unitId: string
      startDate: Date
      endDate: Date
      rentAmount: Prisma.Decimal
      monthlyRent: Prisma.Decimal
      paymentFrequency: $Enums.PaymentFrequency
      depositAmount: Prisma.Decimal
      status: $Enums.RecordStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lease"]>
    composites: {}
  }

  type LeaseGetPayload<S extends boolean | null | undefined | LeaseDefaultArgs> = $Result.GetResult<Prisma.$LeasePayload, S>

  type LeaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaseCountAggregateInputType | true
    }

  export interface LeaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lease'], meta: { name: 'Lease' } }
    /**
     * Find zero or one Lease that matches the filter.
     * @param {LeaseFindUniqueArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaseFindUniqueArgs>(args: SelectSubset<T, LeaseFindUniqueArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lease that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaseFindUniqueOrThrowArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaseFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lease that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFindFirstArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaseFindFirstArgs>(args?: SelectSubset<T, LeaseFindFirstArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lease that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFindFirstOrThrowArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaseFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leases
     * const leases = await prisma.lease.findMany()
     * 
     * // Get first 10 Leases
     * const leases = await prisma.lease.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaseWithIdOnly = await prisma.lease.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaseFindManyArgs>(args?: SelectSubset<T, LeaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lease.
     * @param {LeaseCreateArgs} args - Arguments to create a Lease.
     * @example
     * // Create one Lease
     * const Lease = await prisma.lease.create({
     *   data: {
     *     // ... data to create a Lease
     *   }
     * })
     * 
     */
    create<T extends LeaseCreateArgs>(args: SelectSubset<T, LeaseCreateArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leases.
     * @param {LeaseCreateManyArgs} args - Arguments to create many Leases.
     * @example
     * // Create many Leases
     * const lease = await prisma.lease.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaseCreateManyArgs>(args?: SelectSubset<T, LeaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leases and returns the data saved in the database.
     * @param {LeaseCreateManyAndReturnArgs} args - Arguments to create many Leases.
     * @example
     * // Create many Leases
     * const lease = await prisma.lease.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leases and only return the `id`
     * const leaseWithIdOnly = await prisma.lease.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaseCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lease.
     * @param {LeaseDeleteArgs} args - Arguments to delete one Lease.
     * @example
     * // Delete one Lease
     * const Lease = await prisma.lease.delete({
     *   where: {
     *     // ... filter to delete one Lease
     *   }
     * })
     * 
     */
    delete<T extends LeaseDeleteArgs>(args: SelectSubset<T, LeaseDeleteArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lease.
     * @param {LeaseUpdateArgs} args - Arguments to update one Lease.
     * @example
     * // Update one Lease
     * const lease = await prisma.lease.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaseUpdateArgs>(args: SelectSubset<T, LeaseUpdateArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leases.
     * @param {LeaseDeleteManyArgs} args - Arguments to filter Leases to delete.
     * @example
     * // Delete a few Leases
     * const { count } = await prisma.lease.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaseDeleteManyArgs>(args?: SelectSubset<T, LeaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leases
     * const lease = await prisma.lease.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaseUpdateManyArgs>(args: SelectSubset<T, LeaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leases and returns the data updated in the database.
     * @param {LeaseUpdateManyAndReturnArgs} args - Arguments to update many Leases.
     * @example
     * // Update many Leases
     * const lease = await prisma.lease.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leases and only return the `id`
     * const leaseWithIdOnly = await prisma.lease.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeaseUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lease.
     * @param {LeaseUpsertArgs} args - Arguments to update or create a Lease.
     * @example
     * // Update or create a Lease
     * const lease = await prisma.lease.upsert({
     *   create: {
     *     // ... data to create a Lease
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lease we want to update
     *   }
     * })
     */
    upsert<T extends LeaseUpsertArgs>(args: SelectSubset<T, LeaseUpsertArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseCountArgs} args - Arguments to filter Leases to count.
     * @example
     * // Count the number of Leases
     * const count = await prisma.lease.count({
     *   where: {
     *     // ... the filter for the Leases we want to count
     *   }
     * })
    **/
    count<T extends LeaseCountArgs>(
      args?: Subset<T, LeaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeaseAggregateArgs>(args: Subset<T, LeaseAggregateArgs>): Prisma.PrismaPromise<GetLeaseAggregateType<T>>

    /**
     * Group by Lease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseGroupByArgs} args - Group by arguments.
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
      T extends LeaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaseGroupByArgs['orderBy'] }
        : { orderBy?: LeaseGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lease model
   */
  readonly fields: LeaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lease.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rentPayments<T extends Lease$rentPaymentsArgs<ExtArgs> = {}>(args?: Subset<T, Lease$rentPaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bills<T extends Lease$billsArgs<ExtArgs> = {}>(args?: Subset<T, Lease$billsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contracts<T extends Lease$contractsArgs<ExtArgs> = {}>(args?: Subset<T, Lease$contractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lease model
   */
  interface LeaseFieldRefs {
    readonly id: FieldRef<"Lease", 'String'>
    readonly tenantId: FieldRef<"Lease", 'String'>
    readonly unitId: FieldRef<"Lease", 'String'>
    readonly startDate: FieldRef<"Lease", 'DateTime'>
    readonly endDate: FieldRef<"Lease", 'DateTime'>
    readonly rentAmount: FieldRef<"Lease", 'Decimal'>
    readonly monthlyRent: FieldRef<"Lease", 'Decimal'>
    readonly paymentFrequency: FieldRef<"Lease", 'PaymentFrequency'>
    readonly depositAmount: FieldRef<"Lease", 'Decimal'>
    readonly status: FieldRef<"Lease", 'RecordStatus'>
    readonly notes: FieldRef<"Lease", 'String'>
    readonly createdAt: FieldRef<"Lease", 'DateTime'>
    readonly updatedAt: FieldRef<"Lease", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lease findUnique
   */
  export type LeaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease findUniqueOrThrow
   */
  export type LeaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease findFirst
   */
  export type LeaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leases.
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leases.
     */
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Lease findFirstOrThrow
   */
  export type LeaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leases.
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leases.
     */
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Lease findMany
   */
  export type LeaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Leases to fetch.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leases.
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Lease create
   */
  export type LeaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Lease.
     */
    data: XOR<LeaseCreateInput, LeaseUncheckedCreateInput>
  }

  /**
   * Lease createMany
   */
  export type LeaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leases.
     */
    data: LeaseCreateManyInput | LeaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lease createManyAndReturn
   */
  export type LeaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * The data used to create many Leases.
     */
    data: LeaseCreateManyInput | LeaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lease update
   */
  export type LeaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Lease.
     */
    data: XOR<LeaseUpdateInput, LeaseUncheckedUpdateInput>
    /**
     * Choose, which Lease to update.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease updateMany
   */
  export type LeaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leases.
     */
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyInput>
    /**
     * Filter which Leases to update
     */
    where?: LeaseWhereInput
    /**
     * Limit how many Leases to update.
     */
    limit?: number
  }

  /**
   * Lease updateManyAndReturn
   */
  export type LeaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * The data used to update Leases.
     */
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyInput>
    /**
     * Filter which Leases to update
     */
    where?: LeaseWhereInput
    /**
     * Limit how many Leases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lease upsert
   */
  export type LeaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Lease to update in case it exists.
     */
    where: LeaseWhereUniqueInput
    /**
     * In case the Lease found by the `where` argument doesn't exist, create a new Lease with this data.
     */
    create: XOR<LeaseCreateInput, LeaseUncheckedCreateInput>
    /**
     * In case the Lease was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaseUpdateInput, LeaseUncheckedUpdateInput>
  }

  /**
   * Lease delete
   */
  export type LeaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter which Lease to delete.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease deleteMany
   */
  export type LeaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leases to delete
     */
    where?: LeaseWhereInput
    /**
     * Limit how many Leases to delete.
     */
    limit?: number
  }

  /**
   * Lease.rentPayments
   */
  export type Lease$rentPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentPayment
     */
    select?: RentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentPayment
     */
    omit?: RentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentPaymentInclude<ExtArgs> | null
    where?: RentPaymentWhereInput
    orderBy?: RentPaymentOrderByWithRelationInput | RentPaymentOrderByWithRelationInput[]
    cursor?: RentPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentPaymentScalarFieldEnum | RentPaymentScalarFieldEnum[]
  }

  /**
   * Lease.bills
   */
  export type Lease$billsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    where?: BillWhereInput
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    cursor?: BillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Lease.contracts
   */
  export type Lease$contractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Lease without action
   */
  export type LeaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
  }


  /**
   * Model RentPayment
   */

  export type AggregateRentPayment = {
    _count: RentPaymentCountAggregateOutputType | null
    _avg: RentPaymentAvgAggregateOutputType | null
    _sum: RentPaymentSumAggregateOutputType | null
    _min: RentPaymentMinAggregateOutputType | null
    _max: RentPaymentMaxAggregateOutputType | null
  }

  export type RentPaymentAvgAggregateOutputType = {
    amountDue: Decimal | null
    amountPaid: Decimal | null
  }

  export type RentPaymentSumAggregateOutputType = {
    amountDue: Decimal | null
    amountPaid: Decimal | null
  }

  export type RentPaymentMinAggregateOutputType = {
    id: string | null
    leaseId: string | null
    periodStart: Date | null
    periodEnd: Date | null
    amountDue: Decimal | null
    amountPaid: Decimal | null
    paymentDate: Date | null
    reminderDate: Date | null
    paymentMethod: string | null
    reference: string | null
    status: $Enums.RecordStatus | null
    notes: string | null
    createdAt: Date | null
  }

  export type RentPaymentMaxAggregateOutputType = {
    id: string | null
    leaseId: string | null
    periodStart: Date | null
    periodEnd: Date | null
    amountDue: Decimal | null
    amountPaid: Decimal | null
    paymentDate: Date | null
    reminderDate: Date | null
    paymentMethod: string | null
    reference: string | null
    status: $Enums.RecordStatus | null
    notes: string | null
    createdAt: Date | null
  }

  export type RentPaymentCountAggregateOutputType = {
    id: number
    leaseId: number
    periodStart: number
    periodEnd: number
    amountDue: number
    amountPaid: number
    paymentDate: number
    reminderDate: number
    paymentMethod: number
    reference: number
    status: number
    notes: number
    createdAt: number
    _all: number
  }


  export type RentPaymentAvgAggregateInputType = {
    amountDue?: true
    amountPaid?: true
  }

  export type RentPaymentSumAggregateInputType = {
    amountDue?: true
    amountPaid?: true
  }

  export type RentPaymentMinAggregateInputType = {
    id?: true
    leaseId?: true
    periodStart?: true
    periodEnd?: true
    amountDue?: true
    amountPaid?: true
    paymentDate?: true
    reminderDate?: true
    paymentMethod?: true
    reference?: true
    status?: true
    notes?: true
    createdAt?: true
  }

  export type RentPaymentMaxAggregateInputType = {
    id?: true
    leaseId?: true
    periodStart?: true
    periodEnd?: true
    amountDue?: true
    amountPaid?: true
    paymentDate?: true
    reminderDate?: true
    paymentMethod?: true
    reference?: true
    status?: true
    notes?: true
    createdAt?: true
  }

  export type RentPaymentCountAggregateInputType = {
    id?: true
    leaseId?: true
    periodStart?: true
    periodEnd?: true
    amountDue?: true
    amountPaid?: true
    paymentDate?: true
    reminderDate?: true
    paymentMethod?: true
    reference?: true
    status?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type RentPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentPayment to aggregate.
     */
    where?: RentPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentPayments to fetch.
     */
    orderBy?: RentPaymentOrderByWithRelationInput | RentPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RentPayments
    **/
    _count?: true | RentPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentPaymentMaxAggregateInputType
  }

  export type GetRentPaymentAggregateType<T extends RentPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateRentPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRentPayment[P]>
      : GetScalarType<T[P], AggregateRentPayment[P]>
  }




  export type RentPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentPaymentWhereInput
    orderBy?: RentPaymentOrderByWithAggregationInput | RentPaymentOrderByWithAggregationInput[]
    by: RentPaymentScalarFieldEnum[] | RentPaymentScalarFieldEnum
    having?: RentPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentPaymentCountAggregateInputType | true
    _avg?: RentPaymentAvgAggregateInputType
    _sum?: RentPaymentSumAggregateInputType
    _min?: RentPaymentMinAggregateInputType
    _max?: RentPaymentMaxAggregateInputType
  }

  export type RentPaymentGroupByOutputType = {
    id: string
    leaseId: string
    periodStart: Date
    periodEnd: Date
    amountDue: Decimal
    amountPaid: Decimal
    paymentDate: Date | null
    reminderDate: Date | null
    paymentMethod: string | null
    reference: string | null
    status: $Enums.RecordStatus
    notes: string | null
    createdAt: Date
    _count: RentPaymentCountAggregateOutputType | null
    _avg: RentPaymentAvgAggregateOutputType | null
    _sum: RentPaymentSumAggregateOutputType | null
    _min: RentPaymentMinAggregateOutputType | null
    _max: RentPaymentMaxAggregateOutputType | null
  }

  type GetRentPaymentGroupByPayload<T extends RentPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], RentPaymentGroupByOutputType[P]>
        }
      >
    >


  export type RentPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaseId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    paymentDate?: boolean
    reminderDate?: boolean
    paymentMethod?: boolean
    reference?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
    receipts?: boolean | RentPayment$receiptsArgs<ExtArgs>
    _count?: boolean | RentPaymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentPayment"]>

  export type RentPaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaseId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    paymentDate?: boolean
    reminderDate?: boolean
    paymentMethod?: boolean
    reference?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentPayment"]>

  export type RentPaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaseId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    paymentDate?: boolean
    reminderDate?: boolean
    paymentMethod?: boolean
    reference?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentPayment"]>

  export type RentPaymentSelectScalar = {
    id?: boolean
    leaseId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    paymentDate?: boolean
    reminderDate?: boolean
    paymentMethod?: boolean
    reference?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type RentPaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leaseId" | "periodStart" | "periodEnd" | "amountDue" | "amountPaid" | "paymentDate" | "reminderDate" | "paymentMethod" | "reference" | "status" | "notes" | "createdAt", ExtArgs["result"]["rentPayment"]>
  export type RentPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
    receipts?: boolean | RentPayment$receiptsArgs<ExtArgs>
    _count?: boolean | RentPaymentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RentPaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }
  export type RentPaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }

  export type $RentPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RentPayment"
    objects: {
      lease: Prisma.$LeasePayload<ExtArgs>
      receipts: Prisma.$PaymentReceiptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leaseId: string
      periodStart: Date
      periodEnd: Date
      amountDue: Prisma.Decimal
      amountPaid: Prisma.Decimal
      paymentDate: Date | null
      reminderDate: Date | null
      paymentMethod: string | null
      reference: string | null
      status: $Enums.RecordStatus
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["rentPayment"]>
    composites: {}
  }

  type RentPaymentGetPayload<S extends boolean | null | undefined | RentPaymentDefaultArgs> = $Result.GetResult<Prisma.$RentPaymentPayload, S>

  type RentPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RentPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RentPaymentCountAggregateInputType | true
    }

  export interface RentPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RentPayment'], meta: { name: 'RentPayment' } }
    /**
     * Find zero or one RentPayment that matches the filter.
     * @param {RentPaymentFindUniqueArgs} args - Arguments to find a RentPayment
     * @example
     * // Get one RentPayment
     * const rentPayment = await prisma.rentPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentPaymentFindUniqueArgs>(args: SelectSubset<T, RentPaymentFindUniqueArgs<ExtArgs>>): Prisma__RentPaymentClient<$Result.GetResult<Prisma.$RentPaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RentPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RentPaymentFindUniqueOrThrowArgs} args - Arguments to find a RentPayment
     * @example
     * // Get one RentPayment
     * const rentPayment = await prisma.rentPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, RentPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RentPaymentClient<$Result.GetResult<Prisma.$RentPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentPaymentFindFirstArgs} args - Arguments to find a RentPayment
     * @example
     * // Get one RentPayment
     * const rentPayment = await prisma.rentPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentPaymentFindFirstArgs>(args?: SelectSubset<T, RentPaymentFindFirstArgs<ExtArgs>>): Prisma__RentPaymentClient<$Result.GetResult<Prisma.$RentPaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentPaymentFindFirstOrThrowArgs} args - Arguments to find a RentPayment
     * @example
     * // Get one RentPayment
     * const rentPayment = await prisma.rentPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, RentPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__RentPaymentClient<$Result.GetResult<Prisma.$RentPaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RentPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RentPayments
     * const rentPayments = await prisma.rentPayment.findMany()
     * 
     * // Get first 10 RentPayments
     * const rentPayments = await prisma.rentPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentPaymentWithIdOnly = await prisma.rentPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RentPaymentFindManyArgs>(args?: SelectSubset<T, RentPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RentPayment.
     * @param {RentPaymentCreateArgs} args - Arguments to create a RentPayment.
     * @example
     * // Create one RentPayment
     * const RentPayment = await prisma.rentPayment.create({
     *   data: {
     *     // ... data to create a RentPayment
     *   }
     * })
     * 
     */
    create<T extends RentPaymentCreateArgs>(args: SelectSubset<T, RentPaymentCreateArgs<ExtArgs>>): Prisma__RentPaymentClient<$Result.GetResult<Prisma.$RentPaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RentPayments.
     * @param {RentPaymentCreateManyArgs} args - Arguments to create many RentPayments.
     * @example
     * // Create many RentPayments
     * const rentPayment = await prisma.rentPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RentPaymentCreateManyArgs>(args?: SelectSubset<T, RentPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RentPayments and returns the data saved in the database.
     * @param {RentPaymentCreateManyAndReturnArgs} args - Arguments to create many RentPayments.
     * @example
     * // Create many RentPayments
     * const rentPayment = await prisma.rentPayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RentPayments and only return the `id`
     * const rentPaymentWithIdOnly = await prisma.rentPayment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RentPaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, RentPaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentPaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RentPayment.
     * @param {RentPaymentDeleteArgs} args - Arguments to delete one RentPayment.
     * @example
     * // Delete one RentPayment
     * const RentPayment = await prisma.rentPayment.delete({
     *   where: {
     *     // ... filter to delete one RentPayment
     *   }
     * })
     * 
     */
    delete<T extends RentPaymentDeleteArgs>(args: SelectSubset<T, RentPaymentDeleteArgs<ExtArgs>>): Prisma__RentPaymentClient<$Result.GetResult<Prisma.$RentPaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RentPayment.
     * @param {RentPaymentUpdateArgs} args - Arguments to update one RentPayment.
     * @example
     * // Update one RentPayment
     * const rentPayment = await prisma.rentPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RentPaymentUpdateArgs>(args: SelectSubset<T, RentPaymentUpdateArgs<ExtArgs>>): Prisma__RentPaymentClient<$Result.GetResult<Prisma.$RentPaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RentPayments.
     * @param {RentPaymentDeleteManyArgs} args - Arguments to filter RentPayments to delete.
     * @example
     * // Delete a few RentPayments
     * const { count } = await prisma.rentPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RentPaymentDeleteManyArgs>(args?: SelectSubset<T, RentPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RentPayments
     * const rentPayment = await prisma.rentPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RentPaymentUpdateManyArgs>(args: SelectSubset<T, RentPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentPayments and returns the data updated in the database.
     * @param {RentPaymentUpdateManyAndReturnArgs} args - Arguments to update many RentPayments.
     * @example
     * // Update many RentPayments
     * const rentPayment = await prisma.rentPayment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RentPayments and only return the `id`
     * const rentPaymentWithIdOnly = await prisma.rentPayment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RentPaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, RentPaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentPaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RentPayment.
     * @param {RentPaymentUpsertArgs} args - Arguments to update or create a RentPayment.
     * @example
     * // Update or create a RentPayment
     * const rentPayment = await prisma.rentPayment.upsert({
     *   create: {
     *     // ... data to create a RentPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RentPayment we want to update
     *   }
     * })
     */
    upsert<T extends RentPaymentUpsertArgs>(args: SelectSubset<T, RentPaymentUpsertArgs<ExtArgs>>): Prisma__RentPaymentClient<$Result.GetResult<Prisma.$RentPaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RentPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentPaymentCountArgs} args - Arguments to filter RentPayments to count.
     * @example
     * // Count the number of RentPayments
     * const count = await prisma.rentPayment.count({
     *   where: {
     *     // ... the filter for the RentPayments we want to count
     *   }
     * })
    **/
    count<T extends RentPaymentCountArgs>(
      args?: Subset<T, RentPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RentPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RentPaymentAggregateArgs>(args: Subset<T, RentPaymentAggregateArgs>): Prisma.PrismaPromise<GetRentPaymentAggregateType<T>>

    /**
     * Group by RentPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentPaymentGroupByArgs} args - Group by arguments.
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
      T extends RentPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentPaymentGroupByArgs['orderBy'] }
        : { orderBy?: RentPaymentGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RentPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RentPayment model
   */
  readonly fields: RentPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RentPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lease<T extends LeaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeaseDefaultArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receipts<T extends RentPayment$receiptsArgs<ExtArgs> = {}>(args?: Subset<T, RentPayment$receiptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RentPayment model
   */
  interface RentPaymentFieldRefs {
    readonly id: FieldRef<"RentPayment", 'String'>
    readonly leaseId: FieldRef<"RentPayment", 'String'>
    readonly periodStart: FieldRef<"RentPayment", 'DateTime'>
    readonly periodEnd: FieldRef<"RentPayment", 'DateTime'>
    readonly amountDue: FieldRef<"RentPayment", 'Decimal'>
    readonly amountPaid: FieldRef<"RentPayment", 'Decimal'>
    readonly paymentDate: FieldRef<"RentPayment", 'DateTime'>
    readonly reminderDate: FieldRef<"RentPayment", 'DateTime'>
    readonly paymentMethod: FieldRef<"RentPayment", 'String'>
    readonly reference: FieldRef<"RentPayment", 'String'>
    readonly status: FieldRef<"RentPayment", 'RecordStatus'>
    readonly notes: FieldRef<"RentPayment", 'String'>
    readonly createdAt: FieldRef<"RentPayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RentPayment findUnique
   */
  export type RentPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentPayment
     */
    select?: RentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentPayment
     */
    omit?: RentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentPaymentInclude<ExtArgs> | null
    /**
     * Filter, which RentPayment to fetch.
     */
    where: RentPaymentWhereUniqueInput
  }

  /**
   * RentPayment findUniqueOrThrow
   */
  export type RentPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentPayment
     */
    select?: RentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentPayment
     */
    omit?: RentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentPaymentInclude<ExtArgs> | null
    /**
     * Filter, which RentPayment to fetch.
     */
    where: RentPaymentWhereUniqueInput
  }

  /**
   * RentPayment findFirst
   */
  export type RentPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentPayment
     */
    select?: RentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentPayment
     */
    omit?: RentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentPaymentInclude<ExtArgs> | null
    /**
     * Filter, which RentPayment to fetch.
     */
    where?: RentPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentPayments to fetch.
     */
    orderBy?: RentPaymentOrderByWithRelationInput | RentPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentPayments.
     */
    cursor?: RentPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentPayments.
     */
    distinct?: RentPaymentScalarFieldEnum | RentPaymentScalarFieldEnum[]
  }

  /**
   * RentPayment findFirstOrThrow
   */
  export type RentPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentPayment
     */
    select?: RentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentPayment
     */
    omit?: RentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentPaymentInclude<ExtArgs> | null
    /**
     * Filter, which RentPayment to fetch.
     */
    where?: RentPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentPayments to fetch.
     */
    orderBy?: RentPaymentOrderByWithRelationInput | RentPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentPayments.
     */
    cursor?: RentPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentPayments.
     */
    distinct?: RentPaymentScalarFieldEnum | RentPaymentScalarFieldEnum[]
  }

  /**
   * RentPayment findMany
   */
  export type RentPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentPayment
     */
    select?: RentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentPayment
     */
    omit?: RentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentPaymentInclude<ExtArgs> | null
    /**
     * Filter, which RentPayments to fetch.
     */
    where?: RentPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentPayments to fetch.
     */
    orderBy?: RentPaymentOrderByWithRelationInput | RentPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RentPayments.
     */
    cursor?: RentPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentPayments.
     */
    skip?: number
    distinct?: RentPaymentScalarFieldEnum | RentPaymentScalarFieldEnum[]
  }

  /**
   * RentPayment create
   */
  export type RentPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentPayment
     */
    select?: RentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentPayment
     */
    omit?: RentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a RentPayment.
     */
    data: XOR<RentPaymentCreateInput, RentPaymentUncheckedCreateInput>
  }

  /**
   * RentPayment createMany
   */
  export type RentPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RentPayments.
     */
    data: RentPaymentCreateManyInput | RentPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RentPayment createManyAndReturn
   */
  export type RentPaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentPayment
     */
    select?: RentPaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentPayment
     */
    omit?: RentPaymentOmit<ExtArgs> | null
    /**
     * The data used to create many RentPayments.
     */
    data: RentPaymentCreateManyInput | RentPaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentPaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentPayment update
   */
  export type RentPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentPayment
     */
    select?: RentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentPayment
     */
    omit?: RentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a RentPayment.
     */
    data: XOR<RentPaymentUpdateInput, RentPaymentUncheckedUpdateInput>
    /**
     * Choose, which RentPayment to update.
     */
    where: RentPaymentWhereUniqueInput
  }

  /**
   * RentPayment updateMany
   */
  export type RentPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RentPayments.
     */
    data: XOR<RentPaymentUpdateManyMutationInput, RentPaymentUncheckedUpdateManyInput>
    /**
     * Filter which RentPayments to update
     */
    where?: RentPaymentWhereInput
    /**
     * Limit how many RentPayments to update.
     */
    limit?: number
  }

  /**
   * RentPayment updateManyAndReturn
   */
  export type RentPaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentPayment
     */
    select?: RentPaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentPayment
     */
    omit?: RentPaymentOmit<ExtArgs> | null
    /**
     * The data used to update RentPayments.
     */
    data: XOR<RentPaymentUpdateManyMutationInput, RentPaymentUncheckedUpdateManyInput>
    /**
     * Filter which RentPayments to update
     */
    where?: RentPaymentWhereInput
    /**
     * Limit how many RentPayments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentPaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentPayment upsert
   */
  export type RentPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentPayment
     */
    select?: RentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentPayment
     */
    omit?: RentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the RentPayment to update in case it exists.
     */
    where: RentPaymentWhereUniqueInput
    /**
     * In case the RentPayment found by the `where` argument doesn't exist, create a new RentPayment with this data.
     */
    create: XOR<RentPaymentCreateInput, RentPaymentUncheckedCreateInput>
    /**
     * In case the RentPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentPaymentUpdateInput, RentPaymentUncheckedUpdateInput>
  }

  /**
   * RentPayment delete
   */
  export type RentPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentPayment
     */
    select?: RentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentPayment
     */
    omit?: RentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentPaymentInclude<ExtArgs> | null
    /**
     * Filter which RentPayment to delete.
     */
    where: RentPaymentWhereUniqueInput
  }

  /**
   * RentPayment deleteMany
   */
  export type RentPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentPayments to delete
     */
    where?: RentPaymentWhereInput
    /**
     * Limit how many RentPayments to delete.
     */
    limit?: number
  }

  /**
   * RentPayment.receipts
   */
  export type RentPayment$receiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentReceipt
     */
    select?: PaymentReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentReceipt
     */
    omit?: PaymentReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentReceiptInclude<ExtArgs> | null
    where?: PaymentReceiptWhereInput
    orderBy?: PaymentReceiptOrderByWithRelationInput | PaymentReceiptOrderByWithRelationInput[]
    cursor?: PaymentReceiptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentReceiptScalarFieldEnum | PaymentReceiptScalarFieldEnum[]
  }

  /**
   * RentPayment without action
   */
  export type RentPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentPayment
     */
    select?: RentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentPayment
     */
    omit?: RentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentPaymentInclude<ExtArgs> | null
  }


  /**
   * Model PaymentReceipt
   */

  export type AggregatePaymentReceipt = {
    _count: PaymentReceiptCountAggregateOutputType | null
    _avg: PaymentReceiptAvgAggregateOutputType | null
    _sum: PaymentReceiptSumAggregateOutputType | null
    _min: PaymentReceiptMinAggregateOutputType | null
    _max: PaymentReceiptMaxAggregateOutputType | null
  }

  export type PaymentReceiptAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentReceiptSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentReceiptMinAggregateOutputType = {
    id: string | null
    rentPaymentId: string | null
    amount: Decimal | null
    paymentDate: Date | null
    paymentMethod: string | null
    reference: string | null
    createdAt: Date | null
  }

  export type PaymentReceiptMaxAggregateOutputType = {
    id: string | null
    rentPaymentId: string | null
    amount: Decimal | null
    paymentDate: Date | null
    paymentMethod: string | null
    reference: string | null
    createdAt: Date | null
  }

  export type PaymentReceiptCountAggregateOutputType = {
    id: number
    rentPaymentId: number
    amount: number
    paymentDate: number
    paymentMethod: number
    reference: number
    createdAt: number
    _all: number
  }


  export type PaymentReceiptAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentReceiptSumAggregateInputType = {
    amount?: true
  }

  export type PaymentReceiptMinAggregateInputType = {
    id?: true
    rentPaymentId?: true
    amount?: true
    paymentDate?: true
    paymentMethod?: true
    reference?: true
    createdAt?: true
  }

  export type PaymentReceiptMaxAggregateInputType = {
    id?: true
    rentPaymentId?: true
    amount?: true
    paymentDate?: true
    paymentMethod?: true
    reference?: true
    createdAt?: true
  }

  export type PaymentReceiptCountAggregateInputType = {
    id?: true
    rentPaymentId?: true
    amount?: true
    paymentDate?: true
    paymentMethod?: true
    reference?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentReceiptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentReceipt to aggregate.
     */
    where?: PaymentReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentReceipts to fetch.
     */
    orderBy?: PaymentReceiptOrderByWithRelationInput | PaymentReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentReceipts
    **/
    _count?: true | PaymentReceiptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentReceiptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentReceiptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentReceiptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentReceiptMaxAggregateInputType
  }

  export type GetPaymentReceiptAggregateType<T extends PaymentReceiptAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentReceipt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentReceipt[P]>
      : GetScalarType<T[P], AggregatePaymentReceipt[P]>
  }




  export type PaymentReceiptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentReceiptWhereInput
    orderBy?: PaymentReceiptOrderByWithAggregationInput | PaymentReceiptOrderByWithAggregationInput[]
    by: PaymentReceiptScalarFieldEnum[] | PaymentReceiptScalarFieldEnum
    having?: PaymentReceiptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentReceiptCountAggregateInputType | true
    _avg?: PaymentReceiptAvgAggregateInputType
    _sum?: PaymentReceiptSumAggregateInputType
    _min?: PaymentReceiptMinAggregateInputType
    _max?: PaymentReceiptMaxAggregateInputType
  }

  export type PaymentReceiptGroupByOutputType = {
    id: string
    rentPaymentId: string
    amount: Decimal
    paymentDate: Date
    paymentMethod: string | null
    reference: string | null
    createdAt: Date
    _count: PaymentReceiptCountAggregateOutputType | null
    _avg: PaymentReceiptAvgAggregateOutputType | null
    _sum: PaymentReceiptSumAggregateOutputType | null
    _min: PaymentReceiptMinAggregateOutputType | null
    _max: PaymentReceiptMaxAggregateOutputType | null
  }

  type GetPaymentReceiptGroupByPayload<T extends PaymentReceiptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentReceiptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentReceiptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentReceiptGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentReceiptGroupByOutputType[P]>
        }
      >
    >


  export type PaymentReceiptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rentPaymentId?: boolean
    amount?: boolean
    paymentDate?: boolean
    paymentMethod?: boolean
    reference?: boolean
    createdAt?: boolean
    rentPayment?: boolean | RentPaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentReceipt"]>

  export type PaymentReceiptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rentPaymentId?: boolean
    amount?: boolean
    paymentDate?: boolean
    paymentMethod?: boolean
    reference?: boolean
    createdAt?: boolean
    rentPayment?: boolean | RentPaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentReceipt"]>

  export type PaymentReceiptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rentPaymentId?: boolean
    amount?: boolean
    paymentDate?: boolean
    paymentMethod?: boolean
    reference?: boolean
    createdAt?: boolean
    rentPayment?: boolean | RentPaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentReceipt"]>

  export type PaymentReceiptSelectScalar = {
    id?: boolean
    rentPaymentId?: boolean
    amount?: boolean
    paymentDate?: boolean
    paymentMethod?: boolean
    reference?: boolean
    createdAt?: boolean
  }

  export type PaymentReceiptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rentPaymentId" | "amount" | "paymentDate" | "paymentMethod" | "reference" | "createdAt", ExtArgs["result"]["paymentReceipt"]>
  export type PaymentReceiptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentPayment?: boolean | RentPaymentDefaultArgs<ExtArgs>
  }
  export type PaymentReceiptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentPayment?: boolean | RentPaymentDefaultArgs<ExtArgs>
  }
  export type PaymentReceiptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentPayment?: boolean | RentPaymentDefaultArgs<ExtArgs>
  }

  export type $PaymentReceiptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentReceipt"
    objects: {
      rentPayment: Prisma.$RentPaymentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rentPaymentId: string
      amount: Prisma.Decimal
      paymentDate: Date
      paymentMethod: string | null
      reference: string | null
      createdAt: Date
    }, ExtArgs["result"]["paymentReceipt"]>
    composites: {}
  }

  type PaymentReceiptGetPayload<S extends boolean | null | undefined | PaymentReceiptDefaultArgs> = $Result.GetResult<Prisma.$PaymentReceiptPayload, S>

  type PaymentReceiptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentReceiptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentReceiptCountAggregateInputType | true
    }

  export interface PaymentReceiptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentReceipt'], meta: { name: 'PaymentReceipt' } }
    /**
     * Find zero or one PaymentReceipt that matches the filter.
     * @param {PaymentReceiptFindUniqueArgs} args - Arguments to find a PaymentReceipt
     * @example
     * // Get one PaymentReceipt
     * const paymentReceipt = await prisma.paymentReceipt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentReceiptFindUniqueArgs>(args: SelectSubset<T, PaymentReceiptFindUniqueArgs<ExtArgs>>): Prisma__PaymentReceiptClient<$Result.GetResult<Prisma.$PaymentReceiptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentReceipt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentReceiptFindUniqueOrThrowArgs} args - Arguments to find a PaymentReceipt
     * @example
     * // Get one PaymentReceipt
     * const paymentReceipt = await prisma.paymentReceipt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentReceiptFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentReceiptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentReceiptClient<$Result.GetResult<Prisma.$PaymentReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentReceipt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentReceiptFindFirstArgs} args - Arguments to find a PaymentReceipt
     * @example
     * // Get one PaymentReceipt
     * const paymentReceipt = await prisma.paymentReceipt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentReceiptFindFirstArgs>(args?: SelectSubset<T, PaymentReceiptFindFirstArgs<ExtArgs>>): Prisma__PaymentReceiptClient<$Result.GetResult<Prisma.$PaymentReceiptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentReceipt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentReceiptFindFirstOrThrowArgs} args - Arguments to find a PaymentReceipt
     * @example
     * // Get one PaymentReceipt
     * const paymentReceipt = await prisma.paymentReceipt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentReceiptFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentReceiptFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentReceiptClient<$Result.GetResult<Prisma.$PaymentReceiptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentReceipts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentReceiptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentReceipts
     * const paymentReceipts = await prisma.paymentReceipt.findMany()
     * 
     * // Get first 10 PaymentReceipts
     * const paymentReceipts = await prisma.paymentReceipt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentReceiptWithIdOnly = await prisma.paymentReceipt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentReceiptFindManyArgs>(args?: SelectSubset<T, PaymentReceiptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentReceipt.
     * @param {PaymentReceiptCreateArgs} args - Arguments to create a PaymentReceipt.
     * @example
     * // Create one PaymentReceipt
     * const PaymentReceipt = await prisma.paymentReceipt.create({
     *   data: {
     *     // ... data to create a PaymentReceipt
     *   }
     * })
     * 
     */
    create<T extends PaymentReceiptCreateArgs>(args: SelectSubset<T, PaymentReceiptCreateArgs<ExtArgs>>): Prisma__PaymentReceiptClient<$Result.GetResult<Prisma.$PaymentReceiptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentReceipts.
     * @param {PaymentReceiptCreateManyArgs} args - Arguments to create many PaymentReceipts.
     * @example
     * // Create many PaymentReceipts
     * const paymentReceipt = await prisma.paymentReceipt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentReceiptCreateManyArgs>(args?: SelectSubset<T, PaymentReceiptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentReceipts and returns the data saved in the database.
     * @param {PaymentReceiptCreateManyAndReturnArgs} args - Arguments to create many PaymentReceipts.
     * @example
     * // Create many PaymentReceipts
     * const paymentReceipt = await prisma.paymentReceipt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentReceipts and only return the `id`
     * const paymentReceiptWithIdOnly = await prisma.paymentReceipt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentReceiptCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentReceiptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentReceiptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentReceipt.
     * @param {PaymentReceiptDeleteArgs} args - Arguments to delete one PaymentReceipt.
     * @example
     * // Delete one PaymentReceipt
     * const PaymentReceipt = await prisma.paymentReceipt.delete({
     *   where: {
     *     // ... filter to delete one PaymentReceipt
     *   }
     * })
     * 
     */
    delete<T extends PaymentReceiptDeleteArgs>(args: SelectSubset<T, PaymentReceiptDeleteArgs<ExtArgs>>): Prisma__PaymentReceiptClient<$Result.GetResult<Prisma.$PaymentReceiptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentReceipt.
     * @param {PaymentReceiptUpdateArgs} args - Arguments to update one PaymentReceipt.
     * @example
     * // Update one PaymentReceipt
     * const paymentReceipt = await prisma.paymentReceipt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentReceiptUpdateArgs>(args: SelectSubset<T, PaymentReceiptUpdateArgs<ExtArgs>>): Prisma__PaymentReceiptClient<$Result.GetResult<Prisma.$PaymentReceiptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentReceipts.
     * @param {PaymentReceiptDeleteManyArgs} args - Arguments to filter PaymentReceipts to delete.
     * @example
     * // Delete a few PaymentReceipts
     * const { count } = await prisma.paymentReceipt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentReceiptDeleteManyArgs>(args?: SelectSubset<T, PaymentReceiptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentReceiptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentReceipts
     * const paymentReceipt = await prisma.paymentReceipt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentReceiptUpdateManyArgs>(args: SelectSubset<T, PaymentReceiptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentReceipts and returns the data updated in the database.
     * @param {PaymentReceiptUpdateManyAndReturnArgs} args - Arguments to update many PaymentReceipts.
     * @example
     * // Update many PaymentReceipts
     * const paymentReceipt = await prisma.paymentReceipt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentReceipts and only return the `id`
     * const paymentReceiptWithIdOnly = await prisma.paymentReceipt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentReceiptUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentReceiptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentReceiptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentReceipt.
     * @param {PaymentReceiptUpsertArgs} args - Arguments to update or create a PaymentReceipt.
     * @example
     * // Update or create a PaymentReceipt
     * const paymentReceipt = await prisma.paymentReceipt.upsert({
     *   create: {
     *     // ... data to create a PaymentReceipt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentReceipt we want to update
     *   }
     * })
     */
    upsert<T extends PaymentReceiptUpsertArgs>(args: SelectSubset<T, PaymentReceiptUpsertArgs<ExtArgs>>): Prisma__PaymentReceiptClient<$Result.GetResult<Prisma.$PaymentReceiptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentReceiptCountArgs} args - Arguments to filter PaymentReceipts to count.
     * @example
     * // Count the number of PaymentReceipts
     * const count = await prisma.paymentReceipt.count({
     *   where: {
     *     // ... the filter for the PaymentReceipts we want to count
     *   }
     * })
    **/
    count<T extends PaymentReceiptCountArgs>(
      args?: Subset<T, PaymentReceiptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentReceiptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentReceiptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentReceiptAggregateArgs>(args: Subset<T, PaymentReceiptAggregateArgs>): Prisma.PrismaPromise<GetPaymentReceiptAggregateType<T>>

    /**
     * Group by PaymentReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentReceiptGroupByArgs} args - Group by arguments.
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
      T extends PaymentReceiptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentReceiptGroupByArgs['orderBy'] }
        : { orderBy?: PaymentReceiptGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentReceiptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentReceiptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentReceipt model
   */
  readonly fields: PaymentReceiptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentReceipt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentReceiptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rentPayment<T extends RentPaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RentPaymentDefaultArgs<ExtArgs>>): Prisma__RentPaymentClient<$Result.GetResult<Prisma.$RentPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentReceipt model
   */
  interface PaymentReceiptFieldRefs {
    readonly id: FieldRef<"PaymentReceipt", 'String'>
    readonly rentPaymentId: FieldRef<"PaymentReceipt", 'String'>
    readonly amount: FieldRef<"PaymentReceipt", 'Decimal'>
    readonly paymentDate: FieldRef<"PaymentReceipt", 'DateTime'>
    readonly paymentMethod: FieldRef<"PaymentReceipt", 'String'>
    readonly reference: FieldRef<"PaymentReceipt", 'String'>
    readonly createdAt: FieldRef<"PaymentReceipt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentReceipt findUnique
   */
  export type PaymentReceiptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentReceipt
     */
    select?: PaymentReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentReceipt
     */
    omit?: PaymentReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentReceiptInclude<ExtArgs> | null
    /**
     * Filter, which PaymentReceipt to fetch.
     */
    where: PaymentReceiptWhereUniqueInput
  }

  /**
   * PaymentReceipt findUniqueOrThrow
   */
  export type PaymentReceiptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentReceipt
     */
    select?: PaymentReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentReceipt
     */
    omit?: PaymentReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentReceiptInclude<ExtArgs> | null
    /**
     * Filter, which PaymentReceipt to fetch.
     */
    where: PaymentReceiptWhereUniqueInput
  }

  /**
   * PaymentReceipt findFirst
   */
  export type PaymentReceiptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentReceipt
     */
    select?: PaymentReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentReceipt
     */
    omit?: PaymentReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentReceiptInclude<ExtArgs> | null
    /**
     * Filter, which PaymentReceipt to fetch.
     */
    where?: PaymentReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentReceipts to fetch.
     */
    orderBy?: PaymentReceiptOrderByWithRelationInput | PaymentReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentReceipts.
     */
    cursor?: PaymentReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentReceipts.
     */
    distinct?: PaymentReceiptScalarFieldEnum | PaymentReceiptScalarFieldEnum[]
  }

  /**
   * PaymentReceipt findFirstOrThrow
   */
  export type PaymentReceiptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentReceipt
     */
    select?: PaymentReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentReceipt
     */
    omit?: PaymentReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentReceiptInclude<ExtArgs> | null
    /**
     * Filter, which PaymentReceipt to fetch.
     */
    where?: PaymentReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentReceipts to fetch.
     */
    orderBy?: PaymentReceiptOrderByWithRelationInput | PaymentReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentReceipts.
     */
    cursor?: PaymentReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentReceipts.
     */
    distinct?: PaymentReceiptScalarFieldEnum | PaymentReceiptScalarFieldEnum[]
  }

  /**
   * PaymentReceipt findMany
   */
  export type PaymentReceiptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentReceipt
     */
    select?: PaymentReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentReceipt
     */
    omit?: PaymentReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentReceiptInclude<ExtArgs> | null
    /**
     * Filter, which PaymentReceipts to fetch.
     */
    where?: PaymentReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentReceipts to fetch.
     */
    orderBy?: PaymentReceiptOrderByWithRelationInput | PaymentReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentReceipts.
     */
    cursor?: PaymentReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentReceipts.
     */
    skip?: number
    distinct?: PaymentReceiptScalarFieldEnum | PaymentReceiptScalarFieldEnum[]
  }

  /**
   * PaymentReceipt create
   */
  export type PaymentReceiptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentReceipt
     */
    select?: PaymentReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentReceipt
     */
    omit?: PaymentReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentReceiptInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentReceipt.
     */
    data: XOR<PaymentReceiptCreateInput, PaymentReceiptUncheckedCreateInput>
  }

  /**
   * PaymentReceipt createMany
   */
  export type PaymentReceiptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentReceipts.
     */
    data: PaymentReceiptCreateManyInput | PaymentReceiptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentReceipt createManyAndReturn
   */
  export type PaymentReceiptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentReceipt
     */
    select?: PaymentReceiptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentReceipt
     */
    omit?: PaymentReceiptOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentReceipts.
     */
    data: PaymentReceiptCreateManyInput | PaymentReceiptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentReceiptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentReceipt update
   */
  export type PaymentReceiptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentReceipt
     */
    select?: PaymentReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentReceipt
     */
    omit?: PaymentReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentReceiptInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentReceipt.
     */
    data: XOR<PaymentReceiptUpdateInput, PaymentReceiptUncheckedUpdateInput>
    /**
     * Choose, which PaymentReceipt to update.
     */
    where: PaymentReceiptWhereUniqueInput
  }

  /**
   * PaymentReceipt updateMany
   */
  export type PaymentReceiptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentReceipts.
     */
    data: XOR<PaymentReceiptUpdateManyMutationInput, PaymentReceiptUncheckedUpdateManyInput>
    /**
     * Filter which PaymentReceipts to update
     */
    where?: PaymentReceiptWhereInput
    /**
     * Limit how many PaymentReceipts to update.
     */
    limit?: number
  }

  /**
   * PaymentReceipt updateManyAndReturn
   */
  export type PaymentReceiptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentReceipt
     */
    select?: PaymentReceiptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentReceipt
     */
    omit?: PaymentReceiptOmit<ExtArgs> | null
    /**
     * The data used to update PaymentReceipts.
     */
    data: XOR<PaymentReceiptUpdateManyMutationInput, PaymentReceiptUncheckedUpdateManyInput>
    /**
     * Filter which PaymentReceipts to update
     */
    where?: PaymentReceiptWhereInput
    /**
     * Limit how many PaymentReceipts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentReceiptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentReceipt upsert
   */
  export type PaymentReceiptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentReceipt
     */
    select?: PaymentReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentReceipt
     */
    omit?: PaymentReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentReceiptInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentReceipt to update in case it exists.
     */
    where: PaymentReceiptWhereUniqueInput
    /**
     * In case the PaymentReceipt found by the `where` argument doesn't exist, create a new PaymentReceipt with this data.
     */
    create: XOR<PaymentReceiptCreateInput, PaymentReceiptUncheckedCreateInput>
    /**
     * In case the PaymentReceipt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentReceiptUpdateInput, PaymentReceiptUncheckedUpdateInput>
  }

  /**
   * PaymentReceipt delete
   */
  export type PaymentReceiptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentReceipt
     */
    select?: PaymentReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentReceipt
     */
    omit?: PaymentReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentReceiptInclude<ExtArgs> | null
    /**
     * Filter which PaymentReceipt to delete.
     */
    where: PaymentReceiptWhereUniqueInput
  }

  /**
   * PaymentReceipt deleteMany
   */
  export type PaymentReceiptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentReceipts to delete
     */
    where?: PaymentReceiptWhereInput
    /**
     * Limit how many PaymentReceipts to delete.
     */
    limit?: number
  }

  /**
   * PaymentReceipt without action
   */
  export type PaymentReceiptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentReceipt
     */
    select?: PaymentReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentReceipt
     */
    omit?: PaymentReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentReceiptInclude<ExtArgs> | null
  }


  /**
   * Model Bill
   */

  export type AggregateBill = {
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  export type BillAvgAggregateOutputType = {
    amountDue: Decimal | null
    amountPaid: Decimal | null
  }

  export type BillSumAggregateOutputType = {
    amountDue: Decimal | null
    amountPaid: Decimal | null
  }

  export type BillMinAggregateOutputType = {
    id: string | null
    leaseId: string | null
    billType: $Enums.BillType | null
    description: string | null
    amountDue: Decimal | null
    amountPaid: Decimal | null
    dueDate: Date | null
    paymentDate: Date | null
    status: $Enums.RecordStatus | null
    createdAt: Date | null
  }

  export type BillMaxAggregateOutputType = {
    id: string | null
    leaseId: string | null
    billType: $Enums.BillType | null
    description: string | null
    amountDue: Decimal | null
    amountPaid: Decimal | null
    dueDate: Date | null
    paymentDate: Date | null
    status: $Enums.RecordStatus | null
    createdAt: Date | null
  }

  export type BillCountAggregateOutputType = {
    id: number
    leaseId: number
    billType: number
    description: number
    amountDue: number
    amountPaid: number
    dueDate: number
    paymentDate: number
    status: number
    createdAt: number
    _all: number
  }


  export type BillAvgAggregateInputType = {
    amountDue?: true
    amountPaid?: true
  }

  export type BillSumAggregateInputType = {
    amountDue?: true
    amountPaid?: true
  }

  export type BillMinAggregateInputType = {
    id?: true
    leaseId?: true
    billType?: true
    description?: true
    amountDue?: true
    amountPaid?: true
    dueDate?: true
    paymentDate?: true
    status?: true
    createdAt?: true
  }

  export type BillMaxAggregateInputType = {
    id?: true
    leaseId?: true
    billType?: true
    description?: true
    amountDue?: true
    amountPaid?: true
    dueDate?: true
    paymentDate?: true
    status?: true
    createdAt?: true
  }

  export type BillCountAggregateInputType = {
    id?: true
    leaseId?: true
    billType?: true
    description?: true
    amountDue?: true
    amountPaid?: true
    dueDate?: true
    paymentDate?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type BillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bill to aggregate.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bills
    **/
    _count?: true | BillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillMaxAggregateInputType
  }

  export type GetBillAggregateType<T extends BillAggregateArgs> = {
        [P in keyof T & keyof AggregateBill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBill[P]>
      : GetScalarType<T[P], AggregateBill[P]>
  }




  export type BillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
    orderBy?: BillOrderByWithAggregationInput | BillOrderByWithAggregationInput[]
    by: BillScalarFieldEnum[] | BillScalarFieldEnum
    having?: BillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillCountAggregateInputType | true
    _avg?: BillAvgAggregateInputType
    _sum?: BillSumAggregateInputType
    _min?: BillMinAggregateInputType
    _max?: BillMaxAggregateInputType
  }

  export type BillGroupByOutputType = {
    id: string
    leaseId: string
    billType: $Enums.BillType
    description: string
    amountDue: Decimal
    amountPaid: Decimal
    dueDate: Date
    paymentDate: Date | null
    status: $Enums.RecordStatus
    createdAt: Date
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  type GetBillGroupByPayload<T extends BillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillGroupByOutputType[P]>
            : GetScalarType<T[P], BillGroupByOutputType[P]>
        }
      >
    >


  export type BillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaseId?: boolean
    billType?: boolean
    description?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    dueDate?: boolean
    paymentDate?: boolean
    status?: boolean
    createdAt?: boolean
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>

  export type BillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaseId?: boolean
    billType?: boolean
    description?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    dueDate?: boolean
    paymentDate?: boolean
    status?: boolean
    createdAt?: boolean
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>

  export type BillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaseId?: boolean
    billType?: boolean
    description?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    dueDate?: boolean
    paymentDate?: boolean
    status?: boolean
    createdAt?: boolean
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>

  export type BillSelectScalar = {
    id?: boolean
    leaseId?: boolean
    billType?: boolean
    description?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    dueDate?: boolean
    paymentDate?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type BillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leaseId" | "billType" | "description" | "amountDue" | "amountPaid" | "dueDate" | "paymentDate" | "status" | "createdAt", ExtArgs["result"]["bill"]>
  export type BillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }
  export type BillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }
  export type BillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }

  export type $BillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bill"
    objects: {
      lease: Prisma.$LeasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leaseId: string
      billType: $Enums.BillType
      description: string
      amountDue: Prisma.Decimal
      amountPaid: Prisma.Decimal
      dueDate: Date
      paymentDate: Date | null
      status: $Enums.RecordStatus
      createdAt: Date
    }, ExtArgs["result"]["bill"]>
    composites: {}
  }

  type BillGetPayload<S extends boolean | null | undefined | BillDefaultArgs> = $Result.GetResult<Prisma.$BillPayload, S>

  type BillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillCountAggregateInputType | true
    }

  export interface BillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bill'], meta: { name: 'Bill' } }
    /**
     * Find zero or one Bill that matches the filter.
     * @param {BillFindUniqueArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillFindUniqueArgs>(args: SelectSubset<T, BillFindUniqueArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillFindUniqueOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillFindUniqueOrThrowArgs>(args: SelectSubset<T, BillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillFindFirstArgs>(args?: SelectSubset<T, BillFindFirstArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillFindFirstOrThrowArgs>(args?: SelectSubset<T, BillFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bills
     * const bills = await prisma.bill.findMany()
     * 
     * // Get first 10 Bills
     * const bills = await prisma.bill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billWithIdOnly = await prisma.bill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillFindManyArgs>(args?: SelectSubset<T, BillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bill.
     * @param {BillCreateArgs} args - Arguments to create a Bill.
     * @example
     * // Create one Bill
     * const Bill = await prisma.bill.create({
     *   data: {
     *     // ... data to create a Bill
     *   }
     * })
     * 
     */
    create<T extends BillCreateArgs>(args: SelectSubset<T, BillCreateArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bills.
     * @param {BillCreateManyArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bill = await prisma.bill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillCreateManyArgs>(args?: SelectSubset<T, BillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bills and returns the data saved in the database.
     * @param {BillCreateManyAndReturnArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bill = await prisma.bill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bills and only return the `id`
     * const billWithIdOnly = await prisma.bill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillCreateManyAndReturnArgs>(args?: SelectSubset<T, BillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bill.
     * @param {BillDeleteArgs} args - Arguments to delete one Bill.
     * @example
     * // Delete one Bill
     * const Bill = await prisma.bill.delete({
     *   where: {
     *     // ... filter to delete one Bill
     *   }
     * })
     * 
     */
    delete<T extends BillDeleteArgs>(args: SelectSubset<T, BillDeleteArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bill.
     * @param {BillUpdateArgs} args - Arguments to update one Bill.
     * @example
     * // Update one Bill
     * const bill = await prisma.bill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillUpdateArgs>(args: SelectSubset<T, BillUpdateArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bills.
     * @param {BillDeleteManyArgs} args - Arguments to filter Bills to delete.
     * @example
     * // Delete a few Bills
     * const { count } = await prisma.bill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillDeleteManyArgs>(args?: SelectSubset<T, BillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bills
     * const bill = await prisma.bill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillUpdateManyArgs>(args: SelectSubset<T, BillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills and returns the data updated in the database.
     * @param {BillUpdateManyAndReturnArgs} args - Arguments to update many Bills.
     * @example
     * // Update many Bills
     * const bill = await prisma.bill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bills and only return the `id`
     * const billWithIdOnly = await prisma.bill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BillUpdateManyAndReturnArgs>(args: SelectSubset<T, BillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bill.
     * @param {BillUpsertArgs} args - Arguments to update or create a Bill.
     * @example
     * // Update or create a Bill
     * const bill = await prisma.bill.upsert({
     *   create: {
     *     // ... data to create a Bill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bill we want to update
     *   }
     * })
     */
    upsert<T extends BillUpsertArgs>(args: SelectSubset<T, BillUpsertArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillCountArgs} args - Arguments to filter Bills to count.
     * @example
     * // Count the number of Bills
     * const count = await prisma.bill.count({
     *   where: {
     *     // ... the filter for the Bills we want to count
     *   }
     * })
    **/
    count<T extends BillCountArgs>(
      args?: Subset<T, BillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillAggregateArgs>(args: Subset<T, BillAggregateArgs>): Prisma.PrismaPromise<GetBillAggregateType<T>>

    /**
     * Group by Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillGroupByArgs} args - Group by arguments.
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
      T extends BillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillGroupByArgs['orderBy'] }
        : { orderBy?: BillGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bill model
   */
  readonly fields: BillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lease<T extends LeaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeaseDefaultArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bill model
   */
  interface BillFieldRefs {
    readonly id: FieldRef<"Bill", 'String'>
    readonly leaseId: FieldRef<"Bill", 'String'>
    readonly billType: FieldRef<"Bill", 'BillType'>
    readonly description: FieldRef<"Bill", 'String'>
    readonly amountDue: FieldRef<"Bill", 'Decimal'>
    readonly amountPaid: FieldRef<"Bill", 'Decimal'>
    readonly dueDate: FieldRef<"Bill", 'DateTime'>
    readonly paymentDate: FieldRef<"Bill", 'DateTime'>
    readonly status: FieldRef<"Bill", 'RecordStatus'>
    readonly createdAt: FieldRef<"Bill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bill findUnique
   */
  export type BillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill findUniqueOrThrow
   */
  export type BillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill findFirst
   */
  export type BillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill findFirstOrThrow
   */
  export type BillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill findMany
   */
  export type BillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill create
   */
  export type BillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The data needed to create a Bill.
     */
    data: XOR<BillCreateInput, BillUncheckedCreateInput>
  }

  /**
   * Bill createMany
   */
  export type BillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bills.
     */
    data: BillCreateManyInput | BillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bill createManyAndReturn
   */
  export type BillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * The data used to create many Bills.
     */
    data: BillCreateManyInput | BillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bill update
   */
  export type BillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The data needed to update a Bill.
     */
    data: XOR<BillUpdateInput, BillUncheckedUpdateInput>
    /**
     * Choose, which Bill to update.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill updateMany
   */
  export type BillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bills.
     */
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to update.
     */
    limit?: number
  }

  /**
   * Bill updateManyAndReturn
   */
  export type BillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * The data used to update Bills.
     */
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bill upsert
   */
  export type BillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The filter to search for the Bill to update in case it exists.
     */
    where: BillWhereUniqueInput
    /**
     * In case the Bill found by the `where` argument doesn't exist, create a new Bill with this data.
     */
    create: XOR<BillCreateInput, BillUncheckedCreateInput>
    /**
     * In case the Bill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillUpdateInput, BillUncheckedUpdateInput>
  }

  /**
   * Bill delete
   */
  export type BillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter which Bill to delete.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill deleteMany
   */
  export type BillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bills to delete
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to delete.
     */
    limit?: number
  }

  /**
   * Bill without action
   */
  export type BillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
  }


  /**
   * Model EmailLog
   */

  export type AggregateEmailLog = {
    _count: EmailLogCountAggregateOutputType | null
    _min: EmailLogMinAggregateOutputType | null
    _max: EmailLogMaxAggregateOutputType | null
  }

  export type EmailLogMinAggregateOutputType = {
    id: string | null
    recipient: string | null
    subject: string | null
    bodyPreview: string | null
    emailType: string | null
    status: string | null
    errorMessage: string | null
    relatedId: string | null
    sentAt: Date | null
    createdAt: Date | null
    userId: string | null
  }

  export type EmailLogMaxAggregateOutputType = {
    id: string | null
    recipient: string | null
    subject: string | null
    bodyPreview: string | null
    emailType: string | null
    status: string | null
    errorMessage: string | null
    relatedId: string | null
    sentAt: Date | null
    createdAt: Date | null
    userId: string | null
  }

  export type EmailLogCountAggregateOutputType = {
    id: number
    recipient: number
    subject: number
    bodyPreview: number
    emailType: number
    status: number
    errorMessage: number
    relatedId: number
    sentAt: number
    createdAt: number
    userId: number
    _all: number
  }


  export type EmailLogMinAggregateInputType = {
    id?: true
    recipient?: true
    subject?: true
    bodyPreview?: true
    emailType?: true
    status?: true
    errorMessage?: true
    relatedId?: true
    sentAt?: true
    createdAt?: true
    userId?: true
  }

  export type EmailLogMaxAggregateInputType = {
    id?: true
    recipient?: true
    subject?: true
    bodyPreview?: true
    emailType?: true
    status?: true
    errorMessage?: true
    relatedId?: true
    sentAt?: true
    createdAt?: true
    userId?: true
  }

  export type EmailLogCountAggregateInputType = {
    id?: true
    recipient?: true
    subject?: true
    bodyPreview?: true
    emailType?: true
    status?: true
    errorMessage?: true
    relatedId?: true
    sentAt?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type EmailLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailLog to aggregate.
     */
    where?: EmailLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLogs to fetch.
     */
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailLogs
    **/
    _count?: true | EmailLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailLogMaxAggregateInputType
  }

  export type GetEmailLogAggregateType<T extends EmailLogAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailLog[P]>
      : GetScalarType<T[P], AggregateEmailLog[P]>
  }




  export type EmailLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailLogWhereInput
    orderBy?: EmailLogOrderByWithAggregationInput | EmailLogOrderByWithAggregationInput[]
    by: EmailLogScalarFieldEnum[] | EmailLogScalarFieldEnum
    having?: EmailLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailLogCountAggregateInputType | true
    _min?: EmailLogMinAggregateInputType
    _max?: EmailLogMaxAggregateInputType
  }

  export type EmailLogGroupByOutputType = {
    id: string
    recipient: string
    subject: string
    bodyPreview: string
    emailType: string
    status: string
    errorMessage: string | null
    relatedId: string | null
    sentAt: Date | null
    createdAt: Date
    userId: string | null
    _count: EmailLogCountAggregateOutputType | null
    _min: EmailLogMinAggregateOutputType | null
    _max: EmailLogMaxAggregateOutputType | null
  }

  type GetEmailLogGroupByPayload<T extends EmailLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailLogGroupByOutputType[P]>
            : GetScalarType<T[P], EmailLogGroupByOutputType[P]>
        }
      >
    >


  export type EmailLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipient?: boolean
    subject?: boolean
    bodyPreview?: boolean
    emailType?: boolean
    status?: boolean
    errorMessage?: boolean
    relatedId?: boolean
    sentAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | EmailLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["emailLog"]>

  export type EmailLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipient?: boolean
    subject?: boolean
    bodyPreview?: boolean
    emailType?: boolean
    status?: boolean
    errorMessage?: boolean
    relatedId?: boolean
    sentAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | EmailLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["emailLog"]>

  export type EmailLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipient?: boolean
    subject?: boolean
    bodyPreview?: boolean
    emailType?: boolean
    status?: boolean
    errorMessage?: boolean
    relatedId?: boolean
    sentAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | EmailLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["emailLog"]>

  export type EmailLogSelectScalar = {
    id?: boolean
    recipient?: boolean
    subject?: boolean
    bodyPreview?: boolean
    emailType?: boolean
    status?: boolean
    errorMessage?: boolean
    relatedId?: boolean
    sentAt?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type EmailLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipient" | "subject" | "bodyPreview" | "emailType" | "status" | "errorMessage" | "relatedId" | "sentAt" | "createdAt" | "userId", ExtArgs["result"]["emailLog"]>
  export type EmailLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | EmailLog$userArgs<ExtArgs>
  }
  export type EmailLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | EmailLog$userArgs<ExtArgs>
  }
  export type EmailLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | EmailLog$userArgs<ExtArgs>
  }

  export type $EmailLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recipient: string
      subject: string
      bodyPreview: string
      emailType: string
      status: string
      errorMessage: string | null
      relatedId: string | null
      sentAt: Date | null
      createdAt: Date
      userId: string | null
    }, ExtArgs["result"]["emailLog"]>
    composites: {}
  }

  type EmailLogGetPayload<S extends boolean | null | undefined | EmailLogDefaultArgs> = $Result.GetResult<Prisma.$EmailLogPayload, S>

  type EmailLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailLogCountAggregateInputType | true
    }

  export interface EmailLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailLog'], meta: { name: 'EmailLog' } }
    /**
     * Find zero or one EmailLog that matches the filter.
     * @param {EmailLogFindUniqueArgs} args - Arguments to find a EmailLog
     * @example
     * // Get one EmailLog
     * const emailLog = await prisma.emailLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailLogFindUniqueArgs>(args: SelectSubset<T, EmailLogFindUniqueArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailLogFindUniqueOrThrowArgs} args - Arguments to find a EmailLog
     * @example
     * // Get one EmailLog
     * const emailLog = await prisma.emailLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailLogFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogFindFirstArgs} args - Arguments to find a EmailLog
     * @example
     * // Get one EmailLog
     * const emailLog = await prisma.emailLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailLogFindFirstArgs>(args?: SelectSubset<T, EmailLogFindFirstArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogFindFirstOrThrowArgs} args - Arguments to find a EmailLog
     * @example
     * // Get one EmailLog
     * const emailLog = await prisma.emailLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailLogFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailLogs
     * const emailLogs = await prisma.emailLog.findMany()
     * 
     * // Get first 10 EmailLogs
     * const emailLogs = await prisma.emailLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailLogWithIdOnly = await prisma.emailLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailLogFindManyArgs>(args?: SelectSubset<T, EmailLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailLog.
     * @param {EmailLogCreateArgs} args - Arguments to create a EmailLog.
     * @example
     * // Create one EmailLog
     * const EmailLog = await prisma.emailLog.create({
     *   data: {
     *     // ... data to create a EmailLog
     *   }
     * })
     * 
     */
    create<T extends EmailLogCreateArgs>(args: SelectSubset<T, EmailLogCreateArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailLogs.
     * @param {EmailLogCreateManyArgs} args - Arguments to create many EmailLogs.
     * @example
     * // Create many EmailLogs
     * const emailLog = await prisma.emailLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailLogCreateManyArgs>(args?: SelectSubset<T, EmailLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailLogs and returns the data saved in the database.
     * @param {EmailLogCreateManyAndReturnArgs} args - Arguments to create many EmailLogs.
     * @example
     * // Create many EmailLogs
     * const emailLog = await prisma.emailLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailLogs and only return the `id`
     * const emailLogWithIdOnly = await prisma.emailLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailLogCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailLog.
     * @param {EmailLogDeleteArgs} args - Arguments to delete one EmailLog.
     * @example
     * // Delete one EmailLog
     * const EmailLog = await prisma.emailLog.delete({
     *   where: {
     *     // ... filter to delete one EmailLog
     *   }
     * })
     * 
     */
    delete<T extends EmailLogDeleteArgs>(args: SelectSubset<T, EmailLogDeleteArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailLog.
     * @param {EmailLogUpdateArgs} args - Arguments to update one EmailLog.
     * @example
     * // Update one EmailLog
     * const emailLog = await prisma.emailLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailLogUpdateArgs>(args: SelectSubset<T, EmailLogUpdateArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailLogs.
     * @param {EmailLogDeleteManyArgs} args - Arguments to filter EmailLogs to delete.
     * @example
     * // Delete a few EmailLogs
     * const { count } = await prisma.emailLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailLogDeleteManyArgs>(args?: SelectSubset<T, EmailLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailLogs
     * const emailLog = await prisma.emailLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailLogUpdateManyArgs>(args: SelectSubset<T, EmailLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailLogs and returns the data updated in the database.
     * @param {EmailLogUpdateManyAndReturnArgs} args - Arguments to update many EmailLogs.
     * @example
     * // Update many EmailLogs
     * const emailLog = await prisma.emailLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailLogs and only return the `id`
     * const emailLogWithIdOnly = await prisma.emailLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailLogUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailLog.
     * @param {EmailLogUpsertArgs} args - Arguments to update or create a EmailLog.
     * @example
     * // Update or create a EmailLog
     * const emailLog = await prisma.emailLog.upsert({
     *   create: {
     *     // ... data to create a EmailLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailLog we want to update
     *   }
     * })
     */
    upsert<T extends EmailLogUpsertArgs>(args: SelectSubset<T, EmailLogUpsertArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogCountArgs} args - Arguments to filter EmailLogs to count.
     * @example
     * // Count the number of EmailLogs
     * const count = await prisma.emailLog.count({
     *   where: {
     *     // ... the filter for the EmailLogs we want to count
     *   }
     * })
    **/
    count<T extends EmailLogCountArgs>(
      args?: Subset<T, EmailLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailLogAggregateArgs>(args: Subset<T, EmailLogAggregateArgs>): Prisma.PrismaPromise<GetEmailLogAggregateType<T>>

    /**
     * Group by EmailLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogGroupByArgs} args - Group by arguments.
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
      T extends EmailLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailLogGroupByArgs['orderBy'] }
        : { orderBy?: EmailLogGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailLog model
   */
  readonly fields: EmailLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends EmailLog$userArgs<ExtArgs> = {}>(args?: Subset<T, EmailLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailLog model
   */
  interface EmailLogFieldRefs {
    readonly id: FieldRef<"EmailLog", 'String'>
    readonly recipient: FieldRef<"EmailLog", 'String'>
    readonly subject: FieldRef<"EmailLog", 'String'>
    readonly bodyPreview: FieldRef<"EmailLog", 'String'>
    readonly emailType: FieldRef<"EmailLog", 'String'>
    readonly status: FieldRef<"EmailLog", 'String'>
    readonly errorMessage: FieldRef<"EmailLog", 'String'>
    readonly relatedId: FieldRef<"EmailLog", 'String'>
    readonly sentAt: FieldRef<"EmailLog", 'DateTime'>
    readonly createdAt: FieldRef<"EmailLog", 'DateTime'>
    readonly userId: FieldRef<"EmailLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmailLog findUnique
   */
  export type EmailLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogInclude<ExtArgs> | null
    /**
     * Filter, which EmailLog to fetch.
     */
    where: EmailLogWhereUniqueInput
  }

  /**
   * EmailLog findUniqueOrThrow
   */
  export type EmailLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogInclude<ExtArgs> | null
    /**
     * Filter, which EmailLog to fetch.
     */
    where: EmailLogWhereUniqueInput
  }

  /**
   * EmailLog findFirst
   */
  export type EmailLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogInclude<ExtArgs> | null
    /**
     * Filter, which EmailLog to fetch.
     */
    where?: EmailLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLogs to fetch.
     */
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailLogs.
     */
    cursor?: EmailLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailLogs.
     */
    distinct?: EmailLogScalarFieldEnum | EmailLogScalarFieldEnum[]
  }

  /**
   * EmailLog findFirstOrThrow
   */
  export type EmailLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogInclude<ExtArgs> | null
    /**
     * Filter, which EmailLog to fetch.
     */
    where?: EmailLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLogs to fetch.
     */
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailLogs.
     */
    cursor?: EmailLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailLogs.
     */
    distinct?: EmailLogScalarFieldEnum | EmailLogScalarFieldEnum[]
  }

  /**
   * EmailLog findMany
   */
  export type EmailLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogInclude<ExtArgs> | null
    /**
     * Filter, which EmailLogs to fetch.
     */
    where?: EmailLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLogs to fetch.
     */
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailLogs.
     */
    cursor?: EmailLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLogs.
     */
    skip?: number
    distinct?: EmailLogScalarFieldEnum | EmailLogScalarFieldEnum[]
  }

  /**
   * EmailLog create
   */
  export type EmailLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailLog.
     */
    data: XOR<EmailLogCreateInput, EmailLogUncheckedCreateInput>
  }

  /**
   * EmailLog createMany
   */
  export type EmailLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailLogs.
     */
    data: EmailLogCreateManyInput | EmailLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailLog createManyAndReturn
   */
  export type EmailLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * The data used to create many EmailLogs.
     */
    data: EmailLogCreateManyInput | EmailLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailLog update
   */
  export type EmailLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailLog.
     */
    data: XOR<EmailLogUpdateInput, EmailLogUncheckedUpdateInput>
    /**
     * Choose, which EmailLog to update.
     */
    where: EmailLogWhereUniqueInput
  }

  /**
   * EmailLog updateMany
   */
  export type EmailLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailLogs.
     */
    data: XOR<EmailLogUpdateManyMutationInput, EmailLogUncheckedUpdateManyInput>
    /**
     * Filter which EmailLogs to update
     */
    where?: EmailLogWhereInput
    /**
     * Limit how many EmailLogs to update.
     */
    limit?: number
  }

  /**
   * EmailLog updateManyAndReturn
   */
  export type EmailLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * The data used to update EmailLogs.
     */
    data: XOR<EmailLogUpdateManyMutationInput, EmailLogUncheckedUpdateManyInput>
    /**
     * Filter which EmailLogs to update
     */
    where?: EmailLogWhereInput
    /**
     * Limit how many EmailLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailLog upsert
   */
  export type EmailLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailLog to update in case it exists.
     */
    where: EmailLogWhereUniqueInput
    /**
     * In case the EmailLog found by the `where` argument doesn't exist, create a new EmailLog with this data.
     */
    create: XOR<EmailLogCreateInput, EmailLogUncheckedCreateInput>
    /**
     * In case the EmailLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailLogUpdateInput, EmailLogUncheckedUpdateInput>
  }

  /**
   * EmailLog delete
   */
  export type EmailLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogInclude<ExtArgs> | null
    /**
     * Filter which EmailLog to delete.
     */
    where: EmailLogWhereUniqueInput
  }

  /**
   * EmailLog deleteMany
   */
  export type EmailLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailLogs to delete
     */
    where?: EmailLogWhereInput
    /**
     * Limit how many EmailLogs to delete.
     */
    limit?: number
  }

  /**
   * EmailLog.user
   */
  export type EmailLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * EmailLog without action
   */
  export type EmailLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailLogInclude<ExtArgs> | null
  }


  /**
   * Model Setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    updatedAt: Date | null
    userId: string | null
  }

  export type SettingMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    updatedAt: Date | null
    userId: string | null
  }

  export type SettingCountAggregateOutputType = {
    id: number
    key: number
    value: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type SettingMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    updatedAt?: true
    userId?: true
  }

  export type SettingMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    updatedAt?: true
    userId?: true
  }

  export type SettingCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type SettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setting to aggregate.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type SettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithAggregationInput | SettingOrderByWithAggregationInput[]
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum
    having?: SettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }

  export type SettingGroupByOutputType = {
    id: string
    key: string
    value: string
    updatedAt: Date
    userId: string | null
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type SettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | Setting$userArgs<ExtArgs>
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | Setting$userArgs<ExtArgs>
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | Setting$userArgs<ExtArgs>
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type SettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "updatedAt" | "userId", ExtArgs["result"]["setting"]>
  export type SettingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Setting$userArgs<ExtArgs>
  }
  export type SettingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Setting$userArgs<ExtArgs>
  }
  export type SettingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Setting$userArgs<ExtArgs>
  }

  export type $SettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setting"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      updatedAt: Date
      userId: string | null
    }, ExtArgs["result"]["setting"]>
    composites: {}
  }

  type SettingGetPayload<S extends boolean | null | undefined | SettingDefaultArgs> = $Result.GetResult<Prisma.$SettingPayload, S>

  type SettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingCountAggregateInputType | true
    }

  export interface SettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setting'], meta: { name: 'Setting' } }
    /**
     * Find zero or one Setting that matches the filter.
     * @param {SettingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingFindUniqueArgs>(args: SelectSubset<T, SettingFindUniqueArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingFindFirstArgs>(args?: SelectSubset<T, SettingFindFirstArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingWithIdOnly = await prisma.setting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingFindManyArgs>(args?: SelectSubset<T, SettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setting.
     * @param {SettingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
     */
    create<T extends SettingCreateArgs>(args: SelectSubset<T, SettingCreateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingCreateManyArgs>(args?: SelectSubset<T, SettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingWithIdOnly = await prisma.setting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Setting.
     * @param {SettingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
     */
    delete<T extends SettingDeleteArgs>(args: SelectSubset<T, SettingDeleteArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setting.
     * @param {SettingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingUpdateArgs>(args: SelectSubset<T, SettingUpdateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingDeleteManyArgs>(args?: SelectSubset<T, SettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingUpdateManyArgs>(args: SelectSubset<T, SettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `id`
     * const settingWithIdOnly = await prisma.setting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SettingUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Setting.
     * @param {SettingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
     */
    upsert<T extends SettingUpsertArgs>(args: SelectSubset<T, SettingUpsertArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingCountArgs>(
      args?: Subset<T, SettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
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
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setting model
   */
  readonly fields: SettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Setting$userArgs<ExtArgs> = {}>(args?: Subset<T, Setting$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Setting model
   */
  interface SettingFieldRefs {
    readonly id: FieldRef<"Setting", 'String'>
    readonly key: FieldRef<"Setting", 'String'>
    readonly value: FieldRef<"Setting", 'String'>
    readonly updatedAt: FieldRef<"Setting", 'DateTime'>
    readonly userId: FieldRef<"Setting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Setting findUnique
   */
  export type SettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findUniqueOrThrow
   */
  export type SettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findFirst
   */
  export type SettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findFirstOrThrow
   */
  export type SettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findMany
   */
  export type SettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting create
   */
  export type SettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * The data needed to create a Setting.
     */
    data: XOR<SettingCreateInput, SettingUncheckedCreateInput>
  }

  /**
   * Setting createMany
   */
  export type SettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setting createManyAndReturn
   */
  export type SettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Setting update
   */
  export type SettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * The data needed to update a Setting.
     */
    data: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
    /**
     * Choose, which Setting to update.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting updateMany
   */
  export type SettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting updateManyAndReturn
   */
  export type SettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Setting upsert
   */
  export type SettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * The filter to search for the Setting to update in case it exists.
     */
    where: SettingWhereUniqueInput
    /**
     * In case the Setting found by the `where` argument doesn't exist, create a new Setting with this data.
     */
    create: XOR<SettingCreateInput, SettingUncheckedCreateInput>
    /**
     * In case the Setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
  }

  /**
   * Setting delete
   */
  export type SettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter which Setting to delete.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting deleteMany
   */
  export type SettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Setting.user
   */
  export type Setting$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Setting without action
   */
  export type SettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
  }


  /**
   * Model Contract
   */

  export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  export type ContractMinAggregateOutputType = {
    id: string | null
    leaseId: string | null
    filePath: string | null
    language: string | null
    generatedAt: Date | null
    generatedBy: string | null
  }

  export type ContractMaxAggregateOutputType = {
    id: string | null
    leaseId: string | null
    filePath: string | null
    language: string | null
    generatedAt: Date | null
    generatedBy: string | null
  }

  export type ContractCountAggregateOutputType = {
    id: number
    leaseId: number
    filePath: number
    language: number
    generatedAt: number
    generatedBy: number
    _all: number
  }


  export type ContractMinAggregateInputType = {
    id?: true
    leaseId?: true
    filePath?: true
    language?: true
    generatedAt?: true
    generatedBy?: true
  }

  export type ContractMaxAggregateInputType = {
    id?: true
    leaseId?: true
    filePath?: true
    language?: true
    generatedAt?: true
    generatedBy?: true
  }

  export type ContractCountAggregateInputType = {
    id?: true
    leaseId?: true
    filePath?: true
    language?: true
    generatedAt?: true
    generatedBy?: true
    _all?: true
  }

  export type ContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contract to aggregate.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contracts
    **/
    _count?: true | ContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractMaxAggregateInputType
  }

  export type GetContractAggregateType<T extends ContractAggregateArgs> = {
        [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract[P]>
      : GetScalarType<T[P], AggregateContract[P]>
  }




  export type ContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithAggregationInput | ContractOrderByWithAggregationInput[]
    by: ContractScalarFieldEnum[] | ContractScalarFieldEnum
    having?: ContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractCountAggregateInputType | true
    _min?: ContractMinAggregateInputType
    _max?: ContractMaxAggregateInputType
  }

  export type ContractGroupByOutputType = {
    id: string
    leaseId: string
    filePath: string
    language: string
    generatedAt: Date
    generatedBy: string | null
    _count: ContractCountAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  type GetContractGroupByPayload<T extends ContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractGroupByOutputType[P]>
            : GetScalarType<T[P], ContractGroupByOutputType[P]>
        }
      >
    >


  export type ContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaseId?: boolean
    filePath?: boolean
    language?: boolean
    generatedAt?: boolean
    generatedBy?: boolean
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
    user?: boolean | Contract$userArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaseId?: boolean
    filePath?: boolean
    language?: boolean
    generatedAt?: boolean
    generatedBy?: boolean
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
    user?: boolean | Contract$userArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaseId?: boolean
    filePath?: boolean
    language?: boolean
    generatedAt?: boolean
    generatedBy?: boolean
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
    user?: boolean | Contract$userArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectScalar = {
    id?: boolean
    leaseId?: boolean
    filePath?: boolean
    language?: boolean
    generatedAt?: boolean
    generatedBy?: boolean
  }

  export type ContractOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leaseId" | "filePath" | "language" | "generatedAt" | "generatedBy", ExtArgs["result"]["contract"]>
  export type ContractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
    user?: boolean | Contract$userArgs<ExtArgs>
  }
  export type ContractIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
    user?: boolean | Contract$userArgs<ExtArgs>
  }
  export type ContractIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
    user?: boolean | Contract$userArgs<ExtArgs>
  }

  export type $ContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contract"
    objects: {
      lease: Prisma.$LeasePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leaseId: string
      filePath: string
      language: string
      generatedAt: Date
      generatedBy: string | null
    }, ExtArgs["result"]["contract"]>
    composites: {}
  }

  type ContractGetPayload<S extends boolean | null | undefined | ContractDefaultArgs> = $Result.GetResult<Prisma.$ContractPayload, S>

  type ContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractCountAggregateInputType | true
    }

  export interface ContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contract'], meta: { name: 'Contract' } }
    /**
     * Find zero or one Contract that matches the filter.
     * @param {ContractFindUniqueArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractFindUniqueArgs>(args: SelectSubset<T, ContractFindUniqueArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contract that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractFindUniqueOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractFindFirstArgs>(args?: SelectSubset<T, ContractFindFirstArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contract.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractWithIdOnly = await prisma.contract.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractFindManyArgs>(args?: SelectSubset<T, ContractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contract.
     * @param {ContractCreateArgs} args - Arguments to create a Contract.
     * @example
     * // Create one Contract
     * const Contract = await prisma.contract.create({
     *   data: {
     *     // ... data to create a Contract
     *   }
     * })
     * 
     */
    create<T extends ContractCreateArgs>(args: SelectSubset<T, ContractCreateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contracts.
     * @param {ContractCreateManyArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractCreateManyArgs>(args?: SelectSubset<T, ContractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contracts and returns the data saved in the database.
     * @param {ContractCreateManyAndReturnArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contracts and only return the `id`
     * const contractWithIdOnly = await prisma.contract.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contract.
     * @param {ContractDeleteArgs} args - Arguments to delete one Contract.
     * @example
     * // Delete one Contract
     * const Contract = await prisma.contract.delete({
     *   where: {
     *     // ... filter to delete one Contract
     *   }
     * })
     * 
     */
    delete<T extends ContractDeleteArgs>(args: SelectSubset<T, ContractDeleteArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contract.
     * @param {ContractUpdateArgs} args - Arguments to update one Contract.
     * @example
     * // Update one Contract
     * const contract = await prisma.contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractUpdateArgs>(args: SelectSubset<T, ContractUpdateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contracts.
     * @param {ContractDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractDeleteManyArgs>(args?: SelectSubset<T, ContractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractUpdateManyArgs>(args: SelectSubset<T, ContractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts and returns the data updated in the database.
     * @param {ContractUpdateManyAndReturnArgs} args - Arguments to update many Contracts.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contracts and only return the `id`
     * const contractWithIdOnly = await prisma.contract.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContractUpdateManyAndReturnArgs>(args: SelectSubset<T, ContractUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contract.
     * @param {ContractUpsertArgs} args - Arguments to update or create a Contract.
     * @example
     * // Update or create a Contract
     * const contract = await prisma.contract.upsert({
     *   create: {
     *     // ... data to create a Contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract we want to update
     *   }
     * })
     */
    upsert<T extends ContractUpsertArgs>(args: SelectSubset<T, ContractUpsertArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contract.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends ContractCountArgs>(
      args?: Subset<T, ContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContractAggregateArgs>(args: Subset<T, ContractAggregateArgs>): Prisma.PrismaPromise<GetContractAggregateType<T>>

    /**
     * Group by Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGroupByArgs} args - Group by arguments.
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
      T extends ContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractGroupByArgs['orderBy'] }
        : { orderBy?: ContractGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contract model
   */
  readonly fields: ContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lease<T extends LeaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeaseDefaultArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Contract$userArgs<ExtArgs> = {}>(args?: Subset<T, Contract$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contract model
   */
  interface ContractFieldRefs {
    readonly id: FieldRef<"Contract", 'String'>
    readonly leaseId: FieldRef<"Contract", 'String'>
    readonly filePath: FieldRef<"Contract", 'String'>
    readonly language: FieldRef<"Contract", 'String'>
    readonly generatedAt: FieldRef<"Contract", 'DateTime'>
    readonly generatedBy: FieldRef<"Contract", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Contract findUnique
   */
  export type ContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findUniqueOrThrow
   */
  export type ContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findFirst
   */
  export type ContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findFirstOrThrow
   */
  export type ContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findMany
   */
  export type ContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract create
   */
  export type ContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to create a Contract.
     */
    data: XOR<ContractCreateInput, ContractUncheckedCreateInput>
  }

  /**
   * Contract createMany
   */
  export type ContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contract createManyAndReturn
   */
  export type ContractCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contract update
   */
  export type ContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to update a Contract.
     */
    data: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
    /**
     * Choose, which Contract to update.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract updateMany
   */
  export type ContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
  }

  /**
   * Contract updateManyAndReturn
   */
  export type ContractUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contract upsert
   */
  export type ContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The filter to search for the Contract to update in case it exists.
     */
    where: ContractWhereUniqueInput
    /**
     * In case the Contract found by the `where` argument doesn't exist, create a new Contract with this data.
     */
    create: XOR<ContractCreateInput, ContractUncheckedCreateInput>
    /**
     * In case the Contract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
  }

  /**
   * Contract delete
   */
  export type ContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter which Contract to delete.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract deleteMany
   */
  export type ContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to delete
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to delete.
     */
    limit?: number
  }

  /**
   * Contract.user
   */
  export type Contract$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Contract without action
   */
  export type ContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    phone: 'phone',
    preferredLanguage: 'preferredLanguage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChatConversationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ChatConversationScalarFieldEnum = (typeof ChatConversationScalarFieldEnum)[keyof typeof ChatConversationScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    role: 'role',
    content: 'content',
    createdAt: 'createdAt',
    userId: 'userId',
    conversationId: 'conversationId'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const UnitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    propertyName: 'propertyName',
    address: 'address',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    userId: 'userId',
    monthlyRent: 'monthlyRent'
  };

  export type UnitScalarFieldEnum = (typeof UnitScalarFieldEnum)[keyof typeof UnitScalarFieldEnum]


  export const TenantScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    phone: 'phone',
    email: 'email',
    idNumber: 'idNumber',
    emergencyContact: 'emergencyContact',
    emergencyPhone: 'emergencyPhone',
    notes: 'notes',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const LeaseScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    unitId: 'unitId',
    startDate: 'startDate',
    endDate: 'endDate',
    rentAmount: 'rentAmount',
    monthlyRent: 'monthlyRent',
    paymentFrequency: 'paymentFrequency',
    depositAmount: 'depositAmount',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeaseScalarFieldEnum = (typeof LeaseScalarFieldEnum)[keyof typeof LeaseScalarFieldEnum]


  export const RentPaymentScalarFieldEnum: {
    id: 'id',
    leaseId: 'leaseId',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    amountDue: 'amountDue',
    amountPaid: 'amountPaid',
    paymentDate: 'paymentDate',
    reminderDate: 'reminderDate',
    paymentMethod: 'paymentMethod',
    reference: 'reference',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type RentPaymentScalarFieldEnum = (typeof RentPaymentScalarFieldEnum)[keyof typeof RentPaymentScalarFieldEnum]


  export const PaymentReceiptScalarFieldEnum: {
    id: 'id',
    rentPaymentId: 'rentPaymentId',
    amount: 'amount',
    paymentDate: 'paymentDate',
    paymentMethod: 'paymentMethod',
    reference: 'reference',
    createdAt: 'createdAt'
  };

  export type PaymentReceiptScalarFieldEnum = (typeof PaymentReceiptScalarFieldEnum)[keyof typeof PaymentReceiptScalarFieldEnum]


  export const BillScalarFieldEnum: {
    id: 'id',
    leaseId: 'leaseId',
    billType: 'billType',
    description: 'description',
    amountDue: 'amountDue',
    amountPaid: 'amountPaid',
    dueDate: 'dueDate',
    paymentDate: 'paymentDate',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type BillScalarFieldEnum = (typeof BillScalarFieldEnum)[keyof typeof BillScalarFieldEnum]


  export const EmailLogScalarFieldEnum: {
    id: 'id',
    recipient: 'recipient',
    subject: 'subject',
    bodyPreview: 'bodyPreview',
    emailType: 'emailType',
    status: 'status',
    errorMessage: 'errorMessage',
    relatedId: 'relatedId',
    sentAt: 'sentAt',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type EmailLogScalarFieldEnum = (typeof EmailLogScalarFieldEnum)[keyof typeof EmailLogScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


  export const ContractScalarFieldEnum: {
    id: 'id',
    leaseId: 'leaseId',
    filePath: 'filePath',
    language: 'language',
    generatedAt: 'generatedAt',
    generatedBy: 'generatedBy'
  };

  export type ContractScalarFieldEnum = (typeof ContractScalarFieldEnum)[keyof typeof ContractScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'PaymentFrequency'
   */
  export type EnumPaymentFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentFrequency'>
    


  /**
   * Reference to a field of type 'PaymentFrequency[]'
   */
  export type ListEnumPaymentFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentFrequency[]'>
    


  /**
   * Reference to a field of type 'RecordStatus'
   */
  export type EnumRecordStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecordStatus'>
    


  /**
   * Reference to a field of type 'RecordStatus[]'
   */
  export type ListEnumRecordStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecordStatus[]'>
    


  /**
   * Reference to a field of type 'BillType'
   */
  export type EnumBillTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillType'>
    


  /**
   * Reference to a field of type 'BillType[]'
   */
  export type ListEnumBillTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    preferredLanguage?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emailLogs?: EmailLogListRelationFilter
    contracts?: ContractListRelationFilter
    settings?: SettingListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    chatConversations?: ChatConversationListRelationFilter
    units?: UnitListRelationFilter
    tenants?: TenantListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrderInput | SortOrder
    preferredLanguage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailLogs?: EmailLogOrderByRelationAggregateInput
    contracts?: ContractOrderByRelationAggregateInput
    settings?: SettingOrderByRelationAggregateInput
    chatMessages?: ChatMessageOrderByRelationAggregateInput
    chatConversations?: ChatConversationOrderByRelationAggregateInput
    units?: UnitOrderByRelationAggregateInput
    tenants?: TenantOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    preferredLanguage?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emailLogs?: EmailLogListRelationFilter
    contracts?: ContractListRelationFilter
    settings?: SettingListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    chatConversations?: ChatConversationListRelationFilter
    units?: UnitListRelationFilter
    tenants?: TenantListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrderInput | SortOrder
    preferredLanguage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    preferredLanguage?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ChatConversationWhereInput = {
    AND?: ChatConversationWhereInput | ChatConversationWhereInput[]
    OR?: ChatConversationWhereInput[]
    NOT?: ChatConversationWhereInput | ChatConversationWhereInput[]
    id?: StringFilter<"ChatConversation"> | string
    title?: StringFilter<"ChatConversation"> | string
    createdAt?: DateTimeFilter<"ChatConversation"> | Date | string
    updatedAt?: DateTimeFilter<"ChatConversation"> | Date | string
    userId?: StringFilter<"ChatConversation"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: ChatMessageListRelationFilter
  }

  export type ChatConversationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    messages?: ChatMessageOrderByRelationAggregateInput
  }

  export type ChatConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatConversationWhereInput | ChatConversationWhereInput[]
    OR?: ChatConversationWhereInput[]
    NOT?: ChatConversationWhereInput | ChatConversationWhereInput[]
    title?: StringFilter<"ChatConversation"> | string
    createdAt?: DateTimeFilter<"ChatConversation"> | Date | string
    updatedAt?: DateTimeFilter<"ChatConversation"> | Date | string
    userId?: StringFilter<"ChatConversation"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: ChatMessageListRelationFilter
  }, "id">

  export type ChatConversationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: ChatConversationCountOrderByAggregateInput
    _max?: ChatConversationMaxOrderByAggregateInput
    _min?: ChatConversationMinOrderByAggregateInput
  }

  export type ChatConversationScalarWhereWithAggregatesInput = {
    AND?: ChatConversationScalarWhereWithAggregatesInput | ChatConversationScalarWhereWithAggregatesInput[]
    OR?: ChatConversationScalarWhereWithAggregatesInput[]
    NOT?: ChatConversationScalarWhereWithAggregatesInput | ChatConversationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatConversation"> | string
    title?: StringWithAggregatesFilter<"ChatConversation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatConversation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatConversation"> | Date | string
    userId?: StringWithAggregatesFilter<"ChatConversation"> | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    userId?: StringFilter<"ChatMessage"> | string
    conversationId?: StringNullableFilter<"ChatMessage"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    conversation?: XOR<ChatConversationNullableScalarRelationFilter, ChatConversationWhereInput> | null
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    conversationId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    conversation?: ChatConversationOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    userId?: StringFilter<"ChatMessage"> | string
    conversationId?: StringNullableFilter<"ChatMessage"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    conversation?: XOR<ChatConversationNullableScalarRelationFilter, ChatConversationWhereInput> | null
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    conversationId?: SortOrderInput | SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    role?: StringWithAggregatesFilter<"ChatMessage"> | string
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
    userId?: StringWithAggregatesFilter<"ChatMessage"> | string
    conversationId?: StringNullableWithAggregatesFilter<"ChatMessage"> | string | null
  }

  export type UnitWhereInput = {
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    id?: StringFilter<"Unit"> | string
    name?: StringFilter<"Unit"> | string
    propertyName?: StringFilter<"Unit"> | string
    address?: StringNullableFilter<"Unit"> | string | null
    description?: StringNullableFilter<"Unit"> | string | null
    isActive?: BoolFilter<"Unit"> | boolean
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    userId?: StringNullableFilter<"Unit"> | string | null
    monthlyRent?: DecimalNullableFilter<"Unit"> | Decimal | DecimalJsLike | number | string | null
    leases?: LeaseListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type UnitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    propertyName?: SortOrder
    address?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    monthlyRent?: SortOrderInput | SortOrder
    leases?: LeaseOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type UnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    name?: StringFilter<"Unit"> | string
    propertyName?: StringFilter<"Unit"> | string
    address?: StringNullableFilter<"Unit"> | string | null
    description?: StringNullableFilter<"Unit"> | string | null
    isActive?: BoolFilter<"Unit"> | boolean
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    userId?: StringNullableFilter<"Unit"> | string | null
    monthlyRent?: DecimalNullableFilter<"Unit"> | Decimal | DecimalJsLike | number | string | null
    leases?: LeaseListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type UnitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    propertyName?: SortOrder
    address?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    monthlyRent?: SortOrderInput | SortOrder
    _count?: UnitCountOrderByAggregateInput
    _avg?: UnitAvgOrderByAggregateInput
    _max?: UnitMaxOrderByAggregateInput
    _min?: UnitMinOrderByAggregateInput
    _sum?: UnitSumOrderByAggregateInput
  }

  export type UnitScalarWhereWithAggregatesInput = {
    AND?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    OR?: UnitScalarWhereWithAggregatesInput[]
    NOT?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Unit"> | string
    name?: StringWithAggregatesFilter<"Unit"> | string
    propertyName?: StringWithAggregatesFilter<"Unit"> | string
    address?: StringNullableWithAggregatesFilter<"Unit"> | string | null
    description?: StringNullableWithAggregatesFilter<"Unit"> | string | null
    isActive?: BoolWithAggregatesFilter<"Unit"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Unit"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Unit"> | string | null
    monthlyRent?: DecimalNullableWithAggregatesFilter<"Unit"> | Decimal | DecimalJsLike | number | string | null
  }

  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    fullName?: StringFilter<"Tenant"> | string
    phone?: StringFilter<"Tenant"> | string
    email?: StringNullableFilter<"Tenant"> | string | null
    idNumber?: StringNullableFilter<"Tenant"> | string | null
    emergencyContact?: StringNullableFilter<"Tenant"> | string | null
    emergencyPhone?: StringNullableFilter<"Tenant"> | string | null
    notes?: StringNullableFilter<"Tenant"> | string | null
    isActive?: BoolFilter<"Tenant"> | boolean
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    userId?: StringNullableFilter<"Tenant"> | string | null
    leases?: LeaseListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    idNumber?: SortOrderInput | SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    emergencyPhone?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    leases?: LeaseOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    fullName?: StringFilter<"Tenant"> | string
    phone?: StringFilter<"Tenant"> | string
    email?: StringNullableFilter<"Tenant"> | string | null
    idNumber?: StringNullableFilter<"Tenant"> | string | null
    emergencyContact?: StringNullableFilter<"Tenant"> | string | null
    emergencyPhone?: StringNullableFilter<"Tenant"> | string | null
    notes?: StringNullableFilter<"Tenant"> | string | null
    isActive?: BoolFilter<"Tenant"> | boolean
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    userId?: StringNullableFilter<"Tenant"> | string | null
    leases?: LeaseListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    idNumber?: SortOrderInput | SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    emergencyPhone?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    fullName?: StringWithAggregatesFilter<"Tenant"> | string
    phone?: StringWithAggregatesFilter<"Tenant"> | string
    email?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    idNumber?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    emergencyContact?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    emergencyPhone?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    isActive?: BoolWithAggregatesFilter<"Tenant"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
  }

  export type LeaseWhereInput = {
    AND?: LeaseWhereInput | LeaseWhereInput[]
    OR?: LeaseWhereInput[]
    NOT?: LeaseWhereInput | LeaseWhereInput[]
    id?: StringFilter<"Lease"> | string
    tenantId?: StringFilter<"Lease"> | string
    unitId?: StringFilter<"Lease"> | string
    startDate?: DateTimeFilter<"Lease"> | Date | string
    endDate?: DateTimeFilter<"Lease"> | Date | string
    rentAmount?: DecimalFilter<"Lease"> | Decimal | DecimalJsLike | number | string
    monthlyRent?: DecimalFilter<"Lease"> | Decimal | DecimalJsLike | number | string
    paymentFrequency?: EnumPaymentFrequencyFilter<"Lease"> | $Enums.PaymentFrequency
    depositAmount?: DecimalFilter<"Lease"> | Decimal | DecimalJsLike | number | string
    status?: EnumRecordStatusFilter<"Lease"> | $Enums.RecordStatus
    notes?: StringNullableFilter<"Lease"> | string | null
    createdAt?: DateTimeFilter<"Lease"> | Date | string
    updatedAt?: DateTimeFilter<"Lease"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    rentPayments?: RentPaymentListRelationFilter
    bills?: BillListRelationFilter
    contracts?: ContractListRelationFilter
  }

  export type LeaseOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    unitId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    rentAmount?: SortOrder
    monthlyRent?: SortOrder
    paymentFrequency?: SortOrder
    depositAmount?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    unit?: UnitOrderByWithRelationInput
    rentPayments?: RentPaymentOrderByRelationAggregateInput
    bills?: BillOrderByRelationAggregateInput
    contracts?: ContractOrderByRelationAggregateInput
  }

  export type LeaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaseWhereInput | LeaseWhereInput[]
    OR?: LeaseWhereInput[]
    NOT?: LeaseWhereInput | LeaseWhereInput[]
    tenantId?: StringFilter<"Lease"> | string
    unitId?: StringFilter<"Lease"> | string
    startDate?: DateTimeFilter<"Lease"> | Date | string
    endDate?: DateTimeFilter<"Lease"> | Date | string
    rentAmount?: DecimalFilter<"Lease"> | Decimal | DecimalJsLike | number | string
    monthlyRent?: DecimalFilter<"Lease"> | Decimal | DecimalJsLike | number | string
    paymentFrequency?: EnumPaymentFrequencyFilter<"Lease"> | $Enums.PaymentFrequency
    depositAmount?: DecimalFilter<"Lease"> | Decimal | DecimalJsLike | number | string
    status?: EnumRecordStatusFilter<"Lease"> | $Enums.RecordStatus
    notes?: StringNullableFilter<"Lease"> | string | null
    createdAt?: DateTimeFilter<"Lease"> | Date | string
    updatedAt?: DateTimeFilter<"Lease"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    rentPayments?: RentPaymentListRelationFilter
    bills?: BillListRelationFilter
    contracts?: ContractListRelationFilter
  }, "id">

  export type LeaseOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    unitId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    rentAmount?: SortOrder
    monthlyRent?: SortOrder
    paymentFrequency?: SortOrder
    depositAmount?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeaseCountOrderByAggregateInput
    _avg?: LeaseAvgOrderByAggregateInput
    _max?: LeaseMaxOrderByAggregateInput
    _min?: LeaseMinOrderByAggregateInput
    _sum?: LeaseSumOrderByAggregateInput
  }

  export type LeaseScalarWhereWithAggregatesInput = {
    AND?: LeaseScalarWhereWithAggregatesInput | LeaseScalarWhereWithAggregatesInput[]
    OR?: LeaseScalarWhereWithAggregatesInput[]
    NOT?: LeaseScalarWhereWithAggregatesInput | LeaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lease"> | string
    tenantId?: StringWithAggregatesFilter<"Lease"> | string
    unitId?: StringWithAggregatesFilter<"Lease"> | string
    startDate?: DateTimeWithAggregatesFilter<"Lease"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Lease"> | Date | string
    rentAmount?: DecimalWithAggregatesFilter<"Lease"> | Decimal | DecimalJsLike | number | string
    monthlyRent?: DecimalWithAggregatesFilter<"Lease"> | Decimal | DecimalJsLike | number | string
    paymentFrequency?: EnumPaymentFrequencyWithAggregatesFilter<"Lease"> | $Enums.PaymentFrequency
    depositAmount?: DecimalWithAggregatesFilter<"Lease"> | Decimal | DecimalJsLike | number | string
    status?: EnumRecordStatusWithAggregatesFilter<"Lease"> | $Enums.RecordStatus
    notes?: StringNullableWithAggregatesFilter<"Lease"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Lease"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lease"> | Date | string
  }

  export type RentPaymentWhereInput = {
    AND?: RentPaymentWhereInput | RentPaymentWhereInput[]
    OR?: RentPaymentWhereInput[]
    NOT?: RentPaymentWhereInput | RentPaymentWhereInput[]
    id?: StringFilter<"RentPayment"> | string
    leaseId?: StringFilter<"RentPayment"> | string
    periodStart?: DateTimeFilter<"RentPayment"> | Date | string
    periodEnd?: DateTimeFilter<"RentPayment"> | Date | string
    amountDue?: DecimalFilter<"RentPayment"> | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFilter<"RentPayment"> | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeNullableFilter<"RentPayment"> | Date | string | null
    reminderDate?: DateTimeNullableFilter<"RentPayment"> | Date | string | null
    paymentMethod?: StringNullableFilter<"RentPayment"> | string | null
    reference?: StringNullableFilter<"RentPayment"> | string | null
    status?: EnumRecordStatusFilter<"RentPayment"> | $Enums.RecordStatus
    notes?: StringNullableFilter<"RentPayment"> | string | null
    createdAt?: DateTimeFilter<"RentPayment"> | Date | string
    lease?: XOR<LeaseScalarRelationFilter, LeaseWhereInput>
    receipts?: PaymentReceiptListRelationFilter
  }

  export type RentPaymentOrderByWithRelationInput = {
    id?: SortOrder
    leaseId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    paymentDate?: SortOrderInput | SortOrder
    reminderDate?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lease?: LeaseOrderByWithRelationInput
    receipts?: PaymentReceiptOrderByRelationAggregateInput
  }

  export type RentPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RentPaymentWhereInput | RentPaymentWhereInput[]
    OR?: RentPaymentWhereInput[]
    NOT?: RentPaymentWhereInput | RentPaymentWhereInput[]
    leaseId?: StringFilter<"RentPayment"> | string
    periodStart?: DateTimeFilter<"RentPayment"> | Date | string
    periodEnd?: DateTimeFilter<"RentPayment"> | Date | string
    amountDue?: DecimalFilter<"RentPayment"> | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFilter<"RentPayment"> | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeNullableFilter<"RentPayment"> | Date | string | null
    reminderDate?: DateTimeNullableFilter<"RentPayment"> | Date | string | null
    paymentMethod?: StringNullableFilter<"RentPayment"> | string | null
    reference?: StringNullableFilter<"RentPayment"> | string | null
    status?: EnumRecordStatusFilter<"RentPayment"> | $Enums.RecordStatus
    notes?: StringNullableFilter<"RentPayment"> | string | null
    createdAt?: DateTimeFilter<"RentPayment"> | Date | string
    lease?: XOR<LeaseScalarRelationFilter, LeaseWhereInput>
    receipts?: PaymentReceiptListRelationFilter
  }, "id">

  export type RentPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    leaseId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    paymentDate?: SortOrderInput | SortOrder
    reminderDate?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RentPaymentCountOrderByAggregateInput
    _avg?: RentPaymentAvgOrderByAggregateInput
    _max?: RentPaymentMaxOrderByAggregateInput
    _min?: RentPaymentMinOrderByAggregateInput
    _sum?: RentPaymentSumOrderByAggregateInput
  }

  export type RentPaymentScalarWhereWithAggregatesInput = {
    AND?: RentPaymentScalarWhereWithAggregatesInput | RentPaymentScalarWhereWithAggregatesInput[]
    OR?: RentPaymentScalarWhereWithAggregatesInput[]
    NOT?: RentPaymentScalarWhereWithAggregatesInput | RentPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RentPayment"> | string
    leaseId?: StringWithAggregatesFilter<"RentPayment"> | string
    periodStart?: DateTimeWithAggregatesFilter<"RentPayment"> | Date | string
    periodEnd?: DateTimeWithAggregatesFilter<"RentPayment"> | Date | string
    amountDue?: DecimalWithAggregatesFilter<"RentPayment"> | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalWithAggregatesFilter<"RentPayment"> | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeNullableWithAggregatesFilter<"RentPayment"> | Date | string | null
    reminderDate?: DateTimeNullableWithAggregatesFilter<"RentPayment"> | Date | string | null
    paymentMethod?: StringNullableWithAggregatesFilter<"RentPayment"> | string | null
    reference?: StringNullableWithAggregatesFilter<"RentPayment"> | string | null
    status?: EnumRecordStatusWithAggregatesFilter<"RentPayment"> | $Enums.RecordStatus
    notes?: StringNullableWithAggregatesFilter<"RentPayment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RentPayment"> | Date | string
  }

  export type PaymentReceiptWhereInput = {
    AND?: PaymentReceiptWhereInput | PaymentReceiptWhereInput[]
    OR?: PaymentReceiptWhereInput[]
    NOT?: PaymentReceiptWhereInput | PaymentReceiptWhereInput[]
    id?: StringFilter<"PaymentReceipt"> | string
    rentPaymentId?: StringFilter<"PaymentReceipt"> | string
    amount?: DecimalFilter<"PaymentReceipt"> | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFilter<"PaymentReceipt"> | Date | string
    paymentMethod?: StringNullableFilter<"PaymentReceipt"> | string | null
    reference?: StringNullableFilter<"PaymentReceipt"> | string | null
    createdAt?: DateTimeFilter<"PaymentReceipt"> | Date | string
    rentPayment?: XOR<RentPaymentScalarRelationFilter, RentPaymentWhereInput>
  }

  export type PaymentReceiptOrderByWithRelationInput = {
    id?: SortOrder
    rentPaymentId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    rentPayment?: RentPaymentOrderByWithRelationInput
  }

  export type PaymentReceiptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentReceiptWhereInput | PaymentReceiptWhereInput[]
    OR?: PaymentReceiptWhereInput[]
    NOT?: PaymentReceiptWhereInput | PaymentReceiptWhereInput[]
    rentPaymentId?: StringFilter<"PaymentReceipt"> | string
    amount?: DecimalFilter<"PaymentReceipt"> | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFilter<"PaymentReceipt"> | Date | string
    paymentMethod?: StringNullableFilter<"PaymentReceipt"> | string | null
    reference?: StringNullableFilter<"PaymentReceipt"> | string | null
    createdAt?: DateTimeFilter<"PaymentReceipt"> | Date | string
    rentPayment?: XOR<RentPaymentScalarRelationFilter, RentPaymentWhereInput>
  }, "id">

  export type PaymentReceiptOrderByWithAggregationInput = {
    id?: SortOrder
    rentPaymentId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PaymentReceiptCountOrderByAggregateInput
    _avg?: PaymentReceiptAvgOrderByAggregateInput
    _max?: PaymentReceiptMaxOrderByAggregateInput
    _min?: PaymentReceiptMinOrderByAggregateInput
    _sum?: PaymentReceiptSumOrderByAggregateInput
  }

  export type PaymentReceiptScalarWhereWithAggregatesInput = {
    AND?: PaymentReceiptScalarWhereWithAggregatesInput | PaymentReceiptScalarWhereWithAggregatesInput[]
    OR?: PaymentReceiptScalarWhereWithAggregatesInput[]
    NOT?: PaymentReceiptScalarWhereWithAggregatesInput | PaymentReceiptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentReceipt"> | string
    rentPaymentId?: StringWithAggregatesFilter<"PaymentReceipt"> | string
    amount?: DecimalWithAggregatesFilter<"PaymentReceipt"> | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeWithAggregatesFilter<"PaymentReceipt"> | Date | string
    paymentMethod?: StringNullableWithAggregatesFilter<"PaymentReceipt"> | string | null
    reference?: StringNullableWithAggregatesFilter<"PaymentReceipt"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PaymentReceipt"> | Date | string
  }

  export type BillWhereInput = {
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    id?: StringFilter<"Bill"> | string
    leaseId?: StringFilter<"Bill"> | string
    billType?: EnumBillTypeFilter<"Bill"> | $Enums.BillType
    description?: StringFilter<"Bill"> | string
    amountDue?: DecimalFilter<"Bill"> | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFilter<"Bill"> | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFilter<"Bill"> | Date | string
    paymentDate?: DateTimeNullableFilter<"Bill"> | Date | string | null
    status?: EnumRecordStatusFilter<"Bill"> | $Enums.RecordStatus
    createdAt?: DateTimeFilter<"Bill"> | Date | string
    lease?: XOR<LeaseScalarRelationFilter, LeaseWhereInput>
  }

  export type BillOrderByWithRelationInput = {
    id?: SortOrder
    leaseId?: SortOrder
    billType?: SortOrder
    description?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    dueDate?: SortOrder
    paymentDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    lease?: LeaseOrderByWithRelationInput
  }

  export type BillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    leaseId?: StringFilter<"Bill"> | string
    billType?: EnumBillTypeFilter<"Bill"> | $Enums.BillType
    description?: StringFilter<"Bill"> | string
    amountDue?: DecimalFilter<"Bill"> | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFilter<"Bill"> | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFilter<"Bill"> | Date | string
    paymentDate?: DateTimeNullableFilter<"Bill"> | Date | string | null
    status?: EnumRecordStatusFilter<"Bill"> | $Enums.RecordStatus
    createdAt?: DateTimeFilter<"Bill"> | Date | string
    lease?: XOR<LeaseScalarRelationFilter, LeaseWhereInput>
  }, "id">

  export type BillOrderByWithAggregationInput = {
    id?: SortOrder
    leaseId?: SortOrder
    billType?: SortOrder
    description?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    dueDate?: SortOrder
    paymentDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: BillCountOrderByAggregateInput
    _avg?: BillAvgOrderByAggregateInput
    _max?: BillMaxOrderByAggregateInput
    _min?: BillMinOrderByAggregateInput
    _sum?: BillSumOrderByAggregateInput
  }

  export type BillScalarWhereWithAggregatesInput = {
    AND?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    OR?: BillScalarWhereWithAggregatesInput[]
    NOT?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bill"> | string
    leaseId?: StringWithAggregatesFilter<"Bill"> | string
    billType?: EnumBillTypeWithAggregatesFilter<"Bill"> | $Enums.BillType
    description?: StringWithAggregatesFilter<"Bill"> | string
    amountDue?: DecimalWithAggregatesFilter<"Bill"> | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalWithAggregatesFilter<"Bill"> | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeWithAggregatesFilter<"Bill"> | Date | string
    paymentDate?: DateTimeNullableWithAggregatesFilter<"Bill"> | Date | string | null
    status?: EnumRecordStatusWithAggregatesFilter<"Bill"> | $Enums.RecordStatus
    createdAt?: DateTimeWithAggregatesFilter<"Bill"> | Date | string
  }

  export type EmailLogWhereInput = {
    AND?: EmailLogWhereInput | EmailLogWhereInput[]
    OR?: EmailLogWhereInput[]
    NOT?: EmailLogWhereInput | EmailLogWhereInput[]
    id?: StringFilter<"EmailLog"> | string
    recipient?: StringFilter<"EmailLog"> | string
    subject?: StringFilter<"EmailLog"> | string
    bodyPreview?: StringFilter<"EmailLog"> | string
    emailType?: StringFilter<"EmailLog"> | string
    status?: StringFilter<"EmailLog"> | string
    errorMessage?: StringNullableFilter<"EmailLog"> | string | null
    relatedId?: StringNullableFilter<"EmailLog"> | string | null
    sentAt?: DateTimeNullableFilter<"EmailLog"> | Date | string | null
    createdAt?: DateTimeFilter<"EmailLog"> | Date | string
    userId?: StringNullableFilter<"EmailLog"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type EmailLogOrderByWithRelationInput = {
    id?: SortOrder
    recipient?: SortOrder
    subject?: SortOrder
    bodyPreview?: SortOrder
    emailType?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    relatedId?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EmailLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmailLogWhereInput | EmailLogWhereInput[]
    OR?: EmailLogWhereInput[]
    NOT?: EmailLogWhereInput | EmailLogWhereInput[]
    recipient?: StringFilter<"EmailLog"> | string
    subject?: StringFilter<"EmailLog"> | string
    bodyPreview?: StringFilter<"EmailLog"> | string
    emailType?: StringFilter<"EmailLog"> | string
    status?: StringFilter<"EmailLog"> | string
    errorMessage?: StringNullableFilter<"EmailLog"> | string | null
    relatedId?: StringNullableFilter<"EmailLog"> | string | null
    sentAt?: DateTimeNullableFilter<"EmailLog"> | Date | string | null
    createdAt?: DateTimeFilter<"EmailLog"> | Date | string
    userId?: StringNullableFilter<"EmailLog"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type EmailLogOrderByWithAggregationInput = {
    id?: SortOrder
    recipient?: SortOrder
    subject?: SortOrder
    bodyPreview?: SortOrder
    emailType?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    relatedId?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: EmailLogCountOrderByAggregateInput
    _max?: EmailLogMaxOrderByAggregateInput
    _min?: EmailLogMinOrderByAggregateInput
  }

  export type EmailLogScalarWhereWithAggregatesInput = {
    AND?: EmailLogScalarWhereWithAggregatesInput | EmailLogScalarWhereWithAggregatesInput[]
    OR?: EmailLogScalarWhereWithAggregatesInput[]
    NOT?: EmailLogScalarWhereWithAggregatesInput | EmailLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailLog"> | string
    recipient?: StringWithAggregatesFilter<"EmailLog"> | string
    subject?: StringWithAggregatesFilter<"EmailLog"> | string
    bodyPreview?: StringWithAggregatesFilter<"EmailLog"> | string
    emailType?: StringWithAggregatesFilter<"EmailLog"> | string
    status?: StringWithAggregatesFilter<"EmailLog"> | string
    errorMessage?: StringNullableWithAggregatesFilter<"EmailLog"> | string | null
    relatedId?: StringNullableWithAggregatesFilter<"EmailLog"> | string | null
    sentAt?: DateTimeNullableWithAggregatesFilter<"EmailLog"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmailLog"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"EmailLog"> | string | null
  }

  export type SettingWhereInput = {
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    id?: StringFilter<"Setting"> | string
    key?: StringFilter<"Setting"> | string
    value?: StringFilter<"Setting"> | string
    updatedAt?: DateTimeFilter<"Setting"> | Date | string
    userId?: StringNullableFilter<"Setting"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type SettingOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key_userId?: SettingKeyUserIdCompoundUniqueInput
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    key?: StringFilter<"Setting"> | string
    value?: StringFilter<"Setting"> | string
    updatedAt?: DateTimeFilter<"Setting"> | Date | string
    userId?: StringNullableFilter<"Setting"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "key_userId">

  export type SettingOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: SettingCountOrderByAggregateInput
    _max?: SettingMaxOrderByAggregateInput
    _min?: SettingMinOrderByAggregateInput
  }

  export type SettingScalarWhereWithAggregatesInput = {
    AND?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    OR?: SettingScalarWhereWithAggregatesInput[]
    NOT?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Setting"> | string
    key?: StringWithAggregatesFilter<"Setting"> | string
    value?: StringWithAggregatesFilter<"Setting"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Setting"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Setting"> | string | null
  }

  export type ContractWhereInput = {
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    id?: StringFilter<"Contract"> | string
    leaseId?: StringFilter<"Contract"> | string
    filePath?: StringFilter<"Contract"> | string
    language?: StringFilter<"Contract"> | string
    generatedAt?: DateTimeFilter<"Contract"> | Date | string
    generatedBy?: StringNullableFilter<"Contract"> | string | null
    lease?: XOR<LeaseScalarRelationFilter, LeaseWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ContractOrderByWithRelationInput = {
    id?: SortOrder
    leaseId?: SortOrder
    filePath?: SortOrder
    language?: SortOrder
    generatedAt?: SortOrder
    generatedBy?: SortOrderInput | SortOrder
    lease?: LeaseOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ContractWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    leaseId?: StringFilter<"Contract"> | string
    filePath?: StringFilter<"Contract"> | string
    language?: StringFilter<"Contract"> | string
    generatedAt?: DateTimeFilter<"Contract"> | Date | string
    generatedBy?: StringNullableFilter<"Contract"> | string | null
    lease?: XOR<LeaseScalarRelationFilter, LeaseWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ContractOrderByWithAggregationInput = {
    id?: SortOrder
    leaseId?: SortOrder
    filePath?: SortOrder
    language?: SortOrder
    generatedAt?: SortOrder
    generatedBy?: SortOrderInput | SortOrder
    _count?: ContractCountOrderByAggregateInput
    _max?: ContractMaxOrderByAggregateInput
    _min?: ContractMinOrderByAggregateInput
  }

  export type ContractScalarWhereWithAggregatesInput = {
    AND?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    OR?: ContractScalarWhereWithAggregatesInput[]
    NOT?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contract"> | string
    leaseId?: StringWithAggregatesFilter<"Contract"> | string
    filePath?: StringWithAggregatesFilter<"Contract"> | string
    language?: StringWithAggregatesFilter<"Contract"> | string
    generatedAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    generatedBy?: StringNullableWithAggregatesFilter<"Contract"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    preferredLanguage?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailLogs?: EmailLogCreateNestedManyWithoutUserInput
    contracts?: ContractCreateNestedManyWithoutUserInput
    settings?: SettingCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    chatConversations?: ChatConversationCreateNestedManyWithoutUserInput
    units?: UnitCreateNestedManyWithoutUserInput
    tenants?: TenantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    preferredLanguage?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailLogs?: EmailLogUncheckedCreateNestedManyWithoutUserInput
    contracts?: ContractUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    chatConversations?: ChatConversationUncheckedCreateNestedManyWithoutUserInput
    units?: UnitUncheckedCreateNestedManyWithoutUserInput
    tenants?: TenantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailLogs?: EmailLogUpdateManyWithoutUserNestedInput
    contracts?: ContractUpdateManyWithoutUserNestedInput
    settings?: SettingUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    chatConversations?: ChatConversationUpdateManyWithoutUserNestedInput
    units?: UnitUpdateManyWithoutUserNestedInput
    tenants?: TenantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailLogs?: EmailLogUncheckedUpdateManyWithoutUserNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    chatConversations?: ChatConversationUncheckedUpdateManyWithoutUserNestedInput
    units?: UnitUncheckedUpdateManyWithoutUserNestedInput
    tenants?: TenantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    preferredLanguage?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatConversationCreateInput = {
    id?: string
    title?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChatConversationsInput
    messages?: ChatMessageCreateNestedManyWithoutConversationInput
  }

  export type ChatConversationUncheckedCreateInput = {
    id?: string
    title?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ChatConversationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatConversationsNestedInput
    messages?: ChatMessageUpdateManyWithoutConversationNestedInput
  }

  export type ChatConversationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    messages?: ChatMessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ChatConversationCreateManyInput = {
    id?: string
    title?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ChatConversationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatConversationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageCreateInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChatMessagesInput
    conversation?: ChatConversationCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
    userId: string
    conversationId?: string | null
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatMessagesNestedInput
    conversation?: ChatConversationUpdateOneWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
    userId: string
    conversationId?: string | null
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UnitCreateInput = {
    id?: string
    name: string
    propertyName: string
    address?: string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    monthlyRent?: Decimal | DecimalJsLike | number | string | null
    leases?: LeaseCreateNestedManyWithoutUnitInput
    user?: UserCreateNestedOneWithoutUnitsInput
  }

  export type UnitUncheckedCreateInput = {
    id?: string
    name: string
    propertyName: string
    address?: string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    userId?: string | null
    monthlyRent?: Decimal | DecimalJsLike | number | string | null
    leases?: LeaseUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propertyName?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    leases?: LeaseUpdateManyWithoutUnitNestedInput
    user?: UserUpdateOneWithoutUnitsNestedInput
  }

  export type UnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propertyName?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    leases?: LeaseUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitCreateManyInput = {
    id?: string
    name: string
    propertyName: string
    address?: string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    userId?: string | null
    monthlyRent?: Decimal | DecimalJsLike | number | string | null
  }

  export type UnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propertyName?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type UnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propertyName?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type TenantCreateInput = {
    id?: string
    fullName: string
    phone: string
    email?: string | null
    idNumber?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leases?: LeaseCreateNestedManyWithoutTenantInput
    user?: UserCreateNestedOneWithoutTenantsInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    fullName: string
    phone: string
    email?: string | null
    idNumber?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    leases?: LeaseUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leases?: LeaseUpdateManyWithoutTenantNestedInput
    user?: UserUpdateOneWithoutTenantsNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    leases?: LeaseUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    fullName: string
    phone: string
    email?: string | null
    idNumber?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaseCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string
    paymentFrequency?: $Enums.PaymentFrequency
    depositAmount?: Decimal | DecimalJsLike | number | string
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutLeasesInput
    unit: UnitCreateNestedOneWithoutLeasesInput
    rentPayments?: RentPaymentCreateNestedManyWithoutLeaseInput
    bills?: BillCreateNestedManyWithoutLeaseInput
    contracts?: ContractCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUncheckedCreateInput = {
    id?: string
    tenantId: string
    unitId: string
    startDate: Date | string
    endDate: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string
    paymentFrequency?: $Enums.PaymentFrequency
    depositAmount?: Decimal | DecimalJsLike | number | string
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rentPayments?: RentPaymentUncheckedCreateNestedManyWithoutLeaseInput
    bills?: BillUncheckedCreateNestedManyWithoutLeaseInput
    contracts?: ContractUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    depositAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutLeasesNestedInput
    unit?: UnitUpdateOneRequiredWithoutLeasesNestedInput
    rentPayments?: RentPaymentUpdateManyWithoutLeaseNestedInput
    bills?: BillUpdateManyWithoutLeaseNestedInput
    contracts?: ContractUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    depositAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentPayments?: RentPaymentUncheckedUpdateManyWithoutLeaseNestedInput
    bills?: BillUncheckedUpdateManyWithoutLeaseNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseCreateManyInput = {
    id?: string
    tenantId: string
    unitId: string
    startDate: Date | string
    endDate: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string
    paymentFrequency?: $Enums.PaymentFrequency
    depositAmount?: Decimal | DecimalJsLike | number | string
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    depositAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    depositAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentPaymentCreateInput = {
    id?: string
    periodStart: Date | string
    periodEnd: Date | string
    amountDue: Decimal | DecimalJsLike | number | string
    amountPaid?: Decimal | DecimalJsLike | number | string
    paymentDate?: Date | string | null
    reminderDate?: Date | string | null
    paymentMethod?: string | null
    reference?: string | null
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    lease: LeaseCreateNestedOneWithoutRentPaymentsInput
    receipts?: PaymentReceiptCreateNestedManyWithoutRentPaymentInput
  }

  export type RentPaymentUncheckedCreateInput = {
    id?: string
    leaseId: string
    periodStart: Date | string
    periodEnd: Date | string
    amountDue: Decimal | DecimalJsLike | number | string
    amountPaid?: Decimal | DecimalJsLike | number | string
    paymentDate?: Date | string | null
    reminderDate?: Date | string | null
    paymentMethod?: string | null
    reference?: string | null
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    receipts?: PaymentReceiptUncheckedCreateNestedManyWithoutRentPaymentInput
  }

  export type RentPaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    amountDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lease?: LeaseUpdateOneRequiredWithoutRentPaymentsNestedInput
    receipts?: PaymentReceiptUpdateManyWithoutRentPaymentNestedInput
  }

  export type RentPaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaseId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    amountDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receipts?: PaymentReceiptUncheckedUpdateManyWithoutRentPaymentNestedInput
  }

  export type RentPaymentCreateManyInput = {
    id?: string
    leaseId: string
    periodStart: Date | string
    periodEnd: Date | string
    amountDue: Decimal | DecimalJsLike | number | string
    amountPaid?: Decimal | DecimalJsLike | number | string
    paymentDate?: Date | string | null
    reminderDate?: Date | string | null
    paymentMethod?: string | null
    reference?: string | null
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type RentPaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    amountDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentPaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaseId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    amountDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentReceiptCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paymentDate?: Date | string
    paymentMethod?: string | null
    reference?: string | null
    createdAt?: Date | string
    rentPayment: RentPaymentCreateNestedOneWithoutReceiptsInput
  }

  export type PaymentReceiptUncheckedCreateInput = {
    id?: string
    rentPaymentId: string
    amount: Decimal | DecimalJsLike | number | string
    paymentDate?: Date | string
    paymentMethod?: string | null
    reference?: string | null
    createdAt?: Date | string
  }

  export type PaymentReceiptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentPayment?: RentPaymentUpdateOneRequiredWithoutReceiptsNestedInput
  }

  export type PaymentReceiptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rentPaymentId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentReceiptCreateManyInput = {
    id?: string
    rentPaymentId: string
    amount: Decimal | DecimalJsLike | number | string
    paymentDate?: Date | string
    paymentMethod?: string | null
    reference?: string | null
    createdAt?: Date | string
  }

  export type PaymentReceiptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentReceiptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rentPaymentId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillCreateInput = {
    id?: string
    billType: $Enums.BillType
    description: string
    amountDue: Decimal | DecimalJsLike | number | string
    amountPaid?: Decimal | DecimalJsLike | number | string
    dueDate: Date | string
    paymentDate?: Date | string | null
    status?: $Enums.RecordStatus
    createdAt?: Date | string
    lease: LeaseCreateNestedOneWithoutBillsInput
  }

  export type BillUncheckedCreateInput = {
    id?: string
    leaseId: string
    billType: $Enums.BillType
    description: string
    amountDue: Decimal | DecimalJsLike | number | string
    amountPaid?: Decimal | DecimalJsLike | number | string
    dueDate: Date | string
    paymentDate?: Date | string | null
    status?: $Enums.RecordStatus
    createdAt?: Date | string
  }

  export type BillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    billType?: EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType
    description?: StringFieldUpdateOperationsInput | string
    amountDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lease?: LeaseUpdateOneRequiredWithoutBillsNestedInput
  }

  export type BillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaseId?: StringFieldUpdateOperationsInput | string
    billType?: EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType
    description?: StringFieldUpdateOperationsInput | string
    amountDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillCreateManyInput = {
    id?: string
    leaseId: string
    billType: $Enums.BillType
    description: string
    amountDue: Decimal | DecimalJsLike | number | string
    amountPaid?: Decimal | DecimalJsLike | number | string
    dueDate: Date | string
    paymentDate?: Date | string | null
    status?: $Enums.RecordStatus
    createdAt?: Date | string
  }

  export type BillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    billType?: EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType
    description?: StringFieldUpdateOperationsInput | string
    amountDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaseId?: StringFieldUpdateOperationsInput | string
    billType?: EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType
    description?: StringFieldUpdateOperationsInput | string
    amountDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailLogCreateInput = {
    id?: string
    recipient: string
    subject: string
    bodyPreview: string
    emailType: string
    status: string
    errorMessage?: string | null
    relatedId?: string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutEmailLogsInput
  }

  export type EmailLogUncheckedCreateInput = {
    id?: string
    recipient: string
    subject: string
    bodyPreview: string
    emailType: string
    status: string
    errorMessage?: string | null
    relatedId?: string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    userId?: string | null
  }

  export type EmailLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    bodyPreview?: StringFieldUpdateOperationsInput | string
    emailType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    relatedId?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutEmailLogsNestedInput
  }

  export type EmailLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    bodyPreview?: StringFieldUpdateOperationsInput | string
    emailType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    relatedId?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailLogCreateManyInput = {
    id?: string
    recipient: string
    subject: string
    bodyPreview: string
    emailType: string
    status: string
    errorMessage?: string | null
    relatedId?: string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
    userId?: string | null
  }

  export type EmailLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    bodyPreview?: StringFieldUpdateOperationsInput | string
    emailType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    relatedId?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    bodyPreview?: StringFieldUpdateOperationsInput | string
    emailType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    relatedId?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingCreateInput = {
    id?: string
    key: string
    value: string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutSettingsInput
  }

  export type SettingUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type SettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSettingsNestedInput
  }

  export type SettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingCreateManyInput = {
    id?: string
    key: string
    value: string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type SettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContractCreateInput = {
    id?: string
    filePath: string
    language: string
    generatedAt?: Date | string
    lease: LeaseCreateNestedOneWithoutContractsInput
    user?: UserCreateNestedOneWithoutContractsInput
  }

  export type ContractUncheckedCreateInput = {
    id?: string
    leaseId: string
    filePath: string
    language: string
    generatedAt?: Date | string
    generatedBy?: string | null
  }

  export type ContractUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lease?: LeaseUpdateOneRequiredWithoutContractsNestedInput
    user?: UserUpdateOneWithoutContractsNestedInput
  }

  export type ContractUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaseId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContractCreateManyInput = {
    id?: string
    leaseId: string
    filePath: string
    language: string
    generatedAt?: Date | string
    generatedBy?: string | null
  }

  export type ContractUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaseId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EmailLogListRelationFilter = {
    every?: EmailLogWhereInput
    some?: EmailLogWhereInput
    none?: EmailLogWhereInput
  }

  export type ContractListRelationFilter = {
    every?: ContractWhereInput
    some?: ContractWhereInput
    none?: ContractWhereInput
  }

  export type SettingListRelationFilter = {
    every?: SettingWhereInput
    some?: SettingWhereInput
    none?: SettingWhereInput
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type ChatConversationListRelationFilter = {
    every?: ChatConversationWhereInput
    some?: ChatConversationWhereInput
    none?: ChatConversationWhereInput
  }

  export type UnitListRelationFilter = {
    every?: UnitWhereInput
    some?: UnitWhereInput
    none?: UnitWhereInput
  }

  export type TenantListRelationFilter = {
    every?: TenantWhereInput
    some?: TenantWhereInput
    none?: TenantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmailLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SettingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    preferredLanguage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    preferredLanguage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    preferredLanguage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChatConversationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ChatConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ChatConversationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ChatConversationNullableScalarRelationFilter = {
    is?: ChatConversationWhereInput | null
    isNot?: ChatConversationWhereInput | null
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    conversationId?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    conversationId?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    conversationId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type LeaseListRelationFilter = {
    every?: LeaseWhereInput
    some?: LeaseWhereInput
    none?: LeaseWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type LeaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    propertyName?: SortOrder
    address?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    monthlyRent?: SortOrder
  }

  export type UnitAvgOrderByAggregateInput = {
    monthlyRent?: SortOrder
  }

  export type UnitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    propertyName?: SortOrder
    address?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    monthlyRent?: SortOrder
  }

  export type UnitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    propertyName?: SortOrder
    address?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    monthlyRent?: SortOrder
  }

  export type UnitSumOrderByAggregateInput = {
    monthlyRent?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    idNumber?: SortOrder
    emergencyContact?: SortOrder
    emergencyPhone?: SortOrder
    notes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    idNumber?: SortOrder
    emergencyContact?: SortOrder
    emergencyPhone?: SortOrder
    notes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    idNumber?: SortOrder
    emergencyContact?: SortOrder
    emergencyPhone?: SortOrder
    notes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentFrequency | EnumPaymentFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentFrequencyFilter<$PrismaModel> | $Enums.PaymentFrequency
  }

  export type EnumRecordStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordStatus | EnumRecordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecordStatus[] | ListEnumRecordStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecordStatus[] | ListEnumRecordStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecordStatusFilter<$PrismaModel> | $Enums.RecordStatus
  }

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type UnitScalarRelationFilter = {
    is?: UnitWhereInput
    isNot?: UnitWhereInput
  }

  export type RentPaymentListRelationFilter = {
    every?: RentPaymentWhereInput
    some?: RentPaymentWhereInput
    none?: RentPaymentWhereInput
  }

  export type BillListRelationFilter = {
    every?: BillWhereInput
    some?: BillWhereInput
    none?: BillWhereInput
  }

  export type RentPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaseCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    unitId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    rentAmount?: SortOrder
    monthlyRent?: SortOrder
    paymentFrequency?: SortOrder
    depositAmount?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaseAvgOrderByAggregateInput = {
    rentAmount?: SortOrder
    monthlyRent?: SortOrder
    depositAmount?: SortOrder
  }

  export type LeaseMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    unitId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    rentAmount?: SortOrder
    monthlyRent?: SortOrder
    paymentFrequency?: SortOrder
    depositAmount?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaseMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    unitId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    rentAmount?: SortOrder
    monthlyRent?: SortOrder
    paymentFrequency?: SortOrder
    depositAmount?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaseSumOrderByAggregateInput = {
    rentAmount?: SortOrder
    monthlyRent?: SortOrder
    depositAmount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumPaymentFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentFrequency | EnumPaymentFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.PaymentFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentFrequencyFilter<$PrismaModel>
    _max?: NestedEnumPaymentFrequencyFilter<$PrismaModel>
  }

  export type EnumRecordStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordStatus | EnumRecordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecordStatus[] | ListEnumRecordStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecordStatus[] | ListEnumRecordStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecordStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecordStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecordStatusFilter<$PrismaModel>
    _max?: NestedEnumRecordStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type LeaseScalarRelationFilter = {
    is?: LeaseWhereInput
    isNot?: LeaseWhereInput
  }

  export type PaymentReceiptListRelationFilter = {
    every?: PaymentReceiptWhereInput
    some?: PaymentReceiptWhereInput
    none?: PaymentReceiptWhereInput
  }

  export type PaymentReceiptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RentPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    leaseId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    paymentDate?: SortOrder
    reminderDate?: SortOrder
    paymentMethod?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type RentPaymentAvgOrderByAggregateInput = {
    amountDue?: SortOrder
    amountPaid?: SortOrder
  }

  export type RentPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    leaseId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    paymentDate?: SortOrder
    reminderDate?: SortOrder
    paymentMethod?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type RentPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    leaseId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    paymentDate?: SortOrder
    reminderDate?: SortOrder
    paymentMethod?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type RentPaymentSumOrderByAggregateInput = {
    amountDue?: SortOrder
    amountPaid?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type RentPaymentScalarRelationFilter = {
    is?: RentPaymentWhereInput
    isNot?: RentPaymentWhereInput
  }

  export type PaymentReceiptCountOrderByAggregateInput = {
    id?: SortOrder
    rentPaymentId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentReceiptAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentReceiptMaxOrderByAggregateInput = {
    id?: SortOrder
    rentPaymentId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentReceiptMinOrderByAggregateInput = {
    id?: SortOrder
    rentPaymentId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentReceiptSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumBillTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BillType | EnumBillTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BillType[] | ListEnumBillTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillType[] | ListEnumBillTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBillTypeFilter<$PrismaModel> | $Enums.BillType
  }

  export type BillCountOrderByAggregateInput = {
    id?: SortOrder
    leaseId?: SortOrder
    billType?: SortOrder
    description?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    dueDate?: SortOrder
    paymentDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BillAvgOrderByAggregateInput = {
    amountDue?: SortOrder
    amountPaid?: SortOrder
  }

  export type BillMaxOrderByAggregateInput = {
    id?: SortOrder
    leaseId?: SortOrder
    billType?: SortOrder
    description?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    dueDate?: SortOrder
    paymentDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BillMinOrderByAggregateInput = {
    id?: SortOrder
    leaseId?: SortOrder
    billType?: SortOrder
    description?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    dueDate?: SortOrder
    paymentDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BillSumOrderByAggregateInput = {
    amountDue?: SortOrder
    amountPaid?: SortOrder
  }

  export type EnumBillTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillType | EnumBillTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BillType[] | ListEnumBillTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillType[] | ListEnumBillTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBillTypeWithAggregatesFilter<$PrismaModel> | $Enums.BillType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillTypeFilter<$PrismaModel>
    _max?: NestedEnumBillTypeFilter<$PrismaModel>
  }

  export type EmailLogCountOrderByAggregateInput = {
    id?: SortOrder
    recipient?: SortOrder
    subject?: SortOrder
    bodyPreview?: SortOrder
    emailType?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    relatedId?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type EmailLogMaxOrderByAggregateInput = {
    id?: SortOrder
    recipient?: SortOrder
    subject?: SortOrder
    bodyPreview?: SortOrder
    emailType?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    relatedId?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type EmailLogMinOrderByAggregateInput = {
    id?: SortOrder
    recipient?: SortOrder
    subject?: SortOrder
    bodyPreview?: SortOrder
    emailType?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    relatedId?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type SettingKeyUserIdCompoundUniqueInput = {
    key: string
    userId: string
  }

  export type SettingCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SettingMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SettingMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ContractCountOrderByAggregateInput = {
    id?: SortOrder
    leaseId?: SortOrder
    filePath?: SortOrder
    language?: SortOrder
    generatedAt?: SortOrder
    generatedBy?: SortOrder
  }

  export type ContractMaxOrderByAggregateInput = {
    id?: SortOrder
    leaseId?: SortOrder
    filePath?: SortOrder
    language?: SortOrder
    generatedAt?: SortOrder
    generatedBy?: SortOrder
  }

  export type ContractMinOrderByAggregateInput = {
    id?: SortOrder
    leaseId?: SortOrder
    filePath?: SortOrder
    language?: SortOrder
    generatedAt?: SortOrder
    generatedBy?: SortOrder
  }

  export type EmailLogCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailLogCreateWithoutUserInput, EmailLogUncheckedCreateWithoutUserInput> | EmailLogCreateWithoutUserInput[] | EmailLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailLogCreateOrConnectWithoutUserInput | EmailLogCreateOrConnectWithoutUserInput[]
    createMany?: EmailLogCreateManyUserInputEnvelope
    connect?: EmailLogWhereUniqueInput | EmailLogWhereUniqueInput[]
  }

  export type ContractCreateNestedManyWithoutUserInput = {
    create?: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput> | ContractCreateWithoutUserInput[] | ContractUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutUserInput | ContractCreateOrConnectWithoutUserInput[]
    createMany?: ContractCreateManyUserInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type SettingCreateNestedManyWithoutUserInput = {
    create?: XOR<SettingCreateWithoutUserInput, SettingUncheckedCreateWithoutUserInput> | SettingCreateWithoutUserInput[] | SettingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SettingCreateOrConnectWithoutUserInput | SettingCreateOrConnectWithoutUserInput[]
    createMany?: SettingCreateManyUserInputEnvelope
    connect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatConversationCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatConversationCreateWithoutUserInput, ChatConversationUncheckedCreateWithoutUserInput> | ChatConversationCreateWithoutUserInput[] | ChatConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatConversationCreateOrConnectWithoutUserInput | ChatConversationCreateOrConnectWithoutUserInput[]
    createMany?: ChatConversationCreateManyUserInputEnvelope
    connect?: ChatConversationWhereUniqueInput | ChatConversationWhereUniqueInput[]
  }

  export type UnitCreateNestedManyWithoutUserInput = {
    create?: XOR<UnitCreateWithoutUserInput, UnitUncheckedCreateWithoutUserInput> | UnitCreateWithoutUserInput[] | UnitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutUserInput | UnitCreateOrConnectWithoutUserInput[]
    createMany?: UnitCreateManyUserInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type TenantCreateNestedManyWithoutUserInput = {
    create?: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput> | TenantCreateWithoutUserInput[] | TenantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TenantCreateOrConnectWithoutUserInput | TenantCreateOrConnectWithoutUserInput[]
    createMany?: TenantCreateManyUserInputEnvelope
    connect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
  }

  export type EmailLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailLogCreateWithoutUserInput, EmailLogUncheckedCreateWithoutUserInput> | EmailLogCreateWithoutUserInput[] | EmailLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailLogCreateOrConnectWithoutUserInput | EmailLogCreateOrConnectWithoutUserInput[]
    createMany?: EmailLogCreateManyUserInputEnvelope
    connect?: EmailLogWhereUniqueInput | EmailLogWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput> | ContractCreateWithoutUserInput[] | ContractUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutUserInput | ContractCreateOrConnectWithoutUserInput[]
    createMany?: ContractCreateManyUserInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type SettingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SettingCreateWithoutUserInput, SettingUncheckedCreateWithoutUserInput> | SettingCreateWithoutUserInput[] | SettingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SettingCreateOrConnectWithoutUserInput | SettingCreateOrConnectWithoutUserInput[]
    createMany?: SettingCreateManyUserInputEnvelope
    connect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatConversationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatConversationCreateWithoutUserInput, ChatConversationUncheckedCreateWithoutUserInput> | ChatConversationCreateWithoutUserInput[] | ChatConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatConversationCreateOrConnectWithoutUserInput | ChatConversationCreateOrConnectWithoutUserInput[]
    createMany?: ChatConversationCreateManyUserInputEnvelope
    connect?: ChatConversationWhereUniqueInput | ChatConversationWhereUniqueInput[]
  }

  export type UnitUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UnitCreateWithoutUserInput, UnitUncheckedCreateWithoutUserInput> | UnitCreateWithoutUserInput[] | UnitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutUserInput | UnitCreateOrConnectWithoutUserInput[]
    createMany?: UnitCreateManyUserInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type TenantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput> | TenantCreateWithoutUserInput[] | TenantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TenantCreateOrConnectWithoutUserInput | TenantCreateOrConnectWithoutUserInput[]
    createMany?: TenantCreateManyUserInputEnvelope
    connect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmailLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailLogCreateWithoutUserInput, EmailLogUncheckedCreateWithoutUserInput> | EmailLogCreateWithoutUserInput[] | EmailLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailLogCreateOrConnectWithoutUserInput | EmailLogCreateOrConnectWithoutUserInput[]
    upsert?: EmailLogUpsertWithWhereUniqueWithoutUserInput | EmailLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailLogCreateManyUserInputEnvelope
    set?: EmailLogWhereUniqueInput | EmailLogWhereUniqueInput[]
    disconnect?: EmailLogWhereUniqueInput | EmailLogWhereUniqueInput[]
    delete?: EmailLogWhereUniqueInput | EmailLogWhereUniqueInput[]
    connect?: EmailLogWhereUniqueInput | EmailLogWhereUniqueInput[]
    update?: EmailLogUpdateWithWhereUniqueWithoutUserInput | EmailLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailLogUpdateManyWithWhereWithoutUserInput | EmailLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailLogScalarWhereInput | EmailLogScalarWhereInput[]
  }

  export type ContractUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput> | ContractCreateWithoutUserInput[] | ContractUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutUserInput | ContractCreateOrConnectWithoutUserInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutUserInput | ContractUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContractCreateManyUserInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutUserInput | ContractUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutUserInput | ContractUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type SettingUpdateManyWithoutUserNestedInput = {
    create?: XOR<SettingCreateWithoutUserInput, SettingUncheckedCreateWithoutUserInput> | SettingCreateWithoutUserInput[] | SettingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SettingCreateOrConnectWithoutUserInput | SettingCreateOrConnectWithoutUserInput[]
    upsert?: SettingUpsertWithWhereUniqueWithoutUserInput | SettingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SettingCreateManyUserInputEnvelope
    set?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    disconnect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    delete?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    connect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    update?: SettingUpdateWithWhereUniqueWithoutUserInput | SettingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SettingUpdateManyWithWhereWithoutUserInput | SettingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SettingScalarWhereInput | SettingScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatConversationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatConversationCreateWithoutUserInput, ChatConversationUncheckedCreateWithoutUserInput> | ChatConversationCreateWithoutUserInput[] | ChatConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatConversationCreateOrConnectWithoutUserInput | ChatConversationCreateOrConnectWithoutUserInput[]
    upsert?: ChatConversationUpsertWithWhereUniqueWithoutUserInput | ChatConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatConversationCreateManyUserInputEnvelope
    set?: ChatConversationWhereUniqueInput | ChatConversationWhereUniqueInput[]
    disconnect?: ChatConversationWhereUniqueInput | ChatConversationWhereUniqueInput[]
    delete?: ChatConversationWhereUniqueInput | ChatConversationWhereUniqueInput[]
    connect?: ChatConversationWhereUniqueInput | ChatConversationWhereUniqueInput[]
    update?: ChatConversationUpdateWithWhereUniqueWithoutUserInput | ChatConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatConversationUpdateManyWithWhereWithoutUserInput | ChatConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatConversationScalarWhereInput | ChatConversationScalarWhereInput[]
  }

  export type UnitUpdateManyWithoutUserNestedInput = {
    create?: XOR<UnitCreateWithoutUserInput, UnitUncheckedCreateWithoutUserInput> | UnitCreateWithoutUserInput[] | UnitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutUserInput | UnitCreateOrConnectWithoutUserInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutUserInput | UnitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UnitCreateManyUserInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutUserInput | UnitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutUserInput | UnitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type TenantUpdateManyWithoutUserNestedInput = {
    create?: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput> | TenantCreateWithoutUserInput[] | TenantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TenantCreateOrConnectWithoutUserInput | TenantCreateOrConnectWithoutUserInput[]
    upsert?: TenantUpsertWithWhereUniqueWithoutUserInput | TenantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TenantCreateManyUserInputEnvelope
    set?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    disconnect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    delete?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    connect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    update?: TenantUpdateWithWhereUniqueWithoutUserInput | TenantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TenantUpdateManyWithWhereWithoutUserInput | TenantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TenantScalarWhereInput | TenantScalarWhereInput[]
  }

  export type EmailLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailLogCreateWithoutUserInput, EmailLogUncheckedCreateWithoutUserInput> | EmailLogCreateWithoutUserInput[] | EmailLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailLogCreateOrConnectWithoutUserInput | EmailLogCreateOrConnectWithoutUserInput[]
    upsert?: EmailLogUpsertWithWhereUniqueWithoutUserInput | EmailLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailLogCreateManyUserInputEnvelope
    set?: EmailLogWhereUniqueInput | EmailLogWhereUniqueInput[]
    disconnect?: EmailLogWhereUniqueInput | EmailLogWhereUniqueInput[]
    delete?: EmailLogWhereUniqueInput | EmailLogWhereUniqueInput[]
    connect?: EmailLogWhereUniqueInput | EmailLogWhereUniqueInput[]
    update?: EmailLogUpdateWithWhereUniqueWithoutUserInput | EmailLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailLogUpdateManyWithWhereWithoutUserInput | EmailLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailLogScalarWhereInput | EmailLogScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput> | ContractCreateWithoutUserInput[] | ContractUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutUserInput | ContractCreateOrConnectWithoutUserInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutUserInput | ContractUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContractCreateManyUserInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutUserInput | ContractUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutUserInput | ContractUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type SettingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SettingCreateWithoutUserInput, SettingUncheckedCreateWithoutUserInput> | SettingCreateWithoutUserInput[] | SettingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SettingCreateOrConnectWithoutUserInput | SettingCreateOrConnectWithoutUserInput[]
    upsert?: SettingUpsertWithWhereUniqueWithoutUserInput | SettingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SettingCreateManyUserInputEnvelope
    set?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    disconnect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    delete?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    connect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    update?: SettingUpdateWithWhereUniqueWithoutUserInput | SettingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SettingUpdateManyWithWhereWithoutUserInput | SettingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SettingScalarWhereInput | SettingScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatConversationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatConversationCreateWithoutUserInput, ChatConversationUncheckedCreateWithoutUserInput> | ChatConversationCreateWithoutUserInput[] | ChatConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatConversationCreateOrConnectWithoutUserInput | ChatConversationCreateOrConnectWithoutUserInput[]
    upsert?: ChatConversationUpsertWithWhereUniqueWithoutUserInput | ChatConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatConversationCreateManyUserInputEnvelope
    set?: ChatConversationWhereUniqueInput | ChatConversationWhereUniqueInput[]
    disconnect?: ChatConversationWhereUniqueInput | ChatConversationWhereUniqueInput[]
    delete?: ChatConversationWhereUniqueInput | ChatConversationWhereUniqueInput[]
    connect?: ChatConversationWhereUniqueInput | ChatConversationWhereUniqueInput[]
    update?: ChatConversationUpdateWithWhereUniqueWithoutUserInput | ChatConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatConversationUpdateManyWithWhereWithoutUserInput | ChatConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatConversationScalarWhereInput | ChatConversationScalarWhereInput[]
  }

  export type UnitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UnitCreateWithoutUserInput, UnitUncheckedCreateWithoutUserInput> | UnitCreateWithoutUserInput[] | UnitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutUserInput | UnitCreateOrConnectWithoutUserInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutUserInput | UnitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UnitCreateManyUserInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutUserInput | UnitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutUserInput | UnitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type TenantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput> | TenantCreateWithoutUserInput[] | TenantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TenantCreateOrConnectWithoutUserInput | TenantCreateOrConnectWithoutUserInput[]
    upsert?: TenantUpsertWithWhereUniqueWithoutUserInput | TenantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TenantCreateManyUserInputEnvelope
    set?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    disconnect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    delete?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    connect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    update?: TenantUpdateWithWhereUniqueWithoutUserInput | TenantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TenantUpdateManyWithWhereWithoutUserInput | TenantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TenantScalarWhereInput | TenantScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChatConversationsInput = {
    create?: XOR<UserCreateWithoutChatConversationsInput, UserUncheckedCreateWithoutChatConversationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatConversationsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatMessageCreateNestedManyWithoutConversationInput = {
    create?: XOR<ChatMessageCreateWithoutConversationInput, ChatMessageUncheckedCreateWithoutConversationInput> | ChatMessageCreateWithoutConversationInput[] | ChatMessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutConversationInput | ChatMessageCreateOrConnectWithoutConversationInput[]
    createMany?: ChatMessageCreateManyConversationInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<ChatMessageCreateWithoutConversationInput, ChatMessageUncheckedCreateWithoutConversationInput> | ChatMessageCreateWithoutConversationInput[] | ChatMessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutConversationInput | ChatMessageCreateOrConnectWithoutConversationInput[]
    createMany?: ChatMessageCreateManyConversationInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutChatConversationsNestedInput = {
    create?: XOR<UserCreateWithoutChatConversationsInput, UserUncheckedCreateWithoutChatConversationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatConversationsInput
    upsert?: UserUpsertWithoutChatConversationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatConversationsInput, UserUpdateWithoutChatConversationsInput>, UserUncheckedUpdateWithoutChatConversationsInput>
  }

  export type ChatMessageUpdateManyWithoutConversationNestedInput = {
    create?: XOR<ChatMessageCreateWithoutConversationInput, ChatMessageUncheckedCreateWithoutConversationInput> | ChatMessageCreateWithoutConversationInput[] | ChatMessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutConversationInput | ChatMessageCreateOrConnectWithoutConversationInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutConversationInput | ChatMessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: ChatMessageCreateManyConversationInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutConversationInput | ChatMessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutConversationInput | ChatMessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<ChatMessageCreateWithoutConversationInput, ChatMessageUncheckedCreateWithoutConversationInput> | ChatMessageCreateWithoutConversationInput[] | ChatMessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutConversationInput | ChatMessageCreateOrConnectWithoutConversationInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutConversationInput | ChatMessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: ChatMessageCreateManyConversationInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutConversationInput | ChatMessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutConversationInput | ChatMessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ChatConversationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatConversationCreateWithoutMessagesInput, ChatConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatConversationCreateOrConnectWithoutMessagesInput
    connect?: ChatConversationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChatMessagesNestedInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    upsert?: UserUpsertWithoutChatMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatMessagesInput, UserUpdateWithoutChatMessagesInput>, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type ChatConversationUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<ChatConversationCreateWithoutMessagesInput, ChatConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatConversationCreateOrConnectWithoutMessagesInput
    upsert?: ChatConversationUpsertWithoutMessagesInput
    disconnect?: ChatConversationWhereInput | boolean
    delete?: ChatConversationWhereInput | boolean
    connect?: ChatConversationWhereUniqueInput
    update?: XOR<XOR<ChatConversationUpdateToOneWithWhereWithoutMessagesInput, ChatConversationUpdateWithoutMessagesInput>, ChatConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type LeaseCreateNestedManyWithoutUnitInput = {
    create?: XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput> | LeaseCreateWithoutUnitInput[] | LeaseUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutUnitInput | LeaseCreateOrConnectWithoutUnitInput[]
    createMany?: LeaseCreateManyUnitInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutUnitsInput = {
    create?: XOR<UserCreateWithoutUnitsInput, UserUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUnitsInput
    connect?: UserWhereUniqueInput
  }

  export type LeaseUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput> | LeaseCreateWithoutUnitInput[] | LeaseUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutUnitInput | LeaseCreateOrConnectWithoutUnitInput[]
    createMany?: LeaseCreateManyUnitInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type LeaseUpdateManyWithoutUnitNestedInput = {
    create?: XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput> | LeaseCreateWithoutUnitInput[] | LeaseUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutUnitInput | LeaseCreateOrConnectWithoutUnitInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutUnitInput | LeaseUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: LeaseCreateManyUnitInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutUnitInput | LeaseUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutUnitInput | LeaseUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type UserUpdateOneWithoutUnitsNestedInput = {
    create?: XOR<UserCreateWithoutUnitsInput, UserUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUnitsInput
    upsert?: UserUpsertWithoutUnitsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUnitsInput, UserUpdateWithoutUnitsInput>, UserUncheckedUpdateWithoutUnitsInput>
  }

  export type LeaseUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput> | LeaseCreateWithoutUnitInput[] | LeaseUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutUnitInput | LeaseCreateOrConnectWithoutUnitInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutUnitInput | LeaseUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: LeaseCreateManyUnitInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutUnitInput | LeaseUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutUnitInput | LeaseUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type LeaseCreateNestedManyWithoutTenantInput = {
    create?: XOR<LeaseCreateWithoutTenantInput, LeaseUncheckedCreateWithoutTenantInput> | LeaseCreateWithoutTenantInput[] | LeaseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutTenantInput | LeaseCreateOrConnectWithoutTenantInput[]
    createMany?: LeaseCreateManyTenantInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutTenantsInput = {
    create?: XOR<UserCreateWithoutTenantsInput, UserUncheckedCreateWithoutTenantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTenantsInput
    connect?: UserWhereUniqueInput
  }

  export type LeaseUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<LeaseCreateWithoutTenantInput, LeaseUncheckedCreateWithoutTenantInput> | LeaseCreateWithoutTenantInput[] | LeaseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutTenantInput | LeaseCreateOrConnectWithoutTenantInput[]
    createMany?: LeaseCreateManyTenantInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type LeaseUpdateManyWithoutTenantNestedInput = {
    create?: XOR<LeaseCreateWithoutTenantInput, LeaseUncheckedCreateWithoutTenantInput> | LeaseCreateWithoutTenantInput[] | LeaseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutTenantInput | LeaseCreateOrConnectWithoutTenantInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutTenantInput | LeaseUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: LeaseCreateManyTenantInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutTenantInput | LeaseUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutTenantInput | LeaseUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type UserUpdateOneWithoutTenantsNestedInput = {
    create?: XOR<UserCreateWithoutTenantsInput, UserUncheckedCreateWithoutTenantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTenantsInput
    upsert?: UserUpsertWithoutTenantsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTenantsInput, UserUpdateWithoutTenantsInput>, UserUncheckedUpdateWithoutTenantsInput>
  }

  export type LeaseUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<LeaseCreateWithoutTenantInput, LeaseUncheckedCreateWithoutTenantInput> | LeaseCreateWithoutTenantInput[] | LeaseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutTenantInput | LeaseCreateOrConnectWithoutTenantInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutTenantInput | LeaseUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: LeaseCreateManyTenantInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutTenantInput | LeaseUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutTenantInput | LeaseUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutLeasesInput = {
    create?: XOR<TenantCreateWithoutLeasesInput, TenantUncheckedCreateWithoutLeasesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutLeasesInput
    connect?: TenantWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutLeasesInput = {
    create?: XOR<UnitCreateWithoutLeasesInput, UnitUncheckedCreateWithoutLeasesInput>
    connectOrCreate?: UnitCreateOrConnectWithoutLeasesInput
    connect?: UnitWhereUniqueInput
  }

  export type RentPaymentCreateNestedManyWithoutLeaseInput = {
    create?: XOR<RentPaymentCreateWithoutLeaseInput, RentPaymentUncheckedCreateWithoutLeaseInput> | RentPaymentCreateWithoutLeaseInput[] | RentPaymentUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: RentPaymentCreateOrConnectWithoutLeaseInput | RentPaymentCreateOrConnectWithoutLeaseInput[]
    createMany?: RentPaymentCreateManyLeaseInputEnvelope
    connect?: RentPaymentWhereUniqueInput | RentPaymentWhereUniqueInput[]
  }

  export type BillCreateNestedManyWithoutLeaseInput = {
    create?: XOR<BillCreateWithoutLeaseInput, BillUncheckedCreateWithoutLeaseInput> | BillCreateWithoutLeaseInput[] | BillUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: BillCreateOrConnectWithoutLeaseInput | BillCreateOrConnectWithoutLeaseInput[]
    createMany?: BillCreateManyLeaseInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type ContractCreateNestedManyWithoutLeaseInput = {
    create?: XOR<ContractCreateWithoutLeaseInput, ContractUncheckedCreateWithoutLeaseInput> | ContractCreateWithoutLeaseInput[] | ContractUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutLeaseInput | ContractCreateOrConnectWithoutLeaseInput[]
    createMany?: ContractCreateManyLeaseInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type RentPaymentUncheckedCreateNestedManyWithoutLeaseInput = {
    create?: XOR<RentPaymentCreateWithoutLeaseInput, RentPaymentUncheckedCreateWithoutLeaseInput> | RentPaymentCreateWithoutLeaseInput[] | RentPaymentUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: RentPaymentCreateOrConnectWithoutLeaseInput | RentPaymentCreateOrConnectWithoutLeaseInput[]
    createMany?: RentPaymentCreateManyLeaseInputEnvelope
    connect?: RentPaymentWhereUniqueInput | RentPaymentWhereUniqueInput[]
  }

  export type BillUncheckedCreateNestedManyWithoutLeaseInput = {
    create?: XOR<BillCreateWithoutLeaseInput, BillUncheckedCreateWithoutLeaseInput> | BillCreateWithoutLeaseInput[] | BillUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: BillCreateOrConnectWithoutLeaseInput | BillCreateOrConnectWithoutLeaseInput[]
    createMany?: BillCreateManyLeaseInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutLeaseInput = {
    create?: XOR<ContractCreateWithoutLeaseInput, ContractUncheckedCreateWithoutLeaseInput> | ContractCreateWithoutLeaseInput[] | ContractUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutLeaseInput | ContractCreateOrConnectWithoutLeaseInput[]
    createMany?: ContractCreateManyLeaseInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.PaymentFrequency
  }

  export type EnumRecordStatusFieldUpdateOperationsInput = {
    set?: $Enums.RecordStatus
  }

  export type TenantUpdateOneRequiredWithoutLeasesNestedInput = {
    create?: XOR<TenantCreateWithoutLeasesInput, TenantUncheckedCreateWithoutLeasesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutLeasesInput
    upsert?: TenantUpsertWithoutLeasesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutLeasesInput, TenantUpdateWithoutLeasesInput>, TenantUncheckedUpdateWithoutLeasesInput>
  }

  export type UnitUpdateOneRequiredWithoutLeasesNestedInput = {
    create?: XOR<UnitCreateWithoutLeasesInput, UnitUncheckedCreateWithoutLeasesInput>
    connectOrCreate?: UnitCreateOrConnectWithoutLeasesInput
    upsert?: UnitUpsertWithoutLeasesInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutLeasesInput, UnitUpdateWithoutLeasesInput>, UnitUncheckedUpdateWithoutLeasesInput>
  }

  export type RentPaymentUpdateManyWithoutLeaseNestedInput = {
    create?: XOR<RentPaymentCreateWithoutLeaseInput, RentPaymentUncheckedCreateWithoutLeaseInput> | RentPaymentCreateWithoutLeaseInput[] | RentPaymentUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: RentPaymentCreateOrConnectWithoutLeaseInput | RentPaymentCreateOrConnectWithoutLeaseInput[]
    upsert?: RentPaymentUpsertWithWhereUniqueWithoutLeaseInput | RentPaymentUpsertWithWhereUniqueWithoutLeaseInput[]
    createMany?: RentPaymentCreateManyLeaseInputEnvelope
    set?: RentPaymentWhereUniqueInput | RentPaymentWhereUniqueInput[]
    disconnect?: RentPaymentWhereUniqueInput | RentPaymentWhereUniqueInput[]
    delete?: RentPaymentWhereUniqueInput | RentPaymentWhereUniqueInput[]
    connect?: RentPaymentWhereUniqueInput | RentPaymentWhereUniqueInput[]
    update?: RentPaymentUpdateWithWhereUniqueWithoutLeaseInput | RentPaymentUpdateWithWhereUniqueWithoutLeaseInput[]
    updateMany?: RentPaymentUpdateManyWithWhereWithoutLeaseInput | RentPaymentUpdateManyWithWhereWithoutLeaseInput[]
    deleteMany?: RentPaymentScalarWhereInput | RentPaymentScalarWhereInput[]
  }

  export type BillUpdateManyWithoutLeaseNestedInput = {
    create?: XOR<BillCreateWithoutLeaseInput, BillUncheckedCreateWithoutLeaseInput> | BillCreateWithoutLeaseInput[] | BillUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: BillCreateOrConnectWithoutLeaseInput | BillCreateOrConnectWithoutLeaseInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutLeaseInput | BillUpsertWithWhereUniqueWithoutLeaseInput[]
    createMany?: BillCreateManyLeaseInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutLeaseInput | BillUpdateWithWhereUniqueWithoutLeaseInput[]
    updateMany?: BillUpdateManyWithWhereWithoutLeaseInput | BillUpdateManyWithWhereWithoutLeaseInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type ContractUpdateManyWithoutLeaseNestedInput = {
    create?: XOR<ContractCreateWithoutLeaseInput, ContractUncheckedCreateWithoutLeaseInput> | ContractCreateWithoutLeaseInput[] | ContractUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutLeaseInput | ContractCreateOrConnectWithoutLeaseInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutLeaseInput | ContractUpsertWithWhereUniqueWithoutLeaseInput[]
    createMany?: ContractCreateManyLeaseInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutLeaseInput | ContractUpdateWithWhereUniqueWithoutLeaseInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutLeaseInput | ContractUpdateManyWithWhereWithoutLeaseInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type RentPaymentUncheckedUpdateManyWithoutLeaseNestedInput = {
    create?: XOR<RentPaymentCreateWithoutLeaseInput, RentPaymentUncheckedCreateWithoutLeaseInput> | RentPaymentCreateWithoutLeaseInput[] | RentPaymentUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: RentPaymentCreateOrConnectWithoutLeaseInput | RentPaymentCreateOrConnectWithoutLeaseInput[]
    upsert?: RentPaymentUpsertWithWhereUniqueWithoutLeaseInput | RentPaymentUpsertWithWhereUniqueWithoutLeaseInput[]
    createMany?: RentPaymentCreateManyLeaseInputEnvelope
    set?: RentPaymentWhereUniqueInput | RentPaymentWhereUniqueInput[]
    disconnect?: RentPaymentWhereUniqueInput | RentPaymentWhereUniqueInput[]
    delete?: RentPaymentWhereUniqueInput | RentPaymentWhereUniqueInput[]
    connect?: RentPaymentWhereUniqueInput | RentPaymentWhereUniqueInput[]
    update?: RentPaymentUpdateWithWhereUniqueWithoutLeaseInput | RentPaymentUpdateWithWhereUniqueWithoutLeaseInput[]
    updateMany?: RentPaymentUpdateManyWithWhereWithoutLeaseInput | RentPaymentUpdateManyWithWhereWithoutLeaseInput[]
    deleteMany?: RentPaymentScalarWhereInput | RentPaymentScalarWhereInput[]
  }

  export type BillUncheckedUpdateManyWithoutLeaseNestedInput = {
    create?: XOR<BillCreateWithoutLeaseInput, BillUncheckedCreateWithoutLeaseInput> | BillCreateWithoutLeaseInput[] | BillUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: BillCreateOrConnectWithoutLeaseInput | BillCreateOrConnectWithoutLeaseInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutLeaseInput | BillUpsertWithWhereUniqueWithoutLeaseInput[]
    createMany?: BillCreateManyLeaseInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutLeaseInput | BillUpdateWithWhereUniqueWithoutLeaseInput[]
    updateMany?: BillUpdateManyWithWhereWithoutLeaseInput | BillUpdateManyWithWhereWithoutLeaseInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutLeaseNestedInput = {
    create?: XOR<ContractCreateWithoutLeaseInput, ContractUncheckedCreateWithoutLeaseInput> | ContractCreateWithoutLeaseInput[] | ContractUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutLeaseInput | ContractCreateOrConnectWithoutLeaseInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutLeaseInput | ContractUpsertWithWhereUniqueWithoutLeaseInput[]
    createMany?: ContractCreateManyLeaseInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutLeaseInput | ContractUpdateWithWhereUniqueWithoutLeaseInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutLeaseInput | ContractUpdateManyWithWhereWithoutLeaseInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type LeaseCreateNestedOneWithoutRentPaymentsInput = {
    create?: XOR<LeaseCreateWithoutRentPaymentsInput, LeaseUncheckedCreateWithoutRentPaymentsInput>
    connectOrCreate?: LeaseCreateOrConnectWithoutRentPaymentsInput
    connect?: LeaseWhereUniqueInput
  }

  export type PaymentReceiptCreateNestedManyWithoutRentPaymentInput = {
    create?: XOR<PaymentReceiptCreateWithoutRentPaymentInput, PaymentReceiptUncheckedCreateWithoutRentPaymentInput> | PaymentReceiptCreateWithoutRentPaymentInput[] | PaymentReceiptUncheckedCreateWithoutRentPaymentInput[]
    connectOrCreate?: PaymentReceiptCreateOrConnectWithoutRentPaymentInput | PaymentReceiptCreateOrConnectWithoutRentPaymentInput[]
    createMany?: PaymentReceiptCreateManyRentPaymentInputEnvelope
    connect?: PaymentReceiptWhereUniqueInput | PaymentReceiptWhereUniqueInput[]
  }

  export type PaymentReceiptUncheckedCreateNestedManyWithoutRentPaymentInput = {
    create?: XOR<PaymentReceiptCreateWithoutRentPaymentInput, PaymentReceiptUncheckedCreateWithoutRentPaymentInput> | PaymentReceiptCreateWithoutRentPaymentInput[] | PaymentReceiptUncheckedCreateWithoutRentPaymentInput[]
    connectOrCreate?: PaymentReceiptCreateOrConnectWithoutRentPaymentInput | PaymentReceiptCreateOrConnectWithoutRentPaymentInput[]
    createMany?: PaymentReceiptCreateManyRentPaymentInputEnvelope
    connect?: PaymentReceiptWhereUniqueInput | PaymentReceiptWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type LeaseUpdateOneRequiredWithoutRentPaymentsNestedInput = {
    create?: XOR<LeaseCreateWithoutRentPaymentsInput, LeaseUncheckedCreateWithoutRentPaymentsInput>
    connectOrCreate?: LeaseCreateOrConnectWithoutRentPaymentsInput
    upsert?: LeaseUpsertWithoutRentPaymentsInput
    connect?: LeaseWhereUniqueInput
    update?: XOR<XOR<LeaseUpdateToOneWithWhereWithoutRentPaymentsInput, LeaseUpdateWithoutRentPaymentsInput>, LeaseUncheckedUpdateWithoutRentPaymentsInput>
  }

  export type PaymentReceiptUpdateManyWithoutRentPaymentNestedInput = {
    create?: XOR<PaymentReceiptCreateWithoutRentPaymentInput, PaymentReceiptUncheckedCreateWithoutRentPaymentInput> | PaymentReceiptCreateWithoutRentPaymentInput[] | PaymentReceiptUncheckedCreateWithoutRentPaymentInput[]
    connectOrCreate?: PaymentReceiptCreateOrConnectWithoutRentPaymentInput | PaymentReceiptCreateOrConnectWithoutRentPaymentInput[]
    upsert?: PaymentReceiptUpsertWithWhereUniqueWithoutRentPaymentInput | PaymentReceiptUpsertWithWhereUniqueWithoutRentPaymentInput[]
    createMany?: PaymentReceiptCreateManyRentPaymentInputEnvelope
    set?: PaymentReceiptWhereUniqueInput | PaymentReceiptWhereUniqueInput[]
    disconnect?: PaymentReceiptWhereUniqueInput | PaymentReceiptWhereUniqueInput[]
    delete?: PaymentReceiptWhereUniqueInput | PaymentReceiptWhereUniqueInput[]
    connect?: PaymentReceiptWhereUniqueInput | PaymentReceiptWhereUniqueInput[]
    update?: PaymentReceiptUpdateWithWhereUniqueWithoutRentPaymentInput | PaymentReceiptUpdateWithWhereUniqueWithoutRentPaymentInput[]
    updateMany?: PaymentReceiptUpdateManyWithWhereWithoutRentPaymentInput | PaymentReceiptUpdateManyWithWhereWithoutRentPaymentInput[]
    deleteMany?: PaymentReceiptScalarWhereInput | PaymentReceiptScalarWhereInput[]
  }

  export type PaymentReceiptUncheckedUpdateManyWithoutRentPaymentNestedInput = {
    create?: XOR<PaymentReceiptCreateWithoutRentPaymentInput, PaymentReceiptUncheckedCreateWithoutRentPaymentInput> | PaymentReceiptCreateWithoutRentPaymentInput[] | PaymentReceiptUncheckedCreateWithoutRentPaymentInput[]
    connectOrCreate?: PaymentReceiptCreateOrConnectWithoutRentPaymentInput | PaymentReceiptCreateOrConnectWithoutRentPaymentInput[]
    upsert?: PaymentReceiptUpsertWithWhereUniqueWithoutRentPaymentInput | PaymentReceiptUpsertWithWhereUniqueWithoutRentPaymentInput[]
    createMany?: PaymentReceiptCreateManyRentPaymentInputEnvelope
    set?: PaymentReceiptWhereUniqueInput | PaymentReceiptWhereUniqueInput[]
    disconnect?: PaymentReceiptWhereUniqueInput | PaymentReceiptWhereUniqueInput[]
    delete?: PaymentReceiptWhereUniqueInput | PaymentReceiptWhereUniqueInput[]
    connect?: PaymentReceiptWhereUniqueInput | PaymentReceiptWhereUniqueInput[]
    update?: PaymentReceiptUpdateWithWhereUniqueWithoutRentPaymentInput | PaymentReceiptUpdateWithWhereUniqueWithoutRentPaymentInput[]
    updateMany?: PaymentReceiptUpdateManyWithWhereWithoutRentPaymentInput | PaymentReceiptUpdateManyWithWhereWithoutRentPaymentInput[]
    deleteMany?: PaymentReceiptScalarWhereInput | PaymentReceiptScalarWhereInput[]
  }

  export type RentPaymentCreateNestedOneWithoutReceiptsInput = {
    create?: XOR<RentPaymentCreateWithoutReceiptsInput, RentPaymentUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: RentPaymentCreateOrConnectWithoutReceiptsInput
    connect?: RentPaymentWhereUniqueInput
  }

  export type RentPaymentUpdateOneRequiredWithoutReceiptsNestedInput = {
    create?: XOR<RentPaymentCreateWithoutReceiptsInput, RentPaymentUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: RentPaymentCreateOrConnectWithoutReceiptsInput
    upsert?: RentPaymentUpsertWithoutReceiptsInput
    connect?: RentPaymentWhereUniqueInput
    update?: XOR<XOR<RentPaymentUpdateToOneWithWhereWithoutReceiptsInput, RentPaymentUpdateWithoutReceiptsInput>, RentPaymentUncheckedUpdateWithoutReceiptsInput>
  }

  export type LeaseCreateNestedOneWithoutBillsInput = {
    create?: XOR<LeaseCreateWithoutBillsInput, LeaseUncheckedCreateWithoutBillsInput>
    connectOrCreate?: LeaseCreateOrConnectWithoutBillsInput
    connect?: LeaseWhereUniqueInput
  }

  export type EnumBillTypeFieldUpdateOperationsInput = {
    set?: $Enums.BillType
  }

  export type LeaseUpdateOneRequiredWithoutBillsNestedInput = {
    create?: XOR<LeaseCreateWithoutBillsInput, LeaseUncheckedCreateWithoutBillsInput>
    connectOrCreate?: LeaseCreateOrConnectWithoutBillsInput
    upsert?: LeaseUpsertWithoutBillsInput
    connect?: LeaseWhereUniqueInput
    update?: XOR<XOR<LeaseUpdateToOneWithWhereWithoutBillsInput, LeaseUpdateWithoutBillsInput>, LeaseUncheckedUpdateWithoutBillsInput>
  }

  export type UserCreateNestedOneWithoutEmailLogsInput = {
    create?: XOR<UserCreateWithoutEmailLogsInput, UserUncheckedCreateWithoutEmailLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutEmailLogsNestedInput = {
    create?: XOR<UserCreateWithoutEmailLogsInput, UserUncheckedCreateWithoutEmailLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailLogsInput
    upsert?: UserUpsertWithoutEmailLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmailLogsInput, UserUpdateWithoutEmailLogsInput>, UserUncheckedUpdateWithoutEmailLogsInput>
  }

  export type UserCreateNestedOneWithoutSettingsInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutSettingsNestedInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    upsert?: UserUpsertWithoutSettingsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettingsInput, UserUpdateWithoutSettingsInput>, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type LeaseCreateNestedOneWithoutContractsInput = {
    create?: XOR<LeaseCreateWithoutContractsInput, LeaseUncheckedCreateWithoutContractsInput>
    connectOrCreate?: LeaseCreateOrConnectWithoutContractsInput
    connect?: LeaseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutContractsInput = {
    create?: XOR<UserCreateWithoutContractsInput, UserUncheckedCreateWithoutContractsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContractsInput
    connect?: UserWhereUniqueInput
  }

  export type LeaseUpdateOneRequiredWithoutContractsNestedInput = {
    create?: XOR<LeaseCreateWithoutContractsInput, LeaseUncheckedCreateWithoutContractsInput>
    connectOrCreate?: LeaseCreateOrConnectWithoutContractsInput
    upsert?: LeaseUpsertWithoutContractsInput
    connect?: LeaseWhereUniqueInput
    update?: XOR<XOR<LeaseUpdateToOneWithWhereWithoutContractsInput, LeaseUpdateWithoutContractsInput>, LeaseUncheckedUpdateWithoutContractsInput>
  }

  export type UserUpdateOneWithoutContractsNestedInput = {
    create?: XOR<UserCreateWithoutContractsInput, UserUncheckedCreateWithoutContractsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContractsInput
    upsert?: UserUpsertWithoutContractsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContractsInput, UserUpdateWithoutContractsInput>, UserUncheckedUpdateWithoutContractsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumPaymentFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentFrequency | EnumPaymentFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentFrequencyFilter<$PrismaModel> | $Enums.PaymentFrequency
  }

  export type NestedEnumRecordStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordStatus | EnumRecordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecordStatus[] | ListEnumRecordStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecordStatus[] | ListEnumRecordStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecordStatusFilter<$PrismaModel> | $Enums.RecordStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumPaymentFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentFrequency | EnumPaymentFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.PaymentFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentFrequencyFilter<$PrismaModel>
    _max?: NestedEnumPaymentFrequencyFilter<$PrismaModel>
  }

  export type NestedEnumRecordStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordStatus | EnumRecordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecordStatus[] | ListEnumRecordStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecordStatus[] | ListEnumRecordStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecordStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecordStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecordStatusFilter<$PrismaModel>
    _max?: NestedEnumRecordStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumBillTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BillType | EnumBillTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BillType[] | ListEnumBillTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillType[] | ListEnumBillTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBillTypeFilter<$PrismaModel> | $Enums.BillType
  }

  export type NestedEnumBillTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillType | EnumBillTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BillType[] | ListEnumBillTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillType[] | ListEnumBillTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBillTypeWithAggregatesFilter<$PrismaModel> | $Enums.BillType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillTypeFilter<$PrismaModel>
    _max?: NestedEnumBillTypeFilter<$PrismaModel>
  }

  export type EmailLogCreateWithoutUserInput = {
    id?: string
    recipient: string
    subject: string
    bodyPreview: string
    emailType: string
    status: string
    errorMessage?: string | null
    relatedId?: string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
  }

  export type EmailLogUncheckedCreateWithoutUserInput = {
    id?: string
    recipient: string
    subject: string
    bodyPreview: string
    emailType: string
    status: string
    errorMessage?: string | null
    relatedId?: string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
  }

  export type EmailLogCreateOrConnectWithoutUserInput = {
    where: EmailLogWhereUniqueInput
    create: XOR<EmailLogCreateWithoutUserInput, EmailLogUncheckedCreateWithoutUserInput>
  }

  export type EmailLogCreateManyUserInputEnvelope = {
    data: EmailLogCreateManyUserInput | EmailLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContractCreateWithoutUserInput = {
    id?: string
    filePath: string
    language: string
    generatedAt?: Date | string
    lease: LeaseCreateNestedOneWithoutContractsInput
  }

  export type ContractUncheckedCreateWithoutUserInput = {
    id?: string
    leaseId: string
    filePath: string
    language: string
    generatedAt?: Date | string
  }

  export type ContractCreateOrConnectWithoutUserInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput>
  }

  export type ContractCreateManyUserInputEnvelope = {
    data: ContractCreateManyUserInput | ContractCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SettingCreateWithoutUserInput = {
    id?: string
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SettingUncheckedCreateWithoutUserInput = {
    id?: string
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SettingCreateOrConnectWithoutUserInput = {
    where: SettingWhereUniqueInput
    create: XOR<SettingCreateWithoutUserInput, SettingUncheckedCreateWithoutUserInput>
  }

  export type SettingCreateManyUserInputEnvelope = {
    data: SettingCreateManyUserInput | SettingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutUserInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
    conversation?: ChatConversationCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutUserInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
    conversationId?: string | null
  }

  export type ChatMessageCreateOrConnectWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageCreateManyUserInputEnvelope = {
    data: ChatMessageCreateManyUserInput | ChatMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatConversationCreateWithoutUserInput = {
    id?: string
    title?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageCreateNestedManyWithoutConversationInput
  }

  export type ChatConversationUncheckedCreateWithoutUserInput = {
    id?: string
    title?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ChatConversationCreateOrConnectWithoutUserInput = {
    where: ChatConversationWhereUniqueInput
    create: XOR<ChatConversationCreateWithoutUserInput, ChatConversationUncheckedCreateWithoutUserInput>
  }

  export type ChatConversationCreateManyUserInputEnvelope = {
    data: ChatConversationCreateManyUserInput | ChatConversationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UnitCreateWithoutUserInput = {
    id?: string
    name: string
    propertyName: string
    address?: string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    monthlyRent?: Decimal | DecimalJsLike | number | string | null
    leases?: LeaseCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    propertyName: string
    address?: string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    monthlyRent?: Decimal | DecimalJsLike | number | string | null
    leases?: LeaseUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutUserInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutUserInput, UnitUncheckedCreateWithoutUserInput>
  }

  export type UnitCreateManyUserInputEnvelope = {
    data: UnitCreateManyUserInput | UnitCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TenantCreateWithoutUserInput = {
    id?: string
    fullName: string
    phone: string
    email?: string | null
    idNumber?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leases?: LeaseCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutUserInput = {
    id?: string
    fullName: string
    phone: string
    email?: string | null
    idNumber?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leases?: LeaseUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutUserInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
  }

  export type TenantCreateManyUserInputEnvelope = {
    data: TenantCreateManyUserInput | TenantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmailLogUpsertWithWhereUniqueWithoutUserInput = {
    where: EmailLogWhereUniqueInput
    update: XOR<EmailLogUpdateWithoutUserInput, EmailLogUncheckedUpdateWithoutUserInput>
    create: XOR<EmailLogCreateWithoutUserInput, EmailLogUncheckedCreateWithoutUserInput>
  }

  export type EmailLogUpdateWithWhereUniqueWithoutUserInput = {
    where: EmailLogWhereUniqueInput
    data: XOR<EmailLogUpdateWithoutUserInput, EmailLogUncheckedUpdateWithoutUserInput>
  }

  export type EmailLogUpdateManyWithWhereWithoutUserInput = {
    where: EmailLogScalarWhereInput
    data: XOR<EmailLogUpdateManyMutationInput, EmailLogUncheckedUpdateManyWithoutUserInput>
  }

  export type EmailLogScalarWhereInput = {
    AND?: EmailLogScalarWhereInput | EmailLogScalarWhereInput[]
    OR?: EmailLogScalarWhereInput[]
    NOT?: EmailLogScalarWhereInput | EmailLogScalarWhereInput[]
    id?: StringFilter<"EmailLog"> | string
    recipient?: StringFilter<"EmailLog"> | string
    subject?: StringFilter<"EmailLog"> | string
    bodyPreview?: StringFilter<"EmailLog"> | string
    emailType?: StringFilter<"EmailLog"> | string
    status?: StringFilter<"EmailLog"> | string
    errorMessage?: StringNullableFilter<"EmailLog"> | string | null
    relatedId?: StringNullableFilter<"EmailLog"> | string | null
    sentAt?: DateTimeNullableFilter<"EmailLog"> | Date | string | null
    createdAt?: DateTimeFilter<"EmailLog"> | Date | string
    userId?: StringNullableFilter<"EmailLog"> | string | null
  }

  export type ContractUpsertWithWhereUniqueWithoutUserInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutUserInput, ContractUncheckedUpdateWithoutUserInput>
    create: XOR<ContractCreateWithoutUserInput, ContractUncheckedCreateWithoutUserInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutUserInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutUserInput, ContractUncheckedUpdateWithoutUserInput>
  }

  export type ContractUpdateManyWithWhereWithoutUserInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutUserInput>
  }

  export type ContractScalarWhereInput = {
    AND?: ContractScalarWhereInput | ContractScalarWhereInput[]
    OR?: ContractScalarWhereInput[]
    NOT?: ContractScalarWhereInput | ContractScalarWhereInput[]
    id?: StringFilter<"Contract"> | string
    leaseId?: StringFilter<"Contract"> | string
    filePath?: StringFilter<"Contract"> | string
    language?: StringFilter<"Contract"> | string
    generatedAt?: DateTimeFilter<"Contract"> | Date | string
    generatedBy?: StringNullableFilter<"Contract"> | string | null
  }

  export type SettingUpsertWithWhereUniqueWithoutUserInput = {
    where: SettingWhereUniqueInput
    update: XOR<SettingUpdateWithoutUserInput, SettingUncheckedUpdateWithoutUserInput>
    create: XOR<SettingCreateWithoutUserInput, SettingUncheckedCreateWithoutUserInput>
  }

  export type SettingUpdateWithWhereUniqueWithoutUserInput = {
    where: SettingWhereUniqueInput
    data: XOR<SettingUpdateWithoutUserInput, SettingUncheckedUpdateWithoutUserInput>
  }

  export type SettingUpdateManyWithWhereWithoutUserInput = {
    where: SettingScalarWhereInput
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyWithoutUserInput>
  }

  export type SettingScalarWhereInput = {
    AND?: SettingScalarWhereInput | SettingScalarWhereInput[]
    OR?: SettingScalarWhereInput[]
    NOT?: SettingScalarWhereInput | SettingScalarWhereInput[]
    id?: StringFilter<"Setting"> | string
    key?: StringFilter<"Setting"> | string
    value?: StringFilter<"Setting"> | string
    updatedAt?: DateTimeFilter<"Setting"> | Date | string
    userId?: StringNullableFilter<"Setting"> | string | null
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutUserInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    userId?: StringFilter<"ChatMessage"> | string
    conversationId?: StringNullableFilter<"ChatMessage"> | string | null
  }

  export type ChatConversationUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatConversationWhereUniqueInput
    update: XOR<ChatConversationUpdateWithoutUserInput, ChatConversationUncheckedUpdateWithoutUserInput>
    create: XOR<ChatConversationCreateWithoutUserInput, ChatConversationUncheckedCreateWithoutUserInput>
  }

  export type ChatConversationUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatConversationWhereUniqueInput
    data: XOR<ChatConversationUpdateWithoutUserInput, ChatConversationUncheckedUpdateWithoutUserInput>
  }

  export type ChatConversationUpdateManyWithWhereWithoutUserInput = {
    where: ChatConversationScalarWhereInput
    data: XOR<ChatConversationUpdateManyMutationInput, ChatConversationUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatConversationScalarWhereInput = {
    AND?: ChatConversationScalarWhereInput | ChatConversationScalarWhereInput[]
    OR?: ChatConversationScalarWhereInput[]
    NOT?: ChatConversationScalarWhereInput | ChatConversationScalarWhereInput[]
    id?: StringFilter<"ChatConversation"> | string
    title?: StringFilter<"ChatConversation"> | string
    createdAt?: DateTimeFilter<"ChatConversation"> | Date | string
    updatedAt?: DateTimeFilter<"ChatConversation"> | Date | string
    userId?: StringFilter<"ChatConversation"> | string
  }

  export type UnitUpsertWithWhereUniqueWithoutUserInput = {
    where: UnitWhereUniqueInput
    update: XOR<UnitUpdateWithoutUserInput, UnitUncheckedUpdateWithoutUserInput>
    create: XOR<UnitCreateWithoutUserInput, UnitUncheckedCreateWithoutUserInput>
  }

  export type UnitUpdateWithWhereUniqueWithoutUserInput = {
    where: UnitWhereUniqueInput
    data: XOR<UnitUpdateWithoutUserInput, UnitUncheckedUpdateWithoutUserInput>
  }

  export type UnitUpdateManyWithWhereWithoutUserInput = {
    where: UnitScalarWhereInput
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyWithoutUserInput>
  }

  export type UnitScalarWhereInput = {
    AND?: UnitScalarWhereInput | UnitScalarWhereInput[]
    OR?: UnitScalarWhereInput[]
    NOT?: UnitScalarWhereInput | UnitScalarWhereInput[]
    id?: StringFilter<"Unit"> | string
    name?: StringFilter<"Unit"> | string
    propertyName?: StringFilter<"Unit"> | string
    address?: StringNullableFilter<"Unit"> | string | null
    description?: StringNullableFilter<"Unit"> | string | null
    isActive?: BoolFilter<"Unit"> | boolean
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    userId?: StringNullableFilter<"Unit"> | string | null
    monthlyRent?: DecimalNullableFilter<"Unit"> | Decimal | DecimalJsLike | number | string | null
  }

  export type TenantUpsertWithWhereUniqueWithoutUserInput = {
    where: TenantWhereUniqueInput
    update: XOR<TenantUpdateWithoutUserInput, TenantUncheckedUpdateWithoutUserInput>
    create: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
  }

  export type TenantUpdateWithWhereUniqueWithoutUserInput = {
    where: TenantWhereUniqueInput
    data: XOR<TenantUpdateWithoutUserInput, TenantUncheckedUpdateWithoutUserInput>
  }

  export type TenantUpdateManyWithWhereWithoutUserInput = {
    where: TenantScalarWhereInput
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyWithoutUserInput>
  }

  export type TenantScalarWhereInput = {
    AND?: TenantScalarWhereInput | TenantScalarWhereInput[]
    OR?: TenantScalarWhereInput[]
    NOT?: TenantScalarWhereInput | TenantScalarWhereInput[]
    id?: StringFilter<"Tenant"> | string
    fullName?: StringFilter<"Tenant"> | string
    phone?: StringFilter<"Tenant"> | string
    email?: StringNullableFilter<"Tenant"> | string | null
    idNumber?: StringNullableFilter<"Tenant"> | string | null
    emergencyContact?: StringNullableFilter<"Tenant"> | string | null
    emergencyPhone?: StringNullableFilter<"Tenant"> | string | null
    notes?: StringNullableFilter<"Tenant"> | string | null
    isActive?: BoolFilter<"Tenant"> | boolean
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    userId?: StringNullableFilter<"Tenant"> | string | null
  }

  export type UserCreateWithoutChatConversationsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    preferredLanguage?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailLogs?: EmailLogCreateNestedManyWithoutUserInput
    contracts?: ContractCreateNestedManyWithoutUserInput
    settings?: SettingCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    units?: UnitCreateNestedManyWithoutUserInput
    tenants?: TenantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatConversationsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    preferredLanguage?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailLogs?: EmailLogUncheckedCreateNestedManyWithoutUserInput
    contracts?: ContractUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    units?: UnitUncheckedCreateNestedManyWithoutUserInput
    tenants?: TenantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatConversationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatConversationsInput, UserUncheckedCreateWithoutChatConversationsInput>
  }

  export type ChatMessageCreateWithoutConversationInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutConversationInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
    userId: string
  }

  export type ChatMessageCreateOrConnectWithoutConversationInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutConversationInput, ChatMessageUncheckedCreateWithoutConversationInput>
  }

  export type ChatMessageCreateManyConversationInputEnvelope = {
    data: ChatMessageCreateManyConversationInput | ChatMessageCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChatConversationsInput = {
    update: XOR<UserUpdateWithoutChatConversationsInput, UserUncheckedUpdateWithoutChatConversationsInput>
    create: XOR<UserCreateWithoutChatConversationsInput, UserUncheckedCreateWithoutChatConversationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatConversationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatConversationsInput, UserUncheckedUpdateWithoutChatConversationsInput>
  }

  export type UserUpdateWithoutChatConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailLogs?: EmailLogUpdateManyWithoutUserNestedInput
    contracts?: ContractUpdateManyWithoutUserNestedInput
    settings?: SettingUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    units?: UnitUpdateManyWithoutUserNestedInput
    tenants?: TenantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailLogs?: EmailLogUncheckedUpdateManyWithoutUserNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    units?: UnitUncheckedUpdateManyWithoutUserNestedInput
    tenants?: TenantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutConversationInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutConversationInput, ChatMessageUncheckedUpdateWithoutConversationInput>
    create: XOR<ChatMessageCreateWithoutConversationInput, ChatMessageUncheckedCreateWithoutConversationInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutConversationInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutConversationInput, ChatMessageUncheckedUpdateWithoutConversationInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutConversationInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutConversationInput>
  }

  export type UserCreateWithoutChatMessagesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    preferredLanguage?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailLogs?: EmailLogCreateNestedManyWithoutUserInput
    contracts?: ContractCreateNestedManyWithoutUserInput
    settings?: SettingCreateNestedManyWithoutUserInput
    chatConversations?: ChatConversationCreateNestedManyWithoutUserInput
    units?: UnitCreateNestedManyWithoutUserInput
    tenants?: TenantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatMessagesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    preferredLanguage?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailLogs?: EmailLogUncheckedCreateNestedManyWithoutUserInput
    contracts?: ContractUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingUncheckedCreateNestedManyWithoutUserInput
    chatConversations?: ChatConversationUncheckedCreateNestedManyWithoutUserInput
    units?: UnitUncheckedCreateNestedManyWithoutUserInput
    tenants?: TenantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
  }

  export type ChatConversationCreateWithoutMessagesInput = {
    id?: string
    title?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChatConversationsInput
  }

  export type ChatConversationUncheckedCreateWithoutMessagesInput = {
    id?: string
    title?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ChatConversationCreateOrConnectWithoutMessagesInput = {
    where: ChatConversationWhereUniqueInput
    create: XOR<ChatConversationCreateWithoutMessagesInput, ChatConversationUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutChatMessagesInput = {
    update: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UserUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailLogs?: EmailLogUpdateManyWithoutUserNestedInput
    contracts?: ContractUpdateManyWithoutUserNestedInput
    settings?: SettingUpdateManyWithoutUserNestedInput
    chatConversations?: ChatConversationUpdateManyWithoutUserNestedInput
    units?: UnitUpdateManyWithoutUserNestedInput
    tenants?: TenantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailLogs?: EmailLogUncheckedUpdateManyWithoutUserNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingUncheckedUpdateManyWithoutUserNestedInput
    chatConversations?: ChatConversationUncheckedUpdateManyWithoutUserNestedInput
    units?: UnitUncheckedUpdateManyWithoutUserNestedInput
    tenants?: TenantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatConversationUpsertWithoutMessagesInput = {
    update: XOR<ChatConversationUpdateWithoutMessagesInput, ChatConversationUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatConversationCreateWithoutMessagesInput, ChatConversationUncheckedCreateWithoutMessagesInput>
    where?: ChatConversationWhereInput
  }

  export type ChatConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatConversationWhereInput
    data: XOR<ChatConversationUpdateWithoutMessagesInput, ChatConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatConversationUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatConversationsNestedInput
  }

  export type ChatConversationUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LeaseCreateWithoutUnitInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string
    paymentFrequency?: $Enums.PaymentFrequency
    depositAmount?: Decimal | DecimalJsLike | number | string
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutLeasesInput
    rentPayments?: RentPaymentCreateNestedManyWithoutLeaseInput
    bills?: BillCreateNestedManyWithoutLeaseInput
    contracts?: ContractCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUncheckedCreateWithoutUnitInput = {
    id?: string
    tenantId: string
    startDate: Date | string
    endDate: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string
    paymentFrequency?: $Enums.PaymentFrequency
    depositAmount?: Decimal | DecimalJsLike | number | string
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rentPayments?: RentPaymentUncheckedCreateNestedManyWithoutLeaseInput
    bills?: BillUncheckedCreateNestedManyWithoutLeaseInput
    contracts?: ContractUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseCreateOrConnectWithoutUnitInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput>
  }

  export type LeaseCreateManyUnitInputEnvelope = {
    data: LeaseCreateManyUnitInput | LeaseCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutUnitsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    preferredLanguage?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailLogs?: EmailLogCreateNestedManyWithoutUserInput
    contracts?: ContractCreateNestedManyWithoutUserInput
    settings?: SettingCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    chatConversations?: ChatConversationCreateNestedManyWithoutUserInput
    tenants?: TenantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUnitsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    preferredLanguage?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailLogs?: EmailLogUncheckedCreateNestedManyWithoutUserInput
    contracts?: ContractUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    chatConversations?: ChatConversationUncheckedCreateNestedManyWithoutUserInput
    tenants?: TenantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUnitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUnitsInput, UserUncheckedCreateWithoutUnitsInput>
  }

  export type LeaseUpsertWithWhereUniqueWithoutUnitInput = {
    where: LeaseWhereUniqueInput
    update: XOR<LeaseUpdateWithoutUnitInput, LeaseUncheckedUpdateWithoutUnitInput>
    create: XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput>
  }

  export type LeaseUpdateWithWhereUniqueWithoutUnitInput = {
    where: LeaseWhereUniqueInput
    data: XOR<LeaseUpdateWithoutUnitInput, LeaseUncheckedUpdateWithoutUnitInput>
  }

  export type LeaseUpdateManyWithWhereWithoutUnitInput = {
    where: LeaseScalarWhereInput
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyWithoutUnitInput>
  }

  export type LeaseScalarWhereInput = {
    AND?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
    OR?: LeaseScalarWhereInput[]
    NOT?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
    id?: StringFilter<"Lease"> | string
    tenantId?: StringFilter<"Lease"> | string
    unitId?: StringFilter<"Lease"> | string
    startDate?: DateTimeFilter<"Lease"> | Date | string
    endDate?: DateTimeFilter<"Lease"> | Date | string
    rentAmount?: DecimalFilter<"Lease"> | Decimal | DecimalJsLike | number | string
    monthlyRent?: DecimalFilter<"Lease"> | Decimal | DecimalJsLike | number | string
    paymentFrequency?: EnumPaymentFrequencyFilter<"Lease"> | $Enums.PaymentFrequency
    depositAmount?: DecimalFilter<"Lease"> | Decimal | DecimalJsLike | number | string
    status?: EnumRecordStatusFilter<"Lease"> | $Enums.RecordStatus
    notes?: StringNullableFilter<"Lease"> | string | null
    createdAt?: DateTimeFilter<"Lease"> | Date | string
    updatedAt?: DateTimeFilter<"Lease"> | Date | string
  }

  export type UserUpsertWithoutUnitsInput = {
    update: XOR<UserUpdateWithoutUnitsInput, UserUncheckedUpdateWithoutUnitsInput>
    create: XOR<UserCreateWithoutUnitsInput, UserUncheckedCreateWithoutUnitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUnitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUnitsInput, UserUncheckedUpdateWithoutUnitsInput>
  }

  export type UserUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailLogs?: EmailLogUpdateManyWithoutUserNestedInput
    contracts?: ContractUpdateManyWithoutUserNestedInput
    settings?: SettingUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    chatConversations?: ChatConversationUpdateManyWithoutUserNestedInput
    tenants?: TenantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailLogs?: EmailLogUncheckedUpdateManyWithoutUserNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    chatConversations?: ChatConversationUncheckedUpdateManyWithoutUserNestedInput
    tenants?: TenantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LeaseCreateWithoutTenantInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string
    paymentFrequency?: $Enums.PaymentFrequency
    depositAmount?: Decimal | DecimalJsLike | number | string
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unit: UnitCreateNestedOneWithoutLeasesInput
    rentPayments?: RentPaymentCreateNestedManyWithoutLeaseInput
    bills?: BillCreateNestedManyWithoutLeaseInput
    contracts?: ContractCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUncheckedCreateWithoutTenantInput = {
    id?: string
    unitId: string
    startDate: Date | string
    endDate: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string
    paymentFrequency?: $Enums.PaymentFrequency
    depositAmount?: Decimal | DecimalJsLike | number | string
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rentPayments?: RentPaymentUncheckedCreateNestedManyWithoutLeaseInput
    bills?: BillUncheckedCreateNestedManyWithoutLeaseInput
    contracts?: ContractUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseCreateOrConnectWithoutTenantInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutTenantInput, LeaseUncheckedCreateWithoutTenantInput>
  }

  export type LeaseCreateManyTenantInputEnvelope = {
    data: LeaseCreateManyTenantInput | LeaseCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTenantsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    preferredLanguage?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailLogs?: EmailLogCreateNestedManyWithoutUserInput
    contracts?: ContractCreateNestedManyWithoutUserInput
    settings?: SettingCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    chatConversations?: ChatConversationCreateNestedManyWithoutUserInput
    units?: UnitCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTenantsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    preferredLanguage?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailLogs?: EmailLogUncheckedCreateNestedManyWithoutUserInput
    contracts?: ContractUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    chatConversations?: ChatConversationUncheckedCreateNestedManyWithoutUserInput
    units?: UnitUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTenantsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTenantsInput, UserUncheckedCreateWithoutTenantsInput>
  }

  export type LeaseUpsertWithWhereUniqueWithoutTenantInput = {
    where: LeaseWhereUniqueInput
    update: XOR<LeaseUpdateWithoutTenantInput, LeaseUncheckedUpdateWithoutTenantInput>
    create: XOR<LeaseCreateWithoutTenantInput, LeaseUncheckedCreateWithoutTenantInput>
  }

  export type LeaseUpdateWithWhereUniqueWithoutTenantInput = {
    where: LeaseWhereUniqueInput
    data: XOR<LeaseUpdateWithoutTenantInput, LeaseUncheckedUpdateWithoutTenantInput>
  }

  export type LeaseUpdateManyWithWhereWithoutTenantInput = {
    where: LeaseScalarWhereInput
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyWithoutTenantInput>
  }

  export type UserUpsertWithoutTenantsInput = {
    update: XOR<UserUpdateWithoutTenantsInput, UserUncheckedUpdateWithoutTenantsInput>
    create: XOR<UserCreateWithoutTenantsInput, UserUncheckedCreateWithoutTenantsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTenantsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTenantsInput, UserUncheckedUpdateWithoutTenantsInput>
  }

  export type UserUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailLogs?: EmailLogUpdateManyWithoutUserNestedInput
    contracts?: ContractUpdateManyWithoutUserNestedInput
    settings?: SettingUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    chatConversations?: ChatConversationUpdateManyWithoutUserNestedInput
    units?: UnitUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailLogs?: EmailLogUncheckedUpdateManyWithoutUserNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    chatConversations?: ChatConversationUncheckedUpdateManyWithoutUserNestedInput
    units?: UnitUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TenantCreateWithoutLeasesInput = {
    id?: string
    fullName: string
    phone: string
    email?: string | null
    idNumber?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutTenantsInput
  }

  export type TenantUncheckedCreateWithoutLeasesInput = {
    id?: string
    fullName: string
    phone: string
    email?: string | null
    idNumber?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type TenantCreateOrConnectWithoutLeasesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutLeasesInput, TenantUncheckedCreateWithoutLeasesInput>
  }

  export type UnitCreateWithoutLeasesInput = {
    id?: string
    name: string
    propertyName: string
    address?: string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    monthlyRent?: Decimal | DecimalJsLike | number | string | null
    user?: UserCreateNestedOneWithoutUnitsInput
  }

  export type UnitUncheckedCreateWithoutLeasesInput = {
    id?: string
    name: string
    propertyName: string
    address?: string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    userId?: string | null
    monthlyRent?: Decimal | DecimalJsLike | number | string | null
  }

  export type UnitCreateOrConnectWithoutLeasesInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutLeasesInput, UnitUncheckedCreateWithoutLeasesInput>
  }

  export type RentPaymentCreateWithoutLeaseInput = {
    id?: string
    periodStart: Date | string
    periodEnd: Date | string
    amountDue: Decimal | DecimalJsLike | number | string
    amountPaid?: Decimal | DecimalJsLike | number | string
    paymentDate?: Date | string | null
    reminderDate?: Date | string | null
    paymentMethod?: string | null
    reference?: string | null
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    receipts?: PaymentReceiptCreateNestedManyWithoutRentPaymentInput
  }

  export type RentPaymentUncheckedCreateWithoutLeaseInput = {
    id?: string
    periodStart: Date | string
    periodEnd: Date | string
    amountDue: Decimal | DecimalJsLike | number | string
    amountPaid?: Decimal | DecimalJsLike | number | string
    paymentDate?: Date | string | null
    reminderDate?: Date | string | null
    paymentMethod?: string | null
    reference?: string | null
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    receipts?: PaymentReceiptUncheckedCreateNestedManyWithoutRentPaymentInput
  }

  export type RentPaymentCreateOrConnectWithoutLeaseInput = {
    where: RentPaymentWhereUniqueInput
    create: XOR<RentPaymentCreateWithoutLeaseInput, RentPaymentUncheckedCreateWithoutLeaseInput>
  }

  export type RentPaymentCreateManyLeaseInputEnvelope = {
    data: RentPaymentCreateManyLeaseInput | RentPaymentCreateManyLeaseInput[]
    skipDuplicates?: boolean
  }

  export type BillCreateWithoutLeaseInput = {
    id?: string
    billType: $Enums.BillType
    description: string
    amountDue: Decimal | DecimalJsLike | number | string
    amountPaid?: Decimal | DecimalJsLike | number | string
    dueDate: Date | string
    paymentDate?: Date | string | null
    status?: $Enums.RecordStatus
    createdAt?: Date | string
  }

  export type BillUncheckedCreateWithoutLeaseInput = {
    id?: string
    billType: $Enums.BillType
    description: string
    amountDue: Decimal | DecimalJsLike | number | string
    amountPaid?: Decimal | DecimalJsLike | number | string
    dueDate: Date | string
    paymentDate?: Date | string | null
    status?: $Enums.RecordStatus
    createdAt?: Date | string
  }

  export type BillCreateOrConnectWithoutLeaseInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutLeaseInput, BillUncheckedCreateWithoutLeaseInput>
  }

  export type BillCreateManyLeaseInputEnvelope = {
    data: BillCreateManyLeaseInput | BillCreateManyLeaseInput[]
    skipDuplicates?: boolean
  }

  export type ContractCreateWithoutLeaseInput = {
    id?: string
    filePath: string
    language: string
    generatedAt?: Date | string
    user?: UserCreateNestedOneWithoutContractsInput
  }

  export type ContractUncheckedCreateWithoutLeaseInput = {
    id?: string
    filePath: string
    language: string
    generatedAt?: Date | string
    generatedBy?: string | null
  }

  export type ContractCreateOrConnectWithoutLeaseInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutLeaseInput, ContractUncheckedCreateWithoutLeaseInput>
  }

  export type ContractCreateManyLeaseInputEnvelope = {
    data: ContractCreateManyLeaseInput | ContractCreateManyLeaseInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutLeasesInput = {
    update: XOR<TenantUpdateWithoutLeasesInput, TenantUncheckedUpdateWithoutLeasesInput>
    create: XOR<TenantCreateWithoutLeasesInput, TenantUncheckedCreateWithoutLeasesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutLeasesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutLeasesInput, TenantUncheckedUpdateWithoutLeasesInput>
  }

  export type TenantUpdateWithoutLeasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTenantsNestedInput
  }

  export type TenantUncheckedUpdateWithoutLeasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UnitUpsertWithoutLeasesInput = {
    update: XOR<UnitUpdateWithoutLeasesInput, UnitUncheckedUpdateWithoutLeasesInput>
    create: XOR<UnitCreateWithoutLeasesInput, UnitUncheckedCreateWithoutLeasesInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutLeasesInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutLeasesInput, UnitUncheckedUpdateWithoutLeasesInput>
  }

  export type UnitUpdateWithoutLeasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propertyName?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    user?: UserUpdateOneWithoutUnitsNestedInput
  }

  export type UnitUncheckedUpdateWithoutLeasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propertyName?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type RentPaymentUpsertWithWhereUniqueWithoutLeaseInput = {
    where: RentPaymentWhereUniqueInput
    update: XOR<RentPaymentUpdateWithoutLeaseInput, RentPaymentUncheckedUpdateWithoutLeaseInput>
    create: XOR<RentPaymentCreateWithoutLeaseInput, RentPaymentUncheckedCreateWithoutLeaseInput>
  }

  export type RentPaymentUpdateWithWhereUniqueWithoutLeaseInput = {
    where: RentPaymentWhereUniqueInput
    data: XOR<RentPaymentUpdateWithoutLeaseInput, RentPaymentUncheckedUpdateWithoutLeaseInput>
  }

  export type RentPaymentUpdateManyWithWhereWithoutLeaseInput = {
    where: RentPaymentScalarWhereInput
    data: XOR<RentPaymentUpdateManyMutationInput, RentPaymentUncheckedUpdateManyWithoutLeaseInput>
  }

  export type RentPaymentScalarWhereInput = {
    AND?: RentPaymentScalarWhereInput | RentPaymentScalarWhereInput[]
    OR?: RentPaymentScalarWhereInput[]
    NOT?: RentPaymentScalarWhereInput | RentPaymentScalarWhereInput[]
    id?: StringFilter<"RentPayment"> | string
    leaseId?: StringFilter<"RentPayment"> | string
    periodStart?: DateTimeFilter<"RentPayment"> | Date | string
    periodEnd?: DateTimeFilter<"RentPayment"> | Date | string
    amountDue?: DecimalFilter<"RentPayment"> | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFilter<"RentPayment"> | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeNullableFilter<"RentPayment"> | Date | string | null
    reminderDate?: DateTimeNullableFilter<"RentPayment"> | Date | string | null
    paymentMethod?: StringNullableFilter<"RentPayment"> | string | null
    reference?: StringNullableFilter<"RentPayment"> | string | null
    status?: EnumRecordStatusFilter<"RentPayment"> | $Enums.RecordStatus
    notes?: StringNullableFilter<"RentPayment"> | string | null
    createdAt?: DateTimeFilter<"RentPayment"> | Date | string
  }

  export type BillUpsertWithWhereUniqueWithoutLeaseInput = {
    where: BillWhereUniqueInput
    update: XOR<BillUpdateWithoutLeaseInput, BillUncheckedUpdateWithoutLeaseInput>
    create: XOR<BillCreateWithoutLeaseInput, BillUncheckedCreateWithoutLeaseInput>
  }

  export type BillUpdateWithWhereUniqueWithoutLeaseInput = {
    where: BillWhereUniqueInput
    data: XOR<BillUpdateWithoutLeaseInput, BillUncheckedUpdateWithoutLeaseInput>
  }

  export type BillUpdateManyWithWhereWithoutLeaseInput = {
    where: BillScalarWhereInput
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyWithoutLeaseInput>
  }

  export type BillScalarWhereInput = {
    AND?: BillScalarWhereInput | BillScalarWhereInput[]
    OR?: BillScalarWhereInput[]
    NOT?: BillScalarWhereInput | BillScalarWhereInput[]
    id?: StringFilter<"Bill"> | string
    leaseId?: StringFilter<"Bill"> | string
    billType?: EnumBillTypeFilter<"Bill"> | $Enums.BillType
    description?: StringFilter<"Bill"> | string
    amountDue?: DecimalFilter<"Bill"> | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFilter<"Bill"> | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFilter<"Bill"> | Date | string
    paymentDate?: DateTimeNullableFilter<"Bill"> | Date | string | null
    status?: EnumRecordStatusFilter<"Bill"> | $Enums.RecordStatus
    createdAt?: DateTimeFilter<"Bill"> | Date | string
  }

  export type ContractUpsertWithWhereUniqueWithoutLeaseInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutLeaseInput, ContractUncheckedUpdateWithoutLeaseInput>
    create: XOR<ContractCreateWithoutLeaseInput, ContractUncheckedCreateWithoutLeaseInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutLeaseInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutLeaseInput, ContractUncheckedUpdateWithoutLeaseInput>
  }

  export type ContractUpdateManyWithWhereWithoutLeaseInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutLeaseInput>
  }

  export type LeaseCreateWithoutRentPaymentsInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string
    paymentFrequency?: $Enums.PaymentFrequency
    depositAmount?: Decimal | DecimalJsLike | number | string
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutLeasesInput
    unit: UnitCreateNestedOneWithoutLeasesInput
    bills?: BillCreateNestedManyWithoutLeaseInput
    contracts?: ContractCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUncheckedCreateWithoutRentPaymentsInput = {
    id?: string
    tenantId: string
    unitId: string
    startDate: Date | string
    endDate: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string
    paymentFrequency?: $Enums.PaymentFrequency
    depositAmount?: Decimal | DecimalJsLike | number | string
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bills?: BillUncheckedCreateNestedManyWithoutLeaseInput
    contracts?: ContractUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseCreateOrConnectWithoutRentPaymentsInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutRentPaymentsInput, LeaseUncheckedCreateWithoutRentPaymentsInput>
  }

  export type PaymentReceiptCreateWithoutRentPaymentInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paymentDate?: Date | string
    paymentMethod?: string | null
    reference?: string | null
    createdAt?: Date | string
  }

  export type PaymentReceiptUncheckedCreateWithoutRentPaymentInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paymentDate?: Date | string
    paymentMethod?: string | null
    reference?: string | null
    createdAt?: Date | string
  }

  export type PaymentReceiptCreateOrConnectWithoutRentPaymentInput = {
    where: PaymentReceiptWhereUniqueInput
    create: XOR<PaymentReceiptCreateWithoutRentPaymentInput, PaymentReceiptUncheckedCreateWithoutRentPaymentInput>
  }

  export type PaymentReceiptCreateManyRentPaymentInputEnvelope = {
    data: PaymentReceiptCreateManyRentPaymentInput | PaymentReceiptCreateManyRentPaymentInput[]
    skipDuplicates?: boolean
  }

  export type LeaseUpsertWithoutRentPaymentsInput = {
    update: XOR<LeaseUpdateWithoutRentPaymentsInput, LeaseUncheckedUpdateWithoutRentPaymentsInput>
    create: XOR<LeaseCreateWithoutRentPaymentsInput, LeaseUncheckedCreateWithoutRentPaymentsInput>
    where?: LeaseWhereInput
  }

  export type LeaseUpdateToOneWithWhereWithoutRentPaymentsInput = {
    where?: LeaseWhereInput
    data: XOR<LeaseUpdateWithoutRentPaymentsInput, LeaseUncheckedUpdateWithoutRentPaymentsInput>
  }

  export type LeaseUpdateWithoutRentPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    depositAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutLeasesNestedInput
    unit?: UnitUpdateOneRequiredWithoutLeasesNestedInput
    bills?: BillUpdateManyWithoutLeaseNestedInput
    contracts?: ContractUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutRentPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    depositAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bills?: BillUncheckedUpdateManyWithoutLeaseNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type PaymentReceiptUpsertWithWhereUniqueWithoutRentPaymentInput = {
    where: PaymentReceiptWhereUniqueInput
    update: XOR<PaymentReceiptUpdateWithoutRentPaymentInput, PaymentReceiptUncheckedUpdateWithoutRentPaymentInput>
    create: XOR<PaymentReceiptCreateWithoutRentPaymentInput, PaymentReceiptUncheckedCreateWithoutRentPaymentInput>
  }

  export type PaymentReceiptUpdateWithWhereUniqueWithoutRentPaymentInput = {
    where: PaymentReceiptWhereUniqueInput
    data: XOR<PaymentReceiptUpdateWithoutRentPaymentInput, PaymentReceiptUncheckedUpdateWithoutRentPaymentInput>
  }

  export type PaymentReceiptUpdateManyWithWhereWithoutRentPaymentInput = {
    where: PaymentReceiptScalarWhereInput
    data: XOR<PaymentReceiptUpdateManyMutationInput, PaymentReceiptUncheckedUpdateManyWithoutRentPaymentInput>
  }

  export type PaymentReceiptScalarWhereInput = {
    AND?: PaymentReceiptScalarWhereInput | PaymentReceiptScalarWhereInput[]
    OR?: PaymentReceiptScalarWhereInput[]
    NOT?: PaymentReceiptScalarWhereInput | PaymentReceiptScalarWhereInput[]
    id?: StringFilter<"PaymentReceipt"> | string
    rentPaymentId?: StringFilter<"PaymentReceipt"> | string
    amount?: DecimalFilter<"PaymentReceipt"> | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFilter<"PaymentReceipt"> | Date | string
    paymentMethod?: StringNullableFilter<"PaymentReceipt"> | string | null
    reference?: StringNullableFilter<"PaymentReceipt"> | string | null
    createdAt?: DateTimeFilter<"PaymentReceipt"> | Date | string
  }

  export type RentPaymentCreateWithoutReceiptsInput = {
    id?: string
    periodStart: Date | string
    periodEnd: Date | string
    amountDue: Decimal | DecimalJsLike | number | string
    amountPaid?: Decimal | DecimalJsLike | number | string
    paymentDate?: Date | string | null
    reminderDate?: Date | string | null
    paymentMethod?: string | null
    reference?: string | null
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    lease: LeaseCreateNestedOneWithoutRentPaymentsInput
  }

  export type RentPaymentUncheckedCreateWithoutReceiptsInput = {
    id?: string
    leaseId: string
    periodStart: Date | string
    periodEnd: Date | string
    amountDue: Decimal | DecimalJsLike | number | string
    amountPaid?: Decimal | DecimalJsLike | number | string
    paymentDate?: Date | string | null
    reminderDate?: Date | string | null
    paymentMethod?: string | null
    reference?: string | null
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type RentPaymentCreateOrConnectWithoutReceiptsInput = {
    where: RentPaymentWhereUniqueInput
    create: XOR<RentPaymentCreateWithoutReceiptsInput, RentPaymentUncheckedCreateWithoutReceiptsInput>
  }

  export type RentPaymentUpsertWithoutReceiptsInput = {
    update: XOR<RentPaymentUpdateWithoutReceiptsInput, RentPaymentUncheckedUpdateWithoutReceiptsInput>
    create: XOR<RentPaymentCreateWithoutReceiptsInput, RentPaymentUncheckedCreateWithoutReceiptsInput>
    where?: RentPaymentWhereInput
  }

  export type RentPaymentUpdateToOneWithWhereWithoutReceiptsInput = {
    where?: RentPaymentWhereInput
    data: XOR<RentPaymentUpdateWithoutReceiptsInput, RentPaymentUncheckedUpdateWithoutReceiptsInput>
  }

  export type RentPaymentUpdateWithoutReceiptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    amountDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lease?: LeaseUpdateOneRequiredWithoutRentPaymentsNestedInput
  }

  export type RentPaymentUncheckedUpdateWithoutReceiptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaseId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    amountDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseCreateWithoutBillsInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string
    paymentFrequency?: $Enums.PaymentFrequency
    depositAmount?: Decimal | DecimalJsLike | number | string
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutLeasesInput
    unit: UnitCreateNestedOneWithoutLeasesInput
    rentPayments?: RentPaymentCreateNestedManyWithoutLeaseInput
    contracts?: ContractCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUncheckedCreateWithoutBillsInput = {
    id?: string
    tenantId: string
    unitId: string
    startDate: Date | string
    endDate: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string
    paymentFrequency?: $Enums.PaymentFrequency
    depositAmount?: Decimal | DecimalJsLike | number | string
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rentPayments?: RentPaymentUncheckedCreateNestedManyWithoutLeaseInput
    contracts?: ContractUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseCreateOrConnectWithoutBillsInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutBillsInput, LeaseUncheckedCreateWithoutBillsInput>
  }

  export type LeaseUpsertWithoutBillsInput = {
    update: XOR<LeaseUpdateWithoutBillsInput, LeaseUncheckedUpdateWithoutBillsInput>
    create: XOR<LeaseCreateWithoutBillsInput, LeaseUncheckedCreateWithoutBillsInput>
    where?: LeaseWhereInput
  }

  export type LeaseUpdateToOneWithWhereWithoutBillsInput = {
    where?: LeaseWhereInput
    data: XOR<LeaseUpdateWithoutBillsInput, LeaseUncheckedUpdateWithoutBillsInput>
  }

  export type LeaseUpdateWithoutBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    depositAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutLeasesNestedInput
    unit?: UnitUpdateOneRequiredWithoutLeasesNestedInput
    rentPayments?: RentPaymentUpdateManyWithoutLeaseNestedInput
    contracts?: ContractUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    depositAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentPayments?: RentPaymentUncheckedUpdateManyWithoutLeaseNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type UserCreateWithoutEmailLogsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    preferredLanguage?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contracts?: ContractCreateNestedManyWithoutUserInput
    settings?: SettingCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    chatConversations?: ChatConversationCreateNestedManyWithoutUserInput
    units?: UnitCreateNestedManyWithoutUserInput
    tenants?: TenantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmailLogsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    preferredLanguage?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contracts?: ContractUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    chatConversations?: ChatConversationUncheckedCreateNestedManyWithoutUserInput
    units?: UnitUncheckedCreateNestedManyWithoutUserInput
    tenants?: TenantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmailLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmailLogsInput, UserUncheckedCreateWithoutEmailLogsInput>
  }

  export type UserUpsertWithoutEmailLogsInput = {
    update: XOR<UserUpdateWithoutEmailLogsInput, UserUncheckedUpdateWithoutEmailLogsInput>
    create: XOR<UserCreateWithoutEmailLogsInput, UserUncheckedCreateWithoutEmailLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmailLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmailLogsInput, UserUncheckedUpdateWithoutEmailLogsInput>
  }

  export type UserUpdateWithoutEmailLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contracts?: ContractUpdateManyWithoutUserNestedInput
    settings?: SettingUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    chatConversations?: ChatConversationUpdateManyWithoutUserNestedInput
    units?: UnitUpdateManyWithoutUserNestedInput
    tenants?: TenantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmailLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contracts?: ContractUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    chatConversations?: ChatConversationUncheckedUpdateManyWithoutUserNestedInput
    units?: UnitUncheckedUpdateManyWithoutUserNestedInput
    tenants?: TenantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSettingsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    preferredLanguage?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailLogs?: EmailLogCreateNestedManyWithoutUserInput
    contracts?: ContractCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    chatConversations?: ChatConversationCreateNestedManyWithoutUserInput
    units?: UnitCreateNestedManyWithoutUserInput
    tenants?: TenantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSettingsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    preferredLanguage?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailLogs?: EmailLogUncheckedCreateNestedManyWithoutUserInput
    contracts?: ContractUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    chatConversations?: ChatConversationUncheckedCreateNestedManyWithoutUserInput
    units?: UnitUncheckedCreateNestedManyWithoutUserInput
    tenants?: TenantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
  }

  export type UserUpsertWithoutSettingsInput = {
    update: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailLogs?: EmailLogUpdateManyWithoutUserNestedInput
    contracts?: ContractUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    chatConversations?: ChatConversationUpdateManyWithoutUserNestedInput
    units?: UnitUpdateManyWithoutUserNestedInput
    tenants?: TenantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailLogs?: EmailLogUncheckedUpdateManyWithoutUserNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    chatConversations?: ChatConversationUncheckedUpdateManyWithoutUserNestedInput
    units?: UnitUncheckedUpdateManyWithoutUserNestedInput
    tenants?: TenantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LeaseCreateWithoutContractsInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string
    paymentFrequency?: $Enums.PaymentFrequency
    depositAmount?: Decimal | DecimalJsLike | number | string
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutLeasesInput
    unit: UnitCreateNestedOneWithoutLeasesInput
    rentPayments?: RentPaymentCreateNestedManyWithoutLeaseInput
    bills?: BillCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUncheckedCreateWithoutContractsInput = {
    id?: string
    tenantId: string
    unitId: string
    startDate: Date | string
    endDate: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string
    paymentFrequency?: $Enums.PaymentFrequency
    depositAmount?: Decimal | DecimalJsLike | number | string
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rentPayments?: RentPaymentUncheckedCreateNestedManyWithoutLeaseInput
    bills?: BillUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseCreateOrConnectWithoutContractsInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutContractsInput, LeaseUncheckedCreateWithoutContractsInput>
  }

  export type UserCreateWithoutContractsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    preferredLanguage?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailLogs?: EmailLogCreateNestedManyWithoutUserInput
    settings?: SettingCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    chatConversations?: ChatConversationCreateNestedManyWithoutUserInput
    units?: UnitCreateNestedManyWithoutUserInput
    tenants?: TenantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContractsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    phone?: string | null
    preferredLanguage?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailLogs?: EmailLogUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    chatConversations?: ChatConversationUncheckedCreateNestedManyWithoutUserInput
    units?: UnitUncheckedCreateNestedManyWithoutUserInput
    tenants?: TenantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContractsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContractsInput, UserUncheckedCreateWithoutContractsInput>
  }

  export type LeaseUpsertWithoutContractsInput = {
    update: XOR<LeaseUpdateWithoutContractsInput, LeaseUncheckedUpdateWithoutContractsInput>
    create: XOR<LeaseCreateWithoutContractsInput, LeaseUncheckedCreateWithoutContractsInput>
    where?: LeaseWhereInput
  }

  export type LeaseUpdateToOneWithWhereWithoutContractsInput = {
    where?: LeaseWhereInput
    data: XOR<LeaseUpdateWithoutContractsInput, LeaseUncheckedUpdateWithoutContractsInput>
  }

  export type LeaseUpdateWithoutContractsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    depositAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutLeasesNestedInput
    unit?: UnitUpdateOneRequiredWithoutLeasesNestedInput
    rentPayments?: RentPaymentUpdateManyWithoutLeaseNestedInput
    bills?: BillUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutContractsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    depositAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentPayments?: RentPaymentUncheckedUpdateManyWithoutLeaseNestedInput
    bills?: BillUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type UserUpsertWithoutContractsInput = {
    update: XOR<UserUpdateWithoutContractsInput, UserUncheckedUpdateWithoutContractsInput>
    create: XOR<UserCreateWithoutContractsInput, UserUncheckedCreateWithoutContractsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContractsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContractsInput, UserUncheckedUpdateWithoutContractsInput>
  }

  export type UserUpdateWithoutContractsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailLogs?: EmailLogUpdateManyWithoutUserNestedInput
    settings?: SettingUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    chatConversations?: ChatConversationUpdateManyWithoutUserNestedInput
    units?: UnitUpdateManyWithoutUserNestedInput
    tenants?: TenantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContractsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailLogs?: EmailLogUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    chatConversations?: ChatConversationUncheckedUpdateManyWithoutUserNestedInput
    units?: UnitUncheckedUpdateManyWithoutUserNestedInput
    tenants?: TenantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EmailLogCreateManyUserInput = {
    id?: string
    recipient: string
    subject: string
    bodyPreview: string
    emailType: string
    status: string
    errorMessage?: string | null
    relatedId?: string | null
    sentAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ContractCreateManyUserInput = {
    id?: string
    leaseId: string
    filePath: string
    language: string
    generatedAt?: Date | string
  }

  export type SettingCreateManyUserInput = {
    id?: string
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type ChatMessageCreateManyUserInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
    conversationId?: string | null
  }

  export type ChatConversationCreateManyUserInput = {
    id?: string
    title?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitCreateManyUserInput = {
    id?: string
    name: string
    propertyName: string
    address?: string | null
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    monthlyRent?: Decimal | DecimalJsLike | number | string | null
  }

  export type TenantCreateManyUserInput = {
    id?: string
    fullName: string
    phone: string
    email?: string | null
    idNumber?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    bodyPreview?: StringFieldUpdateOperationsInput | string
    emailType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    relatedId?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    bodyPreview?: StringFieldUpdateOperationsInput | string
    emailType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    relatedId?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    bodyPreview?: StringFieldUpdateOperationsInput | string
    emailType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    relatedId?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lease?: LeaseUpdateOneRequiredWithoutContractsNestedInput
  }

  export type ContractUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaseId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaseId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ChatConversationUpdateOneWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatConversationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUpdateManyWithoutConversationNestedInput
  }

  export type ChatConversationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ChatConversationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propertyName?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    leases?: LeaseUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propertyName?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    leases?: LeaseUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    propertyName?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type TenantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leases?: LeaseUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leases?: LeaseUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyConversationInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
    userId: string
  }

  export type ChatMessageUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LeaseCreateManyUnitInput = {
    id?: string
    tenantId: string
    startDate: Date | string
    endDate: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string
    paymentFrequency?: $Enums.PaymentFrequency
    depositAmount?: Decimal | DecimalJsLike | number | string
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    depositAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutLeasesNestedInput
    rentPayments?: RentPaymentUpdateManyWithoutLeaseNestedInput
    bills?: BillUpdateManyWithoutLeaseNestedInput
    contracts?: ContractUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    depositAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentPayments?: RentPaymentUncheckedUpdateManyWithoutLeaseNestedInput
    bills?: BillUncheckedUpdateManyWithoutLeaseNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    depositAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseCreateManyTenantInput = {
    id?: string
    unitId: string
    startDate: Date | string
    endDate: Date | string
    rentAmount: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string
    paymentFrequency?: $Enums.PaymentFrequency
    depositAmount?: Decimal | DecimalJsLike | number | string
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    depositAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutLeasesNestedInput
    rentPayments?: RentPaymentUpdateManyWithoutLeaseNestedInput
    bills?: BillUpdateManyWithoutLeaseNestedInput
    contracts?: ContractUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    depositAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentPayments?: RentPaymentUncheckedUpdateManyWithoutLeaseNestedInput
    bills?: BillUncheckedUpdateManyWithoutLeaseNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    depositAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentPaymentCreateManyLeaseInput = {
    id?: string
    periodStart: Date | string
    periodEnd: Date | string
    amountDue: Decimal | DecimalJsLike | number | string
    amountPaid?: Decimal | DecimalJsLike | number | string
    paymentDate?: Date | string | null
    reminderDate?: Date | string | null
    paymentMethod?: string | null
    reference?: string | null
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type BillCreateManyLeaseInput = {
    id?: string
    billType: $Enums.BillType
    description: string
    amountDue: Decimal | DecimalJsLike | number | string
    amountPaid?: Decimal | DecimalJsLike | number | string
    dueDate: Date | string
    paymentDate?: Date | string | null
    status?: $Enums.RecordStatus
    createdAt?: Date | string
  }

  export type ContractCreateManyLeaseInput = {
    id?: string
    filePath: string
    language: string
    generatedAt?: Date | string
    generatedBy?: string | null
  }

  export type RentPaymentUpdateWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    amountDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receipts?: PaymentReceiptUpdateManyWithoutRentPaymentNestedInput
  }

  export type RentPaymentUncheckedUpdateWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    amountDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receipts?: PaymentReceiptUncheckedUpdateManyWithoutRentPaymentNestedInput
  }

  export type RentPaymentUncheckedUpdateManyWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    amountDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillUpdateWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    billType?: EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType
    description?: StringFieldUpdateOperationsInput | string
    amountDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillUncheckedUpdateWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    billType?: EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType
    description?: StringFieldUpdateOperationsInput | string
    amountDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillUncheckedUpdateManyWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    billType?: EnumBillTypeFieldUpdateOperationsInput | $Enums.BillType
    description?: StringFieldUpdateOperationsInput | string
    amountDue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUpdateWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutContractsNestedInput
  }

  export type ContractUncheckedUpdateWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContractUncheckedUpdateManyWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentReceiptCreateManyRentPaymentInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paymentDate?: Date | string
    paymentMethod?: string | null
    reference?: string | null
    createdAt?: Date | string
  }

  export type PaymentReceiptUpdateWithoutRentPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentReceiptUncheckedUpdateWithoutRentPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentReceiptUncheckedUpdateManyWithoutRentPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}