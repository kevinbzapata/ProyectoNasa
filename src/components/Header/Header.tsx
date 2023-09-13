
import React from 'react'
import { View , Text , Image} from 'react-native'

const Header = () => {
  return (
    <View>
       <View>
        <Text>
            Explorar
        </Text>
        </View>
        <View>
            <Image source={require('../assets/nasaLogo.png')} />
        </View>
    </View>

  )
}

export default Header
