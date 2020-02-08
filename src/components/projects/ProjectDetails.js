import React from "react"

const ProjectDetails = props => {
  const id = props.match.params.id

  return (
    <div className="container project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            eum est nisi, nostrum necessitatibus omnis sint perspiciatis non
            nemo autem! Est itaque nihil possimus esse. Labore perferendis cum
            in voluptatem!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Christopher Lawson</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
