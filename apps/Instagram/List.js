import React, {useState} from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import likeImg from '../../assets/like.png';
import likedImg from '../../assets/likeada.png';
import sendImg from '../../assets/send.png';

const List = ({data}) => {
  return (
    <FlatList
      style={styles.list}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ListItem item={item} />}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const ListItem = ({item}) => {
  const [isLiked, setIsLiked] = useState(item.likeada);
  const [countOfLikes, setCountOfLikes] = useState(item.likers);

  const curtir = () => {
    setIsLiked(!isLiked);
    console.log('test');
    isLiked
      ? setCountOfLikes(countOfLikes - 1)
      : setCountOfLikes(countOfLikes + 1);
  };

  return (
    <View style={styles.itemView}>
      <View style={styles.userView}>
        <Image source={{uri: item.imgperfil}} style={styles.imgperfil} />
        <Text style={styles.userName}>{item.nome}</Text>
      </View>
      <Image
        resizeMode="cover"
        source={{uri: item.imgPublicacao}}
        style={styles.imgPublicacao}
      />
      <View style={styles.likeView}>
        <TouchableOpacity onPress={curtir}>
          <Image source={isLiked ? likedImg : likeImg} style={styles.likeImg} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={sendImg} style={styles.likeImg} />
        </TouchableOpacity>
      </View>
      <Text style={styles.userLikeds}>
        {countOfLikes} {countOfLikes === 1 ? 'Curtida' : 'Curtidas'}
      </Text>
      <View style={styles.userCommentView}>
        <Text style={styles.userNameComment}>{item.nome}</Text>
        <Text style={styles.userDescription}>{item.descricao}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemView: {
    marginTop: 11,
    borderBottomWidth: 1,
  },
  userView: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  userName: {
    marginLeft: 8,
    fontSize: 18,
    color: '#000',
    // fontWeight: 'bold',
  },
  userLikeds: {
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  userCommentView: {
    flexDirection: 'row',
    marginLeft: 8,
    // marginTop: 8,
    marginBottom: 8,
  },
  userNameComment: {
    fontWeight: 'bold',
    color: '#000',
  },
  userDescription: {
    marginLeft: 5,
  },
  imgPublicacao: {
    flex: 1,
    height: 400,
    alignItems: 'center',
  },
  imgperfil: {
    width: 55,
    height: 55,
    borderRadius: 55,
  },
  likeView: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  likeImg: {
    height: 33,
    width: 33,
    marginLeft: 5,
  },
});

export default List;
