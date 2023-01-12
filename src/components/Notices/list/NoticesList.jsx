import { useEffect } from 'react';
import { useAuth } from 'shared/hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import {
	getCurrentNotices,
	getFavoriteNotices,
	getNoticesLoading,
	getFilteredNotices,
	getTotalPages,
} from 'redux/notices/notices-selectors';
import { getUserId } from 'redux/auth/auth-selectors';
import {
	getFavoriteNoticeByUser,
	getFavoriteNoticeForCategories,
	getNoticeByCategory,
	getUserNotices,
	removeNotice,
} from 'redux/notices/notices-operations';

import NoticesItems from '../items/NoticesItems';
import styles from './NoticesList.module.scss';
import { NoticesPaginationList } from '../pagination/paginationList/PaginationList';
import { setCategory } from 'redux/notices/notices-slice';

export const NoticesList = ({ category }) => {
	const isLogin = useAuth();
	const dispatch = useDispatch();

	const ownerId = useSelector(getUserId);
	const notices = useSelector(getFilteredNotices || getCurrentNotices);

	const favNotices = useSelector(getFavoriteNotices);
	const isFavLoading = useSelector(getNoticesLoading);

	const totalPages = useSelector(getTotalPages);
	const showPagination= !!(totalPages > 1 && category !== 'favorite' &category !== 'own'
)
	useEffect(() => {
		dispatch(setCategory(category));
		switch (category) {
			case 'favorite':
				dispatch(getFavoriteNoticeForCategories());
				break;

			case 'own':
				dispatch(getUserNotices());
				break;
			default:
				dispatch(getNoticeByCategory());
				break;
		}
		if (isLogin) {
			dispatch(getFavoriteNoticeByUser());
		}
	}, [category, dispatch, isLogin]);

	const onDeleteNotice = e => {
		const noticeId = e.currentTarget.id;
		dispatch(removeNotice(noticeId));
	};

	return (
		<div className={styles.wrapper}>
			<ul className={styles.galery}>
				{notices.map(data => (
					<li key={data._id}>
						<NoticesItems
							data={data}
							isLogin={isLogin}
							ownerId={ownerId}
							favNotices={favNotices}
							isFavLoading={isFavLoading}
							onDeleteNotice={onDeleteNotice}
						/>
					</li>
				))}
			</ul>
			<div>
				{showPagination && <NoticesPaginationList pages={totalPages} />}
			</div>
		</div>
	);
};
