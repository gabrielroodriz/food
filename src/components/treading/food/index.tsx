import Food from '@/src/models/Food';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

export default function CardHorizontalFood({ food }: { food: Food }) {
	return (
		<Pressable className='flex flex-col rounded-xl justify-center gap-1 relative'>
			<Image className='w-44 h-36 rounded-xl' source={{ uri: food.image }} />
			<View className='flex flex-row justify-center items-center bg-neutral-900/90 gap-1 rounded-full absolute top-1 right-1 px-2 py-1'>
				<Ionicons name='star' size={14} color='#dda31d' />
				<Text className='text-white text-sm'>{food.rating}</Text>
			</View>
			<Text className='text-neutral-600 font-medium text-lg'>
				R$ {food.price}
			</Text>
			<View className='flex'>
				<Text className='text-neutral-800 font-semibold text-lg'>
					{food.name}
				</Text>
				<Text className='text-neutral-600 text-sm'>
					{food.time} - R${food.delivery}
				</Text>
			</View>
		</Pressable>
	);
}
