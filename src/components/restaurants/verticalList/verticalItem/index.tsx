import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

export default function CardVerticalRestaurantItem({
	restaurant,
}: {
	restaurant: Restaurant;
}) {
	return (
		<Pressable className='flex flex-row items-center justify-start gap-2'>
			<Image
				className='w-20 h-20 rounded-full'
				source={{ uri: restaurant.image }}
			/>
			<View className='flex gap-2'>
				<Text
					className='text-base text-black leading-4 font-bold'
					numberOfLines={2}
				>
					{restaurant.name}
				</Text>
				<View className='flex flex-row items-center gap-1'>
					<Ionicons name='star' size={14} color='#dda31d' />
					<Text className='text-black text-sm'>{restaurant.rating}</Text>
				</View>
			</View>
		</Pressable>
	);
}
