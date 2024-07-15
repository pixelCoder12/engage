import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { RootStackScreenProps } from '../navigators/RootNavigator'
import Icons from '@expo/vector-icons/MaterialIcons'
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomSheet from '@gorhom/bottom-sheet';
import CartScreen from './CartScreen';

const size = ["XS", "S", "M", "L", "XL"];
const imageMapping: { [key: string]: any } = {
  '123': require('../images/image1.jpg'),
  '124': require('../images/image2.jpg'),
  '125': require('../images/mainimg1.jpg'),
  '126': require('../images/mainimg2.jpg'),
  '127': require('../images/mainimg3.jpg'),
  '128': require('../images/mainimg4.jpg'),
  '129': require('../images/mainimg5.jpg'),
  '130': require('../images/mainimg6.jpg'),
};


const descriptionMapping: { [key: string]: string } = {
  '123': 'Nike Red Shoes',
  '124': 'Medium Blue Ankle Length Flared Jeans',
  '125': 'Bone Printed Black Tshirt',
  '126': 'Sheer Top',
  '127': 'Printed One Piece',
  '128': 'White Formal Tshirt',
  '129': 'Winter Collection Black Combo',
  '130': 'Women Jacket',
};

const priceMapping :{ [key: string]: number} = {
  '123': 10000,
  '124': 3000,
  '125': 500,
  '126': 700,
  '127': 1500,
  '128': 1000,
  '129': 5000,
  '130': 2000,
};

const DetailsScreen = ({ navigation, route }: RootStackScreenProps<'Details'>) => {
  const { id } = route.params;
  const [count, setcount] = useState(1);
  const [selectedSize, setSelectedSize] = useState(size[0]);
  const imageSource = imageMapping[id]; 
  const description = descriptionMapping[id];
  const price = priceMapping[id];
 

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView edges={['top']}>
        <View style={{ flexDirection: "row", alignItems: "center", padding: 20, gap: 8 }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 53, aspectRatio: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 50, borderColor: 'black', borderWidth: 1, }}>
            <Icons name="arrow-back" size={25}></Icons>
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
          <TouchableOpacity style={{ width: 53, aspectRatio: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 50, borderColor: 'black', borderWidth: 1, }}>
            <Icons name="favorite-border" size={25}></Icons>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 53, aspectRatio: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 50, borderColor: 'black', borderWidth: 1, }}>
            <Icons name="add-shopping-cart" size={25}></Icons>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <Image source={imageSource}  resizeMode="cover" style={{ height: 800, width: "100%" }}></Image>
      <BottomSheet snapPoints={[80, 400]} index={0} detached={true} style={{ marginHorizontal: 20 }}>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ fontWeight: 600, fontSize: 18 }}>{description}</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: "row", paddingRight: 120, paddingTop: 10 }}>
                <Icons name="star" size={18} color={'orange'}></Icons>
                <Icons name="star" size={18} color={'orange'}></Icons>
                <Icons name="star" size={18} color={'orange'}></Icons>
                <Icons name="star-border" size={18} color={'orange'}></Icons>
                <Icons name="star-border" size={18} color={'orange'}></Icons>
              </View>
              <Text>3.0(10K Reviews)</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: 'black', padding: 6, borderRadius: 100 ,marginTop:15}}>
              <TouchableOpacity onPress={() => setcount((count) => Math.max(1, count - 1))} style={{ width: 25, aspectRatio: 1, alignItems: "center", justifyContent: "center", borderRadius: 30, backgroundColor: 'white' }}>
                <Icons name="remove" size={18} color={'black'}></Icons>
              </TouchableOpacity>
              <Text style={{ color: "white", fontWeight: 600, fontSize: 18 }}>{count}</Text>
              <TouchableOpacity onPress={() => setcount((count) => Math.min(10, count + 1))} style={{ width: 25, aspectRatio: 1, alignItems: "center", justifyContent: "center", borderRadius: 30, backgroundColor: 'white' }}>
                <Icons name="add" size={18} color={'black'}></Icons>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection:"row",flexWrap:"wrap",gap:15,paddingVertical:15}}>
            {size.map((s, i) => (
              <TouchableOpacity style={{height:40,width:40,alignItems:"center",borderRadius:20,justifyContent:"center",backgroundColor:s==selectedSize?"black":"white"}} key={i} onPress={() => setSelectedSize(s)}>
                <Text style={{fontSize:18,color: s==selectedSize?"white":"black",fontWeight:500}}>{s}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View>
            <Text style={{fontWeight:600,fontSize:20,paddingBottom:5}}>Description</Text>
            <Text numberOfLines={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusantium nobis exercitationem nam quis accusamus itaque adipisci sunt quam, possimus impedit aut. Fugiat veniam cum enim expedita iusto alias exercitationem.</Text>
          </View>

          <View style={{marginVertical:10}}>
            <Text style={{color:"gray"}}>Total</Text>
            <Text style={{fontWeight:600,fontSize:20}}>₹{price}</Text>
          </View>

          <View style={{flex:1}}>
            <TouchableOpacity  onPress={() => navigation.navigate('Cart')} style={{alignItems:"center",height:30,backgroundColor:'black',marginHorizontal:50,justifyContent:"center"}}>
              <Text style={{color:'white',fontSize:18}}>Add to Cart</Text>
            </TouchableOpacity>
          </View>

        </View>
      </BottomSheet>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})