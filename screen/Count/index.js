import React from 'react'
import { View , Text } from 'react-native'
import { connect } from 'react-redux'

class Count extends React.Component {

    constructor(props) {

        super(props)

    }

    render() {

        return (

            <View
                style={{ flex : 1 , justifyContent : 'center' , alignItems : 'center' }}
            >
                <Text>{this.props.count_number}</Text>
            </View>

        )

    }


}

const mapStateToProps = state => ({

    count_number : state.count.count_number

})

export default connect(mapStateToProps , null)(Count)