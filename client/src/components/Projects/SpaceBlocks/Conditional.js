import React from "react"

const IsSubmitting = props => {
  return (
    <div>
      {props.submitting ? <h1>Please wait...</h1> : null}
      {props.error ? <h1>Error encountered while submitting score</h1> : null}
    </div>
  )
}

export default IsSubmitting
