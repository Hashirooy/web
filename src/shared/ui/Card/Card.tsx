import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Card.module.scss"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export const Card = ({children, className, ...otherProps}: CardProps) => {
    return (
        <div className={classNames(cls.card, {}, [className])} {...otherProps}>
            {children}
        </div>
    )
}