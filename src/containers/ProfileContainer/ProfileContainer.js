import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Toolbar from "../Toolbar/Toolbar";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileInfo from "../../components/Profile/ProfileInfo";
import ProfileContent from "../../components/Profile/ProfileContent";
import { fetchProfile } from "../../actions";
import { getProfileDetails } from "../../reducers/footballers";
import './ProfileContainer.css';

class ProfileContainer extends Component {
  componentDidMount() {
    console.log("profile compo mount:", this, this.props.id);
    this.props.fetchProfile(this.props.id);
  }
  render() {
    return (
      <div>
        <Toolbar showSearch={false} />
        <div className="profileContainer">
          <ProfileHeader title={this.props.profileDetails.Name} />
          <div className="profileContainer__Content">
            <ProfileInfo profileDetails={this.props.profileDetails} />
            <ProfileContent profileDetails={this.props.profileDetails} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, { match: { params } }) => {
  console.log("params:", params);
  const id = params.id;
  return {
    profileDetails: getProfileDetails(state.Footballers),
    id
  };
};

export default withRouter(
  connect(mapStateToProps, { fetchProfile })(ProfileContainer)
);
