import { View, Text, VStack, HStack, FlatList } from 'native-base'
import React from 'react'

export default function index({data, renderItem}) {
    const colunas = 3
    const linhas = Math.ceil(data.length / colunas)

  return (
    <>
        <VStack>
            {/* <FlatList data={data}/> */}
        </VStack>
    </>
  )
}