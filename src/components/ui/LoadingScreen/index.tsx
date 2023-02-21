// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
interface LoadingScreenProps {
	message: string;
}

export function LoadingScreen({ message = '' }: LoadingScreenProps) {
	return (
		<div className='flex h-screen w-full text-black'>
			<div className='m-auto animate-pulse'> {message} </div>
		</div>
	);
}

export default LoadingScreen;
