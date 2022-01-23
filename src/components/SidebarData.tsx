import React, { ReactNode } from "react";
import { ReactComponent as DashboardIcon } from "../assets/vectors/dashboard.svg";
import { ReactComponent as ProjectsIcon } from "../assets/vectors/project.svg";
import { ReactComponent as BeneficiariesIcon } from "../assets/vectors/beneficiary.svg";
import { ReactComponent as NoorCoopUsersIcon } from "../assets/vectors/noorcoopusers.svg";
import { ReactComponent as MembersIcon } from "../assets/vectors/members.svg";
import { ReactComponent as ReturnPaymentIcon } from "../assets/vectors/returnspayment.svg";
import { ReactComponent as ApprovalChainIcon } from "../assets/vectors/approvalchain.svg";
import { ReactComponent as ReportsIcon } from "../assets/vectors/reports.svg";
import { ReactComponent as ProfileIcon } from "../assets/vectors/profile.svg";
import { ReactComponent as LogoutIcon } from "../assets/vectors/logout.svg";
import * as BiIcons from "react-icons/bi";

interface SidebarDataProps {
  title: string;
  exact: boolean;
  path: string;
  paths: string[];
  icon: ReactNode;
  cName: string;
}

export const SidebarData: SidebarDataProps[] = [
  {
    title: "Candidates",
    exact: true,
    path: "/",
    paths: ["/"],
    icon: <DashboardIcon />,
    cName: "nav-text",
  },
];
