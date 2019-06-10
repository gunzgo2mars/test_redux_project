import React from 'react'
import { View , Text , TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { countNumber } from '../../redux/actions/countAction'

class Home extends React.Component {

    constructor(props) {

        super(props)

        this.state = {}

    }

    componentDidMount() {

        console.warn(this.props.count_number)

    }

    _onCountNumber = () => {

        this.props.countNumber(this.props.count_number + 1)

        console.warn(this.props.count_number)

    }

    render() {

        return (
            <View
                style={{ flex : 1 , justifyContent : 'center' , alignItems : 'center' }}
            >
                <TouchableOpacity
                    onPress={() => this._onCountNumber()}
                >
                    <Text>
                        Count Number +
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Count')}
                >
                    <Text>
                        Go to count screen.
                    </Text>
                </TouchableOpacity>
            </View>
        )


    }

}

const mapStateToProps = state => ({

    count_number : state.count.count_number

})


export default connect(mapStateToProps , { countNumber })(Home)