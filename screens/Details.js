import react from 'react';
import { View, Text, SafeAreaView, FlatList, Image, StatusBar } from 'react-native';

import { COLORS, FONTS, SHADOWS, assets, SIZES } from '../constants';
import { CircleButton, RectButton, SubInfo, FocusStatusBar, DetailsDesc, DetailsBid } from '../components';

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  const DetailsHeader = ({ data, navigation }) => {
    return (
      <View style={{
        width: '100%',
        height: 373
      }}>
        <Image 
          source={data.image}
          resizeMode='cover'
          style={{
            width: '100%',
            height: '100%'
          }}
        />

        <CircleButton
          imgUrl={assets.left}
          handlePress={() => navigation.goBack()}
          left={15}
          top={StatusBar.currentHeight + 10}
        />

        <CircleButton
          imgUrl={assets.heart}
          right={15}
          top={StatusBar.currentHeight + 10}
        />
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusStatusBar 
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent={true}
      />
      <View style={{
        position:'absolute',
        bottom: 0,
        width: '100%',
        paddingVertical: SIZES.font,
        paddingHorizontal: SIZES.base,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        zIndex: 1
      }}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList 
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={ item }/>}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{
              padding: SIZES.font
            }}>
              <DetailsDesc data={data} />

              {data.bids.length > 0 && (
                <Text style={{
                  fontSize: SIZES.font,
                  fontFamily: FONTS.semiBold,
                  color: COLORS.primary
                }}>
                  Current Bids
                </Text>
              )}
            </View>
          </>
        )}
      />
    </SafeAreaView>
  )
}

export default Details;