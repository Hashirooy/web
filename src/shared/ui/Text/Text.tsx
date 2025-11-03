import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum AlignText{
    right="right",
    left="left",
    center="center"
}

export enum TextSize{
    m="size_m",
    l="size_l",
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?:AlignText
    size?:TextSize
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = AlignText.left,
        size=TextSize.m
    } = props;

    const mods:Mods={
        [cls[align]]:true,
        [cls[theme]]:true,
        [cls[size]]:true,
    }

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
