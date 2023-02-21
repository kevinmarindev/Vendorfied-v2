import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import PreauthenticatedApp from 'pages/PreauthenticatedApp';
import './styles/globals.css';


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
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
