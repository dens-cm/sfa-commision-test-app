import {
    BiSolidDashboard, 
    // BiSolidBookmarks, BiSolidArchive, BiSolidBriefcase, BiSolidShip,
    // BiSolidCreditCardFront, BiSolidLayer, BiSolidNotepad, BiSolidMessageCheck, BiSolidFolderOpen,
    // BiSolidBriefcaseAlt2, BiSolidWallet, BiSolidTruck, BiSolidBank //, BiSolidCoinStack
} from "react-icons/bi"
import { type, type UserType } from "@/utils/auth/UserTypes"

interface ViewItem {
    key: string
    label: string
    icon: React.ComponentType
    hidden?: boolean
}

interface ViewSection {
    section: string
    roles: UserType[]
    items: ViewItem[]
}

export const getViewsConfig = (userType?: UserType): ViewSection[] => [
    {
        section: "Essentials",
        roles: [type.ADMIN],
        items: [
            { key: "dashboard", label: "Dashboard", icon: BiSolidDashboard },
            { key: "admin-dashboard", label: "Admin Dashboard", icon: BiSolidDashboard, hidden: userType !== type.ADMIN },
        ]
    }
]