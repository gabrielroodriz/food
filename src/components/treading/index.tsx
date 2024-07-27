import Food from '@/src/models/Food';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import CardHorizontalFood from './food';

export default function TrendingFoods() {
	const [foods, setFoods] = useState<Food[]>([]);

	useEffect(() => {
		async function getFoods() {
			const response = await fetch('http://192.168.18.25:3000/foods');
			const data = await response.json();
			setFoods(data);
		}
		getFoods();
	}, []);

	return (
		<FlatList
			data={foods}
			horizontal
			showsHorizontalScrollIndicator={false}
			keyExtractor={(item) => item.id}
			contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
			renderItem={({ item }: { item: Food }) => (
				<CardHorizontalFood food={item} />
			)}
		/>
	);
}
