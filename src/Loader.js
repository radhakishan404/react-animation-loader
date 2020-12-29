import React from 'react';

import PropTypes from 'prop-types';

import './loader.css';

const Loader = ({ isLoading, bgColor, icon }) => (
    <div>
        {
            isLoading
                ?
                <div className="page-animation page-entering">
                    <div className="page-animation-bg" style={bgColor ? { background: "#" + bgColor } : null}></div>
                    <div className="page-animation-icon">
                        {
                            icon
                                ?
                                <img src={icon} alt="Loading Icon" />
                                :
                                null
                        }
                    </div>
                </div>
                :
                null
        }
        <div className="page-animation page-entered">
            <div className="page-animation-bg" style={bgColor ? { background: "#" + bgColor } : null}></div>
            <div className="page-animation-icon">
                {
                    icon
                        ?
                        <img src={icon} alt="Loading Icon" />
                        :
                        null
                }
            </div>
        </div>
    </div>
);

Loader.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    bgColor: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

Loader.defaultProps = {
    isLoading: true,
    bgColor: "161122"
};

export default Loader;