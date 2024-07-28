import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import CardHorizontalRestaurant from './cardHorizontal';

export default function Restaurants() {
	const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

	useEffect(() => {
		async function getRestaurants() {
			const response = await fetch('http://192.168.18.25:3000/restaurants');
			const data = await response.json();
			setRestaurants(data);
		}
		getRestaurants();
	}, []);
	return (
		<FlatList
			data={restaurants}
			keyExtractor={(restaurant) => restaurant.id.toString()}
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{ gap: 14, paddingRight: 16, paddingLeft: 16 }}
			renderItem={({ item }: { item: Restaurant }) => (
				<CardHorizontalRestaurant restaurant={item} />
			)}
		/>
	);
}
