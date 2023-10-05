import { configureStore } from '@reduxjs/toolkit';
import './App.css';
import { Provider } from 'react-redux';
import AppContainer from './components/AppContainer';
import AppHeader from './components/AppContainer/AppHeader';
import AppBody from './components/AppContainer/AppBody';
import rootReducer from './redux'

const store = configureStore({
	reducer: rootReducer
})

function App() {
	return (
		<Provider store={store}>
			<div className="App">
                <AppContainer>
                    <AppHeader />
                    <AppBody className={'w-[1000px]'}>
                    </AppBody>
                </AppContainer>
			</div>
		</Provider>
	);
}

export default App;
