import { Text, View, Image } from 'react-native'
import React from 'react'
import style from './style'

export default function NewsCard({ card }) {
  return (
    <View style={style.container}>
      <Image source={{ uri: card.imageUrl }} style={style.image} />
      <View style={style.content}>
        <Text numberOfLines={3} style={style.title}>{card.title}</Text>
        <View style={style.description}>
          <Text style={style.author} numberOfLines={1}>{card.author}</Text>
          <Text  style={style.credate}>{card.credate}</Text>
        </View>
      </View>

    </View>
  )
}
