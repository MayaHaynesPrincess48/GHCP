import React from 'react'


const CardBodyTitle = ({ title }) => (
  <div className="text-center text-muted mb-4">
    <small>{title}</small>
  </div>
)

const ProfileSmallText = ({ title, data }) => (
  <div className="h6 font-weight-300">
    {
      title.map((name, index) => (
        <div key={index}>
          {name} : <b>{data[index]}</b> <br />
        </div>
      ))
    }
  </div>
)


export { CardBodyTitle, ProfileSmallText }