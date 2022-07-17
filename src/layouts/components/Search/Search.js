import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchIcon } from '~/components/Icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState, useRef, useMemo } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import { Wrapper as PoperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService';
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debounceValue = useDebounce(searchValue, 500);

    const searchInputRef = useRef();

    //use useEffect handle input && call api
    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchService.search(debounceValue, 'less');
            setSearchResult(result.data);

            setLoading(false);
        };

        fetchApi();

        //call api promise
        // request
        //     .get(`users/search`, {
        //         params: {
        //             q: debounceValue,
        //             type: 'less',
        //         },
        //     })
        //     .then((res) => {
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounceValue]);

    //logic
    const handleCloseSearchValue = () => {
        setSearchValue('');
        searchInputRef.current.focus();
        setSearchResult([]);
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const _searchValue = e.target.value;
        if (!_searchValue.startsWith(' ')) {
            setSearchValue(_searchValue);
        }
    };

    //useMemo handle work call map then change input because change state [searchValue]
    const handleRenderSearchResult = useMemo(() => {
        const res = searchResult.map((result) => {
            return <AccountItem key={result.id} data={result} />;
        });

        return res;
    }, [searchResult]);

    return (
        <HeadlessTippy
            appendTo={() => document.body}
            visible={showResult && searchResult.length > 0}
            interactive
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PoperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {/* if list > 5 then optimize code by useMemo do func -> call*/}
                        {handleRenderSearchResult}
                    </PoperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={searchInputRef}
                    value={searchValue}
                    placeholder="Search account and video"
                    spellCheck={false}
                    onChange={handleChange}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear-btn')} onClick={handleCloseSearchValue}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
