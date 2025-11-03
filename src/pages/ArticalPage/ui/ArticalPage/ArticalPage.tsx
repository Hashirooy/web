import { memo } from "react";
import cls from "./ArticalPage.module.scss"

const ArticalPage = () => {
    return (
        <div className={cls.ArticalPage}>Artical Page</div>
    );
}
export default memo(ArticalPage);