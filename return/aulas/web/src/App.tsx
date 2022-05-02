interface ButtonProps {
	text?: string;
}

function Button(props: ButtonProps){
	return <button className="bg-violet-500 p-2 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">{props.text ?? 'default'}</button>
}

function App() {
	return(
		<div className="flex gap-2">
			<Button text='Apagar' />
			<Button text='Enviar' />
			<Button />
		</div>
	)
}

export default App