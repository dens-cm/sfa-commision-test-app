export const type = {
    UNDEFINED: 3,
    ADMIN: 4,
} as const

export type UserType = typeof type[keyof typeof type]
export const UNKNOWN_TYPE = -1 as const

export const typeAsPosition: Record<UserType | typeof UNKNOWN_TYPE, string> = {
    [UNKNOWN_TYPE]: "",
    [type.UNDEFINED]: "Undefined",
    [type.ADMIN]: "Administrator"
} as const