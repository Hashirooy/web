import { classNames } from "shared/lib/classNames/classNames";

import cls from "./ArticalCodeBlockComponent.module.scss";
import { memo } from "react";
import { ArticleCodeBlock } from "entities/Articale/model/types/Article";
import { Code } from "shared/ui/Code/Code";

interface ArticalCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock
}

export const ArticalCodeBlockComponent = memo((props:ArticalCodeBlockComponentProps) => {
    const {className, block} = props;
    return (
    <div className={classNames(cls.articalBlockComponent, {}, [className])}>
        <Code text={block.code}/>
           
      
    </div>);
})