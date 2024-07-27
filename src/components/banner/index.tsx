import React from 'react';
import { Image, Pressable, View } from 'react-native';
import PagerView from 'react-native-pager-view';

export default function Banner() {
	const assets = [
		{ key: 1, media: require('../../assets/banner1.png') },
		{ key: 2, media: require('../../assets/banner2.png') },
	];

	return (
		<View className='w-full h-36 md:h-60 rounded-2xl mt-5 mb-4'>
			<PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
				{assets.map(({ key, media }) => (
					<Pressable
						className='w-full h-36 md:h-60 rounded-2xl'
						key={key}
						onPress={() => console.log(`event click media: ${key}`)}
					>
						<Image source={media} className='w-full h-36 md:h-60 rounded-2xl' />
					</Pressable>
				))}
			</PagerView>
		</View>
	);
}
