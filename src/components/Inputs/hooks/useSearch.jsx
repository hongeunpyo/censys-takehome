import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import { getSearchResults } from "../../../services";

export function useSearch() {
    const [cursor, setCursor] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [inputValue, setInputValue] = useState('');

    const params = useMemo(() => {
        const result = {}
        if (searchQuery) {
            result['q'] = searchQuery;
        }
        if (cursor) {
            result['cursor'] = cursor;
        }
        return result;
    }, [cursor, searchQuery]);

    const { data, isFetching } = useQuery({
        queryKey: ['search', params],
        queryFn: getSearchResults,
    });

    const handleSubmit = (e) => {
        e?.preventDefault();
        setSearchQuery(inputValue)
        setCursor('');
    }

    const handleInputChange = (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            handleSubmit();
        }
        setInputValue(e.target.value);
    }

    return {
        hits: data?.result?.hits,
        links: data?.result?.links,
        isFetching,
        cursor,
        searchQuery,
        setCursor,
        handleSubmit,
        handleInputChange
    }
}