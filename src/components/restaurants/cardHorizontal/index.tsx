import React from 'react';
import { Image, Pressable, Text } from 'react-native';

export default function CardHorizontalRestaurant({
	restaurant,
}: {
	restaurant: Restaurant;
}) {
	return (
		<Pressable
			className='flex flex-col items-center h-32'
			onPress={() => console.log(`event click ${restaurant.name}`)}
		>
			<Image
				className='w-20 h-20 rounded-full'
				source={{ uri: restaurant.image }}
			/>
			<Text
				className='text-sm mt-2 w-20 text-center leading-4 text-black'
				numberOfLines={2}
			>
				{restaurant.name}
			</Text>
		</Pressable>
	);
}
