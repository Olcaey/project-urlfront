import { useRouter } from 'next/router'

const Redirect = ({ URL }) => {
	
	const router = useRouter();
	router.push(URL)
	
	return (
		<div className='column_wrapper'>
			<p>
				<h4>You are being redirected to:</h4>
				<span> {URL}</span>
			</p>
		</div>
	)
}
export default Redirect;