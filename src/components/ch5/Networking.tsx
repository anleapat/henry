import React, {useState} from 'react';
import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Networking = () => {
  const [name, setName] = useState('');
  const [carList, setCarList] = useState([] as any);
  const [carInfo, setCarInfo] = useState({} as any);
  const [modalVisable, setModalVisable] = useState(false);

  async function getCarInfo(id: number) {
    try {
      const response = await fetch(
        'http://192.168.1.37/car/service/getCarInfo/' + id,
      );
      const json = await response.json();
      setCarInfo(json.result);
      setModalVisable(!modalVisable);
    } catch (error) {
      console.log(error);
    }
  }

  const search = async () => {
    await fetch('http://192.168.1.37/car/service/searchCars/1/7', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        carName: name,
      }),
    })
      .then(response => response.json())
      .then(json => {
        const views: any[] = [];
        json.result.data.forEach((element: any) => {
          views.push(
            <View
              key={element.id}
              style={{borderColor: 'skyblue', borderWidth: 1, marginTop: 3}}>
              <TouchableOpacity onPress={() => getCarInfo(element.id)}>
                <Text>Name: {element.carName}</Text>
                <Text>Horse Power: {element.horsePower}</Text>
                <Text>Year: {element.produceYear}</Text>
              </TouchableOpacity>
            </View>,
          );
        });
        setCarList(views);
      });
  };
  return (
    <View style={NetworkingStyle.container}>
      <Modal animationType={'slide'} visible={modalVisable}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex: 1}}>Name:</Text>
            <Text style={{flex: 1}}>{carInfo.carName}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex: 1}}>Origin:</Text>
            <Text style={{flex: 1}}>{carInfo.origin}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex: 1}}>Year:</Text>
            <Text style={{flex: 1}}>{carInfo.produceYear}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex: 1}}>Horse Power:</Text>
            <Text style={{flex: 1}}>{carInfo.horsePower}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex: 1}}>Miles Per Gallon:</Text>
            <Text style={{flex: 1}}>{carInfo.milesPerGallon}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex: 1}}>Acceleration:</Text>
            <Text style={{flex: 1}}>{carInfo.acceleration}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex: 1}}>Displacement:</Text>
            <Text style={{flex: 1}}>{carInfo.displacement}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex: 1}}>Weight In Lbs:</Text>
            <Text style={{flex: 1}}>{carInfo.weightInLbs}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex: 1}}>Cylinders:</Text>
            <Text style={{flex: 1}}>{carInfo.cylinders}</Text>
          </View>
          <Button
            title={'Close'}
            onPress={() => setModalVisable(!modalVisable)}></Button>
        </View>
      </Modal>
      <View style={{flexDirection: 'row'}}>
        <View>
          <TextInput
            onChangeText={name => setName(name)}
            placeholder={'Please input car name'}></TextInput>
        </View>

        <View>
          <Button title={'Search'} onPress={() => search()}></Button>
        </View>
      </View>
      <View>{carList}</View>
    </View>
  );
};

export default Networking;

const NetworkingStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
});
