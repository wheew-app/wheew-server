import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type locationModel = runtime.Types.Result.DefaultSelection<Prisma.$locationPayload>;
export type LocationNullableCompositeFilter = {
    equals?: Prisma.locationObjectEqualityInput | null;
    is?: Prisma.locationWhereInput | null;
    isNot?: Prisma.locationWhereInput | null;
    isSet?: boolean;
};
export type locationOrderByInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type locationNullableCreateEnvelopeInput = {
    set?: Prisma.locationCreateInput | null;
};
export type locationNullableUpdateEnvelopeInput = {
    set?: Prisma.locationCreateInput | null;
    upsert?: Prisma.locationUpsertInput;
    unset?: boolean;
};
export type locationWhereInput = {
    AND?: Prisma.locationWhereInput | Prisma.locationWhereInput[];
    OR?: Prisma.locationWhereInput[];
    NOT?: Prisma.locationWhereInput | Prisma.locationWhereInput[];
    latitude?: Prisma.FloatFilter<"location"> | number;
    longitude?: Prisma.FloatFilter<"location"> | number;
};
export type locationUpsertInput = {
    set: Prisma.locationCreateInput | null;
    update: Prisma.locationUpdateInput;
};
export type locationUpdateInput = {
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type locationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    latitude?: boolean;
    longitude?: boolean;
}, ExtArgs["result"]["location"]>;
export type locationSelectScalar = {
    latitude?: boolean;
    longitude?: boolean;
};
export type locationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"latitude" | "longitude", ExtArgs["result"]["location"]>;
export type $locationPayload = {
    name: "location";
    objects: {};
    scalars: {
        latitude: number;
        longitude: number;
    };
    composites: {};
};
export type locationGetPayload<S extends boolean | null | undefined | locationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$locationPayload, S>;
export interface locationFieldRefs {
    readonly latitude: Prisma.FieldRef<"location", 'Float'>;
    readonly longitude: Prisma.FieldRef<"location", 'Float'>;
}
export type locationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.locationSelect<ExtArgs> | null;
    omit?: Prisma.locationOmit<ExtArgs> | null;
};
