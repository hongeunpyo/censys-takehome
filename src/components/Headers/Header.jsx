import PropTypes from 'prop-types';

export function Header({ children }) {
    return (
        <div className="flex items-center justify-center border-b-2 border-white py-5 h-20">
            {children}
        </div>
    )
}

Header.propTypes = {
    children: PropTypes.element,
}