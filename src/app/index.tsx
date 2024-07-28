import Constants from 'expo-constants';
import { ScrollView, View } from 'react-native';
import Banner from '../components/banner';
import Header from '../components/header';
import Input from '../components/input';
import Restaurants from '../components/restaurants';
import ListVerticalRestaurant from '../components/restaurants/verticalList';
import Section from '../components/section';
import TrendingFoods from '../components/treading';

const statusBarHeight = Constants.statusBarHeight;
export default function Index() {
	return (
		<View
			style={{ marginTop: statusBarHeight + 8 }}
			className='flex-1 bg-slate-100 w-full px-4'
		>
			<Header />
			<ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
				<Banner />
				<Input />
				<Section
					name='Comidas em alta'
					size='text-2xl'
					label='Ver mais'
					action={() => console.log('event click see more')}
				/>
				<TrendingFoods />
				<Section
					name='Famosos no Fim de Semana'
					size='text-2xl'
					label='Ver mais'
					action={() => console.log('event click see more')}
				/>
				<Restaurants />
				<Section
					name='Restaurantes'
					size='text-2xl'
					label='Ver mais'
					action={() => console.log('event click see more')}
				/>
				<ListVerticalRestaurant />
			</ScrollView>
		</View>
	);
}
