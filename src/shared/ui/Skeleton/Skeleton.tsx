import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Skeleton.module.scss"
import { memo } from "react";

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = memo((props:SkeletonProps)=>{
    const {className, height, width, border} = props;

    const styles:React.CSSProperties = {
        height,
        width,
        borderRadius: border
    }

    return <div style={styles}className={classNames(cls.skeleton, {},[className])}></div>
})