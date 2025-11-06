import { useRef } from "react";

const ClickToFocusInput = () => {
	const inputRef = useRef(null);

	const handleClick = () => {
		inputRef.current.focus();
	}
	return (
		<div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-8 max-w-md text-center flex flex-col gap-3">
			<input
				className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2" 
				ref={inputRef}
				placeholder="Click the button to focus here"
			/>
			<button
				className="px-4 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 active:scale-95 transition"
				onClick={handleClick}
			>
				Click Me!
			</button>
		</div>
	)
}

export default ClickToFocusInput