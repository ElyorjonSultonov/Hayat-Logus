import React, { ReactElement } from "react";
import LoginContainer from "../containers/login";
import MainContainer from "../containers/main";
// import PharmacyContainer from "../containers/pharmacy";
// import PharmacySelectionContainer from "../containers/pharmacySelection/pharmacySelectionContainer";
// import RegistryContainer from "../containers/registry";
// import ReportContainer from "../containers/report";
// import CreateIncome from "../views/createIncome";
// import PharmacyRegistry from "../views/pharmacyRegistry";
// import Router from "../views/router";
// import PharmacyOutcomeContainer from "../containers/pharmacyOutcome";
import FkassaRegistryContainer from "../containers/fkassa/registry";
import BronTable from "../views/fKassa/tables";
import ResidentTable from "../views/fKassa/residents";
// import AllChequeContainer from "../containers/fkassa/allCheque";
// import FKassaChequeContainer from "../containers/fkassa/cheque";
// import FAptekaRegisteryInvoiceContainer from "../containers/fkassa/registry/inner";
// import FAptekaInvoiceContainer from "../containers/fkassa/registry/inner";
// import PurchaseInvoiceContainer from "../containers/fkassa/purchase";
// import TestContainer from "../containers/test";

type IRouting = {
  path: string;
  component: ReactElement;
  global?: boolean;
};

type MyGroupType = {
  [key: string]: Array<IRouting>;
};

export const RoutingData: MyGroupType = {
  NoAuth: [
    {
      path: "/login",
      component: <LoginContainer />,
      global: true,
    },
  ],

  admin: [
    // {
    //   path: "/fApeka",
    //   component: <FkassaRegistryContainer />,
    //   global: true,
    // },

    // {
    //   path: "/fApeka/cheque",
    //   component: <FKassaChequeContainer />,
    // },
    // {
    //   path: "/fApteka/registry",
    //   component: <FAptekaInvoiceContainer />,
    // },
    // {
    //   path: "/fApteka/registry/purchases",
    //   component: <PurchaseInvoiceContainer />,
    // },
    // {
    //   path: "/fApeka/cheque/all",
    //   component: <AllChequeContainer />,
    //   global: true,
    // },
    {
      path: "/global/branches",
      component: <MainContainer />,
      global: true,
    },
    {
      path: "/global/main",
      component: <MainContainer />,
      global: false,
    },
    {
      path: "/global/bron",
      component: <BronTable />,
      global: true,
    },
    {
      path: "/global/residents",
      component: <ResidentTable />,
      global: true,
    },

    // {
    //   path: "/global/report",
    //   component: <ReportContainer />,
    //   global: false,
    // },
    // {
    //   path: "/global/registry/:tab",
    //   component: <RegistryContainer />,
    // },
    // {
    //   path: "/test",
    //   component: <TestContainer />,
    // },
    // {
    //   path: "/pharmacy/income",
    //   component: <PharmacyContainer />,
    // },
    // {
    //   path: "/pharmacy/outcome",
    //   component: <PharmacyOutcomeContainer />,
    // },
    // {
    //   path: "/pharmacy/retail",
    //   component: <PharmacyOutcomeContainer />,
    // },
    // {
    //   path: "/pharmacy/money",
    //   component: <PharmacyOutcomeContainer />,
    // },
    // {
    //   path: "/pharmacy/shift",
    //   component: <PharmacyOutcomeContainer />,
    // },
    // {
    //   path: "/pharmacy/price",
    //   component: <PharmacyOutcomeContainer />,
    // },
    // {
    //   path: "/pharmacy/reference",
    //   component: <PharmacyOutcomeContainer />,
    // },
    // {
    //   path: "/pharmacy/report",
    //   component: <PharmacyOutcomeContainer />,
    // },
    // {
    //   path: "/pharmacy/mail",
    //   component: <PharmacyOutcomeContainer />,
    // },
    // {
    //   path: "/pharmacy/settings",
    //   component: <PharmacyOutcomeContainer />,
    // },
    // {
    //   path: "/pharmacy/registry",
    //   component: <PharmacyRegistry />,
    // },
    // {
    //   path: "/pharmacy/income/create",
    //   component: <CreateIncome />,
    // },
    // {
    //   path: "/pharmacy/income/create/selection",
    //   component: <PharmacySelectionContainer />,
    // },
  ],
};
