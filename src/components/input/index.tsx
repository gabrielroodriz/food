import { Feather } from '@expo/vector-icons';
import React from 'react';
import { TextInput, View } from 'react-native';

export default function Input() {
	return (
		<View className='w-full flex-row border border-slate-500 h-14 rounded-full items-center gap-2 px-4 bg-transparent'>
			<Feather name='search' size={24} color='#64748b' />
			<TextInput
				placeholder='Encontre o que mais te agrada..'
				className='w-full h-full flex-1 bg-transparent'
			/>
		</View>
	);
}
