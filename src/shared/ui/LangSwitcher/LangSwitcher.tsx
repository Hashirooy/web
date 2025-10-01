import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { classNames } from "shared/lib/helpers/classNames/classNames";

import cls from "./LangSwitcher.module.scss";
import { Button, ButtonTheme } from "../Button/ui/Button";

export interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <Button
      className={classNames(cls.langSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
    >
      {t("Язык")}
    </Button>
  );
};
