import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setQuery } from '../../redux/actions';
import MemberHeader from '../member/MemberHeader';
import Grades from '../member/Grades';
import Loadable from 'react-loadable';

const Loading = () => <div />;
const Charts = Loadable({
    loader: () => import('../member/Charts'),
    loading: Loading
});

const Modal = ({ member, history, setModalClose }) =>
    member ? (
        <div className="modal" onClick={setModalClose}>
            <div className="modal__content">
                <MemberHeader />
                <Grades />
                {history && <Charts />}
            </div>
        </div>
    ) : null;

Modal.propTypes = {
    member: PropTypes.object,
    history: PropTypes.object,
    setModalClose: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    member: state.individualMember,
    history: state.history
});

const mapDispatchToProps = dispatch => ({
    setModalClose: event => {
        if (event.target === event.currentTarget) {
            event.preventDefault();
            dispatch(setQuery());
        }
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);
