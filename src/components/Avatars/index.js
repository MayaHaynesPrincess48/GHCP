import React from 'react'

const ProfileAvatar = ({ avatar }) => (
  <div className="order-lg-2 card-profile-image" lg="3" style={{ cursor: 'pointer' }}>
    <img
      alt="..."
      className="rounded-circle card-profile-image" style={{ width: '180px' }}
      src={avatar}
    />
  </div>
)

export { ProfileAvatar }