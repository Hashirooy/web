import { classNames } from "shared/lib/classNames/classNames";
import { Select, SelectOption } from "shared/ui/Select/Select";
import cls from './ArticalSortSelector.module.scss';
import { useCallback, useMemo } from "react";
import { ArticleSortField } from "entities/Article/model/types/article";
import { SortOrder } from "shared/types";

interface ArticalSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticalSortSelector = (props:ArticalSortSelectorProps) => {
    const {className, sort, order, onChangeOrder, onChangeSort} = props;

    const sortOrder = useMemo<SelectOption<SortOrder>[]>(()=>[
        {
            value: 'asc',
            content: 'По возрастанию',
        },
        {
            value: 'desc',
            content: 'По убыванию',
        },
    ],[])
    const sortFilrdOption = useMemo<SelectOption<ArticleSortField>[]>(()=>[
        {
            value: ArticleSortField.CREATED_AT,
            content: "Дате создания",
        },
        {
            value: ArticleSortField.TITLE,
            content: 'Названию',
        },
        {
            value: ArticleSortField.VIEWS,
            content: 'Количеству просмотров',
        },
    ],[])

 

    return (
        <div className={classNames(cls.ArticalSortSelector, {}, [className])}>
            <Select options={sortFilrdOption} label="Сортировка по" value={sort} onChange={onChangeSort}></Select>
            <Select className={cls.order}options={sortOrder} label="по" value={order} onChange={onChangeOrder}></Select>
        </div>
    );
}