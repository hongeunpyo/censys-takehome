import PropTypes from 'prop-types';

export function SearchInput({ onChange, onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <input onChange={onChange} className="p-1 py-2" type="text" placeholder="Search" />
            <input className="px-4 py-2 bg-slate-400 cursor-pointer" type="submit" />
        </form>
    )
}

SearchInput.propTypes = {
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
}