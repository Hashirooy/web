import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import ListIcon from 'shared/assets/icons/list.svg';
import TiledIcon from 'shared/assets/icons/tile.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ArticalViewSelectors.module.scss';
import { ArticleView } from 'entities/Articale/model/types/Article';


interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView,
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.TILE,
        icon: TiledIcon,
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                    />
                </Button>
            ))}
        </div>
    );
});
