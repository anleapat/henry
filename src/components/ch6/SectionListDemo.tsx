import React, {useRef, useState} from 'react';
import {
  Button,
  FlatList,
  RefreshControl,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const pageSize = 7;

const SectionListDemo = () => {
  const [name, setName] = useState('');
  const [carList, setCarList] = useState([] as any);
  const [pagination, setPagination] = useState({total: 0, totalPage: 0});
  const [currentPage, setCurrentPage] = useState(1);
  const sectionList = useRef<any>();
  const [refreshing, setRefreshing] = useState(false);

  async function search(reset: boolean) {
    // prevent invoke the search function when it's still refreshing
    if (refreshing) {
      return;
    }
    setRefreshing(true);
    let curPage = 1;
    if (!reset) {
      // if it's scroll down loading more data, then the curPage variable=previous page+1
      curPage = currentPage + 1;
    }
    try {
      const response = await fetch(
        'http://192.168.1.37/car/service/searchCars/' +
          curPage +
          '/' +
          pageSize,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            carName: name,
            // 1st diff: the backend should return a section like list
            groupBy: true,
          }),
        },
      );
      const json = await response.json();
      if (reset) {
        setCarList(json.result.data);
        // do paging
        const tt = json.result.total;
        const tp = Math.ceil(tt / pageSize);
        setPagination({total: tt, totalPage: tp});
        // sectionList.current.scrollToOffset({offset: 0});
        // 5th diff
        sectionList.current.scrollToLocation({sectionIndex: 0, itemIndex: 0});
      } else {
        // setCarList([...carList, ...json.result.data]);
        // 4th diff: we have to consider the carList if it already have the same saction with the loading data
        const cars: any[] = carList;
        json.result.data.forEach((el: any) => {
          const gbCars = cars.find((it: any) => it.groupBy === el.groupBy);
          if (gbCars) {
            gbCars.data = gbCars.data.concat(el.data);
          } else {
            cars.push(el);
          }
        });
        setCarList(cars);
      }
      setCurrentPage(curPage);
    } catch (error) {
      console.log(error);
    }
    setRefreshing(false);
  }

  function renderItem({item}: any) {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1}}>Name:</Text>
          <Text style={{flex: 1}}>{item.carName}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1}}>Origin:</Text>
          <Text style={{flex: 1}}>{item.origin}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1}}>Year:</Text>
          <Text style={{flex: 1}}>{item.produceYear}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1}}>Horse Power:</Text>
          <Text style={{flex: 1}}>{item.horsePower}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1}}>Miles Per Gallon:</Text>
          <Text style={{flex: 1}}>{item.milesPerGallon}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1}}>Acceleration:</Text>
          <Text style={{flex: 1}}>{item.acceleration}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1}}>Displacement:</Text>
          <Text style={{flex: 1}}>{item.displacement}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1}}>Weight In Lbs:</Text>
          <Text style={{flex: 1}}>{item.weightInLbs}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1}}>Cylinders:</Text>
          <Text style={{flex: 1}}>{item.cylinders}</Text>
        </View>
      </View>
    );
  }

  function renderItemSeparation() {
    return (
      <View
        style={{
          alignSelf: 'stretch',
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          marginTop: 7,
          marginBottom: 7,
        }}
      />
    );
  }

  function loadingMore() {
    if (currentPage < pagination.totalPage) {
      search(false);
    }
  }

  return (
    <View style={SectionListDemoStyle.container}>
      <TextInput
        placeholder={'Please input car name'}
        onChangeText={val => setName(val)}
      />
      <Button title={'Search'} onPress={() => search(true)} />
      <SectionList
        ref={sectionList}
        // data={carList}
        // 2nd diff
        sections={carList}
        // 3rd diff that flatList doesn't have
        renderSectionHeader={({section}: any) => (
          <Text style={{fontWeight: 'bold', fontSize: 37, color: 'skyblue'}}>
            {section.groupBy}
          </Text>
        )}
        renderItem={item => renderItem(item)}
        keyExtractor={(item: any) => item.id}
        initialNumToRender={pageSize}
        ItemSeparatorComponent={() => renderItemSeparation()}
        onEndReached={() => loadingMore()}
        onEndReachedThreshold={0.3}
        refreshing={refreshing}
        refreshControl={<RefreshControl refreshing={refreshing} />}
      />
    </View>
  );
};

export default SectionListDemo;

const SectionListDemoStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
});
