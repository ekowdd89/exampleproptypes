import * as React from 'react'
import PropTypes from 'prop-types'
class Demo extends React.Component{
    render(){
        const { renderView } = this.props
        return(
            <>
                { renderView }
            </>
        )
    }
}


Demo.propTypes = {
    renderView: PropTypes.element
}

export default Demo;


