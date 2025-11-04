import { classNames } from "shared/lib/classNames/classNames"
import { Comment } from "../../model/types/comment"
import cls from "./CommentList.module.scss"
import { Text } from "shared/ui/Text/Text"
import { CommentCard } from "../CommetCard/CommentCard"


interface CommentListProps {
    className?:string
    comments?:Comment[]
    isLoading?:boolean
}

export const CommentList = (props:CommentListProps)=>{
    const {className, comments, isLoading} = props

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment, index) => (
                    <CommentCard
                        isLoading={isLoading}
                        className={cls.comment}
                        comment={comment}
                        key={index}
                    />
                ))
                : <Text text={'Комментарии отсутствуют'} />}
        </div>
    );
}