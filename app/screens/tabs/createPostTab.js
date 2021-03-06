import * as React from '../../node_modules/react';
import {
  View,
  ScrollView,
  RefreshControl,
  Image,
  TouchableOpacity,
  console
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import AwesomeButton from 'react-native-really-awesome-button';
import {Fumi} from '../../node_modules/react-native-textinput-effects/lib';
import FontAwesomeIcon from
  '../../node_modules/react-native-vector-icons/FontAwesome';

import Header from '../../components/header';
// import Firebase from '../../config/firebase';
import Styles from '../../styles/styles';
import Colors from '../../styles/colors';

export default function CreatePost({navigation}) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [cityx, setCity] = React.useState('');
  const [countryx, setCountry] = React.useState('');
  const [captionx, setCaption] = React.useState('');
  const [photosx, setPhotos] = React.useState(
      'https://drive.google.com/uc?id=1IlnqOsoEVi9ASVb0WihFRxtMu2z2BLT5'
  );


  async function pickImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      });
      if (!result.cancelled) {
        setPhotos(result.uri);
      }
    } catch (E) {
      console.log(E + 'image not found');
    }
  }

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);


  return (
    <View style={Styles.container}>
      <Header headerTitle="Create Post" />

      <ScrollView refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      style={Styles.container}>
        <TouchableOpacity
          style={{
            width: 200,
            height: 300,
            alignSelf: 'center',
            marginBottom: 10,
            marginTop: 10
          }}
          onPress={() => {
            pickImage();
          }}
        >
          <Image
            source={{uri: photosx}}
            style={{
              width: 200,
              height: 300,
              alignSelf: 'center',
              borderRadius: 2,
              borderWidth: 1,
              borderColor: 'black',
              marginBottom: 10,
              marginTop: 10
            }}
            testID='create-photo'
          />
        </TouchableOpacity>
        <View style={Styles.p_3}>
          <Fumi
            label={'City'}
            onChangeText={setCity}
            iconClass={FontAwesomeIcon}
            iconName={'map-pin'}
            iconColor={Colors.warning}
            iconSize={18}
            iconWidth={40}
            inputPadding={16}
            inputStyle={{padding: 5}}
            testID='create-city'
          />
        </View>

        <View style={Styles.p_3}>
          <Fumi
            label={'Country'}
            onChangeText={setCountry}
            iconClass={FontAwesomeIcon}
            iconName={'globe'}
            iconColor={Colors.warning}
            iconSize={18}
            iconWidth={40}
            inputPadding={16}
            inputStyle={{padding: 5}}
            testID='create-country'
          />
        </View>

        <View style={Styles.p_3}>
          <Fumi
            label={'Caption'}
            onChangeText={setCaption}
            iconClass={FontAwesomeIcon}
            iconName={'indent'}
            iconColor={Colors.warning}
            iconSize={18}
            iconWidth={40}
            inputPadding={16}
            inputStyle={{padding: 5}}
            testID='create-caption'
          />
        </View>

        <View style={Styles.card}>
          <AwesomeButton
            backgroundColor={'#ffbc26'}
            width={340}
            height={40}
            onPress={() => {
              navigation.navigate('Preview Post Screen', {
                captionx: captionx,
                photosx: photosx,
                cityx: cityx,
                countryx: countryx
              });
            }}
          >
            Preview
          </AwesomeButton>
        </View>
      </ScrollView>
    </View>
  );
}

/*
<FlatList
          //lists DB to screen in alphabetical order by city
          data={locations}
          renderItem={({ item }) => (
            <View style={Styles.container_content}>
              <Text>City: {item.city}</Text>
              <Text>Country: {item.country}</Text>
            </View>
          )}
        />

      </ScrollView>
    </View>
  );
}
*/
