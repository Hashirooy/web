import { classNames, Mods } from "shared/lib/classNames/classNames"
import cls from "./Avatar.module.scss"
import { CSSProperties, useMemo } from "react"

interface AvatarProps {
    className?:string
    src?:string
    size?:number
    alt?:string
}

export const Avatar = (props:AvatarProps)=>{
    const {className,src, size,alt} = props

    const styles = useMemo<CSSProperties>(()=>{
        return {
            width: size,
            height:size
        }
    },[size])

    const mod:Mods = {

    }
    return(<img alt={alt}src={src}className={classNames(cls.avatar, mod,[className])} style={styles}></img>)
}