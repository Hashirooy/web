import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Icon.module.scss";

interface IconProps{
    classname?:string;
    Svg:React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = (props:IconProps)=>{
    const {classname, Svg} = props;
    return <Svg className={classNames(cls.icon, {},[classname])}/>

}