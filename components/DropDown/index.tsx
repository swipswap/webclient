import Select from 'react-select'

export default function DropDown ({ theme, options, name, changeHandler }) {
  // const bgStyle = false ? 'bg-white text-black': 'bg-swip-deep'	
  return (
    <div className={`w-11/12 mx-auto rounded-lg mb-2 md:mb-5`}>
      <Select instanceId="select-select" defaultValue={options[0]} placeholder="Select pair" options={options} name={name} onChange={changeHandler} />
    </div>
  )
}