import Select from 'react-select'

export default function DropDown ({ lightTheme, options, name, changeHandler }) {
  const bgStyle = lightTheme ? 'bg-white text-black': 'bg-swip-deep'	
  return (
    <div className={`w-11/12 mx-auto rounded-lg mb-5 ${bgStyle}`}>
      <Select instanceId="select-select" defaultValue={options[0]} placeholder="Select pair" options={options} name={name} onChange={changeHandler} />
    </div>
  )
}