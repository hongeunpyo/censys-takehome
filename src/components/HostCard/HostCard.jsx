import PropTypes from 'prop-types';

export function HostCard({ ip, services }) {
    return (
        <div className="border rounded out-line-white flex flex-col text-xl">
          <span>{ip}</span>
          {services && <span className="text-base">{services?.length} protocol{services?.length > 1 ? 's' : ''}</span>}
        </div>
    )
}

HostCard.propTypes = {
  ip: PropTypes.string,
  services: PropTypes.array,
}