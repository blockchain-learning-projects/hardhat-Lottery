/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface LotteryInterface extends utils.Interface {
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "LOTTERY_ADMIN_ROLE()": FunctionFragment;
    "bet()": FunctionFragment;
    "betMany(uint8)": FunctionFragment;
    "checkUpkeep(bytes)": FunctionFragment;
    "closeLottery()": FunctionFragment;
    "getBetFee()": FunctionFragment;
    "getBetPrice()": FunctionFragment;
    "getBetsClosingTime()": FunctionFragment;
    "getBetsOpen()": FunctionFragment;
    "getOwnerPool()": FunctionFragment;
    "getPaymentToken()": FunctionFragment;
    "getPrize(address)": FunctionFragment;
    "getPrizePool()": FunctionFragment;
    "getPurchaseRatio()": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "openBets(uint256)": FunctionFragment;
    "ownerWithdraw(uint256)": FunctionFragment;
    "performUpkeep(bytes)": FunctionFragment;
    "prizeWithdraw(uint256)": FunctionFragment;
    "purchaseTokens()": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "returnTokens(uint256)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DEFAULT_ADMIN_ROLE"
      | "LOTTERY_ADMIN_ROLE"
      | "bet"
      | "betMany"
      | "checkUpkeep"
      | "closeLottery"
      | "getBetFee"
      | "getBetPrice"
      | "getBetsClosingTime"
      | "getBetsOpen"
      | "getOwnerPool"
      | "getPaymentToken"
      | "getPrize"
      | "getPrizePool"
      | "getPurchaseRatio"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "openBets"
      | "ownerWithdraw"
      | "performUpkeep"
      | "prizeWithdraw"
      | "purchaseTokens"
      | "renounceRole"
      | "returnTokens"
      | "revokeRole"
      | "supportsInterface"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LOTTERY_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "bet", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "betMany",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "checkUpkeep",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "closeLottery",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getBetFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getBetPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBetsClosingTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBetsOpen",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOwnerPool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPaymentToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPrize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPrizePool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPurchaseRatio",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "openBets",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerWithdraw",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "performUpkeep",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "prizeWithdraw",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "purchaseTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "returnTokens",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LOTTERY_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "betMany", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkUpkeep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closeLottery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBetFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBetPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBetsClosingTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBetsOpen",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOwnerPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPaymentToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPrizePool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPurchaseRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "openBets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ownerWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "performUpkeep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "prizeWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "purchaseTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "LotteryClosed(address,uint256)": EventFragment;
    "LotteryOpened(uint256)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LotteryClosed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LotteryOpened"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}

export interface LotteryClosedEventObject {
  winner: string;
  prize: BigNumber;
}
export type LotteryClosedEvent = TypedEvent<
  [string, BigNumber],
  LotteryClosedEventObject
>;

export type LotteryClosedEventFilter = TypedEventFilter<LotteryClosedEvent>;

export interface LotteryOpenedEventObject {
  closingTimeStamp: BigNumber;
}
export type LotteryOpenedEvent = TypedEvent<
  [BigNumber],
  LotteryOpenedEventObject
>;

export type LotteryOpenedEventFilter = TypedEventFilter<LotteryOpenedEvent>;

export interface RoleAdminChangedEventObject {
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  RoleAdminChangedEventObject
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  RoleGrantedEventObject
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  RoleRevokedEventObject
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface Lottery extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LotteryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    LOTTERY_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    bet(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    betMany(
      times: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    checkUpkeep(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { upkeepNeeded: boolean }>;

    closeLottery(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getBetFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getBetPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    getBetsClosingTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    getBetsOpen(overrides?: CallOverrides): Promise<[boolean]>;

    getOwnerPool(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPaymentToken(overrides?: CallOverrides): Promise<[string]>;

    getPrize(
      _winner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPrizePool(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPurchaseRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    openBets(
      closingTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    ownerWithdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    performUpkeep(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    prizeWithdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    purchaseTokens(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    returnTokens(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  LOTTERY_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  bet(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  betMany(
    times: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  checkUpkeep(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<[boolean, string] & { upkeepNeeded: boolean }>;

  closeLottery(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getBetFee(overrides?: CallOverrides): Promise<BigNumber>;

  getBetPrice(overrides?: CallOverrides): Promise<BigNumber>;

  getBetsClosingTime(overrides?: CallOverrides): Promise<BigNumber>;

  getBetsOpen(overrides?: CallOverrides): Promise<boolean>;

  getOwnerPool(overrides?: CallOverrides): Promise<BigNumber>;

  getPaymentToken(overrides?: CallOverrides): Promise<string>;

  getPrize(
    _winner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPrizePool(overrides?: CallOverrides): Promise<BigNumber>;

  getPurchaseRatio(overrides?: CallOverrides): Promise<BigNumber>;

  getRoleAdmin(
    role: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  grantRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  openBets(
    closingTime: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  ownerWithdraw(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  performUpkeep(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  prizeWithdraw(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  purchaseTokens(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  returnTokens(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    LOTTERY_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    bet(overrides?: CallOverrides): Promise<void>;

    betMany(
      times: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    checkUpkeep(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { upkeepNeeded: boolean }>;

    closeLottery(overrides?: CallOverrides): Promise<void>;

    getBetFee(overrides?: CallOverrides): Promise<BigNumber>;

    getBetPrice(overrides?: CallOverrides): Promise<BigNumber>;

    getBetsClosingTime(overrides?: CallOverrides): Promise<BigNumber>;

    getBetsOpen(overrides?: CallOverrides): Promise<boolean>;

    getOwnerPool(overrides?: CallOverrides): Promise<BigNumber>;

    getPaymentToken(overrides?: CallOverrides): Promise<string>;

    getPrize(
      _winner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrizePool(overrides?: CallOverrides): Promise<BigNumber>;

    getPurchaseRatio(overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    openBets(
      closingTime: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    ownerWithdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    performUpkeep(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    prizeWithdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    purchaseTokens(overrides?: CallOverrides): Promise<void>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    returnTokens(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "LotteryClosed(address,uint256)"(
      winner?: PromiseOrValue<string> | null,
      prize?: null
    ): LotteryClosedEventFilter;
    LotteryClosed(
      winner?: PromiseOrValue<string> | null,
      prize?: null
    ): LotteryClosedEventFilter;

    "LotteryOpened(uint256)"(
      closingTimeStamp?: PromiseOrValue<BigNumberish> | null
    ): LotteryOpenedEventFilter;
    LotteryOpened(
      closingTimeStamp?: PromiseOrValue<BigNumberish> | null
    ): LotteryOpenedEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    LOTTERY_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    bet(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    betMany(
      times: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    checkUpkeep(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    closeLottery(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getBetFee(overrides?: CallOverrides): Promise<BigNumber>;

    getBetPrice(overrides?: CallOverrides): Promise<BigNumber>;

    getBetsClosingTime(overrides?: CallOverrides): Promise<BigNumber>;

    getBetsOpen(overrides?: CallOverrides): Promise<BigNumber>;

    getOwnerPool(overrides?: CallOverrides): Promise<BigNumber>;

    getPaymentToken(overrides?: CallOverrides): Promise<BigNumber>;

    getPrize(
      _winner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrizePool(overrides?: CallOverrides): Promise<BigNumber>;

    getPurchaseRatio(overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    openBets(
      closingTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    ownerWithdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    performUpkeep(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    prizeWithdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    purchaseTokens(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    returnTokens(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    LOTTERY_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bet(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    betMany(
      times: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    checkUpkeep(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    closeLottery(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getBetFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBetPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBetsClosingTime(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBetsOpen(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOwnerPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPaymentToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPrize(
      _winner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrizePool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPurchaseRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    openBets(
      closingTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    ownerWithdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    performUpkeep(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    prizeWithdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    purchaseTokens(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    returnTokens(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
