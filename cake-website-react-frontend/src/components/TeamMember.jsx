import React from 'react';

const TeamMember = ({ name, role, bio, imagePlaceholder }) => {
    return (
        <div className="team-member"> {/* class from original CSS */}
            <div className="team-member-photo-placeholder">
                {/* Placeholder text is handled by CSS pseudo-element */}
            </div>
            <h3>{name}</h3>
            <h4>{role}</h4>
            <p>{bio}</p>
        </div>
    );
};

export default TeamMember;
