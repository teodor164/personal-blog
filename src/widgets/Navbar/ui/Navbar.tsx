import {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({className}) => {

    const {t} = useTranslation()

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <AppLink className={cls.link} theme={AppLinkTheme.SECONDARY} to='/'>{t("Main page")}</AppLink>
            <AppLink className={cls.link} theme={AppLinkTheme.SECONDARY} to='/about'>{t("About us")}</AppLink>
        </div>
    )
}
