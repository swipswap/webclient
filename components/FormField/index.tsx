const FormField = ({children, className=""}) => (
	<div className={`flex pl-2 tablets:pl-6  justify-between ${className}`}>
		{children}
	</div>
)

export default  FormField
