import HeaderBlock from './components/HeaderBlock';
import "./App.css";
import Header from './components/Header';
import Paragraph from "./components/Paragraph";
import { ReactComponent as ReactLogo } from './logo.svg';
import CardList from './components/CardList';

const wordsList = [
	{
		eng: 'between',
		rus: 'между'
	},
	{
		eng: 'high',
		rus: 'высокий'
	},
	{
		eng: 'really',
		rus: 'действительно'
	},
	{
		eng: 'something',
		rus: 'что-нибудь'
	},
	{
		eng: 'most',
		rus: 'большинство'
	},
	{
		eng: 'another',
		rus: 'другой'
	},
	{
		eng: 'much',
		rus: 'много'
	},
	{
		eng: 'family',
		rus: 'семья'
	},
	{
		eng: 'own',
		rus: 'личный'
	},
	{
		eng: 'out',
		rus: 'из/вне'
	},
	{
		eng: 'leave',
		rus: 'покидать'
	}
]

const App = () => {
	return (
		<>
			<HeaderBlock>
				<Header>
					Время учить слова онлайн
				</Header>
				<Paragraph>
					Используйте карточки для запоминания и пополняйте активный словарный запас.
				</Paragraph>
			</HeaderBlock>
			<CardList item={wordsList} />
			<HeaderBlock hideBackground>
				<Header>
					Еще один заголовок
				</Header>
				<Paragraph>
					Ну здорово же!
				</Paragraph>
				<ReactLogo />
			</HeaderBlock>
		</>
	)
}

export default App;
