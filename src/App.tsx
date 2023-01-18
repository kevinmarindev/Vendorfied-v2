import PreauthenticatedApp from 'pages/PreauthenticatedApp';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

import './styles/globals.css';

function App() {
	const queryClient = new QueryClient();
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<PreauthenticatedApp />
			</QueryClientProvider>
		</BrowserRouter>
	);
}

export default App;
