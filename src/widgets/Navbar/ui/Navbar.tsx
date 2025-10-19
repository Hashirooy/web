import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import cls from "./Navbar.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";
import { LoginModal } from "feathures/AuthByUsername";
import { getUserAuthData, userActions } from "app/entities/User";
import { useDispatch, useSelector } from "react-redux";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const dispatch = useDispatch()
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

    const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

   const onLogOut = useCallback(() => {
    
    dispatch(userActions.logout())
  }, []);



  const userData = useSelector(getUserAuthData)

  if(userData){
    return(<div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onLogOut}
      >
        {t("Выйти")}
      </Button>
     
    </div>)
  }
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t("Войти")}
      </Button>
      {isAuthModal &&<LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>}
    </div>
  );
};
