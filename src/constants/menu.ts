import ShowCaseIcon from "../assets/icons/briefcase-medical.svg";
import ArrowDown from "../assets/icons/arrow-down-to-square.svg";
import ArrowUp from "../assets/icons/arrow-up-from-square.svg";
import DocumentSearchIcon from "../assets/icons/search-alt-2.svg";
import CartChecked from "../assets/icons/cart-check.svg";
import CartIncome from "../assets/icons/cart-income.svg";
import VerificationIcon from "../assets/icons/verify.svg";
import TruckIcon from "../assets/icons/truck.svg";
import UsersIcon from "../assets/icons/users.svg";
import ExchangeIcon from "../assets/icons/verify.svg";
import Scaler from "../assets/icons/scaler.svg";
import SignIcon from "../assets/icons/sign.svg";
import DoneIcon from "../assets/icons/done.svg";
import PriceList from "../assets/icons/exchange.svg";
import PhoneIcon from "../assets/icons/phone.svg";

interface IMenu {
  button: string;
  icon?: typeof ShowCaseIcon;
  path: string;
  slug?: string;
}
interface INav {
  button: string;
  title?: string;
  path?: string;
  dropdown?: Array<{
    img?: typeof ShowCaseIcon;
    text?: string;
    sideBarText?: string;
    active?: boolean;
    path?: string;
  }>;
}
type MenuType = {
  [key: string]: Array<IMenu>;
};
export const MenuItems: {
  [key: string]: Array<INav>;
} = {
  global: [
    {
      button: "филиалы",
      path: "/global/branches",
    },
    {
      button: "Отчёт",
      path: "/global/report",
    },
  ],
  fapteka: [
    {
      path: "/fkassa/registry/income",
      button: "Служба приёма",
    },
    {
      button: "Задачи",
      title: "Задачи",
      dropdown: [
        {
          text: "new check",
          active: true,
          path: "/fApeka/cheque",
        },
        {
          text: "Все чеки",
          active: true,
          path: "/fApeka/cheque/all",
        },
      ],
    },
    {
      button: "Гостиница",
      title: "Гостиница",
      dropdown: [
        {
          text: "Отчёт",
        },
        {
          text: "Оpen",
        },
        {
          text: "Close",
        },
      ],
    },
    {
      button: "Клиенты",
      dropdown: [
        {
          text: "Клиенты",
        },
        {
          text: "Клиенты",
          path: "/fkassa/return-to-branch",
        },
        {
          text: "Клиенты",
          path: "/fkassa/return-to-writeoff",
        },
      ],
    },
  ],
};

export const SubMenus: Array<IMenu> = [
  {
    button: "Реестр лекарств",
    icon: ShowCaseIcon,
    path: "/global/registry",
    slug: "medicines",
  },
  {
    button: "Реестр прихода",
    icon: ArrowDown,
    path: "/global/registry",
    slug: "income",
  },
  {
    button: "Реестр расхода",
    path: "/global/registry",
    icon: ArrowUp,
    slug: "outcome",
  },
];

export const nAptekaMenus: MenuType = {
  top: [
    {
      button: "Реестр",
      icon: DocumentSearchIcon,
      path: "/pharmacy/registry",
    },
    {
      button: "Новый прИХоД",
      icon: CartIncome,
      path: "/pharmacy/income/create",
    },
    {
      button: "Загрузить с филиала",
      path: "/global/obtain-from-branch",
      icon: CartChecked,
      slug: "obtainByBranch",
    },
    {
      button: "Загрузить с 1C",
      path: "/global/obtain-from-1C",
      icon: CartChecked,
      slug: "obtainByApp",
    },
    {
      button: "Привязка Сертификатов",
      path: "/global/certificates",
      icon: VerificationIcon,
      slug: "certificates",
    },
  ],
  center: [
    {
      button: "Реестр лекарств",
      icon: ShowCaseIcon,
      path: "/pharmacy/registry",
    },
    {
      button: "Горячая ЛИНИЯ",
      icon: PhoneIcon,
      path: "/global/outcome",
      slug: "income",
    },
    {
      button: "Прайс ЛИСТ",
      path: "/pharmacy/obtain-from-branch",
      icon: PriceList,
      slug: "obtainByBranch",
    },
    {
      button: "Контроль обязательного ассортимента",
      path: "/pharmacy/obtain-from-1C",
      icon: DoneIcon,
      slug: "obtainByApp",
    },
    {
      button: "Контроль Фиксированных цен",
      path: "/pharmacy/certificates",
      icon: SignIcon,
      slug: "certificates",
    },
    {
      button: "Остатки и продажи",
      icon: Scaler,
      path: "/pharmacy/scaler",
      slug: "pharmacy",
    },
    {
      button: "Сводный прайс",
      icon: ExchangeIcon,
      path: "/global/outcome",
      slug: "income",
    },
    {
      button: "Управление персоналом",
      icon: UsersIcon,
      path: "/global/users",
      slug: "income",
    },
    {
      button: "Снабженец",
      icon: TruckIcon,
      path: "/global/tracking",
      slug: "income",
    },
  ],
};
