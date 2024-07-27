import Constants from 'expo-constants';
import { ScrollView, View } from 'react-native';
import Banner from '../components/banner';
import Header from '../components/header';
import Input from '../components/input';
import Section from '../components/section';
import TrendingFoods from '../components/treading';

const statusBarHeight = Constants.statusBarHeight;
export default function Index() {
	return (
		<ScrollView
			style={{ flex: 1 }}
			className='bg-slate-100'
			showsVerticalScrollIndicator={false}
		>
			<View className='w-full px-4' style={{ marginTop: statusBarHeight + 8 }}>
				<Header />
				<Banner />
				<Input />
			</View>
			<Section
				name='Comidas em alta'
				size='text-2xl'
				label='Ver mais'
				action={() => console.log('event click see more')}
			/>
			<TrendingFoods />
		</ScrollView>
	);
}
