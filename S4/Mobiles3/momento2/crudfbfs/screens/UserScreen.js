import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, FlatList, Text } from 'react-native';
import db from '../database/firebaseDb';
import * as firestore from "firebase/firestore";
import { TouchableOpacity } from 'react-native';

class UserScreen extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      userArr: []
    };

  }
  componentDidMount() {
    this.getCollection()
  }
  getCollection = () => {
    const userArr = [];
    firestore.getDocs(firestore.collection(db, "users"))
      .then((docs) => {
        docs.forEach((res) => {
          const { name, email, mobile } = res.data();
          userArr.push({
            key: res.id,
            name,
            email,
            mobile
            
          });
        });
        this.setState({
          userArr,
          isLoading: false,
        });
      });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="green" />
        </View>
      )
    }
    return (
      <ScrollView>
        <FlatList
          data={this.state.userArr}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={{backgroundColor:'#DFE7CC', padding:5,borderRadius:10,marginLeft:'10%',width:'80%',marginTop:5}}
              onPress={() => {
                this.props.navigation.navigate('UserDetailScreen', {
                  userkey: item.key
                });
              }}
              >
              <Text>{item.key}</Text>
              <Text style={{color:'blue',fontWeight:'bold'}}>{item.name}</Text>
              {/* <Text style={{color:'red',fontWeight:'bold'}}>{item.email}</Text> */}
              {/* <Text style={{color:'green',fontWeight:'bold'}}>{item.mobile}</Text> */}
            </TouchableOpacity>
            
          )}
        />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 22,
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default UserScreen;