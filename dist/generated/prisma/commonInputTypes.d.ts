import type * as runtime from "@prisma/client/runtime/library";
import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
    isSet?: boolean;
};
export type EnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | Prisma.EnumAuthProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.AuthProvider[] | Prisma.ListEnumAuthProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AuthProvider[] | Prisma.ListEnumAuthProviderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | Prisma.EnumGenderFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null;
    isSet?: boolean;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
    isSet?: boolean;
};
export type EnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | Prisma.EnumAccountTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AccountType[] | Prisma.ListEnumAccountTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccountType[] | Prisma.ListEnumAccountTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType;
};
export type EnumVehicleTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | Prisma.EnumVehicleTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.VehicleType[] | Prisma.ListEnumVehicleTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.VehicleType[] | Prisma.ListEnumVehicleTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumVehicleTypeNullableFilter<$PrismaModel> | $Enums.VehicleType | null;
    isSet?: boolean;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
    isSet?: boolean;
};
export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    isSet?: boolean;
};
export type EnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | Prisma.EnumAuthProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.AuthProvider[] | Prisma.ListEnumAuthProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AuthProvider[] | Prisma.ListEnumAuthProviderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAuthProviderFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAuthProviderFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | Prisma.EnumGenderFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGenderNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGenderNullableFilter<$PrismaModel>;
    isSet?: boolean;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    isSet?: boolean;
};
export type EnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | Prisma.EnumAccountTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AccountType[] | Prisma.ListEnumAccountTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccountType[] | Prisma.ListEnumAccountTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAccountTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAccountTypeFilter<$PrismaModel>;
};
export type EnumVehicleTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | Prisma.EnumVehicleTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.VehicleType[] | Prisma.ListEnumVehicleTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.VehicleType[] | Prisma.ListEnumVehicleTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumVehicleTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumVehicleTypeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumVehicleTypeNullableFilter<$PrismaModel>;
    isSet?: boolean;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    isSet?: boolean;
};
export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type EnumGroupRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupRole | Prisma.EnumGroupRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.GroupRole[] | Prisma.ListEnumGroupRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GroupRole[] | Prisma.ListEnumGroupRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGroupRoleFilter<$PrismaModel> | $Enums.GroupRole;
};
export type EnumGroupRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupRole | Prisma.EnumGroupRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.GroupRole[] | Prisma.ListEnumGroupRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GroupRole[] | Prisma.ListEnumGroupRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGroupRoleWithAggregatesFilter<$PrismaModel> | $Enums.GroupRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGroupRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGroupRoleFilter<$PrismaModel>;
};
export type EnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | Prisma.EnumMessageTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.MessageType[] | Prisma.ListEnumMessageTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MessageType[] | Prisma.ListEnumMessageTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType;
};
export type JsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    isSet?: boolean;
};
export type EnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | Prisma.EnumMessageTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.MessageType[] | Prisma.ListEnumMessageTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MessageType[] | Prisma.ListEnumMessageTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMessageTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMessageTypeFilter<$PrismaModel>;
};
export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
    isSet?: boolean;
};
export type EnumPresetMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PresetMessageType | Prisma.EnumPresetMessageTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PresetMessageType[] | Prisma.ListEnumPresetMessageTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PresetMessageType[] | Prisma.ListEnumPresetMessageTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPresetMessageTypeFilter<$PrismaModel> | $Enums.PresetMessageType;
};
export type EnumPresetMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PresetMessageType | Prisma.EnumPresetMessageTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PresetMessageType[] | Prisma.ListEnumPresetMessageTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PresetMessageType[] | Prisma.ListEnumPresetMessageTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPresetMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.PresetMessageType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPresetMessageTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPresetMessageTypeFilter<$PrismaModel>;
};
export type EnumMessageRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageRequestStatus | Prisma.EnumMessageRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MessageRequestStatus[] | Prisma.ListEnumMessageRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MessageRequestStatus[] | Prisma.ListEnumMessageRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMessageRequestStatusFilter<$PrismaModel> | $Enums.MessageRequestStatus;
};
export type EnumMessageRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageRequestStatus | Prisma.EnumMessageRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MessageRequestStatus[] | Prisma.ListEnumMessageRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MessageRequestStatus[] | Prisma.ListEnumMessageRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMessageRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.MessageRequestStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMessageRequestStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMessageRequestStatusFilter<$PrismaModel>;
};
export type EnumUsefulNumberCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.UsefulNumberCategory | Prisma.EnumUsefulNumberCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.UsefulNumberCategory[] | Prisma.ListEnumUsefulNumberCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UsefulNumberCategory[] | Prisma.ListEnumUsefulNumberCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUsefulNumberCategoryFilter<$PrismaModel> | $Enums.UsefulNumberCategory;
};
export type EnumUsefulNumberCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UsefulNumberCategory | Prisma.EnumUsefulNumberCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.UsefulNumberCategory[] | Prisma.ListEnumUsefulNumberCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UsefulNumberCategory[] | Prisma.ListEnumUsefulNumberCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUsefulNumberCategoryWithAggregatesFilter<$PrismaModel> | $Enums.UsefulNumberCategory;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUsefulNumberCategoryFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUsefulNumberCategoryFilter<$PrismaModel>;
};
export type EnumRatingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RatingStatus | Prisma.EnumRatingStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RatingStatus[] | Prisma.ListEnumRatingStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RatingStatus[] | Prisma.ListEnumRatingStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRatingStatusFilter<$PrismaModel> | $Enums.RatingStatus;
};
export type EnumRatingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RatingStatus | Prisma.EnumRatingStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RatingStatus[] | Prisma.ListEnumRatingStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RatingStatus[] | Prisma.ListEnumRatingStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRatingStatusWithAggregatesFilter<$PrismaModel> | $Enums.RatingStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRatingStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRatingStatusFilter<$PrismaModel>;
};
export type EnumPolicyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PolicyType | Prisma.EnumPolicyTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PolicyType[] | Prisma.ListEnumPolicyTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PolicyType[] | Prisma.ListEnumPolicyTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPolicyTypeFilter<$PrismaModel> | $Enums.PolicyType;
};
export type EnumPolicyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PolicyType | Prisma.EnumPolicyTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PolicyType[] | Prisma.ListEnumPolicyTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PolicyType[] | Prisma.ListEnumPolicyTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPolicyTypeWithAggregatesFilter<$PrismaModel> | $Enums.PolicyType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPolicyTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPolicyTypeFilter<$PrismaModel>;
};
export type FloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type EnumParkingCostFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingCost | Prisma.EnumParkingCostFieldRefInput<$PrismaModel>;
    in?: $Enums.ParkingCost[] | Prisma.ListEnumParkingCostFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ParkingCost[] | Prisma.ListEnumParkingCostFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumParkingCostFilter<$PrismaModel> | $Enums.ParkingCost;
};
export type EnumDisabledFacilityLocationNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DisabledFacilityLocation | Prisma.EnumDisabledFacilityLocationFieldRefInput<$PrismaModel> | null;
    in?: $Enums.DisabledFacilityLocation[] | Prisma.ListEnumDisabledFacilityLocationFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.DisabledFacilityLocation[] | Prisma.ListEnumDisabledFacilityLocationFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumDisabledFacilityLocationNullableFilter<$PrismaModel> | $Enums.DisabledFacilityLocation | null;
    isSet?: boolean;
};
export type EnumParkingCostWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingCost | Prisma.EnumParkingCostFieldRefInput<$PrismaModel>;
    in?: $Enums.ParkingCost[] | Prisma.ListEnumParkingCostFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ParkingCost[] | Prisma.ListEnumParkingCostFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumParkingCostWithAggregatesFilter<$PrismaModel> | $Enums.ParkingCost;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumParkingCostFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumParkingCostFilter<$PrismaModel>;
};
export type EnumDisabledFacilityLocationNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DisabledFacilityLocation | Prisma.EnumDisabledFacilityLocationFieldRefInput<$PrismaModel> | null;
    in?: $Enums.DisabledFacilityLocation[] | Prisma.ListEnumDisabledFacilityLocationFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.DisabledFacilityLocation[] | Prisma.ListEnumDisabledFacilityLocationFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumDisabledFacilityLocationNullableWithAggregatesFilter<$PrismaModel> | $Enums.DisabledFacilityLocation | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDisabledFacilityLocationNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDisabledFacilityLocationNullableFilter<$PrismaModel>;
    isSet?: boolean;
};
export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | Prisma.EnumTransactionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionType[] | Prisma.ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionType[] | Prisma.ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType;
};
export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | Prisma.EnumTransactionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionType[] | Prisma.ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionType[] | Prisma.ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTransactionTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTransactionTypeFilter<$PrismaModel>;
};
export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
    isSet?: boolean;
};
export type EnumHandoffStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.HandoffStatus | Prisma.EnumHandoffStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.HandoffStatus[] | Prisma.ListEnumHandoffStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.HandoffStatus[] | Prisma.ListEnumHandoffStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumHandoffStatusFilter<$PrismaModel> | $Enums.HandoffStatus;
};
export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    isSet?: boolean;
};
export type EnumHandoffStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HandoffStatus | Prisma.EnumHandoffStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.HandoffStatus[] | Prisma.ListEnumHandoffStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.HandoffStatus[] | Prisma.ListEnumHandoffStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumHandoffStatusWithAggregatesFilter<$PrismaModel> | $Enums.HandoffStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumHandoffStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumHandoffStatusFilter<$PrismaModel>;
};
export type EnumParkingSearchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingSearchStatus | Prisma.EnumParkingSearchStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ParkingSearchStatus[] | Prisma.ListEnumParkingSearchStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ParkingSearchStatus[] | Prisma.ListEnumParkingSearchStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumParkingSearchStatusFilter<$PrismaModel> | $Enums.ParkingSearchStatus;
};
export type EnumParkingSearchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingSearchStatus | Prisma.EnumParkingSearchStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ParkingSearchStatus[] | Prisma.ListEnumParkingSearchStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ParkingSearchStatus[] | Prisma.ListEnumParkingSearchStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumParkingSearchStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParkingSearchStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumParkingSearchStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumParkingSearchStatusFilter<$PrismaModel>;
};
export type EnumParkingSaveSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingSaveSource | Prisma.EnumParkingSaveSourceFieldRefInput<$PrismaModel>;
    in?: $Enums.ParkingSaveSource[] | Prisma.ListEnumParkingSaveSourceFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ParkingSaveSource[] | Prisma.ListEnumParkingSaveSourceFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumParkingSaveSourceFilter<$PrismaModel> | $Enums.ParkingSaveSource;
};
export type EnumParkingCostNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingCost | Prisma.EnumParkingCostFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ParkingCost[] | Prisma.ListEnumParkingCostFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ParkingCost[] | Prisma.ListEnumParkingCostFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumParkingCostNullableFilter<$PrismaModel> | $Enums.ParkingCost | null;
    isSet?: boolean;
};
export type EnumParkingSaveSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingSaveSource | Prisma.EnumParkingSaveSourceFieldRefInput<$PrismaModel>;
    in?: $Enums.ParkingSaveSource[] | Prisma.ListEnumParkingSaveSourceFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ParkingSaveSource[] | Prisma.ListEnumParkingSaveSourceFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumParkingSaveSourceWithAggregatesFilter<$PrismaModel> | $Enums.ParkingSaveSource;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumParkingSaveSourceFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumParkingSaveSourceFilter<$PrismaModel>;
};
export type EnumParkingCostNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingCost | Prisma.EnumParkingCostFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ParkingCost[] | Prisma.ListEnumParkingCostFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ParkingCost[] | Prisma.ListEnumParkingCostFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumParkingCostNullableWithAggregatesFilter<$PrismaModel> | $Enums.ParkingCost | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumParkingCostNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumParkingCostNullableFilter<$PrismaModel>;
    isSet?: boolean;
};
export type EnumParkingSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingSessionStatus | Prisma.EnumParkingSessionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ParkingSessionStatus[] | Prisma.ListEnumParkingSessionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ParkingSessionStatus[] | Prisma.ListEnumParkingSessionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumParkingSessionStatusFilter<$PrismaModel> | $Enums.ParkingSessionStatus;
};
export type EnumParkingSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingSessionStatus | Prisma.EnumParkingSessionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ParkingSessionStatus[] | Prisma.ListEnumParkingSessionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ParkingSessionStatus[] | Prisma.ListEnumParkingSessionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumParkingSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParkingSessionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumParkingSessionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumParkingSessionStatusFilter<$PrismaModel>;
};
export type EnumPaidParkingPromptStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaidParkingPromptStatus | Prisma.EnumPaidParkingPromptStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaidParkingPromptStatus[] | Prisma.ListEnumPaidParkingPromptStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaidParkingPromptStatus[] | Prisma.ListEnumPaidParkingPromptStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaidParkingPromptStatusFilter<$PrismaModel> | $Enums.PaidParkingPromptStatus;
};
export type EnumPaidParkingPromptStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaidParkingPromptStatus | Prisma.EnumPaidParkingPromptStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaidParkingPromptStatus[] | Prisma.ListEnumPaidParkingPromptStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaidParkingPromptStatus[] | Prisma.ListEnumPaidParkingPromptStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaidParkingPromptStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaidParkingPromptStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaidParkingPromptStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaidParkingPromptStatusFilter<$PrismaModel>;
};
export type EnumNotificationEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationEventType | Prisma.EnumNotificationEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationEventType[] | Prisma.ListEnumNotificationEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationEventType[] | Prisma.ListEnumNotificationEventTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationEventTypeFilter<$PrismaModel> | $Enums.NotificationEventType;
};
export type EnumNotificationEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationEventType | Prisma.EnumNotificationEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationEventType[] | Prisma.ListEnumNotificationEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationEventType[] | Prisma.ListEnumNotificationEventTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationEventType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumNotificationEventTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumNotificationEventTypeFilter<$PrismaModel>;
};
export type EnumDocumentTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | Prisma.EnumDocumentTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.DocumentType[] | Prisma.ListEnumDocumentTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.DocumentType[] | Prisma.ListEnumDocumentTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumDocumentTypeNullableFilter<$PrismaModel> | $Enums.DocumentType | null;
    isSet?: boolean;
};
export type EnumDocumentTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | Prisma.EnumDocumentTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.DocumentType[] | Prisma.ListEnumDocumentTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.DocumentType[] | Prisma.ListEnumDocumentTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumDocumentTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDocumentTypeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDocumentTypeNullableFilter<$PrismaModel>;
    isSet?: boolean;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
    isSet?: boolean;
};
export type NestedEnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | Prisma.EnumAuthProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.AuthProvider[] | Prisma.ListEnumAuthProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AuthProvider[] | Prisma.ListEnumAuthProviderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | Prisma.EnumGenderFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null;
    isSet?: boolean;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
    isSet?: boolean;
};
export type NestedEnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | Prisma.EnumAccountTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AccountType[] | Prisma.ListEnumAccountTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccountType[] | Prisma.ListEnumAccountTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType;
};
export type NestedEnumVehicleTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | Prisma.EnumVehicleTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.VehicleType[] | Prisma.ListEnumVehicleTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.VehicleType[] | Prisma.ListEnumVehicleTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumVehicleTypeNullableFilter<$PrismaModel> | $Enums.VehicleType | null;
    isSet?: boolean;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
    isSet?: boolean;
};
export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    isSet?: boolean;
};
export type NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | Prisma.EnumAuthProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.AuthProvider[] | Prisma.ListEnumAuthProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AuthProvider[] | Prisma.ListEnumAuthProviderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAuthProviderFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAuthProviderFilter<$PrismaModel>;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | Prisma.EnumGenderFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGenderNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGenderNullableFilter<$PrismaModel>;
    isSet?: boolean;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    isSet?: boolean;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
    isSet?: boolean;
};
export type NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | Prisma.EnumAccountTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AccountType[] | Prisma.ListEnumAccountTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccountType[] | Prisma.ListEnumAccountTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAccountTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAccountTypeFilter<$PrismaModel>;
};
export type NestedEnumVehicleTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | Prisma.EnumVehicleTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.VehicleType[] | Prisma.ListEnumVehicleTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.VehicleType[] | Prisma.ListEnumVehicleTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumVehicleTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumVehicleTypeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumVehicleTypeNullableFilter<$PrismaModel>;
    isSet?: boolean;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    isSet?: boolean;
};
export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedEnumGroupRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupRole | Prisma.EnumGroupRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.GroupRole[] | Prisma.ListEnumGroupRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GroupRole[] | Prisma.ListEnumGroupRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGroupRoleFilter<$PrismaModel> | $Enums.GroupRole;
};
export type NestedEnumGroupRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupRole | Prisma.EnumGroupRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.GroupRole[] | Prisma.ListEnumGroupRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GroupRole[] | Prisma.ListEnumGroupRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGroupRoleWithAggregatesFilter<$PrismaModel> | $Enums.GroupRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGroupRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGroupRoleFilter<$PrismaModel>;
};
export type NestedEnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | Prisma.EnumMessageTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.MessageType[] | Prisma.ListEnumMessageTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MessageType[] | Prisma.ListEnumMessageTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType;
};
export type NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | Prisma.EnumMessageTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.MessageType[] | Prisma.ListEnumMessageTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MessageType[] | Prisma.ListEnumMessageTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMessageTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMessageTypeFilter<$PrismaModel>;
};
export type NestedJsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    isSet?: boolean;
};
export type NestedEnumPresetMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PresetMessageType | Prisma.EnumPresetMessageTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PresetMessageType[] | Prisma.ListEnumPresetMessageTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PresetMessageType[] | Prisma.ListEnumPresetMessageTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPresetMessageTypeFilter<$PrismaModel> | $Enums.PresetMessageType;
};
export type NestedEnumPresetMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PresetMessageType | Prisma.EnumPresetMessageTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PresetMessageType[] | Prisma.ListEnumPresetMessageTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PresetMessageType[] | Prisma.ListEnumPresetMessageTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPresetMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.PresetMessageType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPresetMessageTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPresetMessageTypeFilter<$PrismaModel>;
};
export type NestedEnumMessageRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageRequestStatus | Prisma.EnumMessageRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MessageRequestStatus[] | Prisma.ListEnumMessageRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MessageRequestStatus[] | Prisma.ListEnumMessageRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMessageRequestStatusFilter<$PrismaModel> | $Enums.MessageRequestStatus;
};
export type NestedEnumMessageRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageRequestStatus | Prisma.EnumMessageRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MessageRequestStatus[] | Prisma.ListEnumMessageRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MessageRequestStatus[] | Prisma.ListEnumMessageRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMessageRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.MessageRequestStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMessageRequestStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMessageRequestStatusFilter<$PrismaModel>;
};
export type NestedEnumUsefulNumberCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.UsefulNumberCategory | Prisma.EnumUsefulNumberCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.UsefulNumberCategory[] | Prisma.ListEnumUsefulNumberCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UsefulNumberCategory[] | Prisma.ListEnumUsefulNumberCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUsefulNumberCategoryFilter<$PrismaModel> | $Enums.UsefulNumberCategory;
};
export type NestedEnumUsefulNumberCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UsefulNumberCategory | Prisma.EnumUsefulNumberCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.UsefulNumberCategory[] | Prisma.ListEnumUsefulNumberCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UsefulNumberCategory[] | Prisma.ListEnumUsefulNumberCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUsefulNumberCategoryWithAggregatesFilter<$PrismaModel> | $Enums.UsefulNumberCategory;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUsefulNumberCategoryFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUsefulNumberCategoryFilter<$PrismaModel>;
};
export type NestedEnumRatingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RatingStatus | Prisma.EnumRatingStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RatingStatus[] | Prisma.ListEnumRatingStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RatingStatus[] | Prisma.ListEnumRatingStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRatingStatusFilter<$PrismaModel> | $Enums.RatingStatus;
};
export type NestedEnumRatingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RatingStatus | Prisma.EnumRatingStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RatingStatus[] | Prisma.ListEnumRatingStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RatingStatus[] | Prisma.ListEnumRatingStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRatingStatusWithAggregatesFilter<$PrismaModel> | $Enums.RatingStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRatingStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRatingStatusFilter<$PrismaModel>;
};
export type NestedEnumPolicyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PolicyType | Prisma.EnumPolicyTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PolicyType[] | Prisma.ListEnumPolicyTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PolicyType[] | Prisma.ListEnumPolicyTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPolicyTypeFilter<$PrismaModel> | $Enums.PolicyType;
};
export type NestedEnumPolicyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PolicyType | Prisma.EnumPolicyTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PolicyType[] | Prisma.ListEnumPolicyTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PolicyType[] | Prisma.ListEnumPolicyTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPolicyTypeWithAggregatesFilter<$PrismaModel> | $Enums.PolicyType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPolicyTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPolicyTypeFilter<$PrismaModel>;
};
export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type NestedEnumParkingCostFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingCost | Prisma.EnumParkingCostFieldRefInput<$PrismaModel>;
    in?: $Enums.ParkingCost[] | Prisma.ListEnumParkingCostFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ParkingCost[] | Prisma.ListEnumParkingCostFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumParkingCostFilter<$PrismaModel> | $Enums.ParkingCost;
};
export type NestedEnumDisabledFacilityLocationNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DisabledFacilityLocation | Prisma.EnumDisabledFacilityLocationFieldRefInput<$PrismaModel> | null;
    in?: $Enums.DisabledFacilityLocation[] | Prisma.ListEnumDisabledFacilityLocationFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.DisabledFacilityLocation[] | Prisma.ListEnumDisabledFacilityLocationFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumDisabledFacilityLocationNullableFilter<$PrismaModel> | $Enums.DisabledFacilityLocation | null;
    isSet?: boolean;
};
export type NestedEnumParkingCostWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingCost | Prisma.EnumParkingCostFieldRefInput<$PrismaModel>;
    in?: $Enums.ParkingCost[] | Prisma.ListEnumParkingCostFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ParkingCost[] | Prisma.ListEnumParkingCostFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumParkingCostWithAggregatesFilter<$PrismaModel> | $Enums.ParkingCost;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumParkingCostFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumParkingCostFilter<$PrismaModel>;
};
export type NestedEnumDisabledFacilityLocationNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DisabledFacilityLocation | Prisma.EnumDisabledFacilityLocationFieldRefInput<$PrismaModel> | null;
    in?: $Enums.DisabledFacilityLocation[] | Prisma.ListEnumDisabledFacilityLocationFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.DisabledFacilityLocation[] | Prisma.ListEnumDisabledFacilityLocationFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumDisabledFacilityLocationNullableWithAggregatesFilter<$PrismaModel> | $Enums.DisabledFacilityLocation | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDisabledFacilityLocationNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDisabledFacilityLocationNullableFilter<$PrismaModel>;
    isSet?: boolean;
};
export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | Prisma.EnumTransactionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionType[] | Prisma.ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionType[] | Prisma.ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType;
};
export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | Prisma.EnumTransactionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionType[] | Prisma.ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionType[] | Prisma.ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTransactionTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTransactionTypeFilter<$PrismaModel>;
};
export type NestedEnumHandoffStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.HandoffStatus | Prisma.EnumHandoffStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.HandoffStatus[] | Prisma.ListEnumHandoffStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.HandoffStatus[] | Prisma.ListEnumHandoffStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumHandoffStatusFilter<$PrismaModel> | $Enums.HandoffStatus;
};
export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    isSet?: boolean;
};
export type NestedEnumHandoffStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HandoffStatus | Prisma.EnumHandoffStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.HandoffStatus[] | Prisma.ListEnumHandoffStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.HandoffStatus[] | Prisma.ListEnumHandoffStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumHandoffStatusWithAggregatesFilter<$PrismaModel> | $Enums.HandoffStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumHandoffStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumHandoffStatusFilter<$PrismaModel>;
};
export type NestedEnumParkingSearchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingSearchStatus | Prisma.EnumParkingSearchStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ParkingSearchStatus[] | Prisma.ListEnumParkingSearchStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ParkingSearchStatus[] | Prisma.ListEnumParkingSearchStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumParkingSearchStatusFilter<$PrismaModel> | $Enums.ParkingSearchStatus;
};
export type NestedEnumParkingSearchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingSearchStatus | Prisma.EnumParkingSearchStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ParkingSearchStatus[] | Prisma.ListEnumParkingSearchStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ParkingSearchStatus[] | Prisma.ListEnumParkingSearchStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumParkingSearchStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParkingSearchStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumParkingSearchStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumParkingSearchStatusFilter<$PrismaModel>;
};
export type NestedEnumParkingSaveSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingSaveSource | Prisma.EnumParkingSaveSourceFieldRefInput<$PrismaModel>;
    in?: $Enums.ParkingSaveSource[] | Prisma.ListEnumParkingSaveSourceFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ParkingSaveSource[] | Prisma.ListEnumParkingSaveSourceFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumParkingSaveSourceFilter<$PrismaModel> | $Enums.ParkingSaveSource;
};
export type NestedEnumParkingCostNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingCost | Prisma.EnumParkingCostFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ParkingCost[] | Prisma.ListEnumParkingCostFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ParkingCost[] | Prisma.ListEnumParkingCostFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumParkingCostNullableFilter<$PrismaModel> | $Enums.ParkingCost | null;
    isSet?: boolean;
};
export type NestedEnumParkingSaveSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingSaveSource | Prisma.EnumParkingSaveSourceFieldRefInput<$PrismaModel>;
    in?: $Enums.ParkingSaveSource[] | Prisma.ListEnumParkingSaveSourceFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ParkingSaveSource[] | Prisma.ListEnumParkingSaveSourceFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumParkingSaveSourceWithAggregatesFilter<$PrismaModel> | $Enums.ParkingSaveSource;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumParkingSaveSourceFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumParkingSaveSourceFilter<$PrismaModel>;
};
export type NestedEnumParkingCostNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingCost | Prisma.EnumParkingCostFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ParkingCost[] | Prisma.ListEnumParkingCostFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ParkingCost[] | Prisma.ListEnumParkingCostFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumParkingCostNullableWithAggregatesFilter<$PrismaModel> | $Enums.ParkingCost | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumParkingCostNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumParkingCostNullableFilter<$PrismaModel>;
    isSet?: boolean;
};
export type NestedEnumParkingSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingSessionStatus | Prisma.EnumParkingSessionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ParkingSessionStatus[] | Prisma.ListEnumParkingSessionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ParkingSessionStatus[] | Prisma.ListEnumParkingSessionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumParkingSessionStatusFilter<$PrismaModel> | $Enums.ParkingSessionStatus;
};
export type NestedEnumParkingSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParkingSessionStatus | Prisma.EnumParkingSessionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ParkingSessionStatus[] | Prisma.ListEnumParkingSessionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ParkingSessionStatus[] | Prisma.ListEnumParkingSessionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumParkingSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParkingSessionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumParkingSessionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumParkingSessionStatusFilter<$PrismaModel>;
};
export type NestedEnumPaidParkingPromptStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaidParkingPromptStatus | Prisma.EnumPaidParkingPromptStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaidParkingPromptStatus[] | Prisma.ListEnumPaidParkingPromptStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaidParkingPromptStatus[] | Prisma.ListEnumPaidParkingPromptStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaidParkingPromptStatusFilter<$PrismaModel> | $Enums.PaidParkingPromptStatus;
};
export type NestedEnumPaidParkingPromptStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaidParkingPromptStatus | Prisma.EnumPaidParkingPromptStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaidParkingPromptStatus[] | Prisma.ListEnumPaidParkingPromptStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaidParkingPromptStatus[] | Prisma.ListEnumPaidParkingPromptStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaidParkingPromptStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaidParkingPromptStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaidParkingPromptStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaidParkingPromptStatusFilter<$PrismaModel>;
};
export type NestedEnumNotificationEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationEventType | Prisma.EnumNotificationEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationEventType[] | Prisma.ListEnumNotificationEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationEventType[] | Prisma.ListEnumNotificationEventTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationEventTypeFilter<$PrismaModel> | $Enums.NotificationEventType;
};
export type NestedEnumNotificationEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationEventType | Prisma.EnumNotificationEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationEventType[] | Prisma.ListEnumNotificationEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationEventType[] | Prisma.ListEnumNotificationEventTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationEventType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumNotificationEventTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumNotificationEventTypeFilter<$PrismaModel>;
};
export type NestedEnumDocumentTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | Prisma.EnumDocumentTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.DocumentType[] | Prisma.ListEnumDocumentTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.DocumentType[] | Prisma.ListEnumDocumentTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumDocumentTypeNullableFilter<$PrismaModel> | $Enums.DocumentType | null;
    isSet?: boolean;
};
export type NestedEnumDocumentTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | Prisma.EnumDocumentTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.DocumentType[] | Prisma.ListEnumDocumentTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.DocumentType[] | Prisma.ListEnumDocumentTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumDocumentTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDocumentTypeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDocumentTypeNullableFilter<$PrismaModel>;
    isSet?: boolean;
};
