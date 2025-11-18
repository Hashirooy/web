import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, memo, ReactNode } from 'react';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINE = 'outline',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
}

export const Card = memo((props: CardProps) => {
    const { className, children, theme = CardTheme.NORMAL, ...otherProps } = props;

    const mods: Mods = {
        [cls[theme]]: true,
    };

    return (
        <div
            className={classNames(cls.Card, mods, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
