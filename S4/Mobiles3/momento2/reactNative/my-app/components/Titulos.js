import { StyleSheet, Text, View } from 'react-native';
function Titulos(){
    return(
        <View style={mystyles.mycontainer}>
            <Text>Santiago Restrepo Rueda</Text>
        </View>
    );
}

const mystyles = StyleSheet.create({
    mycontainer:{
        width: '100%',
        backgroundColor:'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Titulos;