import { classNames } from "shared/lib/classNames/classNames";

import cls from "./ArticalTextBlockComponent.module.scss";
import { memo } from "react";
import { ArticleTextBlock } from "entities/Articale/model/types/Article";
import { Text } from "shared/ui/Text/Text";

interface ArticalTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock
}

export const ArticalTextBlockComponent = memo((props:ArticalTextBlockComponentProps) => {
    const {className , block} = props;
    return (
    <div className={classNames(cls.articalBlockComponent, {}, [className])}>
       {block.title && (<Text title={block.title} className={cls.title} />)}
       {block.paragraphs.map((paragraph, index)=>(
        <Text key={index} text={paragraph} className={cls.paragraph} />
       ))}
    </div>);
})