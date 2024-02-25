import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CreateArticle.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface CreateArticleProps {
    className?: string
}

export const CreateArticle = memo(({ className }: CreateArticleProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.CreateArticle, {}, [className])}>

        </div>
    );
});
