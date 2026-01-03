import layerImg from "@/assets/icons/layer.svg";
import walletImg from "@/assets/icons/wallet_svgrepo_large.com.svg";
import graphImg from "@/assets/icons/graph.svg";
import trashImg from "@/assets/icons/trash.svg";
import caseImg from "@/assets/icons/case.svg";
import dockerImg from "@/assets/icons/docker.svg";
import widgetImg from "@/assets/icons/widget.svg";
import avatarImg from "@/assets/icons/avatar_dark.svg";
import settingImg from "@/assets/icons/setting.svg";


export const SideBarButtons = {
    topButtons: [
        {
            id: 1,
            icon: layerImg,
            content: "Azal"
        },
        {
            id: 2,
            icon: walletImg,
            content: "Manage"
        },
        {
            id: 3,
            icon: graphImg,
            content: "Wallet Tracker"
        },
        {
            id: 4,
            icon: trashImg,
            content: "Burn"
        },
        {
            id: 5,
            icon: caseImg,
            content: "Ops"
        },
        {
            id: 6,
            icon: dockerImg,
            content: "Whale Watch"
        },
    ],
    bottomButtons: [
        {
            id: 1,
            icon: widgetImg,
            content: "Widget"
        },
        {
            id: 2,
            icon: settingImg,
            content: "Setting"
        },
        {
            id: 3,
            icon: avatarImg,
            content: "Account"
        },
    ]
}