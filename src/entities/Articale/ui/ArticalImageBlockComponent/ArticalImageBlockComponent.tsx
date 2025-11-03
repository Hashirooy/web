import { classNames } from "shared/lib/classNames/classNames";

import cls from "./ArticalImageBlockComponent.module.scss";
import { memo } from "react";
import { ArticleImageBlock } from "entities/Articale/model/types/Article";

interface ArticalImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock
}

export const ArticalImageBlockComponent = memo((props:ArticalImageBlockComponentProps) => {
    const {className} = props;
    return (<div className={classNames(cls.articalBlockComponent, {}, [className])}>
        <img src={props.block.src} alt={props.block.title} className={cls.image}/>
        {props.block.title && (<div className={cls.title}>{props.block.title}</div>)}
    </div>);
})