import React from 'react';
import { Pressable, Text, View } from 'react-native';

interface SectionProps {
	name: string;
	size: 'text-lg' | 'text-xl' | 'text-2xl';
	label: string;
	action: () => void;
}
export default function Section({ name, size, label, action }: SectionProps) {
	return (
		<View className='w-full fle flex-row items-center justify-between px-4'>
			<Text className={`${size} font-semibold my-4 self-start`}>{name}</Text>
			<Pressable onPress={action}>
				<Text className='text-sm'>{label}</Text>
			</Pressable>
		</View>
	);
}
