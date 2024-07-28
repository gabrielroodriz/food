import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import CardVerticalRestaurantItem from './verticalItem';

export default function ListVerticalRestaurant() {
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
		<View className='px-4 gap-4 w-full mb-11'>
			{restaurants.map((restaurant) => (
				<CardVerticalRestaurantItem
					key={restaurant.id}
					restaurant={restaurant}
				/>
			))}
		</View>
	);
}
