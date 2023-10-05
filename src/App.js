import { configureStore } from '@reduxjs/toolkit';
import './App.css';
import { Provider } from 'react-redux';
import AppContainer from './components/AppContainer';
import AppHeader from './components/AppContainer/AppHeader';
import AppBody from './components/AppContainer/AppBody';
import rootReducer from './redux'
import Home from './components/pages/Home';

const store = configureStore({
	reducer: rootReducer
})

function App() {
	return (
		<Provider store={store}>
			<div className="App">
                <AppContainer>
                    <AppHeader />
                    <AppBody className={'w-full'}>
						<Home />
                    </AppBody>
                </AppContainer>
			</div>
		</Provider>
	);
}

export default App;
