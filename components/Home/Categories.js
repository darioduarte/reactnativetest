import React, {useState} from 'react';
import { Button, Text, TextInput, View, ScrollView, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

const PAGES = [
  [
    {
      id: '1',
      description: 'Lawyers',
      bgColor: '#64b5f6',
    },
    {
      id: '2',
      description: 'Restaurant',
      bgColor: '#ba68c8',
    },
    {
      id: '3',
      description: 'Farmacy',
      bgColor: '#64b5f6',
    },
    {
      id: '4',
      description: 'Boutiques',
      bgColor: '#ba68c8',
    },
    {
      id: '5',
      description: 'Stores',
      bgColor: '#ba68c8',
    },
    {
      id: '6',
      description: 'Build',
      bgColor: '#64b5f6',
    },
    {
      id: '7',
      description: 'liqueur',
      bgColor: '#ba68c8',
    },
    {
      id: '8',
      description: 'Box',
      bgColor: '#64b5f6',
    },
  ],
  [
    {
      id: '1',
      description: 'SOAT',
      bgColor: '#64b5f6',
    },
    {
      id: '2',
      description: 'Tecnología',
      bgColor: '#ba68c8',
    },
    {
      id: '3',
      description: 'Moda',
      bgColor: '#64b5f6',
    },
    {
      id: '4',
      description: 'Belleza',
      bgColor: '#ba68c8',
    },
    {
      id: '5',
      description: 'Hogar',
      bgColor: '#ba68c8',
    },
    {
      id: '6',
      description: 'Floristería',
      bgColor: '#64b5f6',
    },
    {
      id: '7',
      description: 'Regalos',
      bgColor: '#ba68c8',
    },
    {
      id: '8',
      description: 'Servicios',
      bgColor: '#64b5f6',
    },
  ],
  [
    {
      id: '1',
      description: 'Mascotas',
      bgColor: '#64b5f6',
    },
    {
      id: '2',
      description: 'USA',
      bgColor: '#ba68c8',
    },
    {
      id: '3',
      description: 'Cracks',
      bgColor: '#64b5f6',
    },
    {
      id: '4',
      description: 'Deportes',
      bgColor: '#ba68c8',
    },
    {
      id: '5',
      description: 'Bonos',
      bgColor: '#ba68c8',
    },
    {
      id: '6',
      description: 'Juguetería',
      bgColor: '#64b5f6',
    },
    {
      id: '7',
      description: 'Sex Shop',
      bgColor: '#ba68c8',
    },
    {
      id: '8',
      description: 'Bebés y Niños',
      bgColor: '#64b5f6',
    },
  ],
  [
    {
      id: '1',
      description: 'Vehículos',
      bgColor: '#64b5f6',
    },
    {
      id: '2',
      description: 'IQOS Y HEETS',
      bgColor: '#ba68c8',
    },
    {
      id: '3',
      description: 'Fundaciones',
      bgColor: '#64b5f6',
    },
    {
      id: '4',
      description: 'Navidad',
      bgColor: '#ba68c8',
    },
    {
      id: '5',
      description: 'Eventos',
      bgColor: '#ba68c8',
    },
    {
      id: '6',
      description: 'Recetas',
      bgColor: '#64b5f6',
    },
  ],
];

const { width } = Dimensions.get('window');


export default function Categories(props) {

  const [activeSlideIndex, setactiveSlideIndex] = useState()
  const navigation = useNavigation();

  function renderPage ({ item, index }) {
    //const navigation = useNavigation()
    return (
      <View style={{ width: width - 20, flexWrap:"wrap", flexDirection:"row"}} key={index}>
        {PAGES[index].map((item, i) => (
            <View key={i} style={{width: "25%",padding: 5}}>
              <View style={{width: 80,height: 80,borderRadius: 10, backgroundColor: item.bgColor, justifyContent:"center",aligntItems:"center"}}>
                <View style={{ backgroundColor: item.bgColor }} />
                <Text onPress={()=>navigation.navigate('CategoriesFeed')} style={{fontSize:12, textAlign:"center"}} >{item.description}</Text>
              </View>
            </View>
        ))}
      </View>
    );
  };

  return(
    <>
      <Carousel
        data={PAGES}
        renderItem={renderPage}
        sliderWidth={width - 20}
        itemWidth={width - 20}
        onSnapToItem={index => setactiveSlideIndex(index)}
      />
      <Pagination
        dotsLength={PAGES.length}
        activeDotIndex={activeSlideIndex}
        inactiveDotOpacity={0.4}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 15,
          backgroundColor: '#aaa',
        }}
      />
    </>
  )
}
